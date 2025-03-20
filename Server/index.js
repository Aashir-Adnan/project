const express = require('express');
const apiRoutes = require('./dynamicRoutes.js');
const applyMiddleware = require('./ProtectionProtocols/middleware.js');
const { requireAllJSFiles } = require('./scripts/requiringScript.js');
const path = require('path');
const multer = require('multer')
require('dotenv').config({ path: require('path').resolve(__dirname, '.env') });
const {
  paginateListBuckets,
  S3Client,
  S3ServiceException,
  PutObjectCommand
} = require("@aws-sdk/client-s3");

const {
  getSignedUrl,
  S3RequestPresigner,
} = require("@aws-sdk/s3-request-presigner");
const fs = require('fs');
const { validateFileToken } = require('./FileHandling/validateFileToken.js');
const sendResponse = require('./Constants/response.js');
const projectDB = require('./Database/projectDb.js');
const { executeQuery } = require('./Database/queryExecution.js');

require('dotenv').config();
const app = express();


async function initializeApp() {
  try {
    const baseDirObjects = path.join(__dirname, '/Objects');
    if (!fs.existsSync(baseDirObjects)) {
      fs.mkdirSync(baseDirObjects, { recursive: true });
    }

    applyMiddleware(app);
    requireAllJSFiles(baseDirObjects);

    const port = process.env.PORT || 3000;

    
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        const uploadPath = path.join(__dirname, 'uploads');
        fs.mkdirSync(uploadPath, { recursive: true });
        cb(null, uploadPath);
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
      }
    });
    const upload = multer({ storage });

    app.post('/upload', validateFileToken, upload.single('file'), (req, res) => {
      if (!req.file) {
        sendResponse(res, 400, 'No File Uploaded');
        return;
      }
    
      const { originalname, mimetype, size, path: filePath } = req.file;
      const attachmentId = req.attachmentId;
    
      if (!attachmentId) {
         sendResponse(res, 400, 'Missing attachment ID');
         return;
      }
    
      const fileExtension = path.extname(originalname);
      const timestamp = Date.now();
      const newFileName = `${attachmentId}-${timestamp}${fileExtension}`;
      const connection = projectDB();
      connection.connect((dbErr) => {
          if (dbErr) {
            sendResponse(res, 500, 'Database Connection Error');
            return;
          }
    
          const updateSql = `UPDATE attachments 
                             SET attachment_name = ?, 
                                 attachment_type = ?, 
                                 attachment_size = ?, 
                                 attachment_link = ?, 
                                 status = 'uploaded' 
                             WHERE attachment_id = ?`;
          const values = [newFileName, mimetype, size, filePath, attachmentId];
    
          connection.query(updateSql, values, (updateErr, updateResults) => {
              connection.end();
              if (updateErr) {
                sendResponse(res, 400, 'Failed To Upload Attachment Metadata');
                return;
              }
              sendResponse(res, 200, 'File uploaded and metadata updated successfully', {fileName: newFileName } )
          });
      });
    });

    app.use('', apiRoutes());

    
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Error during initialization:', error);
    process.exit(1); 
  }
}

process.on('uncaughtException', async (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', async (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
  process.exit(1);
});

initializeApp();

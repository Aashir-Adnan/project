const { generateUploadUrl } = require("./generateUploadUrl")
const { retrieveFile } = require("./retrieveFile")
const sendResponse = require("../Constants/response")
async function fileHandler (req, res, config){
    if (config.upload){
        
        const payload = await generateUploadUrl(req, config.bucket, config.storage)
        sendResponse(res, 200, "File Successfully Uploaded", payload)
    }
    else if (config.download){
        const filePath = await retrieveFile(req, res);
        const payload = {filePath : filePath}
        // sendResponse(res, 200, "File Retrieved Successfully", payload)
    }
}

module.exports = fileHandler
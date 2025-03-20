const path = require('path');
const logMessage = require('../LogFunctions/consoleLog.js');
const { decryptArray, decryptObject } = require('./Decryption.js');

async function sendResponse(res, status, message, payload = null, SCC = null, source = null) {
    if (payload && Array.isArray(payload)) {
        payload = await decryptArray(payload);
    }

    console.log("SEND RESPONSE MESSAGE: ", message, " ", payload, " ", source);

    // If payload contains a filePath, send the file
    if (payload && typeof payload === 'object' && payload.filePath) {
        const filePath = path.resolve(payload.filePath); // Ensure absolute path
        return res.sendFile(filePath, (err) => {
            if (err) {
                console.error("Error sending file:", err);
                res.status(500).json({ error: "Error retrieving file" });
            }
        });
    }

    res.setHeader('Content-Type', 'application/json');
    const response = {
        status: status,
        message: message,
        payload: payload,
        source: source,
        scc: SCC
    };

    res.status(status).json(response);
}

module.exports = sendResponse;

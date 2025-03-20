const checkExpiration = require('../Constants/checkExpiration.js');
const projectDB = require('../Database/projectDb'); // Assuming you have a projectDB connection module
const { executeQuery } = require('../Database/queryExecution.js');

const validateToken = async (req, res, decryptedBody, platform, platformVersion) => {
    try {
        const decodedToken = await checkExpiration(res, req.headers['accesstoken']);
        console.log('Decoded token1:', req.headers['accesstoken']);
        if (!decodedToken) {
            throw new Error("Invalid Token");
        }

        console.log('Decoded token:', decodedToken);
        // Extract necessary information from the decoded token and request
        const { userId, deviceId } = decodedToken;  // Get userId and deviceId from the decoded token

        // Assuming the following information comes from request headers or body
        const ipAddress = req.ip || req.connection.remoteAddress || 'Unknown';
        const apiUrl = req.originalUrl;
        const httpMethod = req.method;
        const requestPayload = JSON.stringify(decryptedBody);  // Assuming request payload is in the body
        const userAgent = req.get('User-Agent');
        const responseCode = res.statusCode;
        const responseTimeMs = res.get('X-Response-Time') || 0;  // Assuming you have a middleware calculating response time
        const status = 'active';

        // Insert activity record into the useractivity table
        const connection = await projectDB();

        const insertQuery = `
        INSERT INTO useractivity (
            user_id, ip_address, device_id, api_url, http_method, request_payload, 
            response_code, response_time_ms, user_agent, platform, platform_version, 
            createdAt, updatedAt, status
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW(), ?)
        `;
        
        await executeQuery(insertQuery, [
            userId, ipAddress, deviceId, apiUrl, httpMethod, requestPayload, 
            responseCode, responseTimeMs, userAgent, platform, platformVersion, 
            status
        ], connection);

        return {"userId" : userId, "deviceId" : deviceId};

    } catch (error) {
        throw new Error(error.message)
    }
};

module.exports = validateToken;

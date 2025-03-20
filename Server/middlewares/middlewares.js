const validateToken = require('./validateToken.js');
const permissionChecker = require('./permissionChecker.js');
const validateParametersMiddleware = require('./validateParamatersMiddleware.js');
const otpVerif = require("../Constants/otpVerif.js");
const objectResolver = require("./objectResolver.js");
const handleVersionChecking = require("./versionChecker.js");
const handleEncryption = require("./platformEncryption.js");
const LogError = require("../Database/Errorlog");  // Import the LogError function
const sendResponse = require('../Constants/response.js');
const { encryptObject } = require('../Encryption/aes.js');
const logMessage = require('../LogFunctions/consoleLog.js');
const apiObjectGenerator = require('../HelperFunctions/ApiObjectsGenerator.js');
const fileHandler = require('../FileHandling/fileHandler.js');

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const middlewareHandler = async (req, res, next) => {
    try {
        let payload = {}, PlatformName, PlatformVersion;
        const requestedPath = req.path.replace('/api/', '');
        const pathParts = requestedPath.split('/');
        const objectName = pathParts.length >= 2
            ? pathParts.map((part) => part.charAt(0).toUpperCase() + part.slice(1)) // Capitalize each segment
                .reduce((acc, curr, index) => {
                    if (index === 0) return acc; // Skip the first segment
                    return acc + curr; // Concatenate segments
                }, pathParts[0].charAt(0).toUpperCase() + pathParts[0].slice(1)) + '_object' // Start with the second segment
            : 'InvalidPath'; // Handle cases with less than 2 segments
        const apiObject = global[objectName];
        let userId, deviceId, permission_results;


        if (!apiObject) {
            await LogError(res, 404, "API Object Resolver ", `API Object not found for path: ${requestedPath}`, 'E50');
            return;
        }
        let { config, data, response } = await handleVersionChecking(req, res, apiObject);
        if (data?.apiInfo?.utilityFunctions?.preProcessFunction == "crudApiGenerator") {
            const generatedApiObject = await apiObjectGenerator(config, data, response, req);
            ({ config, data, response } = generatedApiObject);
        }

        const { features } = config;
        let decryptedPayload = req.body;
        let encryptionKey = null;
        console.log("data.requestMetaData.requestMethod", data.requestMetaData.requestMethod)
        if (req.method !== data.requestMetaData.requestMethod) {
            await LogError(res, 405, "Req Method Resolver ", `Incorrect Request Method`, 'E52');
            return
        }

        if (config.communication.encryption) {
            ({ decryptedPayload, encryptionKey, PlatformName, PlatformVersion } = await handleEncryption(req, res, { config, data, response }));
        }
        logMessage("DECRYPTED PAYLOAD , REQ BODY")
        logMessage([decryptedPayload, req.body]);

        if (config.verification.accessToken) {
            try {
                const tokenResults = await validateToken(req, res, decryptedPayload, PlatformName, PlatformVersion);
                ({ userId, deviceId } = tokenResults);
            } catch (error) {
                await LogError(res, 401, "Access Token Validator ", error.message, 'E40');
                return
            }
        }

        if (config.verification.otp) {
            try {
                payload.otpVerif = await otpVerif(req, res, decryptedPayload);
            } catch (error) {
                await LogError(res, 401, "OTP Verification Failed ", error.message, 'E42');
                return
            }
        }


        if (data.requestMetaData.permission) {
            try {
                permission_results = await permissionChecker(req, res, data, decryptedPayload, requestedPath);
            } catch (error) {
                await LogError(res, 405, "Permission Validator ", error.message, 'E31');
                return
            }
        }
        
        if (config.file){
            try{
                await fileHandler(req,res, config.file);
                return
            }
            catch(error){
                console.log(error);
                await LogError(res, 500, "File Handler Execution Failed",error.message, 'E22');
                return
            }
        }

        if (features.parameters) {
            try {
                await validateParametersMiddleware(req, res, decryptedPayload, { config, data, response });
            } catch (error) {
                await LogError(res, 400, "Parameter Validation Failed ", error.message, 'E10');
                return
            }
        }

        if (data.apiInfo.utilityFunctions.callbackFunction) {
            try {
                data.apiInfo.utilityFunctions.callbackFunction(req, res, decryptedPayload, encryptionKey);
            } catch (error) {
                await LogError(res, 500, "Callback Function Execution failed ", error.message, 'E22');
                return
            }
        } else {
            let objectResolverOutput;
            try {
                objectResolverOutput = await objectResolver(req, res, decryptedPayload, { config, data, response }, permission_results);
                decryptedPayload["objectResolverOutput"] = objectResolverOutput;
            }
            catch (error) {
                await LogError(res, 500, "Object Resolution Failed ", error.message, 'E22');
                return;
            }
            if (objectResolverOutput) {
                payload.return = objectResolverOutput.results
                payload.total_count = objectResolverOutput.total_count;
            }
            if (data.apiInfo.utilityFunctions.payloadFunction.length > 0) {
                for (const util of data.apiInfo.utilityFunctions.payloadFunction) {
                    try {
                        const functionName = util.name; // Get the name of the async function'
                        payload[functionName] = await util(req, res, decryptedPayload); // Store the result using the function name
                        decryptedPayload.functionName = payload[functionName]
                    } catch (error) {
                        await LogError(res, 500, "Payload Function Execution Failed ", error.message, 'E24');
                        return
                    }
                }
            }
        }
        if (config.communication.encryption) {
            try {
                await sendResponse(res, 200, "API Hit Successfully", encryptObject(payload, encryptionKey));
            }
            catch (error) {
                await LogError(res, 500, "Encryption Failed ", error.message, 'E24');
                return;
            }
        } else {
            sendResponse(res, 200, `API Hit Successfully: ${response.successMessage}`, payload);
        }
    }
    catch (error) {
        await LogError(res, 500, "Middleware Handler", error.message, null); // Log the error
        logMessage(error.message);
    }
};

module.exports = { middlewareHandler };

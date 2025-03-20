const {executeQuery} =  require("./queryExecution");
const getDateTime = require("../Constants/getDateTime");
const securityDB = require("./securityDB");
const sendResponse = require("../Constants/response");
const logMessage = require("../LogFunctions/consoleLog");
async function LogError(res, statusCode, error_source, error_description, SCC){
   try{
        console.log("Error Source: ", error_source);
        console.log("Error Desc: ", error_description);
        // const connection = await securityDB();
        // const [currentDateString,currentTimeString,currentDateTime] = getDateTime();;
        // const Status="active"
        // const query = "INSERT INTO error_log  (ErrorMessage, fileName, createdAt, updatedAt, status, scc) VALUES (?,?,?,?,?,?)";
        // const values = [error_description, error_source, currentDateTime,currentDateTime, Status, SCC];
        // const results = await executeQuery(query, values, connection);

        sendResponse(res, statusCode, "An Error Occurred:", error_description, SCC, error_source)
    }
    catch(error)
    {
        console.log(error);
    }
}
module.exports = LogError;
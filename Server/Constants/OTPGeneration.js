const otpGenerator = require('otp-generator');
const sendEmail = require('./sendEmailOTP');
const getDateTime = require('./getDateTime');
const projectDB = require('../Database/projectDb')
const { executeQuery } = require('../Database/queryExecution');
const logMessage = require('../LogFunctions/consoleLog');

async function OTPGeneration(res, email, deviceName) {
  try{
  let deviceId, otpResult;
  let connection = await projectDB();
  const OTP = otpGenerator.generate(6, { upperCaseAlphabets: true, specialChars: false });
  
  // Get current date and time
  const [currentDateString, currentTimeString, currentDateTime] = getDateTime();

  // Fetch the user's ID based on the email
  const userQuery = `SELECT user_id FROM users WHERE email = ?`;
  const userResult = await executeQuery(userQuery, [email], connection);
  if (userResult.length === 0) {
    throw new Error("User not found with email " + email);
  }

  const userId = userResult[0].user_id;

  // Update the OTP in the userdevices table for the specified device and user
// Step 1: Query to get the device_id based on device_name
const deviceIdQuery = `
  SELECT * 
  FROM user_devices 
  WHERE user_id = ?
`;
connection = await projectDB();
const deviceResult = await executeQuery(deviceIdQuery, [userId], connection);
deviceId = deviceResult[0].user_device_Id
// Check if the device exists
if (deviceResult.length === 0) {
    // Insert the new device into the devices table
    const insertDeviceQuery = `
        INSERT INTO user_devices (user_id, device_token, device_name, platform_version_id, os_version)
        VALUES (?, ?, ?, ?, ?)
    `;
    connection = await projectDB();
    const insertDeviceResult = await executeQuery(insertDeviceQuery, [userId, null,  deviceName, null, null], connection);

    // Get the inserted device ID
    const newDeviceIdQuery = `
        SELECT user_device_id 
        FROM user_devices 
        WHERE device_name = ?
    `;
    connection = await projectDB();
    const newDeviceResult = await executeQuery(newDeviceIdQuery, [deviceName], connection);
    deviceId = newDeviceResult[0].user_device_id;

    deviceId = deviceResult[0].user_device_id;
    const otpQuery = `
      INSERT INTO device_otp (user_device_id, otp, otp_failure_count)
      VALUES (?,?,?)
    `;
    connection = await projectDB();
    otpResult = await executeQuery(otpQuery, [deviceId, OTP, currentDateTime, 0], connection);


} else {
    deviceId = deviceResult[0].user_device_id;
    const otpQuery = `
      UPDATE device_otp
      SET otp = ?
      WHERE user_device_id = ?
    `;
    connection = await projectDB();
    otpResult = await executeQuery(otpQuery, [OTP, deviceId], connection);

}


// Step 2: Update the OTP using the found device_id


  // Check if the OTP was updated
  if (otpResult.affectedRows === 0) {
    throw new Error("Failed to assign OTP. Device not associated with the user or invalid device ID.");
  }

  // Send the OTP via email
  await sendEmail(email, OTP, res);

  return OTP;}
  catch (error){
    throw new Error(error.message);
  }
}

module.exports = OTPGeneration;

const parameters = require('./CRUD_parameters');
      global.GroupedCrudsDevice_otp_object = {
        versions: {
          versionData: [
            {
              "*": {
                steps: [
                  
                  {
                    config: {
                      features: {
                        multistep: false,
                        parameters: true,
                        pagination: true,
                      },
                      communication: {
                        encryption: {
                          platformEncryption: true,
                        },
                      },
                      verification: {
                        otp: false,
                        accessToken: false,
                      },
                    },
                    data: {
                      parameters: parameters,
                      apiInfo: {
                        query: {
                          queryNature: { Add: "INSERT", Update: "UPDATE", View: "SELECT", Delete: "DELETE", List: "SELECT" },
                          queryPayload: {
                            Add: "INSERT INTO device_otp (user_device_id, otp, device_otp_id, otp_failure_count, updated_by) VALUES ({{device_otp_user_device_id}}, {{device_otp_otp}}, {{device_otp_status}}, {{device_otp_device_otp_id}}, {{device_otp_otp_failure_count}}, {{device_otp_updated_by}}, {{device_otp_updated_at}}, {{device_otp_created_at}})",
                            
                            Update: "UPDATE device_otp SET user_device_id = {{device_otp_userDeviceId}}, otp = {{device_otp_otp}}, device_otp_id = {{device_otp_deviceOtpId}}, otp_failure_count = {{device_otp_otpFailureCount}}, updated_by = {{device_otp_updatedBy}} WHERE undefined = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, undefined as id, device_otp.user_device_id as deviceOtp_userDeviceId, device_otp.otp as deviceOtp_otp, device_otp.status as deviceOtp_status, device_otp.device_otp_id as deviceOtp_deviceOtpId, device_otp.otp_failure_count as deviceOtp_otpFailureCount, device_otp.updated_by as deviceOtp_updatedBy, device_otp.updated_at as deviceOtp_updatedAt, device_otp.created_at as deviceOtp_createdAt FROM device_otp",
                              
                            View: "SELECT device_otp.undefined as device_otp_id, device_otp.user_device_id as deviceOtp_userDeviceId, device_otp.otp as deviceOtp_otp, device_otp.status as deviceOtp_status, device_otp.device_otp_id as deviceOtp_deviceOtpId, device_otp.otp_failure_count as deviceOtp_otpFailureCount, device_otp.updated_by as deviceOtp_updatedBy, device_otp.updated_at as deviceOtp_updatedAt, device_otp.created_at as deviceOtp_createdAt FROM device_otp  WHERE device_otp.undefined = {{id}} OR device_otp.undefined IS NULL",
                              
                            Delete: "UPDATE device_otp SET status = 'inactive' WHERE undefined = {{id}}",           
                          },
                          database: "mainDb",
                        },
                        utilityFunctions: {
                          callbackFunction: null,
                          payloadFunction: [],
                          preProcessFunction: "crudApiGenerator",
                        },
                      },
                      requestMetaData: {
                        requestMethod: { Add: "POST", View: "GET", Update: "PUT", Delete: "DELETE", List: "GET" },
                        permission: [
                          { Add: "insert_device_otp", View: "view_device_otp", List: "list_device_otp", Update: "update_device_otp", Delete: "delete_device_otp" },
                        ],
                        pagination: { pageSize: 10 },
                      },
                    },
                    response: {
                      successMessage: "task_history retrieved successfully!",
                      errorMessage: "Failed to retrieve task_history.",
                    },
                  }
                  
                ],
              },
            },
          ],
        },
      };
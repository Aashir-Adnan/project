const parameters = require('./CRUD_parameters');
      global.GroupedCrudsUser_devices_object = {
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
                            Add: "INSERT INTO user_devices (user_id, device_token, user_id, device_token, device_name, platform_version_id, os_version, updated_by) VALUES ({{user_devices_user_device_id}}, {{user_devices_user_id}}, {{user_devices_device_token}}, {{user_devices_status}}, {{user_devices_user_id}}, {{user_devices_device_token}}, {{user_devices_status}}, {{user_devices_device_name}}, {{user_devices_platform_version_id}}, {{user_devices_os_version}}, {{user_devices_updated_by}}, {{user_devices_updated_at}}, {{user_devices_created_at}})",
                            
                            Update: "UPDATE user_devices SET user_id = {{user_devices_userId}}, device_token = {{user_devices_deviceToken}}, user_id = {{user_devices_userId}}, device_token = {{user_devices_deviceToken}}, device_name = {{user_devices_deviceName}}, platform_version_id = {{user_devices_platformVersionId}}, os_version = {{user_devices_osVersion}}, updated_by = {{user_devices_updatedBy}} WHERE user_device_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, user_device_id as id, user_devices.user_device_id as userDevices_userDeviceId, user_devices.user_id as userDevices_userId, user_devices.device_token as userDevices_deviceToken, user_devices.status as userDevices_status, user_devices.user_id as userDevices_userId, user_devices.device_token as userDevices_deviceToken, user_devices.status as userDevices_status, user_devices.device_name as userDevices_deviceName, user_devices.platform_version_id as userDevices_platformVersionId, user_devices.os_version as userDevices_osVersion, user_devices.updated_by as userDevices_updatedBy, user_devices.updated_at as userDevices_updatedAt, user_devices.created_at as userDevices_createdAt FROM user_devices",
                              
                            View: "SELECT user_devices.user_device_id as user_devices_id, user_devices.user_device_id as userDevices_userDeviceId, user_devices.user_id as userDevices_userId, user_devices.device_token as userDevices_deviceToken, user_devices.status as userDevices_status, user_devices.user_id as userDevices_userId, user_devices.device_token as userDevices_deviceToken, user_devices.status as userDevices_status, user_devices.device_name as userDevices_deviceName, user_devices.platform_version_id as userDevices_platformVersionId, user_devices.os_version as userDevices_osVersion, user_devices.updated_by as userDevices_updatedBy, user_devices.updated_at as userDevices_updatedAt, user_devices.created_at as userDevices_createdAt FROM user_devices  WHERE user_devices.user_device_id = {{id}} OR user_devices.user_device_id IS NULL",
                              
                            Delete: "UPDATE user_devices SET status = 'inactive' WHERE user_device_id = {{id}}",           
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
                          { Add: "insert_user_devices", View: "view_user_devices", List: "list_user_devices", Update: "update_user_devices", Delete: "delete_user_devices" },
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
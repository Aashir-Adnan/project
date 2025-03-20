const parameters = require('./CRUD_parameters');
      global.GroupedCrudsUser_device_notifications_object = {
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
                            Add: "INSERT INTO user_device_notifications (user_device_id, notification_id, updated_by) VALUES ({{user_device_notifications_user_device_notification_id}}, {{user_device_notifications_user_device_id}}, {{user_device_notifications_notification_id}}, {{user_device_notifications_status}}, {{user_device_notifications_updated_by}}, {{user_device_notifications_updated_at}}, {{user_device_notifications_created_at}})",
                            
                            Update: "UPDATE user_device_notifications SET user_device_id = {{user_device_notifications_userDeviceId}}, notification_id = {{user_device_notifications_notificationId}}, updated_by = {{user_device_notifications_updatedBy}} WHERE user_device_notification_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, user_device_notification_id as id, user_device_notifications.user_device_notification_id as userDeviceNotifications_userDeviceNotificationId, user_device_notifications.user_device_id as userDeviceNotifications_userDeviceId, user_device_notifications.notification_id as userDeviceNotifications_notificationId, user_device_notifications.status as userDeviceNotifications_status, user_device_notifications.updated_by as userDeviceNotifications_updatedBy, user_device_notifications.updated_at as userDeviceNotifications_updatedAt, user_device_notifications.created_at as userDeviceNotifications_createdAt FROM user_device_notifications",
                              
                            View: "SELECT user_device_notifications.user_device_notification_id as user_device_notifications_id, user_device_notifications.user_device_notification_id as userDeviceNotifications_userDeviceNotificationId, user_device_notifications.user_device_id as userDeviceNotifications_userDeviceId, user_device_notifications.notification_id as userDeviceNotifications_notificationId, user_device_notifications.status as userDeviceNotifications_status, user_device_notifications.updated_by as userDeviceNotifications_updatedBy, user_device_notifications.updated_at as userDeviceNotifications_updatedAt, user_device_notifications.created_at as userDeviceNotifications_createdAt FROM user_device_notifications  WHERE user_device_notifications.user_device_notification_id = {{id}} OR user_device_notifications.user_device_notification_id IS NULL",
                              
                            Delete: "UPDATE user_device_notifications SET status = 'inactive' WHERE user_device_notification_id = {{id}}",           
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
                          { Add: "insert_user_device_notifications", View: "view_user_device_notifications", List: "list_user_device_notifications", Update: "update_user_device_notifications", Delete: "delete_user_device_notifications" },
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
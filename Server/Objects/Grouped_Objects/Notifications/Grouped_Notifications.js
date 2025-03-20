const parameters = require('./CRUD_parameters');
      global.GroupedCrudsNotifications_object = {
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
                            Add: "INSERT INTO notifications (notification_title, notification_title, notification_message, sent_to_user_role_designation_department_id, updated_by) VALUES ({{notifications_notification_id}}, {{notifications_notification_title}}, {{notifications_status}}, {{notifications_notification_title}}, {{notifications_status}}, {{notifications_notification_message}}, {{notifications_sent_to_user_role_designation_department_id}}, {{notifications_updated_by}}, {{notifications_updated_at}}, {{notifications_created_at}})",
                            
                            Update: "UPDATE notifications SET notification_title = {{notifications_notificationTitle}}, notification_title = {{notifications_notificationTitle}}, notification_message = {{notifications_notificationMessage}}, sent_to_user_role_designation_department_id = {{notifications_sentToUserRoleDesignationDepartmentId}}, updated_by = {{notifications_updatedBy}} WHERE notification_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, notification_id as id, notifications.notification_id as notifications_notificationId, notifications.notification_title as notifications_notificationTitle, notifications.status as notifications_status, notifications.notification_title as notifications_notificationTitle, notifications.status as notifications_status, notifications.notification_message as notifications_notificationMessage, notifications.sent_to_user_role_designation_department_id as notifications_sentToUserRoleDesignationDepartmentId, notifications.updated_by as notifications_updatedBy, notifications.updated_at as notifications_updatedAt, notifications.created_at as notifications_createdAt FROM notifications",
                              
                            View: "SELECT notifications.notification_id as notifications_id, notifications.notification_id as notifications_notificationId, notifications.notification_title as notifications_notificationTitle, notifications.status as notifications_status, notifications.notification_title as notifications_notificationTitle, notifications.status as notifications_status, notifications.notification_message as notifications_notificationMessage, notifications.sent_to_user_role_designation_department_id as notifications_sentToUserRoleDesignationDepartmentId, notifications.updated_by as notifications_updatedBy, notifications.updated_at as notifications_updatedAt, notifications.created_at as notifications_createdAt FROM notifications  WHERE notifications.notification_id = {{id}} OR notifications.notification_id IS NULL",
                              
                            Delete: "UPDATE notifications SET status = 'inactive' WHERE notification_id = {{id}}",           
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
                          { Add: "insert_notifications", View: "view_notifications", List: "list_notifications", Update: "update_notifications", Delete: "delete_notifications" },
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
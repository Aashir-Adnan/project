/* CRUD Objects for table: notifications */
        
    const parameters = require('./CRUD_parameters');
    global.CrudNotifications_object = {
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
                          List: "SELECT notifications.notification_id as id, notification_id as notifications_notificationId, notification_title as notifications_notificationTitle, status as notifications_status, notification_title as notifications_notificationTitle, status as notifications_status, notification_message as notifications_notificationMessage, sent_to_user_role_designation_department_id as notifications_sentToUserRoleDesignationDepartmentId, updated_by as notifications_updatedBy, updated_at as notifications_updatedAt, created_at as notifications_createdAt, COUNT(*) OVER () AS table_count FROM notifications ",
                          View: "SELECT notifications.notification_id as id, notification_id as notifications_notificationId, notification_title as notifications_notificationTitle, status as notifications_status, notification_title as notifications_notificationTitle, status as notifications_status, notification_message as notifications_notificationMessage, sent_to_user_role_designation_department_id as notifications_sentToUserRoleDesignationDepartmentId, updated_by as notifications_updatedBy, updated_at as notifications_updatedAt, created_at as notifications_createdAt FROM notifications  WHERE notification_id = {{id}} OR notification_id IS NULL",
                          Delete: "UPDATE notifications SET status = 'inactive' WHERE notification_id = {{id}}",           
                          database: "mainDb",
                        }
                      },
                      utilityFunctions: {
                        callbackFunction: null,
                        payloadFunction: [],
                        preProcessFunction: "crudApiGenerator"
                      },
                    },
                    requestMetaData: {
                      requestMethod: { Add: "POST", View: "GET", Update: "PUT", Delete: "DELETE", List: "GET" },
                      permission: { Add: "insert_notifications", View:"view_notifications", List:"list_notifications", Update: "update_notifications", Delete: "delete_notifications" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Notifications retrieved successfully!",
                    errorMessage: "Failed to retrieve Notifications.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
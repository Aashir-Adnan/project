/* CRUD Objects for table: messages */
        
    const parameters = require('./CRUD_parameters');
    global.CrudMessages_object = {
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
                          Add: "INSERT INTO messages (sent_by_user_role_department_id, recepient_user_role_department_id, recepient_chatting_group_id, message_title, message_body, attachement_id, updated_by, created_by) VALUES ({{messages_message_id}}, {{messages_sent_by_user_role_department_id}}, {{messages_recepient_user_role_department_id}}, {{messages_recepient_chatting_group_id}}, {{messages_status}}, {{messages_message_title}}, {{messages_message_body}}, {{messages_attachement_id}}, {{messages_updated_by}}, {{messages_updated_at}}, {{messages_created_by}})",
                          Update: "UPDATE messages SET sent_by_user_role_department_id = {{messages_sentByUserRoleDepartmentId}}, recepient_user_role_department_id = {{messages_recepientUserRoleDepartmentId}}, recepient_chatting_group_id = {{messages_recepientChattingGroupId}}, message_title = {{messages_messageTitle}}, message_body = {{messages_messageBody}}, attachement_id = {{messages_attachementId}}, updated_by = {{messages_updatedBy}}, created_by = {{messages_createdBy}} WHERE message_id = {{id}}",
                          List: "SELECT messages.message_id as id, message_id as messages_messageId, sent_by_user_role_department_id as messages_sentByUserRoleDepartmentId, recepient_user_role_department_id as messages_recepientUserRoleDepartmentId, recepient_chatting_group_id as messages_recepientChattingGroupId, status as messages_status, message_title as messages_messageTitle, message_body as messages_messageBody, attachement_id as messages_attachementId, updated_by as messages_updatedBy, updated_at as messages_updatedAt, created_by as messages_createdBy, COUNT(*) OVER () AS table_count FROM messages ",
                          View: "SELECT messages.message_id as id, message_id as messages_messageId, sent_by_user_role_department_id as messages_sentByUserRoleDepartmentId, recepient_user_role_department_id as messages_recepientUserRoleDepartmentId, recepient_chatting_group_id as messages_recepientChattingGroupId, status as messages_status, message_title as messages_messageTitle, message_body as messages_messageBody, attachement_id as messages_attachementId, updated_by as messages_updatedBy, updated_at as messages_updatedAt, created_by as messages_createdBy FROM messages  WHERE message_id = {{id}} OR message_id IS NULL",
                          Delete: "UPDATE messages SET status = 'inactive' WHERE message_id = {{id}}",           
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
                      permission: { Add: "insert_messages", View:"view_messages", List:"list_messages", Update: "update_messages", Delete: "delete_messages" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Messages retrieved successfully!",
                    errorMessage: "Failed to retrieve Messages.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
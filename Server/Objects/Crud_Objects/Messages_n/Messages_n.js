/* CRUD Objects for table: messages_n */
        
    const parameters = require('./CRUD_parameters');
    global.CrudMessages_n_object = {
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
                          Add: "INSERT INTO messages_n (sender_id, receiver_id, message, updated_by) VALUES ({{messages_n_message_id}}, {{messages_n_sender_id}}, {{messages_n_receiver_id}}, {{messages_n_message}}, {{messages_n_status}}, {{messages_n_updated_by}}, {{messages_n_updated_at}}, {{messages_n_created_at}})",
                          Update: "UPDATE messages_n SET sender_id = {{messages_n_senderId}}, receiver_id = {{messages_n_receiverId}}, message = {{messages_n_message}}, updated_by = {{messages_n_updatedBy}} WHERE message_id = {{id}}",
                          List: "SELECT messages_n.message_id as id, message_id as messages_n_messageId, sender_id as messages_n_senderId, receiver_id as messages_n_receiverId, message as messages_n_message, status as messages_n_status, updated_by as messages_n_updatedBy, updated_at as messages_n_updatedAt, created_at as messages_n_createdAt, users.first_name as users_firstName, users.first_name as users_firstName, COUNT(*) OVER () AS table_count FROM messages_n LEFT JOIN users ON messages_n.sender_id = users.message_id LEFT JOIN users ON messages_n.receiver_id = users.message_id",
                          View: "SELECT messages_n.message_id as id, message_id as messages_n_messageId, sender_id as messages_n_senderId, receiver_id as messages_n_receiverId, message as messages_n_message, status as messages_n_status, updated_by as messages_n_updatedBy, updated_at as messages_n_updatedAt, created_at as messages_n_createdAt, users.first_name as users_firstName, users.first_name as users_firstName FROM messages_n LEFT JOIN users ON messages_n.sender_id = users.message_id LEFT JOIN users ON messages_n.receiver_id = users.message_id WHERE message_id = {{id}} OR message_id IS NULL",
                          Delete: "UPDATE messages_n SET status = 'inactive' WHERE message_id = {{id}}",           
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
                      permission: { Add: "insert_messages_n", View:"view_messages_n", List:"list_messages_n", Update: "update_messages_n", Delete: "delete_messages_n" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Messages_n retrieved successfully!",
                    errorMessage: "Failed to retrieve Messages_n.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
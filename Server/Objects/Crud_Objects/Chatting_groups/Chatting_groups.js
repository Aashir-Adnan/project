/* CRUD Objects for table: chatting_groups */
        
    const parameters = require('./CRUD_parameters');
    global.CrudChatting_groups_object = {
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
                          Add: "INSERT INTO chatting_groups (chatting_group_name, chatting_group_name, updated_by) VALUES ({{chatting_groups_chatting_group_id}}, {{chatting_groups_chatting_group_name}}, {{chatting_groups_status}}, {{chatting_groups_chatting_group_name}}, {{chatting_groups_status}}, {{chatting_groups_updated_by}}, {{chatting_groups_updated_at}}, {{chatting_groups_created_at}})",
                          Update: "UPDATE chatting_groups SET chatting_group_name = {{chatting_groups_chattingGroupName}}, chatting_group_name = {{chatting_groups_chattingGroupName}}, updated_by = {{chatting_groups_updatedBy}} WHERE chatting_group_id = {{id}}",
                          List: "SELECT chatting_groups.chatting_group_id as id, chatting_group_id as chatting_groups_chattingGroupId, chatting_group_name as chatting_groups_chattingGroupName, status as chatting_groups_status, chatting_group_name as chatting_groups_chattingGroupName, status as chatting_groups_status, updated_by as chatting_groups_updatedBy, updated_at as chatting_groups_updatedAt, created_at as chatting_groups_createdAt, COUNT(*) OVER () AS table_count FROM chatting_groups ",
                          View: "SELECT chatting_groups.chatting_group_id as id, chatting_group_id as chatting_groups_chattingGroupId, chatting_group_name as chatting_groups_chattingGroupName, status as chatting_groups_status, chatting_group_name as chatting_groups_chattingGroupName, status as chatting_groups_status, updated_by as chatting_groups_updatedBy, updated_at as chatting_groups_updatedAt, created_at as chatting_groups_createdAt FROM chatting_groups  WHERE chatting_group_id = {{id}} OR chatting_group_id IS NULL",
                          Delete: "UPDATE chatting_groups SET status = 'inactive' WHERE chatting_group_id = {{id}}",           
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
                      permission: { Add: "insert_chatting_groups", View:"view_chatting_groups", List:"list_chatting_groups", Update: "update_chatting_groups", Delete: "delete_chatting_groups" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Chatting_groups retrieved successfully!",
                    errorMessage: "Failed to retrieve Chatting_groups.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
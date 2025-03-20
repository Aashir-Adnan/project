const parameters = require('./CRUD_parameters');
      global.GroupedCrudsChatting_groups_object = {
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
                            
                            List: "SELECT COUNT(*) as total_count, chatting_group_id as id, chatting_groups.chatting_group_id as chattingGroups_chattingGroupId, chatting_groups.chatting_group_name as chattingGroups_chattingGroupName, chatting_groups.status as chattingGroups_status, chatting_groups.chatting_group_name as chattingGroups_chattingGroupName, chatting_groups.status as chattingGroups_status, chatting_groups.updated_by as chattingGroups_updatedBy, chatting_groups.updated_at as chattingGroups_updatedAt, chatting_groups.created_at as chattingGroups_createdAt FROM chatting_groups",
                              
                            View: "SELECT chatting_groups.chatting_group_id as chatting_groups_id, chatting_groups.chatting_group_id as chattingGroups_chattingGroupId, chatting_groups.chatting_group_name as chattingGroups_chattingGroupName, chatting_groups.status as chattingGroups_status, chatting_groups.chatting_group_name as chattingGroups_chattingGroupName, chatting_groups.status as chattingGroups_status, chatting_groups.updated_by as chattingGroups_updatedBy, chatting_groups.updated_at as chattingGroups_updatedAt, chatting_groups.created_at as chattingGroups_createdAt FROM chatting_groups  WHERE chatting_groups.chatting_group_id = {{id}} OR chatting_groups.chatting_group_id IS NULL",
                              
                            Delete: "UPDATE chatting_groups SET status = 'inactive' WHERE chatting_group_id = {{id}}",           
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
                          { Add: "insert_chatting_groups", View: "view_chatting_groups", List: "list_chatting_groups", Update: "update_chatting_groups", Delete: "delete_chatting_groups" },
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
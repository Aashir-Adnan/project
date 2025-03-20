/* CRUD Objects for table: chatting_group_members */
        
    const parameters = require('./CRUD_parameters');
    global.CrudChatting_group_members_object = {
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
                          Add: "INSERT INTO chatting_group_members (chatting_group_id, user_role_designation_department_id, chatting_group_permission_id, updated_by) VALUES ({{chatting_group_members_chatting_group_member_id}}, {{chatting_group_members_chatting_group_id}}, {{chatting_group_members_user_role_designation_department_id}}, {{chatting_group_members_chatting_group_permission_id}}, {{chatting_group_members_status}}, {{chatting_group_members_updated_by}}, {{chatting_group_members_created_at}}, {{chatting_group_members_updated_at}})",
                          Update: "UPDATE chatting_group_members SET chatting_group_id = {{chatting_group_members_chattingGroupId}}, user_role_designation_department_id = {{chatting_group_members_userRoleDesignationDepartmentId}}, chatting_group_permission_id = {{chatting_group_members_chattingGroupPermissionId}}, updated_by = {{chatting_group_members_updatedBy}} WHERE chatting_group_member_id = {{id}}",
                          List: "SELECT chatting_group_members.chatting_group_member_id as id, chatting_group_member_id as chatting_group_members_chattingGroupMemberId, chatting_group_id as chatting_group_members_chattingGroupId, user_role_designation_department_id as chatting_group_members_userRoleDesignationDepartmentId, chatting_group_permission_id as chatting_group_members_chattingGroupPermissionId, status as chatting_group_members_status, updated_by as chatting_group_members_updatedBy, created_at as chatting_group_members_createdAt, updated_at as chatting_group_members_updatedAt, COUNT(*) OVER () AS table_count FROM chatting_group_members ",
                          View: "SELECT chatting_group_members.chatting_group_member_id as id, chatting_group_member_id as chatting_group_members_chattingGroupMemberId, chatting_group_id as chatting_group_members_chattingGroupId, user_role_designation_department_id as chatting_group_members_userRoleDesignationDepartmentId, chatting_group_permission_id as chatting_group_members_chattingGroupPermissionId, status as chatting_group_members_status, updated_by as chatting_group_members_updatedBy, created_at as chatting_group_members_createdAt, updated_at as chatting_group_members_updatedAt FROM chatting_group_members  WHERE chatting_group_member_id = {{id}} OR chatting_group_member_id IS NULL",
                          Delete: "UPDATE chatting_group_members SET status = 'inactive' WHERE chatting_group_member_id = {{id}}",           
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
                      permission: { Add: "insert_chatting_group_members", View:"view_chatting_group_members", List:"list_chatting_group_members", Update: "update_chatting_group_members", Delete: "delete_chatting_group_members" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Chatting_group_members retrieved successfully!",
                    errorMessage: "Failed to retrieve Chatting_group_members.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
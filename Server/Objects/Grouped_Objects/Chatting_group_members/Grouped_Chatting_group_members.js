const parameters = require('./CRUD_parameters');
      global.GroupedCrudsChatting_group_members_object = {
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
                            
                            List: "SELECT COUNT(*) as total_count, chatting_group_member_id as id, chatting_group_members.chatting_group_member_id as chattingGroupMembers_chattingGroupMemberId, chatting_group_members.chatting_group_id as chattingGroupMembers_chattingGroupId, chatting_group_members.user_role_designation_department_id as chattingGroupMembers_userRoleDesignationDepartmentId, chatting_group_members.chatting_group_permission_id as chattingGroupMembers_chattingGroupPermissionId, chatting_group_members.status as chattingGroupMembers_status, chatting_group_members.updated_by as chattingGroupMembers_updatedBy, chatting_group_members.created_at as chattingGroupMembers_createdAt, chatting_group_members.updated_at as chattingGroupMembers_updatedAt FROM chatting_group_members",
                              
                            View: "SELECT chatting_group_members.chatting_group_member_id as chatting_group_members_id, chatting_group_members.chatting_group_member_id as chattingGroupMembers_chattingGroupMemberId, chatting_group_members.chatting_group_id as chattingGroupMembers_chattingGroupId, chatting_group_members.user_role_designation_department_id as chattingGroupMembers_userRoleDesignationDepartmentId, chatting_group_members.chatting_group_permission_id as chattingGroupMembers_chattingGroupPermissionId, chatting_group_members.status as chattingGroupMembers_status, chatting_group_members.updated_by as chattingGroupMembers_updatedBy, chatting_group_members.created_at as chattingGroupMembers_createdAt, chatting_group_members.updated_at as chattingGroupMembers_updatedAt FROM chatting_group_members  WHERE chatting_group_members.chatting_group_member_id = {{id}} OR chatting_group_members.chatting_group_member_id IS NULL",
                              
                            Delete: "UPDATE chatting_group_members SET status = 'inactive' WHERE chatting_group_member_id = {{id}}",           
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
                          { Add: "insert_chatting_group_members", View: "view_chatting_group_members", List: "list_chatting_group_members", Update: "update_chatting_group_members", Delete: "delete_chatting_group_members" },
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
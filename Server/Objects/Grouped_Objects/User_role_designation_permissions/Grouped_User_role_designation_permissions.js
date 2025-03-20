const parameters = require('./CRUD_parameters');
      global.GroupedCrudsUser_role_designation_permissions_object = {
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
                            Add: "INSERT INTO user_role_designation_permissions (user_role_designation_department_id, permission_id, user_role_designation_department_id, permission_id, updated_by) VALUES ({{user_role_designation_permissions_user_role_designation_permission_id}}, {{user_role_designation_permissions_user_role_designation_department_id}}, {{user_role_designation_permissions_permission_id}}, {{user_role_designation_permissions_status}}, {{user_role_designation_permissions_user_role_designation_department_id}}, {{user_role_designation_permissions_permission_id}}, {{user_role_designation_permissions_status}}, {{user_role_designation_permissions_updated_by}}, {{user_role_designation_permissions_updated_at}}, {{user_role_designation_permissions_created_at}})",
                            
                            Update: "UPDATE user_role_designation_permissions SET user_role_designation_department_id = {{user_role_designation_permissions_userRoleDesignationDepartmentId}}, permission_id = {{user_role_designation_permissions_permissionId}}, user_role_designation_department_id = {{user_role_designation_permissions_userRoleDesignationDepartmentId}}, permission_id = {{user_role_designation_permissions_permissionId}}, updated_by = {{user_role_designation_permissions_updatedBy}} WHERE user_role_designation_permission_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, user_role_designation_permission_id as id, user_role_designation_permissions.user_role_designation_permission_id as userRoleDesignationPermissions_userRoleDesignationPermissionId, user_role_designation_permissions.user_role_designation_department_id as userRoleDesignationPermissions_userRoleDesignationDepartmentId, user_role_designation_permissions.permission_id as userRoleDesignationPermissions_permissionId, user_role_designation_permissions.status as userRoleDesignationPermissions_status, user_role_designation_permissions.user_role_designation_department_id as userRoleDesignationPermissions_userRoleDesignationDepartmentId, user_role_designation_permissions.permission_id as userRoleDesignationPermissions_permissionId, user_role_designation_permissions.status as userRoleDesignationPermissions_status, user_role_designation_permissions.updated_by as userRoleDesignationPermissions_updatedBy, user_role_designation_permissions.updated_at as userRoleDesignationPermissions_updatedAt, user_role_designation_permissions.created_at as userRoleDesignationPermissions_createdAt FROM user_role_designation_permissions",
                              
                            View: "SELECT user_role_designation_permissions.user_role_designation_permission_id as user_role_designation_permissions_id, user_role_designation_permissions.user_role_designation_permission_id as userRoleDesignationPermissions_userRoleDesignationPermissionId, user_role_designation_permissions.user_role_designation_department_id as userRoleDesignationPermissions_userRoleDesignationDepartmentId, user_role_designation_permissions.permission_id as userRoleDesignationPermissions_permissionId, user_role_designation_permissions.status as userRoleDesignationPermissions_status, user_role_designation_permissions.user_role_designation_department_id as userRoleDesignationPermissions_userRoleDesignationDepartmentId, user_role_designation_permissions.permission_id as userRoleDesignationPermissions_permissionId, user_role_designation_permissions.status as userRoleDesignationPermissions_status, user_role_designation_permissions.updated_by as userRoleDesignationPermissions_updatedBy, user_role_designation_permissions.updated_at as userRoleDesignationPermissions_updatedAt, user_role_designation_permissions.created_at as userRoleDesignationPermissions_createdAt FROM user_role_designation_permissions  WHERE user_role_designation_permissions.user_role_designation_permission_id = {{id}} OR user_role_designation_permissions.user_role_designation_permission_id IS NULL",
                              
                            Delete: "UPDATE user_role_designation_permissions SET status = 'inactive' WHERE user_role_designation_permission_id = {{id}}",           
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
                          { Add: "insert_user_role_designation_permissions", View: "view_user_role_designation_permissions", List: "list_user_role_designation_permissions", Update: "update_user_role_designation_permissions", Delete: "delete_user_role_designation_permissions" },
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
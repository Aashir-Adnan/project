const parameters = require('./CRUD_parameters');
      global.GroupedCrudsRoles_object = {
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
                            Add: "INSERT INTO roles (role_name, role_name, senior_role_id, updated_by) VALUES ({{roles_role_id}}, {{roles_role_name}}, {{roles_status}}, {{roles_role_name}}, {{roles_status}}, {{roles_senior_role_id}}, {{roles_updated_by}}, {{roles_created_at}}, {{roles_updated_at}})",
                            
                            Update: "UPDATE roles SET role_name = {{roles_roleName}}, role_name = {{roles_roleName}}, senior_role_id = {{roles_seniorRoleId}}, updated_by = {{roles_updatedBy}} WHERE role_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, role_id as id, roles.role_id as roles_roleId, roles.role_name as roles_roleName, roles.status as roles_status, roles.role_name as roles_roleName, roles.status as roles_status, roles.senior_role_id as roles_seniorRoleId, roles.updated_by as roles_updatedBy, roles.created_at as roles_createdAt, roles.updated_at as roles_updatedAt FROM roles",
                              
                            View: "SELECT roles.role_id as roles_id, roles.role_id as roles_roleId, roles.role_name as roles_roleName, roles.status as roles_status, roles.role_name as roles_roleName, roles.status as roles_status, roles.senior_role_id as roles_seniorRoleId, roles.updated_by as roles_updatedBy, roles.created_at as roles_createdAt, roles.updated_at as roles_updatedAt FROM roles  WHERE roles.role_id = {{id}} OR roles.role_id IS NULL",
                              
                            Delete: "UPDATE roles SET status = 'inactive' WHERE role_id = {{id}}",           
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
                          { Add: "insert_roles", View: "view_roles", List: "list_roles", Update: "update_roles", Delete: "delete_roles" },
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
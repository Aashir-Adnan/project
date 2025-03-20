const parameters = require('./CRUD_parameters');
      global.GroupedCrudsPermissions_object = {
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
                            Add: "INSERT INTO permissions (permission_name, permission_name, updated_by) VALUES ({{permissions_permission_id}}, {{permissions_permission_name}}, {{permissions_status}}, {{permissions_permission_name}}, {{permissions_status}}, {{permissions_updated_by}}, {{permissions_created_at}}, {{permissions_updated_at}})",
                            
                            Update: "UPDATE permissions SET permission_name = {{permissions_permissionName}}, permission_name = {{permissions_permissionName}}, updated_by = {{permissions_updatedBy}} WHERE permission_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, permission_id as id, permissions.permission_id as permissions_permissionId, permissions.permission_name as permissions_permissionName, permissions.status as permissions_status, permissions.permission_name as permissions_permissionName, permissions.status as permissions_status, permissions.updated_by as permissions_updatedBy, permissions.created_at as permissions_createdAt, permissions.updated_at as permissions_updatedAt FROM permissions",
                              
                            View: "SELECT permissions.permission_id as permissions_id, permissions.permission_id as permissions_permissionId, permissions.permission_name as permissions_permissionName, permissions.status as permissions_status, permissions.permission_name as permissions_permissionName, permissions.status as permissions_status, permissions.updated_by as permissions_updatedBy, permissions.created_at as permissions_createdAt, permissions.updated_at as permissions_updatedAt FROM permissions  WHERE permissions.permission_id = {{id}} OR permissions.permission_id IS NULL",
                              
                            Delete: "UPDATE permissions SET status = 'inactive' WHERE permission_id = {{id}}",           
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
                          { Add: "insert_permissions", View: "view_permissions", List: "list_permissions", Update: "update_permissions", Delete: "delete_permissions" },
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
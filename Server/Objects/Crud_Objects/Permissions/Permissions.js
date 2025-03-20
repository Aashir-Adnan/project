/* CRUD Objects for table: permissions */
        
    const parameters = require('./CRUD_parameters');
    global.CrudPermissions_object = {
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
                          List: "SELECT permissions.permission_id as id, permission_id as permissions_permissionId, permission_name as permissions_permissionName, status as permissions_status, permission_name as permissions_permissionName, status as permissions_status, updated_by as permissions_updatedBy, created_at as permissions_createdAt, updated_at as permissions_updatedAt, COUNT(*) OVER () AS table_count FROM permissions ",
                          View: "SELECT permissions.permission_id as id, permission_id as permissions_permissionId, permission_name as permissions_permissionName, status as permissions_status, permission_name as permissions_permissionName, status as permissions_status, updated_by as permissions_updatedBy, created_at as permissions_createdAt, updated_at as permissions_updatedAt FROM permissions  WHERE permission_id = {{id}} OR permission_id IS NULL",
                          Delete: "UPDATE permissions SET status = 'inactive' WHERE permission_id = {{id}}",           
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
                      permission: { Add: "insert_permissions", View:"view_permissions", List:"list_permissions", Update: "update_permissions", Delete: "delete_permissions" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Permissions retrieved successfully!",
                    errorMessage: "Failed to retrieve Permissions.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
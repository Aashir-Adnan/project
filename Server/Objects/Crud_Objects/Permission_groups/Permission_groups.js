/* CRUD Objects for table: permission_groups */
        
    const parameters = require('./CRUD_parameters');
    global.CrudPermission_groups_object = {
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
                          Add: "INSERT INTO permission_groups (group_name, group_name, updated_by) VALUES ({{permission_groups_permission_group_id}}, {{permission_groups_group_name}}, {{permission_groups_status}}, {{permission_groups_group_name}}, {{permission_groups_status}}, {{permission_groups_updated_by}}, {{permission_groups_created_at}}, {{permission_groups_updated_at}})",
                          Update: "UPDATE permission_groups SET group_name = {{permission_groups_groupName}}, group_name = {{permission_groups_groupName}}, updated_by = {{permission_groups_updatedBy}} WHERE permission_group_id = {{id}}",
                          List: "SELECT permission_groups.permission_group_id as id, permission_group_id as permission_groups_permissionGroupId, group_name as permission_groups_groupName, status as permission_groups_status, group_name as permission_groups_groupName, status as permission_groups_status, updated_by as permission_groups_updatedBy, created_at as permission_groups_createdAt, updated_at as permission_groups_updatedAt, COUNT(*) OVER () AS table_count FROM permission_groups ",
                          View: "SELECT permission_groups.permission_group_id as id, permission_group_id as permission_groups_permissionGroupId, group_name as permission_groups_groupName, status as permission_groups_status, group_name as permission_groups_groupName, status as permission_groups_status, updated_by as permission_groups_updatedBy, created_at as permission_groups_createdAt, updated_at as permission_groups_updatedAt FROM permission_groups  WHERE permission_group_id = {{id}} OR permission_group_id IS NULL",
                          Delete: "UPDATE permission_groups SET status = 'inactive' WHERE permission_group_id = {{id}}",           
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
                      permission: { Add: "insert_permission_groups", View:"view_permission_groups", List:"list_permission_groups", Update: "update_permission_groups", Delete: "delete_permission_groups" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Permission_groups retrieved successfully!",
                    errorMessage: "Failed to retrieve Permission_groups.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
const parameters = require('./CRUD_parameters');
      global.GroupedCrudsPermission_groups_permissions_object = {
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
                            Add: "INSERT INTO permission_groups_permissions (group_id, permission_id, group_id, permission_id, updated_by) VALUES ({{permission_groups_permissions_permission_group_permission_id}}, {{permission_groups_permissions_group_id}}, {{permission_groups_permissions_permission_id}}, {{permission_groups_permissions_status}}, {{permission_groups_permissions_group_id}}, {{permission_groups_permissions_permission_id}}, {{permission_groups_permissions_status}}, {{permission_groups_permissions_updated_by}}, {{permission_groups_permissions_updated_at}}, {{permission_groups_permissions_created_at}})",
                            
                            Update: "UPDATE permission_groups_permissions SET group_id = {{permission_groups_permissions_groupId}}, permission_id = {{permission_groups_permissions_permissionId}}, group_id = {{permission_groups_permissions_groupId}}, permission_id = {{permission_groups_permissions_permissionId}}, updated_by = {{permission_groups_permissions_updatedBy}} WHERE permission_group_permission_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, permission_group_permission_id as id, permission_groups_permissions.permission_group_permission_id as permissionGroupsPermissions_permissionGroupPermissionId, permission_groups_permissions.group_id as permissionGroupsPermissions_groupId, permission_groups_permissions.permission_id as permissionGroupsPermissions_permissionId, permission_groups_permissions.status as permissionGroupsPermissions_status, permission_groups_permissions.group_id as permissionGroupsPermissions_groupId, permission_groups_permissions.permission_id as permissionGroupsPermissions_permissionId, permission_groups_permissions.status as permissionGroupsPermissions_status, permission_groups_permissions.updated_by as permissionGroupsPermissions_updatedBy, permission_groups_permissions.updated_at as permissionGroupsPermissions_updatedAt, permission_groups_permissions.created_at as permissionGroupsPermissions_createdAt FROM permission_groups_permissions",
                              
                            View: "SELECT permission_groups_permissions.permission_group_permission_id as permission_groups_permissions_id, permission_groups_permissions.permission_group_permission_id as permissionGroupsPermissions_permissionGroupPermissionId, permission_groups_permissions.group_id as permissionGroupsPermissions_groupId, permission_groups_permissions.permission_id as permissionGroupsPermissions_permissionId, permission_groups_permissions.status as permissionGroupsPermissions_status, permission_groups_permissions.group_id as permissionGroupsPermissions_groupId, permission_groups_permissions.permission_id as permissionGroupsPermissions_permissionId, permission_groups_permissions.status as permissionGroupsPermissions_status, permission_groups_permissions.updated_by as permissionGroupsPermissions_updatedBy, permission_groups_permissions.updated_at as permissionGroupsPermissions_updatedAt, permission_groups_permissions.created_at as permissionGroupsPermissions_createdAt FROM permission_groups_permissions  WHERE permission_groups_permissions.permission_group_permission_id = {{id}} OR permission_groups_permissions.permission_group_permission_id IS NULL",
                              
                            Delete: "UPDATE permission_groups_permissions SET status = 'inactive' WHERE permission_group_permission_id = {{id}}",           
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
                          { Add: "insert_permission_groups_permissions", View: "view_permission_groups_permissions", List: "list_permission_groups_permissions", Update: "update_permission_groups_permissions", Delete: "delete_permission_groups_permissions" },
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
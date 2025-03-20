const parameters = require('./CRUD_parameters');
      global.GroupedCrudsCredentials_object = {
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
                            Add: "INSERT INTO credentials (credentials_info, inventory_sub_category_item_id, user_role_designation_department_id, updated_by) VALUES ({{credentials_credentials_id}}, {{credentials_credentials_info}}, {{credentials_inventory_sub_category_item_id}}, {{credentials_user_role_designation_department_id}}, {{credentials_status}}, {{credentials_updated_by}}, {{credentials_updated_at}}, {{credentials_created_at}})",
                            
                            Update: "UPDATE credentials SET credentials_info = {{credentials_credentialsInfo}}, inventory_sub_category_item_id = {{credentials_inventorySubCategoryItemId}}, user_role_designation_department_id = {{credentials_userRoleDesignationDepartmentId}}, updated_by = {{credentials_updatedBy}} WHERE credentials_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, credentials_id as id, credentials.credentials_id as credentials_credentialsId, credentials.credentials_info as credentials_credentialsInfo, credentials.inventory_sub_category_item_id as credentials_inventorySubCategoryItemId, credentials.user_role_designation_department_id as credentials_userRoleDesignationDepartmentId, credentials.status as credentials_status, credentials.updated_by as credentials_updatedBy, credentials.updated_at as credentials_updatedAt, credentials.created_at as credentials_createdAt FROM credentials",
                              
                            View: "SELECT credentials.credentials_id as credentials_id, credentials.credentials_id as credentials_credentialsId, credentials.credentials_info as credentials_credentialsInfo, credentials.inventory_sub_category_item_id as credentials_inventorySubCategoryItemId, credentials.user_role_designation_department_id as credentials_userRoleDesignationDepartmentId, credentials.status as credentials_status, credentials.updated_by as credentials_updatedBy, credentials.updated_at as credentials_updatedAt, credentials.created_at as credentials_createdAt FROM credentials  WHERE credentials.credentials_id = {{id}} OR credentials.credentials_id IS NULL",
                              
                            Delete: "UPDATE credentials SET status = 'inactive' WHERE credentials_id = {{id}}",           
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
                          { Add: "insert_credentials", View: "view_credentials", List: "list_credentials", Update: "update_credentials", Delete: "delete_credentials" },
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
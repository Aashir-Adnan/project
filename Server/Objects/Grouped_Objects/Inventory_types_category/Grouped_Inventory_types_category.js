const parameters = require('./CRUD_parameters');
      global.GroupedCrudsInventory_types_category_object = {
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
                            Add: "INSERT INTO inventory_types_category (inventory_id, category_name, updated_by) VALUES ({{inventory_types_category_inventory_types_category_id}}, {{inventory_types_category_inventory_id}}, {{inventory_types_category_category_name}}, {{inventory_types_category_status}}, {{inventory_types_category_updated_by}}, {{inventory_types_category_updated_at}}, {{inventory_types_category_created_at}})",
                            
                            Update: "UPDATE inventory_types_category SET inventory_id = {{inventory_types_category_inventoryId}}, category_name = {{inventory_types_category_categoryName}}, updated_by = {{inventory_types_category_updatedBy}} WHERE inventory_types_category_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, inventory_types_category_id as id, inventory_types_category.inventory_types_category_id as inventoryTypesCategory_inventoryTypesCategoryId, inventory_types_category.inventory_id as inventoryTypesCategory_inventoryId, inventory_types_category.category_name as inventoryTypesCategory_categoryName, inventory_types_category.status as inventoryTypesCategory_status, inventory_types_category.updated_by as inventoryTypesCategory_updatedBy, inventory_types_category.updated_at as inventoryTypesCategory_updatedAt, inventory_types_category.created_at as inventoryTypesCategory_createdAt FROM inventory_types_category",
                              
                            View: "SELECT inventory_types_category.inventory_types_category_id as inventory_types_category_id, inventory_types_category.inventory_types_category_id as inventoryTypesCategory_inventoryTypesCategoryId, inventory_types_category.inventory_id as inventoryTypesCategory_inventoryId, inventory_types_category.category_name as inventoryTypesCategory_categoryName, inventory_types_category.status as inventoryTypesCategory_status, inventory_types_category.updated_by as inventoryTypesCategory_updatedBy, inventory_types_category.updated_at as inventoryTypesCategory_updatedAt, inventory_types_category.created_at as inventoryTypesCategory_createdAt FROM inventory_types_category  WHERE inventory_types_category.inventory_types_category_id = {{id}} OR inventory_types_category.inventory_types_category_id IS NULL",
                              
                            Delete: "UPDATE inventory_types_category SET status = 'inactive' WHERE inventory_types_category_id = {{id}}",           
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
                          { Add: "insert_inventory_types_category", View: "view_inventory_types_category", List: "list_inventory_types_category", Update: "update_inventory_types_category", Delete: "delete_inventory_types_category" },
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
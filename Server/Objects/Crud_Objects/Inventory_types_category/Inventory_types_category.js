/* CRUD Objects for table: inventory_types_category */
        
    const parameters = require('./CRUD_parameters');
    global.CrudInventory_types_category_object = {
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
                          List: "SELECT inventory_types_category.inventory_types_category_id as id, inventory_types_category_id as inventory_types_category_inventoryTypesCategoryId, inventory_id as inventory_types_category_inventoryId, category_name as inventory_types_category_categoryName, status as inventory_types_category_status, updated_by as inventory_types_category_updatedBy, updated_at as inventory_types_category_updatedAt, created_at as inventory_types_category_createdAt, COUNT(*) OVER () AS table_count FROM inventory_types_category ",
                          View: "SELECT inventory_types_category.inventory_types_category_id as id, inventory_types_category_id as inventory_types_category_inventoryTypesCategoryId, inventory_id as inventory_types_category_inventoryId, category_name as inventory_types_category_categoryName, status as inventory_types_category_status, updated_by as inventory_types_category_updatedBy, updated_at as inventory_types_category_updatedAt, created_at as inventory_types_category_createdAt FROM inventory_types_category  WHERE inventory_types_category_id = {{id}} OR inventory_types_category_id IS NULL",
                          Delete: "UPDATE inventory_types_category SET status = 'inactive' WHERE inventory_types_category_id = {{id}}",           
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
                      permission: { Add: "insert_inventory_types_category", View:"view_inventory_types_category", List:"list_inventory_types_category", Update: "update_inventory_types_category", Delete: "delete_inventory_types_category" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Inventory_types_category retrieved successfully!",
                    errorMessage: "Failed to retrieve Inventory_types_category.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
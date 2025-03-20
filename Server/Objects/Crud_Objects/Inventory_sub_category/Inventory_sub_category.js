/* CRUD Objects for table: inventory_sub_category */
        
    const parameters = require('./CRUD_parameters');
    global.CrudInventory_sub_category_object = {
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
                          Add: "INSERT INTO inventory_sub_category (inventory_types_category_id, attribute_groups_attribute_id, sub_category_items_name, updated_by) VALUES ({{inventory_sub_category_inventory_sub_category_id}}, {{inventory_sub_category_inventory_types_category_id}}, {{inventory_sub_category_attribute_groups_attribute_id}}, {{inventory_sub_category_sub_category_items_name}}, {{inventory_sub_category_status}}, {{inventory_sub_category_updated_by}}, {{inventory_sub_category_updated_at}}, {{inventory_sub_category_created_at}})",
                          Update: "UPDATE inventory_sub_category SET inventory_types_category_id = {{inventory_sub_category_inventoryTypesCategoryId}}, attribute_groups_attribute_id = {{inventory_sub_category_attributeGroupsAttributeId}}, sub_category_items_name = {{inventory_sub_category_subCategoryItemsName}}, updated_by = {{inventory_sub_category_updatedBy}} WHERE inventory_sub_category_id = {{id}}",
                          List: "SELECT inventory_sub_category.inventory_sub_category_id as id, inventory_sub_category_id as inventory_sub_category_inventorySubCategoryId, inventory_types_category_id as inventory_sub_category_inventoryTypesCategoryId, attribute_groups_attribute_id as inventory_sub_category_attributeGroupsAttributeId, sub_category_items_name as inventory_sub_category_subCategoryItemsName, status as inventory_sub_category_status, updated_by as inventory_sub_category_updatedBy, updated_at as inventory_sub_category_updatedAt, created_at as inventory_sub_category_createdAt, COUNT(*) OVER () AS table_count FROM inventory_sub_category ",
                          View: "SELECT inventory_sub_category.inventory_sub_category_id as id, inventory_sub_category_id as inventory_sub_category_inventorySubCategoryId, inventory_types_category_id as inventory_sub_category_inventoryTypesCategoryId, attribute_groups_attribute_id as inventory_sub_category_attributeGroupsAttributeId, sub_category_items_name as inventory_sub_category_subCategoryItemsName, status as inventory_sub_category_status, updated_by as inventory_sub_category_updatedBy, updated_at as inventory_sub_category_updatedAt, created_at as inventory_sub_category_createdAt FROM inventory_sub_category  WHERE inventory_sub_category_id = {{id}} OR inventory_sub_category_id IS NULL",
                          Delete: "UPDATE inventory_sub_category SET status = 'inactive' WHERE inventory_sub_category_id = {{id}}",           
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
                      permission: { Add: "insert_inventory_sub_category", View:"view_inventory_sub_category", List:"list_inventory_sub_category", Update: "update_inventory_sub_category", Delete: "delete_inventory_sub_category" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Inventory_sub_category retrieved successfully!",
                    errorMessage: "Failed to retrieve Inventory_sub_category.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
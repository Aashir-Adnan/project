/* CRUD Objects for table: inventory_sub_category_items */
        
    const parameters = require('./CRUD_parameters');
    global.CrudInventory_sub_category_items_object = {
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
                          Add: "INSERT INTO inventory_sub_category_items (inventory_sub_category_id, parent_inventory_sub_category_item_id, item_location_id, inventory_bill_id, inventory_sub_category_item_name, company_name, updated_by) VALUES ({{inventory_sub_category_items_inventory_sub_category_item_id}}, {{inventory_sub_category_items_inventory_sub_category_id}}, {{inventory_sub_category_items_parent_inventory_sub_category_item_id}}, {{inventory_sub_category_items_item_location_id}}, {{inventory_sub_category_items_inventory_bill_id}}, {{inventory_sub_category_items_inventory_sub_category_item_name}}, {{inventory_sub_category_items_company_name}}, {{inventory_sub_category_items_status}}, {{inventory_sub_category_items_updated_by}}, {{inventory_sub_category_items_updated_at}}, {{inventory_sub_category_items_created_at}})",
                          Update: "UPDATE inventory_sub_category_items SET inventory_sub_category_id = {{inventory_sub_category_items_inventorySubCategoryId}}, parent_inventory_sub_category_item_id = {{inventory_sub_category_items_parentInventorySubCategoryItemId}}, item_location_id = {{inventory_sub_category_items_itemLocationId}}, inventory_bill_id = {{inventory_sub_category_items_inventoryBillId}}, inventory_sub_category_item_name = {{inventory_sub_category_items_inventorySubCategoryItemName}}, company_name = {{inventory_sub_category_items_companyName}}, updated_by = {{inventory_sub_category_items_updatedBy}} WHERE inventory_sub_category_item_id = {{id}}",
                          List: "SELECT inventory_sub_category_items.inventory_sub_category_item_id as id, inventory_sub_category_item_id as inventory_sub_category_items_inventorySubCategoryItemId, inventory_sub_category_id as inventory_sub_category_items_inventorySubCategoryId, parent_inventory_sub_category_item_id as inventory_sub_category_items_parentInventorySubCategoryItemId, item_location_id as inventory_sub_category_items_itemLocationId, inventory_bill_id as inventory_sub_category_items_inventoryBillId, inventory_sub_category_item_name as inventory_sub_category_items_inventorySubCategoryItemName, company_name as inventory_sub_category_items_companyName, status as inventory_sub_category_items_status, updated_by as inventory_sub_category_items_updatedBy, updated_at as inventory_sub_category_items_updatedAt, created_at as inventory_sub_category_items_createdAt, COUNT(*) OVER () AS table_count FROM inventory_sub_category_items ",
                          View: "SELECT inventory_sub_category_items.inventory_sub_category_item_id as id, inventory_sub_category_item_id as inventory_sub_category_items_inventorySubCategoryItemId, inventory_sub_category_id as inventory_sub_category_items_inventorySubCategoryId, parent_inventory_sub_category_item_id as inventory_sub_category_items_parentInventorySubCategoryItemId, item_location_id as inventory_sub_category_items_itemLocationId, inventory_bill_id as inventory_sub_category_items_inventoryBillId, inventory_sub_category_item_name as inventory_sub_category_items_inventorySubCategoryItemName, company_name as inventory_sub_category_items_companyName, status as inventory_sub_category_items_status, updated_by as inventory_sub_category_items_updatedBy, updated_at as inventory_sub_category_items_updatedAt, created_at as inventory_sub_category_items_createdAt FROM inventory_sub_category_items  WHERE inventory_sub_category_item_id = {{id}} OR inventory_sub_category_item_id IS NULL",
                          Delete: "UPDATE inventory_sub_category_items SET status = 'inactive' WHERE inventory_sub_category_item_id = {{id}}",           
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
                      permission: { Add: "insert_inventory_sub_category_items", View:"view_inventory_sub_category_items", List:"list_inventory_sub_category_items", Update: "update_inventory_sub_category_items", Delete: "delete_inventory_sub_category_items" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Inventory_sub_category_items retrieved successfully!",
                    errorMessage: "Failed to retrieve Inventory_sub_category_items.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
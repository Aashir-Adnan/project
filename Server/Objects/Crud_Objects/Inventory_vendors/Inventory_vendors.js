/* CRUD Objects for table: inventory_vendors */
        
    const parameters = require('./CRUD_parameters');
    global.CrudInventory_vendors_object = {
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
                          Add: "INSERT INTO inventory_vendors (vendor_name, updated_by) VALUES ({{inventory_vendors_inventory_vendor_id}}, {{inventory_vendors_vendor_name}}, {{inventory_vendors_status}}, {{inventory_vendors_updated_by}}, {{inventory_vendors_updated_at}}, {{inventory_vendors_created_at}})",
                          Update: "UPDATE inventory_vendors SET vendor_name = {{inventory_vendors_vendorName}}, updated_by = {{inventory_vendors_updatedBy}} WHERE inventory_vendor_id = {{id}}",
                          List: "SELECT inventory_vendors.inventory_vendor_id as id, inventory_vendor_id as inventory_vendors_inventoryVendorId, vendor_name as inventory_vendors_vendorName, status as inventory_vendors_status, updated_by as inventory_vendors_updatedBy, updated_at as inventory_vendors_updatedAt, created_at as inventory_vendors_createdAt, COUNT(*) OVER () AS table_count FROM inventory_vendors ",
                          View: "SELECT inventory_vendors.inventory_vendor_id as id, inventory_vendor_id as inventory_vendors_inventoryVendorId, vendor_name as inventory_vendors_vendorName, status as inventory_vendors_status, updated_by as inventory_vendors_updatedBy, updated_at as inventory_vendors_updatedAt, created_at as inventory_vendors_createdAt FROM inventory_vendors  WHERE inventory_vendor_id = {{id}} OR inventory_vendor_id IS NULL",
                          Delete: "UPDATE inventory_vendors SET status = 'inactive' WHERE inventory_vendor_id = {{id}}",           
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
                      permission: { Add: "insert_inventory_vendors", View:"view_inventory_vendors", List:"list_inventory_vendors", Update: "update_inventory_vendors", Delete: "delete_inventory_vendors" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Inventory_vendors retrieved successfully!",
                    errorMessage: "Failed to retrieve Inventory_vendors.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
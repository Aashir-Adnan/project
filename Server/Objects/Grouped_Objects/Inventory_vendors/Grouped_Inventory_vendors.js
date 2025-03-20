const parameters = require('./CRUD_parameters');
      global.GroupedCrudsInventory_vendors_object = {
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
                            
                            List: "SELECT COUNT(*) as total_count, inventory_vendor_id as id, inventory_vendors.inventory_vendor_id as inventoryVendors_inventoryVendorId, inventory_vendors.vendor_name as inventoryVendors_vendorName, inventory_vendors.status as inventoryVendors_status, inventory_vendors.updated_by as inventoryVendors_updatedBy, inventory_vendors.updated_at as inventoryVendors_updatedAt, inventory_vendors.created_at as inventoryVendors_createdAt FROM inventory_vendors",
                              
                            View: "SELECT inventory_vendors.inventory_vendor_id as inventory_vendors_id, inventory_vendors.inventory_vendor_id as inventoryVendors_inventoryVendorId, inventory_vendors.vendor_name as inventoryVendors_vendorName, inventory_vendors.status as inventoryVendors_status, inventory_vendors.updated_by as inventoryVendors_updatedBy, inventory_vendors.updated_at as inventoryVendors_updatedAt, inventory_vendors.created_at as inventoryVendors_createdAt FROM inventory_vendors  WHERE inventory_vendors.inventory_vendor_id = {{id}} OR inventory_vendors.inventory_vendor_id IS NULL",
                              
                            Delete: "UPDATE inventory_vendors SET status = 'inactive' WHERE inventory_vendor_id = {{id}}",           
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
                          { Add: "insert_inventory_vendors", View: "view_inventory_vendors", List: "list_inventory_vendors", Update: "update_inventory_vendors", Delete: "delete_inventory_vendors" },
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
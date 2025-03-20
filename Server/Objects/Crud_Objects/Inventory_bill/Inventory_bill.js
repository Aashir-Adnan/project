/* CRUD Objects for table: inventory_bill */
        
    const parameters = require('./CRUD_parameters');
    global.CrudInventory_bill_object = {
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
                          Add: "INSERT INTO inventory_bill (inventory_vendor_id, bill_serial_number, company_name, bill_amount, updated_by) VALUES ({{inventory_bill_inventory_bill_id}}, {{inventory_bill_inventory_vendor_id}}, {{inventory_bill_bill_serial_number}}, {{inventory_bill_company_name}}, {{inventory_bill_bill_amount}}, {{inventory_bill_status}}, {{inventory_bill_updated_by}}, {{inventory_bill_updated_at}}, {{inventory_bill_created_at}})",
                          Update: "UPDATE inventory_bill SET inventory_vendor_id = {{inventory_bill_inventoryVendorId}}, bill_serial_number = {{inventory_bill_billSerialNumber}}, company_name = {{inventory_bill_companyName}}, bill_amount = {{inventory_bill_billAmount}}, updated_by = {{inventory_bill_updatedBy}} WHERE inventory_bill_id = {{id}}",
                          List: "SELECT inventory_bill.inventory_bill_id as id, inventory_bill_id as inventory_bill_inventoryBillId, inventory_vendor_id as inventory_bill_inventoryVendorId, bill_serial_number as inventory_bill_billSerialNumber, company_name as inventory_bill_companyName, bill_amount as inventory_bill_billAmount, status as inventory_bill_status, updated_by as inventory_bill_updatedBy, updated_at as inventory_bill_updatedAt, created_at as inventory_bill_createdAt, COUNT(*) OVER () AS table_count FROM inventory_bill ",
                          View: "SELECT inventory_bill.inventory_bill_id as id, inventory_bill_id as inventory_bill_inventoryBillId, inventory_vendor_id as inventory_bill_inventoryVendorId, bill_serial_number as inventory_bill_billSerialNumber, company_name as inventory_bill_companyName, bill_amount as inventory_bill_billAmount, status as inventory_bill_status, updated_by as inventory_bill_updatedBy, updated_at as inventory_bill_updatedAt, created_at as inventory_bill_createdAt FROM inventory_bill  WHERE inventory_bill_id = {{id}} OR inventory_bill_id IS NULL",
                          Delete: "UPDATE inventory_bill SET status = 'inactive' WHERE inventory_bill_id = {{id}}",           
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
                      permission: { Add: "insert_inventory_bill", View:"view_inventory_bill", List:"list_inventory_bill", Update: "update_inventory_bill", Delete: "delete_inventory_bill" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Inventory_bill retrieved successfully!",
                    errorMessage: "Failed to retrieve Inventory_bill.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
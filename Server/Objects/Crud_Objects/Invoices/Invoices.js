/* CRUD Objects for table: invoices */
        
    const parameters = require('./CRUD_parameters');
    global.CrudInvoices_object = {
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
                          Add: "INSERT INTO invoices (user_id, amount, updated_by) VALUES ({{invoices_invoice_id}}, {{invoices_user_id}}, {{invoices_amount}}, {{invoices_status}}, {{invoices_updated_by}}, {{invoices_updated_at}}, {{invoices_created_at}})",
                          Update: "UPDATE invoices SET user_id = {{invoices_userId}}, amount = {{invoices_amount}}, updated_by = {{invoices_updatedBy}} WHERE invoice_id = {{id}}",
                          List: "SELECT invoices.invoice_id as id, invoice_id as invoices_invoiceId, user_id as invoices_userId, amount as invoices_amount, status as invoices_status, updated_by as invoices_updatedBy, updated_at as invoices_updatedAt, created_at as invoices_createdAt, users.first_name as users_firstName, COUNT(*) OVER () AS table_count FROM invoices LEFT JOIN users ON invoices.user_id = users.invoice_id",
                          View: "SELECT invoices.invoice_id as id, invoice_id as invoices_invoiceId, user_id as invoices_userId, amount as invoices_amount, status as invoices_status, updated_by as invoices_updatedBy, updated_at as invoices_updatedAt, created_at as invoices_createdAt, users.first_name as users_firstName FROM invoices LEFT JOIN users ON invoices.user_id = users.invoice_id WHERE invoice_id = {{id}} OR invoice_id IS NULL",
                          Delete: "UPDATE invoices SET status = 'inactive' WHERE invoice_id = {{id}}",           
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
                      permission: { Add: "insert_invoices", View:"view_invoices", List:"list_invoices", Update: "update_invoices", Delete: "delete_invoices" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Invoices retrieved successfully!",
                    errorMessage: "Failed to retrieve Invoices.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
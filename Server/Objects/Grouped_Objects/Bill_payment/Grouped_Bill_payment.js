const parameters = require('./CRUD_parameters');
      global.GroupedCrudsBill_payment_object = {
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
                            Add: "INSERT INTO bill_payment (inventory_bill_id, payment_by, due_date, total_payment, remaining_payment, payment_method, last_payment_date, updated_by) VALUES ({{bill_payment_bill_payment_id}}, {{bill_payment_inventory_bill_id}}, {{bill_payment_payment_by}}, {{bill_payment_due_date}}, {{bill_payment_total_payment}}, {{bill_payment_remaining_payment}}, {{bill_payment_payment_method}}, {{bill_payment_last_payment_date}}, {{bill_payment_status}}, {{bill_payment_updated_by}}, {{bill_payment_updated_at}}, {{bill_payment_created_at}})",
                            
                            Update: "UPDATE bill_payment SET inventory_bill_id = {{bill_payment_inventoryBillId}}, payment_by = {{bill_payment_paymentBy}}, due_date = {{bill_payment_dueDate}}, total_payment = {{bill_payment_totalPayment}}, remaining_payment = {{bill_payment_remainingPayment}}, payment_method = {{bill_payment_paymentMethod}}, last_payment_date = {{bill_payment_lastPaymentDate}}, updated_by = {{bill_payment_updatedBy}} WHERE bill_payment_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, bill_payment_id as id, bill_payment.bill_payment_id as billPayment_billPaymentId, bill_payment.inventory_bill_id as billPayment_inventoryBillId, bill_payment.payment_by as billPayment_paymentBy, bill_payment.due_date as billPayment_dueDate, bill_payment.total_payment as billPayment_totalPayment, bill_payment.remaining_payment as billPayment_remainingPayment, bill_payment.payment_method as billPayment_paymentMethod, bill_payment.last_payment_date as billPayment_lastPaymentDate, bill_payment.status as billPayment_status, bill_payment.updated_by as billPayment_updatedBy, bill_payment.updated_at as billPayment_updatedAt, bill_payment.created_at as billPayment_createdAt FROM bill_payment",
                              
                            View: "SELECT bill_payment.bill_payment_id as bill_payment_id, bill_payment.bill_payment_id as billPayment_billPaymentId, bill_payment.inventory_bill_id as billPayment_inventoryBillId, bill_payment.payment_by as billPayment_paymentBy, bill_payment.due_date as billPayment_dueDate, bill_payment.total_payment as billPayment_totalPayment, bill_payment.remaining_payment as billPayment_remainingPayment, bill_payment.payment_method as billPayment_paymentMethod, bill_payment.last_payment_date as billPayment_lastPaymentDate, bill_payment.status as billPayment_status, bill_payment.updated_by as billPayment_updatedBy, bill_payment.updated_at as billPayment_updatedAt, bill_payment.created_at as billPayment_createdAt FROM bill_payment  WHERE bill_payment.bill_payment_id = {{id}} OR bill_payment.bill_payment_id IS NULL",
                              
                            Delete: "UPDATE bill_payment SET status = 'inactive' WHERE bill_payment_id = {{id}}",           
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
                          { Add: "insert_bill_payment", View: "view_bill_payment", List: "list_bill_payment", Update: "update_bill_payment", Delete: "delete_bill_payment" },
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
/* CRUD Objects for table: item_allocation */
        
    const parameters = require('./CRUD_parameters');
    global.CrudItem_allocation_object = {
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
                          Add: "INSERT INTO item_allocation (task_id, inventory_sub_category_item_id, allocated_to, allocated_by, allocated_on_behalf_of, return_by, return_to, return_date, due_date, allocated_date, updated_by) VALUES ({{item_allocation_item_allocation_id}}, {{item_allocation_task_id}}, {{item_allocation_inventory_sub_category_item_id}}, {{item_allocation_allocated_to}}, {{item_allocation_allocated_by}}, {{item_allocation_allocated_on_behalf_of}}, {{item_allocation_return_by}}, {{item_allocation_return_to}}, {{item_allocation_return_date}}, {{item_allocation_due_date}}, {{item_allocation_allocated_date}}, {{item_allocation_status}}, {{item_allocation_updated_by}}, {{item_allocation_updated_at}}, {{item_allocation_created_at}})",
                          Update: "UPDATE item_allocation SET task_id = {{item_allocation_taskId}}, inventory_sub_category_item_id = {{item_allocation_inventorySubCategoryItemId}}, allocated_to = {{item_allocation_allocatedTo}}, allocated_by = {{item_allocation_allocatedBy}}, allocated_on_behalf_of = {{item_allocation_allocatedOnBehalfOf}}, return_by = {{item_allocation_returnBy}}, return_to = {{item_allocation_returnTo}}, return_date = {{item_allocation_returnDate}}, due_date = {{item_allocation_dueDate}}, allocated_date = {{item_allocation_allocatedDate}}, updated_by = {{item_allocation_updatedBy}} WHERE item_allocation_id = {{id}}",
                          List: "SELECT item_allocation.item_allocation_id as id, item_allocation_id as item_allocation_itemAllocationId, task_id as item_allocation_taskId, inventory_sub_category_item_id as item_allocation_inventorySubCategoryItemId, allocated_to as item_allocation_allocatedTo, allocated_by as item_allocation_allocatedBy, allocated_on_behalf_of as item_allocation_allocatedOnBehalfOf, return_by as item_allocation_returnBy, return_to as item_allocation_returnTo, return_date as item_allocation_returnDate, due_date as item_allocation_dueDate, allocated_date as item_allocation_allocatedDate, status as item_allocation_status, updated_by as item_allocation_updatedBy, updated_at as item_allocation_updatedAt, created_at as item_allocation_createdAt, COUNT(*) OVER () AS table_count FROM item_allocation ",
                          View: "SELECT item_allocation.item_allocation_id as id, item_allocation_id as item_allocation_itemAllocationId, task_id as item_allocation_taskId, inventory_sub_category_item_id as item_allocation_inventorySubCategoryItemId, allocated_to as item_allocation_allocatedTo, allocated_by as item_allocation_allocatedBy, allocated_on_behalf_of as item_allocation_allocatedOnBehalfOf, return_by as item_allocation_returnBy, return_to as item_allocation_returnTo, return_date as item_allocation_returnDate, due_date as item_allocation_dueDate, allocated_date as item_allocation_allocatedDate, status as item_allocation_status, updated_by as item_allocation_updatedBy, updated_at as item_allocation_updatedAt, created_at as item_allocation_createdAt FROM item_allocation  WHERE item_allocation_id = {{id}} OR item_allocation_id IS NULL",
                          Delete: "UPDATE item_allocation SET status = 'inactive' WHERE item_allocation_id = {{id}}",           
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
                      permission: { Add: "insert_item_allocation", View:"view_item_allocation", List:"list_item_allocation", Update: "update_item_allocation", Delete: "delete_item_allocation" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Item_allocation retrieved successfully!",
                    errorMessage: "Failed to retrieve Item_allocation.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
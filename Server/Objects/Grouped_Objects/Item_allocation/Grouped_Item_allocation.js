const parameters = require('./CRUD_parameters');
      global.GroupedCrudsItem_allocation_object = {
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
                            
                            List: "SELECT COUNT(*) as total_count, item_allocation_id as id, item_allocation.item_allocation_id as itemAllocation_itemAllocationId, item_allocation.task_id as itemAllocation_taskId, item_allocation.inventory_sub_category_item_id as itemAllocation_inventorySubCategoryItemId, item_allocation.allocated_to as itemAllocation_allocatedTo, item_allocation.allocated_by as itemAllocation_allocatedBy, item_allocation.allocated_on_behalf_of as itemAllocation_allocatedOnBehalfOf, item_allocation.return_by as itemAllocation_returnBy, item_allocation.return_to as itemAllocation_returnTo, item_allocation.return_date as itemAllocation_returnDate, item_allocation.due_date as itemAllocation_dueDate, item_allocation.allocated_date as itemAllocation_allocatedDate, item_allocation.status as itemAllocation_status, item_allocation.updated_by as itemAllocation_updatedBy, item_allocation.updated_at as itemAllocation_updatedAt, item_allocation.created_at as itemAllocation_createdAt FROM item_allocation",
                              
                            View: "SELECT item_allocation.item_allocation_id as item_allocation_id, item_allocation.item_allocation_id as itemAllocation_itemAllocationId, item_allocation.task_id as itemAllocation_taskId, item_allocation.inventory_sub_category_item_id as itemAllocation_inventorySubCategoryItemId, item_allocation.allocated_to as itemAllocation_allocatedTo, item_allocation.allocated_by as itemAllocation_allocatedBy, item_allocation.allocated_on_behalf_of as itemAllocation_allocatedOnBehalfOf, item_allocation.return_by as itemAllocation_returnBy, item_allocation.return_to as itemAllocation_returnTo, item_allocation.return_date as itemAllocation_returnDate, item_allocation.due_date as itemAllocation_dueDate, item_allocation.allocated_date as itemAllocation_allocatedDate, item_allocation.status as itemAllocation_status, item_allocation.updated_by as itemAllocation_updatedBy, item_allocation.updated_at as itemAllocation_updatedAt, item_allocation.created_at as itemAllocation_createdAt FROM item_allocation  WHERE item_allocation.item_allocation_id = {{id}} OR item_allocation.item_allocation_id IS NULL",
                              
                            Delete: "UPDATE item_allocation SET status = 'inactive' WHERE item_allocation_id = {{id}}",           
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
                          { Add: "insert_item_allocation", View: "view_item_allocation", List: "list_item_allocation", Update: "update_item_allocation", Delete: "delete_item_allocation" },
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
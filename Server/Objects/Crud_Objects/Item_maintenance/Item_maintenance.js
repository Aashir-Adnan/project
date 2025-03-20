/* CRUD Objects for table: item_maintenance */
        
    const parameters = require('./CRUD_parameters');
    global.CrudItem_maintenance_object = {
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
                          Add: "INSERT INTO item_maintenance (task_id, inventory_sub_category_item_id, user_role_designation_department_id, inventory_bill_id, description, maintenance_date, updated_by) VALUES ({{item_maintenance_item_maintenance_id}}, {{item_maintenance_task_id}}, {{item_maintenance_inventory_sub_category_item_id}}, {{item_maintenance_user_role_designation_department_id}}, {{item_maintenance_inventory_bill_id}}, {{item_maintenance_description}}, {{item_maintenance_maintenance_date}}, {{item_maintenance_status}}, {{item_maintenance_updated_by}}, {{item_maintenance_updated_at}}, {{item_maintenance_created_at}})",
                          Update: "UPDATE item_maintenance SET task_id = {{item_maintenance_taskId}}, inventory_sub_category_item_id = {{item_maintenance_inventorySubCategoryItemId}}, user_role_designation_department_id = {{item_maintenance_userRoleDesignationDepartmentId}}, inventory_bill_id = {{item_maintenance_inventoryBillId}}, description = {{item_maintenance_description}}, maintenance_date = {{item_maintenance_maintenanceDate}}, updated_by = {{item_maintenance_updatedBy}} WHERE item_maintenance_id = {{id}}",
                          List: "SELECT item_maintenance.item_maintenance_id as id, item_maintenance_id as item_maintenance_itemMaintenanceId, task_id as item_maintenance_taskId, inventory_sub_category_item_id as item_maintenance_inventorySubCategoryItemId, user_role_designation_department_id as item_maintenance_userRoleDesignationDepartmentId, inventory_bill_id as item_maintenance_inventoryBillId, description as item_maintenance_description, maintenance_date as item_maintenance_maintenanceDate, status as item_maintenance_status, updated_by as item_maintenance_updatedBy, updated_at as item_maintenance_updatedAt, created_at as item_maintenance_createdAt, COUNT(*) OVER () AS table_count FROM item_maintenance ",
                          View: "SELECT item_maintenance.item_maintenance_id as id, item_maintenance_id as item_maintenance_itemMaintenanceId, task_id as item_maintenance_taskId, inventory_sub_category_item_id as item_maintenance_inventorySubCategoryItemId, user_role_designation_department_id as item_maintenance_userRoleDesignationDepartmentId, inventory_bill_id as item_maintenance_inventoryBillId, description as item_maintenance_description, maintenance_date as item_maintenance_maintenanceDate, status as item_maintenance_status, updated_by as item_maintenance_updatedBy, updated_at as item_maintenance_updatedAt, created_at as item_maintenance_createdAt FROM item_maintenance  WHERE item_maintenance_id = {{id}} OR item_maintenance_id IS NULL",
                          Delete: "UPDATE item_maintenance SET status = 'inactive' WHERE item_maintenance_id = {{id}}",           
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
                      permission: { Add: "insert_item_maintenance", View:"view_item_maintenance", List:"list_item_maintenance", Update: "update_item_maintenance", Delete: "delete_item_maintenance" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Item_maintenance retrieved successfully!",
                    errorMessage: "Failed to retrieve Item_maintenance.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
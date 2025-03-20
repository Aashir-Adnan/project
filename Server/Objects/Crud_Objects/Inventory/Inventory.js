/* CRUD Objects for table: inventory */
        
    const parameters = require('./CRUD_parameters');
    global.CrudInventory_object = {
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
                          Add: "INSERT INTO inventory (department_id, current_campus_id, previous_campus_id, inventory_name, updated_by) VALUES ({{inventory_inventory_id}}, {{inventory_department_id}}, {{inventory_current_campus_id}}, {{inventory_previous_campus_id}}, {{inventory_inventory_name}}, {{inventory_status}}, {{inventory_updated_by}}, {{inventory_updated_at}}, {{inventory_created_at}})",
                          Update: "UPDATE inventory SET department_id = {{inventory_departmentId}}, current_campus_id = {{inventory_currentCampusId}}, previous_campus_id = {{inventory_previousCampusId}}, inventory_name = {{inventory_inventoryName}}, updated_by = {{inventory_updatedBy}} WHERE inventory_id = {{id}}",
                          List: "SELECT inventory.inventory_id as id, inventory_id as inventory_inventoryId, department_id as inventory_departmentId, current_campus_id as inventory_currentCampusId, previous_campus_id as inventory_previousCampusId, inventory_name as inventory_inventoryName, status as inventory_status, updated_by as inventory_updatedBy, updated_at as inventory_updatedAt, created_at as inventory_createdAt, COUNT(*) OVER () AS table_count FROM inventory ",
                          View: "SELECT inventory.inventory_id as id, inventory_id as inventory_inventoryId, department_id as inventory_departmentId, current_campus_id as inventory_currentCampusId, previous_campus_id as inventory_previousCampusId, inventory_name as inventory_inventoryName, status as inventory_status, updated_by as inventory_updatedBy, updated_at as inventory_updatedAt, created_at as inventory_createdAt FROM inventory  WHERE inventory_id = {{id}} OR inventory_id IS NULL",
                          Delete: "UPDATE inventory SET status = 'inactive' WHERE inventory_id = {{id}}",           
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
                      permission: { Add: "insert_inventory", View:"view_inventory", List:"list_inventory", Update: "update_inventory", Delete: "delete_inventory" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Inventory retrieved successfully!",
                    errorMessage: "Failed to retrieve Inventory.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
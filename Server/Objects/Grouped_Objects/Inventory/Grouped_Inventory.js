const parameters = require('./CRUD_parameters');
      global.GroupedCrudsInventory_object = {
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
                            
                            List: "SELECT COUNT(*) as total_count, inventory_id as id, inventory.inventory_id as inventory_inventoryId, inventory.department_id as inventory_departmentId, inventory.current_campus_id as inventory_currentCampusId, inventory.previous_campus_id as inventory_previousCampusId, inventory.inventory_name as inventory_inventoryName, inventory.status as inventory_status, inventory.updated_by as inventory_updatedBy, inventory.updated_at as inventory_updatedAt, inventory.created_at as inventory_createdAt FROM inventory",
                              
                            View: "SELECT inventory.inventory_id as inventory_id, inventory.inventory_id as inventory_inventoryId, inventory.department_id as inventory_departmentId, inventory.current_campus_id as inventory_currentCampusId, inventory.previous_campus_id as inventory_previousCampusId, inventory.inventory_name as inventory_inventoryName, inventory.status as inventory_status, inventory.updated_by as inventory_updatedBy, inventory.updated_at as inventory_updatedAt, inventory.created_at as inventory_createdAt FROM inventory  WHERE inventory.inventory_id = {{id}} OR inventory.inventory_id IS NULL",
                              
                            Delete: "UPDATE inventory SET status = 'inactive' WHERE inventory_id = {{id}}",           
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
                          { Add: "insert_inventory", View: "view_inventory", List: "list_inventory", Update: "update_inventory", Delete: "delete_inventory" },
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
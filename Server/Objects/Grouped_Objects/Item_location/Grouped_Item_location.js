const parameters = require('./CRUD_parameters');
      global.GroupedCrudsItem_location_object = {
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
                            Add: "INSERT INTO item_location (inventory_sub_category_item_id, location_name, departure_date, arrival_date, placed_by_user_role_designation_department_id, displaced_by_user_role_designation_department_id, updated_by) VALUES ({{item_location_item_location_id}}, {{item_location_inventory_sub_category_item_id}}, {{item_location_location_name}}, {{item_location_departure_date}}, {{item_location_arrival_date}}, {{item_location_placed_by_user_role_designation_department_id}}, {{item_location_displaced_by_user_role_designation_department_id}}, {{item_location_status}}, {{item_location_updated_by}}, {{item_location_updated_at}}, {{item_location_created_at}})",
                            
                            Update: "UPDATE item_location SET inventory_sub_category_item_id = {{item_location_inventorySubCategoryItemId}}, location_name = {{item_location_locationName}}, departure_date = {{item_location_departureDate}}, arrival_date = {{item_location_arrivalDate}}, placed_by_user_role_designation_department_id = {{item_location_placedByUserRoleDesignationDepartmentId}}, displaced_by_user_role_designation_department_id = {{item_location_displacedByUserRoleDesignationDepartmentId}}, updated_by = {{item_location_updatedBy}} WHERE item_location_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, item_location_id as id, item_location.item_location_id as itemLocation_itemLocationId, item_location.inventory_sub_category_item_id as itemLocation_inventorySubCategoryItemId, item_location.location_name as itemLocation_locationName, item_location.departure_date as itemLocation_departureDate, item_location.arrival_date as itemLocation_arrivalDate, item_location.placed_by_user_role_designation_department_id as itemLocation_placedByUserRoleDesignationDepartmentId, item_location.displaced_by_user_role_designation_department_id as itemLocation_displacedByUserRoleDesignationDepartmentId, item_location.status as itemLocation_status, item_location.updated_by as itemLocation_updatedBy, item_location.updated_at as itemLocation_updatedAt, item_location.created_at as itemLocation_createdAt FROM item_location",
                              
                            View: "SELECT item_location.item_location_id as item_location_id, item_location.item_location_id as itemLocation_itemLocationId, item_location.inventory_sub_category_item_id as itemLocation_inventorySubCategoryItemId, item_location.location_name as itemLocation_locationName, item_location.departure_date as itemLocation_departureDate, item_location.arrival_date as itemLocation_arrivalDate, item_location.placed_by_user_role_designation_department_id as itemLocation_placedByUserRoleDesignationDepartmentId, item_location.displaced_by_user_role_designation_department_id as itemLocation_displacedByUserRoleDesignationDepartmentId, item_location.status as itemLocation_status, item_location.updated_by as itemLocation_updatedBy, item_location.updated_at as itemLocation_updatedAt, item_location.created_at as itemLocation_createdAt FROM item_location  WHERE item_location.item_location_id = {{id}} OR item_location.item_location_id IS NULL",
                              
                            Delete: "UPDATE item_location SET status = 'inactive' WHERE item_location_id = {{id}}",           
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
                          { Add: "insert_item_location", View: "view_item_location", List: "list_item_location", Update: "update_item_location", Delete: "delete_item_location" },
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
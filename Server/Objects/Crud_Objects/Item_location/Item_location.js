/* CRUD Objects for table: item_location */
        
    const parameters = require('./CRUD_parameters');
    global.CrudItem_location_object = {
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
                          List: "SELECT item_location.item_location_id as id, item_location_id as item_location_itemLocationId, inventory_sub_category_item_id as item_location_inventorySubCategoryItemId, location_name as item_location_locationName, departure_date as item_location_departureDate, arrival_date as item_location_arrivalDate, placed_by_user_role_designation_department_id as item_location_placedByUserRoleDesignationDepartmentId, displaced_by_user_role_designation_department_id as item_location_displacedByUserRoleDesignationDepartmentId, status as item_location_status, updated_by as item_location_updatedBy, updated_at as item_location_updatedAt, created_at as item_location_createdAt, COUNT(*) OVER () AS table_count FROM item_location ",
                          View: "SELECT item_location.item_location_id as id, item_location_id as item_location_itemLocationId, inventory_sub_category_item_id as item_location_inventorySubCategoryItemId, location_name as item_location_locationName, departure_date as item_location_departureDate, arrival_date as item_location_arrivalDate, placed_by_user_role_designation_department_id as item_location_placedByUserRoleDesignationDepartmentId, displaced_by_user_role_designation_department_id as item_location_displacedByUserRoleDesignationDepartmentId, status as item_location_status, updated_by as item_location_updatedBy, updated_at as item_location_updatedAt, created_at as item_location_createdAt FROM item_location  WHERE item_location_id = {{id}} OR item_location_id IS NULL",
                          Delete: "UPDATE item_location SET status = 'inactive' WHERE item_location_id = {{id}}",           
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
                      permission: { Add: "insert_item_location", View:"view_item_location", List:"list_item_location", Update: "update_item_location", Delete: "delete_item_location" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Item_location retrieved successfully!",
                    errorMessage: "Failed to retrieve Item_location.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
const parameters = require('./CRUD_parameters');
      global.GroupedCrudsAttribute_sub_category_item_object = {
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
                            Add: "INSERT INTO attribute_sub_category_item (inventory_sub_category_item_id, attributes_id, attribute_value, updated_by) VALUES ({{attribute_sub_category_item_attribute_sub_category_item_id}}, {{attribute_sub_category_item_inventory_sub_category_item_id}}, {{attribute_sub_category_item_attributes_id}}, {{attribute_sub_category_item_attribute_value}}, {{attribute_sub_category_item_status}}, {{attribute_sub_category_item_updated_by}}, {{attribute_sub_category_item_updated_at}}, {{attribute_sub_category_item_created_at}})",
                            
                            Update: "UPDATE attribute_sub_category_item SET inventory_sub_category_item_id = {{attribute_sub_category_item_inventorySubCategoryItemId}}, attributes_id = {{attribute_sub_category_item_attributesId}}, attribute_value = {{attribute_sub_category_item_attributeValue}}, updated_by = {{attribute_sub_category_item_updatedBy}} WHERE attribute_sub_category_item_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, attribute_sub_category_item_id as id, attribute_sub_category_item.attribute_sub_category_item_id as attributeSubCategoryItem_attributeSubCategoryItemId, attribute_sub_category_item.inventory_sub_category_item_id as attributeSubCategoryItem_inventorySubCategoryItemId, attribute_sub_category_item.attributes_id as attributeSubCategoryItem_attributesId, attribute_sub_category_item.attribute_value as attributeSubCategoryItem_attributeValue, attribute_sub_category_item.status as attributeSubCategoryItem_status, attribute_sub_category_item.updated_by as attributeSubCategoryItem_updatedBy, attribute_sub_category_item.updated_at as attributeSubCategoryItem_updatedAt, attribute_sub_category_item.created_at as attributeSubCategoryItem_createdAt FROM attribute_sub_category_item",
                              
                            View: "SELECT attribute_sub_category_item.attribute_sub_category_item_id as attribute_sub_category_item_id, attribute_sub_category_item.attribute_sub_category_item_id as attributeSubCategoryItem_attributeSubCategoryItemId, attribute_sub_category_item.inventory_sub_category_item_id as attributeSubCategoryItem_inventorySubCategoryItemId, attribute_sub_category_item.attributes_id as attributeSubCategoryItem_attributesId, attribute_sub_category_item.attribute_value as attributeSubCategoryItem_attributeValue, attribute_sub_category_item.status as attributeSubCategoryItem_status, attribute_sub_category_item.updated_by as attributeSubCategoryItem_updatedBy, attribute_sub_category_item.updated_at as attributeSubCategoryItem_updatedAt, attribute_sub_category_item.created_at as attributeSubCategoryItem_createdAt FROM attribute_sub_category_item  WHERE attribute_sub_category_item.attribute_sub_category_item_id = {{id}} OR attribute_sub_category_item.attribute_sub_category_item_id IS NULL",
                              
                            Delete: "UPDATE attribute_sub_category_item SET status = 'inactive' WHERE attribute_sub_category_item_id = {{id}}",           
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
                          { Add: "insert_attribute_sub_category_item", View: "view_attribute_sub_category_item", List: "list_attribute_sub_category_item", Update: "update_attribute_sub_category_item", Delete: "delete_attribute_sub_category_item" },
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
const parameters = require('./CRUD_parameters');
      global.GroupedCrudsAttribute_groups_attribute_object = {
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
                            Add: "INSERT INTO attribute_groups_attribute (attributes_id, attributes_groups_id, updated_by) VALUES ({{attribute_groups_attribute_attribute_groups_attribute_id}}, {{attribute_groups_attribute_attributes_id}}, {{attribute_groups_attribute_attributes_groups_id}}, {{attribute_groups_attribute_status}}, {{attribute_groups_attribute_updated_by}}, {{attribute_groups_attribute_updated_at}}, {{attribute_groups_attribute_created_at}})",
                            
                            Update: "UPDATE attribute_groups_attribute SET attributes_id = {{attribute_groups_attribute_attributesId}}, attributes_groups_id = {{attribute_groups_attribute_attributesGroupsId}}, updated_by = {{attribute_groups_attribute_updatedBy}} WHERE attribute_groups_attribute_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, attribute_groups_attribute_id as id, attribute_groups_attribute.attribute_groups_attribute_id as attributeGroupsAttribute_attributeGroupsAttributeId, attribute_groups_attribute.attributes_id as attributeGroupsAttribute_attributesId, attribute_groups_attribute.attributes_groups_id as attributeGroupsAttribute_attributesGroupsId, attribute_groups_attribute.status as attributeGroupsAttribute_status, attribute_groups_attribute.updated_by as attributeGroupsAttribute_updatedBy, attribute_groups_attribute.updated_at as attributeGroupsAttribute_updatedAt, attribute_groups_attribute.created_at as attributeGroupsAttribute_createdAt FROM attribute_groups_attribute",
                              
                            View: "SELECT attribute_groups_attribute.attribute_groups_attribute_id as attribute_groups_attribute_id, attribute_groups_attribute.attribute_groups_attribute_id as attributeGroupsAttribute_attributeGroupsAttributeId, attribute_groups_attribute.attributes_id as attributeGroupsAttribute_attributesId, attribute_groups_attribute.attributes_groups_id as attributeGroupsAttribute_attributesGroupsId, attribute_groups_attribute.status as attributeGroupsAttribute_status, attribute_groups_attribute.updated_by as attributeGroupsAttribute_updatedBy, attribute_groups_attribute.updated_at as attributeGroupsAttribute_updatedAt, attribute_groups_attribute.created_at as attributeGroupsAttribute_createdAt FROM attribute_groups_attribute  WHERE attribute_groups_attribute.attribute_groups_attribute_id = {{id}} OR attribute_groups_attribute.attribute_groups_attribute_id IS NULL",
                              
                            Delete: "UPDATE attribute_groups_attribute SET status = 'inactive' WHERE attribute_groups_attribute_id = {{id}}",           
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
                          { Add: "insert_attribute_groups_attribute", View: "view_attribute_groups_attribute", List: "list_attribute_groups_attribute", Update: "update_attribute_groups_attribute", Delete: "delete_attribute_groups_attribute" },
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
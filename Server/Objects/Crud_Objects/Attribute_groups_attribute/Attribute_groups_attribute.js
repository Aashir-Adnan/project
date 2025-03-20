/* CRUD Objects for table: attribute_groups_attribute */
        
    const parameters = require('./CRUD_parameters');
    global.CrudAttribute_groups_attribute_object = {
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
                          List: "SELECT attribute_groups_attribute.attribute_groups_attribute_id as id, attribute_groups_attribute_id as attribute_groups_attribute_attributeGroupsAttributeId, attributes_id as attribute_groups_attribute_attributesId, attributes_groups_id as attribute_groups_attribute_attributesGroupsId, status as attribute_groups_attribute_status, updated_by as attribute_groups_attribute_updatedBy, updated_at as attribute_groups_attribute_updatedAt, created_at as attribute_groups_attribute_createdAt, COUNT(*) OVER () AS table_count FROM attribute_groups_attribute ",
                          View: "SELECT attribute_groups_attribute.attribute_groups_attribute_id as id, attribute_groups_attribute_id as attribute_groups_attribute_attributeGroupsAttributeId, attributes_id as attribute_groups_attribute_attributesId, attributes_groups_id as attribute_groups_attribute_attributesGroupsId, status as attribute_groups_attribute_status, updated_by as attribute_groups_attribute_updatedBy, updated_at as attribute_groups_attribute_updatedAt, created_at as attribute_groups_attribute_createdAt FROM attribute_groups_attribute  WHERE attribute_groups_attribute_id = {{id}} OR attribute_groups_attribute_id IS NULL",
                          Delete: "UPDATE attribute_groups_attribute SET status = 'inactive' WHERE attribute_groups_attribute_id = {{id}}",           
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
                      permission: { Add: "insert_attribute_groups_attribute", View:"view_attribute_groups_attribute", List:"list_attribute_groups_attribute", Update: "update_attribute_groups_attribute", Delete: "delete_attribute_groups_attribute" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Attribute_groups_attribute retrieved successfully!",
                    errorMessage: "Failed to retrieve Attribute_groups_attribute.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
const parameters = require('./CRUD_parameters');
      global.GroupedCrudsAttributes_object = {
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
                            Add: "INSERT INTO attributes (attributes_name, updated_by) VALUES ({{attributes_attributes_id}}, {{attributes_attributes_name}}, {{attributes_status}}, {{attributes_updated_by}}, {{attributes_updated_at}}, {{attributes_created_at}})",
                            
                            Update: "UPDATE attributes SET attributes_name = {{attributes_attributesName}}, updated_by = {{attributes_updatedBy}} WHERE attributes_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, attributes_id as id, attributes.attributes_id as attributes_attributesId, attributes.attributes_name as attributes_attributesName, attributes.status as attributes_status, attributes.updated_by as attributes_updatedBy, attributes.updated_at as attributes_updatedAt, attributes.created_at as attributes_createdAt FROM attributes",
                              
                            View: "SELECT attributes.attributes_id as attributes_id, attributes.attributes_id as attributes_attributesId, attributes.attributes_name as attributes_attributesName, attributes.status as attributes_status, attributes.updated_by as attributes_updatedBy, attributes.updated_at as attributes_updatedAt, attributes.created_at as attributes_createdAt FROM attributes  WHERE attributes.attributes_id = {{id}} OR attributes.attributes_id IS NULL",
                              
                            Delete: "UPDATE attributes SET status = 'inactive' WHERE attributes_id = {{id}}",           
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
                          { Add: "insert_attributes", View: "view_attributes", List: "list_attributes", Update: "update_attributes", Delete: "delete_attributes" },
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
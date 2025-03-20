const parameters = require('./CRUD_parameters');
      global.GroupedCrudsAttributes_groups_object = {
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
                            Add: "INSERT INTO attributes_groups (attributes_groups_name, updated_by) VALUES ({{attributes_groups_attributes_groups_id}}, {{attributes_groups_attributes_groups_name}}, {{attributes_groups_status}}, {{attributes_groups_updated_by}}, {{attributes_groups_updated_at}}, {{attributes_groups_created_at}})",
                            
                            Update: "UPDATE attributes_groups SET attributes_groups_name = {{attributes_groups_attributesGroupsName}}, updated_by = {{attributes_groups_updatedBy}} WHERE attributes_groups_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, attributes_groups_id as id, attributes_groups.attributes_groups_id as attributesGroups_attributesGroupsId, attributes_groups.attributes_groups_name as attributesGroups_attributesGroupsName, attributes_groups.status as attributesGroups_status, attributes_groups.updated_by as attributesGroups_updatedBy, attributes_groups.updated_at as attributesGroups_updatedAt, attributes_groups.created_at as attributesGroups_createdAt FROM attributes_groups",
                              
                            View: "SELECT attributes_groups.attributes_groups_id as attributes_groups_id, attributes_groups.attributes_groups_id as attributesGroups_attributesGroupsId, attributes_groups.attributes_groups_name as attributesGroups_attributesGroupsName, attributes_groups.status as attributesGroups_status, attributes_groups.updated_by as attributesGroups_updatedBy, attributes_groups.updated_at as attributesGroups_updatedAt, attributes_groups.created_at as attributesGroups_createdAt FROM attributes_groups  WHERE attributes_groups.attributes_groups_id = {{id}} OR attributes_groups.attributes_groups_id IS NULL",
                              
                            Delete: "UPDATE attributes_groups SET status = 'inactive' WHERE attributes_groups_id = {{id}}",           
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
                          { Add: "insert_attributes_groups", View: "view_attributes_groups", List: "list_attributes_groups", Update: "update_attributes_groups", Delete: "delete_attributes_groups" },
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
/* CRUD Objects for table: attributes_groups */
        
    const parameters = require('./CRUD_parameters');
    global.CrudAttributes_groups_object = {
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
                          List: "SELECT attributes_groups.attributes_groups_id as id, attributes_groups_id as attributes_groups_attributesGroupsId, attributes_groups_name as attributes_groups_attributesGroupsName, status as attributes_groups_status, updated_by as attributes_groups_updatedBy, updated_at as attributes_groups_updatedAt, created_at as attributes_groups_createdAt, COUNT(*) OVER () AS table_count FROM attributes_groups ",
                          View: "SELECT attributes_groups.attributes_groups_id as id, attributes_groups_id as attributes_groups_attributesGroupsId, attributes_groups_name as attributes_groups_attributesGroupsName, status as attributes_groups_status, updated_by as attributes_groups_updatedBy, updated_at as attributes_groups_updatedAt, created_at as attributes_groups_createdAt FROM attributes_groups  WHERE attributes_groups_id = {{id}} OR attributes_groups_id IS NULL",
                          Delete: "UPDATE attributes_groups SET status = 'inactive' WHERE attributes_groups_id = {{id}}",           
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
                      permission: { Add: "insert_attributes_groups", View:"view_attributes_groups", List:"list_attributes_groups", Update: "update_attributes_groups", Delete: "delete_attributes_groups" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Attributes_groups retrieved successfully!",
                    errorMessage: "Failed to retrieve Attributes_groups.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
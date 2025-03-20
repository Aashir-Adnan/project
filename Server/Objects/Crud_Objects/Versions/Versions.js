/* CRUD Objects for table: versions */
        
    const parameters = require('./CRUD_parameters');
    global.CrudVersions_object = {
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
                          Add: "INSERT INTO versions (version, version, updated_by) VALUES ({{versions_version_id}}, {{versions_version}}, {{versions_status}}, {{versions_version}}, {{versions_status}}, {{versions_updated_by}}, {{versions_created_at}}, {{versions_updated_at}})",
                          Update: "UPDATE versions SET version = {{versions_version}}, version = {{versions_version}}, updated_by = {{versions_updatedBy}} WHERE version_id = {{id}}",
                          List: "SELECT versions.version_id as id, version_id as versions_versionId, version as versions_version, status as versions_status, version as versions_version, status as versions_status, updated_by as versions_updatedBy, created_at as versions_createdAt, updated_at as versions_updatedAt, COUNT(*) OVER () AS table_count FROM versions ",
                          View: "SELECT versions.version_id as id, version_id as versions_versionId, version as versions_version, status as versions_status, version as versions_version, status as versions_status, updated_by as versions_updatedBy, created_at as versions_createdAt, updated_at as versions_updatedAt FROM versions  WHERE version_id = {{id}} OR version_id IS NULL",
                          Delete: "UPDATE versions SET status = 'inactive' WHERE version_id = {{id}}",           
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
                      permission: { Add: "insert_versions", View:"view_versions", List:"list_versions", Update: "update_versions", Delete: "delete_versions" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Versions retrieved successfully!",
                    errorMessage: "Failed to retrieve Versions.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
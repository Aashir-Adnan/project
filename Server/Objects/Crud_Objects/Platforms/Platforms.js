/* CRUD Objects for table: platforms */
        
    const parameters = require('./CRUD_parameters');
    global.CrudPlatforms_object = {
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
                          Add: "INSERT INTO platforms (platform_name, platform_name, updated_by) VALUES ({{platforms_platform_id}}, {{platforms_platform_name}}, {{platforms_status}}, {{platforms_platform_name}}, {{platforms_status}}, {{platforms_updated_by}}, {{platforms_created_at}}, {{platforms_updated_at}})",
                          Update: "UPDATE platforms SET platform_name = {{platforms_platformName}}, platform_name = {{platforms_platformName}}, updated_by = {{platforms_updatedBy}} WHERE platform_id = {{id}}",
                          List: "SELECT platforms.platform_id as id, platform_id as platforms_platformId, platform_name as platforms_platformName, status as platforms_status, platform_name as platforms_platformName, status as platforms_status, updated_by as platforms_updatedBy, created_at as platforms_createdAt, updated_at as platforms_updatedAt, COUNT(*) OVER () AS table_count FROM platforms ",
                          View: "SELECT platforms.platform_id as id, platform_id as platforms_platformId, platform_name as platforms_platformName, status as platforms_status, platform_name as platforms_platformName, status as platforms_status, updated_by as platforms_updatedBy, created_at as platforms_createdAt, updated_at as platforms_updatedAt FROM platforms  WHERE platform_id = {{id}} OR platform_id IS NULL",
                          Delete: "UPDATE platforms SET status = 'inactive' WHERE platform_id = {{id}}",           
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
                      permission: { Add: "insert_platforms", View:"view_platforms", List:"list_platforms", Update: "update_platforms", Delete: "delete_platforms" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Platforms retrieved successfully!",
                    errorMessage: "Failed to retrieve Platforms.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
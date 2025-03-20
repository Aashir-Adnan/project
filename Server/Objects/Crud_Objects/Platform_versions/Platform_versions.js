/* CRUD Objects for table: platform_versions */
        
    const parameters = require('./CRUD_parameters');
    global.CrudPlatform_versions_object = {
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
                          Add: "INSERT INTO platform_versions (platform_id, version_id, platform_id, version_id, encryption_key, updated_by) VALUES ({{platform_versions_platform_version_id}}, {{platform_versions_platform_id}}, {{platform_versions_version_id}}, {{platform_versions_status}}, {{platform_versions_platform_id}}, {{platform_versions_version_id}}, {{platform_versions_status}}, {{platform_versions_encryption_key}}, {{platform_versions_updated_by}}, {{platform_versions_created_at}}, {{platform_versions_updated_at}})",
                          Update: "UPDATE platform_versions SET platform_id = {{platform_versions_platformId}}, version_id = {{platform_versions_versionId}}, platform_id = {{platform_versions_platformId}}, version_id = {{platform_versions_versionId}}, encryption_key = {{platform_versions_encryptionKey}}, updated_by = {{platform_versions_updatedBy}} WHERE platform_version_id = {{id}}",
                          List: "SELECT platform_versions.platform_version_id as id, platform_version_id as platform_versions_platformVersionId, platform_id as platform_versions_platformId, version_id as platform_versions_versionId, status as platform_versions_status, platform_id as platform_versions_platformId, version_id as platform_versions_versionId, status as platform_versions_status, encryption_key as platform_versions_encryptionKey, updated_by as platform_versions_updatedBy, created_at as platform_versions_createdAt, updated_at as platform_versions_updatedAt, COUNT(*) OVER () AS table_count FROM platform_versions ",
                          View: "SELECT platform_versions.platform_version_id as id, platform_version_id as platform_versions_platformVersionId, platform_id as platform_versions_platformId, version_id as platform_versions_versionId, status as platform_versions_status, platform_id as platform_versions_platformId, version_id as platform_versions_versionId, status as platform_versions_status, encryption_key as platform_versions_encryptionKey, updated_by as platform_versions_updatedBy, created_at as platform_versions_createdAt, updated_at as platform_versions_updatedAt FROM platform_versions  WHERE platform_version_id = {{id}} OR platform_version_id IS NULL",
                          Delete: "UPDATE platform_versions SET status = 'inactive' WHERE platform_version_id = {{id}}",           
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
                      permission: { Add: "insert_platform_versions", View:"view_platform_versions", List:"list_platform_versions", Update: "update_platform_versions", Delete: "delete_platform_versions" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Platform_versions retrieved successfully!",
                    errorMessage: "Failed to retrieve Platform_versions.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
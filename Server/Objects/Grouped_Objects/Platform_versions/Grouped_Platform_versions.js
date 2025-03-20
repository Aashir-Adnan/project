const parameters = require('./CRUD_parameters');
      global.GroupedCrudsPlatform_versions_object = {
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
                            
                            List: "SELECT COUNT(*) as total_count, platform_version_id as id, platform_versions.platform_version_id as platformVersions_platformVersionId, platform_versions.platform_id as platformVersions_platformId, platform_versions.version_id as platformVersions_versionId, platform_versions.status as platformVersions_status, platform_versions.platform_id as platformVersions_platformId, platform_versions.version_id as platformVersions_versionId, platform_versions.status as platformVersions_status, platform_versions.encryption_key as platformVersions_encryptionKey, platform_versions.updated_by as platformVersions_updatedBy, platform_versions.created_at as platformVersions_createdAt, platform_versions.updated_at as platformVersions_updatedAt FROM platform_versions",
                              
                            View: "SELECT platform_versions.platform_version_id as platform_versions_id, platform_versions.platform_version_id as platformVersions_platformVersionId, platform_versions.platform_id as platformVersions_platformId, platform_versions.version_id as platformVersions_versionId, platform_versions.status as platformVersions_status, platform_versions.platform_id as platformVersions_platformId, platform_versions.version_id as platformVersions_versionId, platform_versions.status as platformVersions_status, platform_versions.encryption_key as platformVersions_encryptionKey, platform_versions.updated_by as platformVersions_updatedBy, platform_versions.created_at as platformVersions_createdAt, platform_versions.updated_at as platformVersions_updatedAt FROM platform_versions  WHERE platform_versions.platform_version_id = {{id}} OR platform_versions.platform_version_id IS NULL",
                              
                            Delete: "UPDATE platform_versions SET status = 'inactive' WHERE platform_version_id = {{id}}",           
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
                          { Add: "insert_platform_versions", View: "view_platform_versions", List: "list_platform_versions", Update: "update_platform_versions", Delete: "delete_platform_versions" },
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

  global.ErrorLog_object = {
    versions: {
      versionData: [
        {
          "=1.0": {
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
                      accessTokenEncryption: false,
                    },
                  },
                  verification: {
                    otp: false,
                    accessToken: false,
                  },
                },
                data: {
                  parameters: {
                    fields: [
                      {
                        name: "id",
                        validations: [],
                        required: false,
                        source: "req.query",
                      },
  
                      {
                        name: "error_logs_status",
                        type: "string",
                        required: false, // Required for "Update"
                        source: "req.body",
                      },
                    ],
                  },
                  apiInfo: {
                    query: {
                      queryNature: {
                        List: "SELECT",
                        View: "SELECT",
                        Update: "UPDATE",
                      },
                      queryPayload: {
                        List: `SELECT 
                          id,
                          ErrorMessage AS error_logs_errorMessage,
                          fileName AS error_logs_errorInFile,
                          status AS error_logs_status,
                          scc As error_logs_frameworkStatusCode,
                          createdAt AS error_logs_created_at,
                          updatedAt AS error_logs_updated_at
                          FROM error_log 
                          WHERE status != 'inactive'`,
                        View: `SELECT 
                           id,
                          ErrorMessage AS error_logs_errorMessage,
                          fileName AS error_logs_errorInFile,
                          status AS error_logs_status,
                          scc As error_logs_frameworkStatusCode,
                          createdAt AS error_logs_created_at,
                          updatedAt AS error_logs_updated_at
                          FROM error_log 
                          WHERE id = {{id}} AND status != 'inactive'`,
                        Update: `UPDATE error_log 
                          SET 
                            status = {{error_logs_status}},
                            updatedAt = NOW()
                          WHERE id = {{id}}`,
                      },
                      database: "securitydb",
                    },
                    utilityFunctions: {
                      callbackFunction: null,
                      payloadFunction: [],
                      preProcessFunction: "crudApiGenerator",
                    },
                  },
                  requestMetaData: {
                    requestMethod: {
                      List: "GET",
                      View: "GET",
                      Update: "PUT",
                    },
                    permission: {
                      List: null,
                      View: null,
                      Update: null,
                    },
                    pagination: {
                      limit: 10,
                      offset: 0,
                    },
                  },
                },
                response: {
                  successMessage: {
                    List: "Error logs fetched successfully!",
                    View: "Error log details fetched successfully!",
                    Update: "Error log updated successfully!",
                  },
                  errorMessage: {
                    List: "Failed to fetch error logs.",
                    View: "Failed to fetch error log details.",
                    Update: "Failed to update error log.",
                  },
                },
              },
            ],
          },
        },
      ],
    },
  };
  
global.CrashLog_object = {
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
                      name: "crashLogs_status",
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
                        error_message AS crashLogs_errorMessage,
                        stack_trace AS crashLogs_stackTrace,
                        timeStamp AS crashLogs_timestamp,
                        status AS crashLogs_status,
                        created_at AS crashLogs_created_at,
                        updated_at AS crashLogs_updated_at
                        FROM crash_log 
                        WHERE status != 'inactive'`,
                      View: `SELECT 
                        id,
                        error_message AS crashLogs_errorMessage,
                        stack_trace AS crashLogs_stackTrace,
                        timeStamp AS crashLogs_timestamp,
                        status AS crashLogs_status,
                        created_at AS crashLogs_created_at,
                        updated_at AS crashLogs_updated_at
                        FROM crash_log 
                        WHERE id = {{id}} AND status != 'inactive'`,
                      Update: `UPDATE crash_log 
                        SET 
                          status = {{crashLogs_status}},
                          updated_at = NOW()
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
                  List: "Crash logs fetched successfully!",
                  View: "Crash log details fetched successfully!",
                  Update: "Crash log updated successfully!",
                },
                errorMessage: {
                  List: "Failed to fetch crash logs.",
                  View: "Failed to fetch crash log details.",
                  Update: "Failed to update crash log.",
                },
              },
            },
          ],
        },
      },
    ],
  },
};

// global.GetCrashLog_object = {
//     "versions": {
//       "versionData": [
//         {
//           "=1.0": {
//             "steps": [
//               {
//                 "config": {
//                   "features": {
//                     "multistep": false,
//                     "parameters": true,
//                     "pagination": true
//                   },
//                   "communication": {
//                     "encryption": {
//                       "platformEncryption": true,
//                       "accessTokenEncryption": false
//                     }
//                   },
//                   "verification": {
//                     "otp": false,
//                     "accessToken": false
//                   }
//                 },
//                 "data": {
//                   "parameters": {
//                     "fields": []
//                   },
//                   "apiInfo": {
//                     "query": {
//                       "queryNature": "SELECT",
//                       "queryPayload": `SELECT
//                       id,
//                       error_message AS crashLogs_errorMessage,
//                       stack_trace AS crashLogs_stackTrace,
//                       timeStamp AS crashLogs_timestamp,
//                       status AS crashLogs_status,
//                       created_at AS crashLogs_created_at,
//                       updated_at AS crashLogs_updated_at
//                       FROM crash_log where status != 'inactive'`,
//                       "database": "securitydb"
//                     },
//                     "utilityFunctions": {
//                       "callbackFunction": null,
//                       "payloadFunction": []
//                     }
//                   },
//                   "requestMetaData": {
//                     "requestMethod": "GET",
//                     "permission": null,
//                     "pagination": {
//                       "limit": 10,
//                       "offset": 0
//                     }
//                   }
//                 },
//                 "response": {
//                   "successMessage": "Crash log fetched and view count updated successfully!",
//                   "errorMessage": "Error fetching crash log and updating view count."
//                 }
//               }
//             ]
//           }
//         }
//       ]
//     }
//   };

global.User_devicesDropdown_object = {
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
                    parameters: [
                        {
                          "name": "id",
                          "label": "id",
                          "title": "",
                          "type": "textField",
                          "required": false,
                          "hideInCreateForm": true,
                          "hideInViewForm" : true,
                          "visible": false,
                          "disabled": false,
                          "dependancyCheck": false,
                          "isPrefilled": false,
                          "source": "req.query",
                          "min": "",
                          "max": "",
                          "selectServer": false,
                          "dynamicKey": "id"
                        },
                    ],
                    apiInfo: {
                      query: {
                        "queryNature": "SELECT",
                        "queryPayload": "SELECT device_name as label, user_device_id as value FROM user_devices", 
                        //ALTERNATICE QUERY FOR MULTI SELECT
                        // SELECT 
                        //     b.[table 1 group name] AS label,
                        //     CONCAT('[', 
                        //         GROUP_CONCAT(
                        //             JSON_OBJECT(
                        //                 'value', a.[table 2 group id],
                        //                 'label', a.[table 2 group name]
                        //             )
                        //         ), 
                        //     ']') AS value
                        // FROM 
                        //     [table 1] AS b
                        // LEFT JOIN 
                        //     [bridge table] AS c ON b.[table 1 group id] = c.[table 1 group id]
                        // LEFT JOIN 
                        //     [table 2] AS a ON c.[table 2 group id] = a.[table 2 group id]
                        // GROUP BY 
                        //     b.[table 1 group id], b.[table 1 group name], b.[table 1 status]   

                      },
                      database: "mainDb",

                      utilityFunctions: {
                        callbackFunction: null,
                        payloadFunction: [],
                        preProcessFunction: "crudApiGenerator",
                      },
                    },
                    requestMetaData: {
                      requestMethod: "GET",
                      permission: [
                        "list_user_devices"
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
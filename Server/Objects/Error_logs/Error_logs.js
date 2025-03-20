const parameters =require( "./CRUD_api_parameters.js")

global.ListErrors_object = {
    "versions": {
        "versionData": [
          {
            "=1.0": {
              "steps": [
                {
                  "config": {
                    "features": {
                      "multistep": false,
                      "parameters": false,
                      "pagination": true
                    },
                    "communication": {
                      "encryption": {
                        "platformEncryption": true,
                        "accessTokenEncryption": false
                      }
                    },
                    "verification": {
                      "otp": false,
                      "accessToken": true
                    }
                  },
                  "data": {
                    parameters: parameters,
                    "apiInfo": {
                      "query": {
                        "queryNature": "SELECT",
                        "queryPayload": `
                        SELECT
                            e.id,
                            e.ErrorMessage,
                            e.fileName,
                            e.createdAt,
                            e.updatedAt
                        FROM
                            error_log e
                        WHERE
                            e.status != 'inactive'
                        `,
                        "database": "securityDB"
                      },
                      "utilityFunctions": {
                        "callbackFunction": null,
                        "payloadFunction": []
                      }
                    },
                    "requestMetaData": {
                      "requestMethod": "GET",
                      "permission": "itOperations_errors_view",
                      "pagination": {
                        "pageSize": 10,
                        "options": {
                          "pageSizeOptions": [
                            5,
                            10,
                            25,
                            50,
                            100,
                            "All"
                          ]
                        }
                      }
                    }
                  },
                  "response": {
                    "successMessage": "Configuration generated successfully!",
                    "errorMessage": "There was an error generating the configuration."
                  }
                }
              ]
            }
          }
        ]
      }
  }
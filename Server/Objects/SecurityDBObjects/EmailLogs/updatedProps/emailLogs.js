global.EmailLogg_object = {
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
                    "accessToken": false
                  }
                },
                "data": {
                  "parameters": [],
                  "apiInfo": {
                    "query": {
                      "queryNature": "Select",
                      "queryPayload": `SELECT 
                        email_id as id,
                        recipient_email,
                        subject ,
                        status,
                        created_at AS createdAt,
                        updated_at AS updatedAt
                        FROM email_log 
                        WHERE status != 'inactive'`,
                      "database": "securitydb"
                    },
                    "utilityFunctions": {
                      "callbackFunction": "",
                      "payloadFunction": []
                    }
                  },
                  "requestMetaData": {
                    "requestMethod": "GET",
                    "permission": "it_operations_list_email_logs",
                    "pagination": {
                      "pageSize": "10"
                    }
                  }
                },
                "response": {
                  "successMessage": "Email logs retreived successfuly",
                  "errorMessage": "Failed to fetch Email Logs"
                }
              }
            ]
          }
        }
      ]
    }
  }
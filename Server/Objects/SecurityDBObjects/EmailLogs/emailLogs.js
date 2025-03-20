global.EmailLog_object = {
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
                      name: "emailLog_status",
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
                        email_id as id,
                        recipient_email,
                        subject ,
                        status,
                        created_at AS createdAt,
                        updated_at AS updatedAt
                        FROM email_log 
                        WHERE status != 'inactive'`,
                      View: `SELECT 
                        email_id as id,
                        recipient_email AS emailLog_recipientEmail,
                        subject AS emailLog_subject,
                        status AS emailLog_status,
                        created_at AS emailLog_createdAt,
                        updated_at AS emailLog_updatedAt
                        FROM email_log 
                        WHERE email_id = {{id}} AND status != 'Inactive'`,
                      Update: `UPDATE email_log 
                        SET 
                          status = {{emailLog_status}},
                          updated_at = NOW()
                        WHERE email_id = {{id}}`,
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
                  List: "Email logs fetched successfully!",
                  View: "Email log details fetched successfully!",
                  Update: "Email log updated successfully!",
                },
                errorMessage: {
                  List: "Failed to fetch email logs.",
                  View: "Failed to fetch email log details.",
                  Update: "Failed to update email log.",
                },
              },
            },
          ],
        },
      },
    ],
  },
};
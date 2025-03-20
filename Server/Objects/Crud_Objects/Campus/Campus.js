/* CRUD Objects for table: campus */
        
    const parameters = require('./CRUD_parameters');
    global.CrudCampus_object = {
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
                          Add: "INSERT INTO campus (campus_name, campus_location, updated_by) VALUES ({{campus_campus_id}}, {{campus_campus_name}}, {{campus_campus_location}}, {{campus_status}}, {{campus_updated_by}}, {{campus_updated_at}}, {{campus_created_at}})",
                          Update: "UPDATE campus SET campus_name = {{campus_campusName}}, campus_location = {{campus_campusLocation}}, updated_by = {{campus_updatedBy}} WHERE campus_id = {{id}}",
                          List: "SELECT campus.campus_id as id, campus_id as campus_campusId, campus_name as campus_campusName, campus_location as campus_campusLocation, status as campus_status, updated_by as campus_updatedBy, updated_at as campus_updatedAt, created_at as campus_createdAt, COUNT(*) OVER () AS table_count FROM campus ",
                          View: "SELECT campus.campus_id as id, campus_id as campus_campusId, campus_name as campus_campusName, campus_location as campus_campusLocation, status as campus_status, updated_by as campus_updatedBy, updated_at as campus_updatedAt, created_at as campus_createdAt FROM campus  WHERE campus_id = {{id}} OR campus_id IS NULL",
                          Delete: "UPDATE campus SET status = 'inactive' WHERE campus_id = {{id}}",           
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
                      permission: { Add: "insert_campus", View:"view_campus", List:"list_campus", Update: "update_campus", Delete: "delete_campus" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Campus retrieved successfully!",
                    errorMessage: "Failed to retrieve Campus.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
/* CRUD Objects for table: leaves */
        
    const parameters = require('./CRUD_parameters');
    global.CrudLeaves_object = {
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
                          Add: "INSERT INTO leaves (user_id, start_date, end_date, reason, updated_by) VALUES ({{leaves_leave_id}}, {{leaves_user_id}}, {{leaves_start_date}}, {{leaves_end_date}}, {{leaves_reason}}, {{leaves_status}}, {{leaves_updated_by}}, {{leaves_updated_at}}, {{leaves_created_at}})",
                          Update: "UPDATE leaves SET user_id = {{leaves_userId}}, start_date = {{leaves_startDate}}, end_date = {{leaves_endDate}}, reason = {{leaves_reason}}, updated_by = {{leaves_updatedBy}} WHERE leave_id = {{id}}",
                          List: "SELECT leaves.leave_id as id, leave_id as leaves_leaveId, user_id as leaves_userId, start_date as leaves_startDate, end_date as leaves_endDate, reason as leaves_reason, status as leaves_status, updated_by as leaves_updatedBy, updated_at as leaves_updatedAt, created_at as leaves_createdAt, users.first_name as users_firstName, COUNT(*) OVER () AS table_count FROM leaves LEFT JOIN users ON leaves.user_id = users.leave_id",
                          View: "SELECT leaves.leave_id as id, leave_id as leaves_leaveId, user_id as leaves_userId, start_date as leaves_startDate, end_date as leaves_endDate, reason as leaves_reason, status as leaves_status, updated_by as leaves_updatedBy, updated_at as leaves_updatedAt, created_at as leaves_createdAt, users.first_name as users_firstName FROM leaves LEFT JOIN users ON leaves.user_id = users.leave_id WHERE leave_id = {{id}} OR leave_id IS NULL",
                          Delete: "UPDATE leaves SET status = 'inactive' WHERE leave_id = {{id}}",           
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
                      permission: { Add: "insert_leaves", View:"view_leaves", List:"list_leaves", Update: "update_leaves", Delete: "delete_leaves" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Leaves retrieved successfully!",
                    errorMessage: "Failed to retrieve Leaves.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
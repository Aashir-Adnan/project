/* CRUD Objects for table: time_tracking */
        
    const parameters = require('./CRUD_parameters');
    global.CrudTime_tracking_object = {
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
                          Add: "INSERT INTO time_tracking (task_id, user_id, start_time, end_time, duration, updated_by) VALUES ({{time_tracking_tracking_id}}, {{time_tracking_task_id}}, {{time_tracking_user_id}}, {{time_tracking_start_time}}, {{time_tracking_end_time}}, {{time_tracking_duration}}, {{time_tracking_status}}, {{time_tracking_updated_by}}, {{time_tracking_updated_at}}, {{time_tracking_created_at}})",
                          Update: "UPDATE time_tracking SET task_id = {{time_tracking_taskId}}, user_id = {{time_tracking_userId}}, start_time = {{time_tracking_startTime}}, end_time = {{time_tracking_endTime}}, duration = {{time_tracking_duration}}, updated_by = {{time_tracking_updatedBy}} WHERE tracking_id = {{id}}",
                          List: "SELECT time_tracking.tracking_id as id, tracking_id as time_tracking_trackingId, task_id as time_tracking_taskId, user_id as time_tracking_userId, start_time as time_tracking_startTime, end_time as time_tracking_endTime, duration as time_tracking_duration, status as time_tracking_status, updated_by as time_tracking_updatedBy, updated_at as time_tracking_updatedAt, created_at as time_tracking_createdAt, users.first_name as users_firstName, COUNT(*) OVER () AS table_count FROM time_tracking LEFT JOIN users ON time_tracking.user_id = users.tracking_id",
                          View: "SELECT time_tracking.tracking_id as id, tracking_id as time_tracking_trackingId, task_id as time_tracking_taskId, user_id as time_tracking_userId, start_time as time_tracking_startTime, end_time as time_tracking_endTime, duration as time_tracking_duration, status as time_tracking_status, updated_by as time_tracking_updatedBy, updated_at as time_tracking_updatedAt, created_at as time_tracking_createdAt, users.first_name as users_firstName FROM time_tracking LEFT JOIN users ON time_tracking.user_id = users.tracking_id WHERE tracking_id = {{id}} OR tracking_id IS NULL",
                          Delete: "UPDATE time_tracking SET status = 'inactive' WHERE tracking_id = {{id}}",           
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
                      permission: { Add: "insert_time_tracking", View:"view_time_tracking", List:"list_time_tracking", Update: "update_time_tracking", Delete: "delete_time_tracking" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Time_tracking retrieved successfully!",
                    errorMessage: "Failed to retrieve Time_tracking.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
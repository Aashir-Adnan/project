/* CRUD Objects for table: meetings */
        
    const parameters = require('./CRUD_parameters');
    global.CrudMeetings_object = {
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
                          Add: "INSERT INTO meetings (created_by, start_time, end_time, updated_by) VALUES ({{meetings_meeting_id}}, {{meetings_created_by}}, {{meetings_start_time}}, {{meetings_end_time}}, {{meetings_status}}, {{meetings_updated_by}}, {{meetings_updated_at}}, {{meetings_created_at}})",
                          Update: "UPDATE meetings SET created_by = {{meetings_createdBy}}, start_time = {{meetings_startTime}}, end_time = {{meetings_endTime}}, updated_by = {{meetings_updatedBy}} WHERE meeting_id = {{id}}",
                          List: "SELECT meetings.meeting_id as id, meeting_id as meetings_meetingId, created_by as meetings_createdBy, start_time as meetings_startTime, end_time as meetings_endTime, status as meetings_status, updated_by as meetings_updatedBy, updated_at as meetings_updatedAt, created_at as meetings_createdAt, COUNT(*) OVER () AS table_count FROM meetings ",
                          View: "SELECT meetings.meeting_id as id, meeting_id as meetings_meetingId, created_by as meetings_createdBy, start_time as meetings_startTime, end_time as meetings_endTime, status as meetings_status, updated_by as meetings_updatedBy, updated_at as meetings_updatedAt, created_at as meetings_createdAt FROM meetings  WHERE meeting_id = {{id}} OR meeting_id IS NULL",
                          Delete: "UPDATE meetings SET status = 'inactive' WHERE meeting_id = {{id}}",           
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
                      permission: { Add: "insert_meetings", View:"view_meetings", List:"list_meetings", Update: "update_meetings", Delete: "delete_meetings" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Meetings retrieved successfully!",
                    errorMessage: "Failed to retrieve Meetings.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
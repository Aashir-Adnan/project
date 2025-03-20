/* CRUD Objects for table: attendance */
        
    const parameters = require('./CRUD_parameters');
    global.CrudAttendance_object = {
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
                          Add: "INSERT INTO attendance (user_id, date, check_in_time, check_out_time, updated_by) VALUES ({{attendance_attendance_id}}, {{attendance_user_id}}, {{attendance_date}}, {{attendance_check_in_time}}, {{attendance_check_out_time}}, {{attendance_status}}, {{attendance_updated_by}}, {{attendance_updated_at}}, {{attendance_created_at}})",
                          Update: "UPDATE attendance SET user_id = {{attendance_userId}}, date = {{attendance_date}}, check_in_time = {{attendance_checkInTime}}, check_out_time = {{attendance_checkOutTime}}, updated_by = {{attendance_updatedBy}} WHERE attendance_id = {{id}}",
                          List: "SELECT attendance.attendance_id as id, attendance_id as attendance_attendanceId, user_id as attendance_userId, date as attendance_date, check_in_time as attendance_checkInTime, check_out_time as attendance_checkOutTime, status as attendance_status, updated_by as attendance_updatedBy, updated_at as attendance_updatedAt, created_at as attendance_createdAt, users.first_name as users_firstName, COUNT(*) OVER () AS table_count FROM attendance LEFT JOIN users ON attendance.user_id = users.attendance_id",
                          View: "SELECT attendance.attendance_id as id, attendance_id as attendance_attendanceId, user_id as attendance_userId, date as attendance_date, check_in_time as attendance_checkInTime, check_out_time as attendance_checkOutTime, status as attendance_status, updated_by as attendance_updatedBy, updated_at as attendance_updatedAt, created_at as attendance_createdAt, users.first_name as users_firstName FROM attendance LEFT JOIN users ON attendance.user_id = users.attendance_id WHERE attendance_id = {{id}} OR attendance_id IS NULL",
                          Delete: "UPDATE attendance SET status = 'inactive' WHERE attendance_id = {{id}}",           
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
                      permission: { Add: "insert_attendance", View:"view_attendance", List:"list_attendance", Update: "update_attendance", Delete: "delete_attendance" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Attendance retrieved successfully!",
                    errorMessage: "Failed to retrieve Attendance.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
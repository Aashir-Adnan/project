const parameters = require('./CRUD_parameters');
      global.GroupedCrudsAttendance_object = {
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
                            
                            List: "SELECT COUNT(*) as total_count, attendance_id as id, attendance.attendance_id as attendance_attendanceId, attendance.user_id as attendance_userId, attendance.date as attendance_date, attendance.check_in_time as attendance_checkInTime, attendance.check_out_time as attendance_checkOutTime, attendance.status as attendance_status, attendance.updated_by as attendance_updatedBy, attendance.updated_at as attendance_updatedAt, attendance.created_at as attendance_createdAt FROM attendance",
                              
                            View: "SELECT attendance.attendance_id as attendance_id, attendance.attendance_id as attendance_attendanceId, attendance.user_id as attendance_userId, attendance.date as attendance_date, attendance.check_in_time as attendance_checkInTime, attendance.check_out_time as attendance_checkOutTime, attendance.status as attendance_status, attendance.updated_by as attendance_updatedBy, attendance.updated_at as attendance_updatedAt, attendance.created_at as attendance_createdAt, users.user_id as users_id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt FROM attendance JOIN users ON users.user_id = attendance.user_id WHERE attendance.attendance_id = {{id}} OR attendance.attendance_id IS NULL",
                              
                            Delete: "UPDATE attendance SET status = 'inactive' WHERE attendance_id = {{id}}",           
                          },
                          database: "mainDb",
                        },
                        utilityFunctions: {
                          callbackFunction: null,
                          payloadFunction: [],
                          preProcessFunction: "crudApiGenerator",
                        },
                      },
                      requestMetaData: {
                        requestMethod: { Add: "POST", View: "GET", Update: "PUT", Delete: "DELETE", List: "GET" },
                        permission: [
                          { Add: "insert_attendance", View: "view_attendance", List: "list_attendance", Update: "update_attendance", Delete: "delete_attendance" },
                        ],
                        pagination: { pageSize: 10 },
                      },
                    },
                    response: {
                      successMessage: "task_history retrieved successfully!",
                      errorMessage: "Failed to retrieve task_history.",
                    },
                  }
                  ,
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
                            Add: "INSERT INTO users (email, phone_no, cnic, email, phone_no, cnic, first_name, last_name, gender, father_name, image_attachment_id, address, date_of_birth, blood_group, religion, updated_by) VALUES ({{users_user_id}}, {{users_email}}, {{users_status}}, {{users_phone_no}}, {{users_status}}, {{users_cnic}}, {{users_status}}, {{users_email}}, {{users_status}}, {{users_phone_no}}, {{users_status}}, {{users_cnic}}, {{users_status}}, {{users_first_name}}, {{users_last_name}}, {{users_gender}}, {{users_father_name}}, {{users_image_attachment_id}}, {{users_address}}, {{users_date_of_birth}}, {{users_blood_group}}, {{users_religion}}, {{users_updated_by}}, {{users_created_at}}, {{users_updated_at}})",
                            
                            Update: "UPDATE users SET email = {{users_email}}, phone_no = {{users_phoneNo}}, cnic = {{users_cnic}}, email = {{users_email}}, phone_no = {{users_phoneNo}}, cnic = {{users_cnic}}, first_name = {{users_firstName}}, last_name = {{users_lastName}}, gender = {{users_gender}}, father_name = {{users_fatherName}}, image_attachment_id = {{users_imageAttachmentId}}, address = {{users_address}}, date_of_birth = {{users_dateOfBirth}}, blood_group = {{users_bloodGroup}}, religion = {{users_religion}}, updated_by = {{users_updatedBy}} WHERE user_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, user_id as id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt FROM users",
                              
                            View: "SELECT attendance.attendance_id as attendance_id, attendance.attendance_id as attendance_attendanceId, attendance.user_id as attendance_userId, attendance.date as attendance_date, attendance.check_in_time as attendance_checkInTime, attendance.check_out_time as attendance_checkOutTime, attendance.status as attendance_status, attendance.updated_by as attendance_updatedBy, attendance.updated_at as attendance_updatedAt, attendance.created_at as attendance_createdAt, users.user_id as users_id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt FROM attendance JOIN users ON users.user_id = attendance.user_id WHERE attendance.attendance_id = {{id}} OR attendance.user_id IS NULL",
                              
                            Delete: "UPDATE users SET status = 'inactive' WHERE user_id = {{id}}",           
                          },
                          database: "mainDb",
                        },
                        utilityFunctions: {
                          callbackFunction: null,
                          payloadFunction: [],
                          preProcessFunction: "crudApiGenerator",
                        },
                      },
                      requestMetaData: {
                        requestMethod: { Add: "POST", View: "GET", Update: "PUT", Delete: "DELETE", List: "GET" },
                        permission: [
                          { Add: "insert_users", View: "view_users", List: "list_users", Update: "update_users", Delete: "delete_users" },
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
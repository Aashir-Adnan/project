const parameters = require('./CRUD_parameters');
      global.GroupedCrudsTime_tracking_object = {
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
                            
                            List: "SELECT COUNT(*) as total_count, tracking_id as id, time_tracking.tracking_id as timeTracking_trackingId, time_tracking.task_id as timeTracking_taskId, time_tracking.user_id as timeTracking_userId, time_tracking.start_time as timeTracking_startTime, time_tracking.end_time as timeTracking_endTime, time_tracking.duration as timeTracking_duration, time_tracking.status as timeTracking_status, time_tracking.updated_by as timeTracking_updatedBy, time_tracking.updated_at as timeTracking_updatedAt, time_tracking.created_at as timeTracking_createdAt FROM time_tracking",
                              
                            View: "SELECT time_tracking.tracking_id as time_tracking_id, time_tracking.tracking_id as timeTracking_trackingId, time_tracking.task_id as timeTracking_taskId, time_tracking.user_id as timeTracking_userId, time_tracking.start_time as timeTracking_startTime, time_tracking.end_time as timeTracking_endTime, time_tracking.duration as timeTracking_duration, time_tracking.status as timeTracking_status, time_tracking.updated_by as timeTracking_updatedBy, time_tracking.updated_at as timeTracking_updatedAt, time_tracking.created_at as timeTracking_createdAt, tasks_n.task_id as tasks_n_id, tasks_n.task_id as tasksN_taskId, tasks_n.created_by as tasksN_createdBy, tasks_n.assignee_id as tasksN_assigneeId, tasks_n.project_id as tasksN_projectId, tasks_n.title as tasksN_title, tasks_n.description as tasksN_description, tasks_n.status as tasksN_status, tasks_n.priority as tasksN_priority, tasks_n.due_date as tasksN_dueDate, tasks_n.updated_by as tasksN_updatedBy, tasks_n.updated_at as tasksN_updatedAt, tasks_n.created_at as tasksN_createdAt, users.user_id as users_id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt FROM time_tracking JOIN tasks_n ON tasks_n.task_id = time_tracking.task_id JOIN users ON (users.user_id = time_tracking.user_id OR users.user_id = tasks_n.created_by) WHERE time_tracking.tracking_id = {{id}} OR time_tracking.tracking_id IS NULL",
                              
                            Delete: "UPDATE time_tracking SET status = 'inactive' WHERE tracking_id = {{id}}",           
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
                          { Add: "insert_time_tracking", View: "view_time_tracking", List: "list_time_tracking", Update: "update_time_tracking", Delete: "delete_time_tracking" },
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
                            Add: "INSERT INTO tasks_n (created_by, assignee_id, project_id, title, description, priority, due_date, updated_by) VALUES ({{tasks_n_task_id}}, {{tasks_n_created_by}}, {{tasks_n_assignee_id}}, {{tasks_n_project_id}}, {{tasks_n_title}}, {{tasks_n_description}}, {{tasks_n_status}}, {{tasks_n_priority}}, {{tasks_n_due_date}}, {{tasks_n_updated_by}}, {{tasks_n_updated_at}}, {{tasks_n_created_at}})",
                            
                            Update: "UPDATE tasks_n SET created_by = {{tasks_n_createdBy}}, assignee_id = {{tasks_n_assigneeId}}, project_id = {{tasks_n_projectId}}, title = {{tasks_n_title}}, description = {{tasks_n_description}}, priority = {{tasks_n_priority}}, due_date = {{tasks_n_dueDate}}, updated_by = {{tasks_n_updatedBy}} WHERE task_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, task_id as id, tasks_n.task_id as tasksN_taskId, tasks_n.created_by as tasksN_createdBy, tasks_n.assignee_id as tasksN_assigneeId, tasks_n.project_id as tasksN_projectId, tasks_n.title as tasksN_title, tasks_n.description as tasksN_description, tasks_n.status as tasksN_status, tasks_n.priority as tasksN_priority, tasks_n.due_date as tasksN_dueDate, tasks_n.updated_by as tasksN_updatedBy, tasks_n.updated_at as tasksN_updatedAt, tasks_n.created_at as tasksN_createdAt FROM tasks_n",
                              
                            View: "SELECT time_tracking.tracking_id as time_tracking_id, time_tracking.tracking_id as timeTracking_trackingId, time_tracking.task_id as timeTracking_taskId, time_tracking.user_id as timeTracking_userId, time_tracking.start_time as timeTracking_startTime, time_tracking.end_time as timeTracking_endTime, time_tracking.duration as timeTracking_duration, time_tracking.status as timeTracking_status, time_tracking.updated_by as timeTracking_updatedBy, time_tracking.updated_at as timeTracking_updatedAt, time_tracking.created_at as timeTracking_createdAt, tasks_n.task_id as tasks_n_id, tasks_n.task_id as tasksN_taskId, tasks_n.created_by as tasksN_createdBy, tasks_n.assignee_id as tasksN_assigneeId, tasks_n.project_id as tasksN_projectId, tasks_n.title as tasksN_title, tasks_n.description as tasksN_description, tasks_n.status as tasksN_status, tasks_n.priority as tasksN_priority, tasks_n.due_date as tasksN_dueDate, tasks_n.updated_by as tasksN_updatedBy, tasks_n.updated_at as tasksN_updatedAt, tasks_n.created_at as tasksN_createdAt, users.user_id as users_id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt FROM time_tracking JOIN tasks_n ON tasks_n.task_id = time_tracking.task_id JOIN users ON (users.user_id = time_tracking.user_id OR users.user_id = tasks_n.created_by) WHERE time_tracking.tracking_id = {{id}} OR time_tracking.task_id IS NULL",
                              
                            Delete: "UPDATE tasks_n SET status = 'inactive' WHERE task_id = {{id}}",           
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
                          { Add: "insert_tasks_n", View: "view_tasks_n", List: "list_tasks_n", Update: "update_tasks_n", Delete: "delete_tasks_n" },
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
                              
                            View: "SELECT time_tracking.tracking_id as time_tracking_id, time_tracking.tracking_id as timeTracking_trackingId, time_tracking.task_id as timeTracking_taskId, time_tracking.user_id as timeTracking_userId, time_tracking.start_time as timeTracking_startTime, time_tracking.end_time as timeTracking_endTime, time_tracking.duration as timeTracking_duration, time_tracking.status as timeTracking_status, time_tracking.updated_by as timeTracking_updatedBy, time_tracking.updated_at as timeTracking_updatedAt, time_tracking.created_at as timeTracking_createdAt, tasks_n.task_id as tasks_n_id, tasks_n.task_id as tasksN_taskId, tasks_n.created_by as tasksN_createdBy, tasks_n.assignee_id as tasksN_assigneeId, tasks_n.project_id as tasksN_projectId, tasks_n.title as tasksN_title, tasks_n.description as tasksN_description, tasks_n.status as tasksN_status, tasks_n.priority as tasksN_priority, tasks_n.due_date as tasksN_dueDate, tasks_n.updated_by as tasksN_updatedBy, tasks_n.updated_at as tasksN_updatedAt, tasks_n.created_at as tasksN_createdAt, users.user_id as users_id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt FROM time_tracking JOIN tasks_n ON tasks_n.task_id = time_tracking.task_id JOIN users ON (users.user_id = time_tracking.user_id OR users.user_id = tasks_n.created_by) WHERE time_tracking.tracking_id = {{id}} OR time_tracking.user_id IS NULL",
                              
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
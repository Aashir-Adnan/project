const parameters = require('./CRUD_parameters');
      global.GroupedCrudsUsers_object = {
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
                            Add: "INSERT INTO users (email, phone_no, cnic, email, phone_no, cnic, first_name, last_name, gender, father_name, image_attachment_id, address, date_of_birth, blood_group, religion, updated_by) VALUES ({{users_user_id}}, {{users_email}}, {{users_status}}, {{users_phone_no}}, {{users_status}}, {{users_cnic}}, {{users_status}}, {{users_email}}, {{users_status}}, {{users_phone_no}}, {{users_status}}, {{users_cnic}}, {{users_status}}, {{users_first_name}}, {{users_last_name}}, {{users_gender}}, {{users_father_name}}, {{users_image_attachment_id}}, {{users_address}}, {{users_date_of_birth}}, {{users_blood_group}}, {{users_religion}}, {{users_updated_by}}, {{users_created_at}}, {{users_updated_at}})",
                            
                            Update: "UPDATE users SET email = {{users_email}}, phone_no = {{users_phoneNo}}, cnic = {{users_cnic}}, email = {{users_email}}, phone_no = {{users_phoneNo}}, cnic = {{users_cnic}}, first_name = {{users_firstName}}, last_name = {{users_lastName}}, gender = {{users_gender}}, father_name = {{users_fatherName}}, image_attachment_id = {{users_imageAttachmentId}}, address = {{users_address}}, date_of_birth = {{users_dateOfBirth}}, blood_group = {{users_bloodGroup}}, religion = {{users_religion}}, updated_by = {{users_updatedBy}} WHERE user_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, user_id as id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt FROM users",
                              
                            View: "SELECT users.user_id as users_id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt, attendance.attendance_id as attendance_id, attendance.attendance_id as attendance_attendanceId, attendance.user_id as attendance_userId, attendance.date as attendance_date, attendance.check_in_time as attendance_checkInTime, attendance.check_out_time as attendance_checkOutTime, attendance.status as attendance_status, attendance.updated_by as attendance_updatedBy, attendance.updated_at as attendance_updatedAt, attendance.created_at as attendance_createdAt, files.file_id as files_id, files.file_id as files_fileId, files.task_id as files_taskId, files.project_id as files_projectId, files.uploaded_by as files_uploadedBy, files.file_name as files_fileName, files.file_url as files_fileUrl, files.file_size as files_fileSize, files.status as files_status, files.updated_by as files_updatedBy, files.updated_at as files_updatedAt, files.created_at as files_createdAt, invoices.invoice_id as invoices_id, invoices.invoice_id as invoices_invoiceId, invoices.user_id as invoices_userId, invoices.amount as invoices_amount, invoices.status as invoices_status, invoices.updated_by as invoices_updatedBy, invoices.updated_at as invoices_updatedAt, invoices.created_at as invoices_createdAt, leaves.leave_id as leaves_id, leaves.leave_id as leaves_leaveId, leaves.user_id as leaves_userId, leaves.start_date as leaves_startDate, leaves.end_date as leaves_endDate, leaves.reason as leaves_reason, leaves.status as leaves_status, leaves.updated_by as leaves_updatedBy, leaves.updated_at as leaves_updatedAt, leaves.created_at as leaves_createdAt, meetings.meeting_id as meetings_id, meetings.meeting_id as meetings_meetingId, meetings.created_by as meetings_createdBy, meetings.start_time as meetings_startTime, meetings.end_time as meetings_endTime, meetings.status as meetings_status, meetings.updated_by as meetings_updatedBy, meetings.updated_at as meetings_updatedAt, meetings.created_at as meetings_createdAt, messages_n.message_id as messages_n_id, messages_n.message_id as messagesN_messageId, messages_n.sender_id as messagesN_senderId, messages_n.receiver_id as messagesN_receiverId, messages_n.message as messagesN_message, messages_n.status as messagesN_status, messages_n.updated_by as messagesN_updatedBy, messages_n.updated_at as messagesN_updatedAt, messages_n.created_at as messagesN_createdAt, projects.project_id as projects_id, projects.project_id as projects_projectId, projects.team_id as projects_teamId, projects.created_by as projects_createdBy, projects.name as projects_name, projects.status as projects_status, projects.updated_by as projects_updatedBy, projects.updated_at as projects_updatedAt, projects.created_at as projects_createdAt, tasks_n.task_id as tasks_n_id, tasks_n.task_id as tasksN_taskId, tasks_n.created_by as tasksN_createdBy, tasks_n.assignee_id as tasksN_assigneeId, tasks_n.project_id as tasksN_projectId, tasks_n.title as tasksN_title, tasks_n.description as tasksN_description, tasks_n.status as tasksN_status, tasks_n.priority as tasksN_priority, tasks_n.due_date as tasksN_dueDate, tasks_n.updated_by as tasksN_updatedBy, tasks_n.updated_at as tasksN_updatedAt, tasks_n.created_at as tasksN_createdAt, task_comments.comment_id as task_comments_id, task_comments.comment_id as taskComments_commentId, task_comments.task_id as taskComments_taskId, task_comments.user_id as taskComments_userId, task_comments.comment as taskComments_comment, task_comments.status as taskComments_status, task_comments.updated_by as taskComments_updatedBy, task_comments.updated_at as taskComments_updatedAt, task_comments.created_at as taskComments_createdAt, teams.team_id as teams_id, teams.team_id as teams_teamId, teams.created_by as teams_createdBy, teams.name as teams_name, teams.status as teams_status, teams.updated_by as teams_updatedBy, teams.updated_at as teams_updatedAt, teams.created_at as teams_createdAt, time_tracking.tracking_id as time_tracking_id, time_tracking.tracking_id as timeTracking_trackingId, time_tracking.task_id as timeTracking_taskId, time_tracking.user_id as timeTracking_userId, time_tracking.start_time as timeTracking_startTime, time_tracking.end_time as timeTracking_endTime, time_tracking.duration as timeTracking_duration, time_tracking.status as timeTracking_status, time_tracking.updated_by as timeTracking_updatedBy, time_tracking.updated_at as timeTracking_updatedAt, time_tracking.created_at as timeTracking_createdAt FROM users JOIN attendance ON attendance.user_id = users.user_id JOIN files ON files.uploaded_by = users.user_id JOIN invoices ON invoices.user_id = users.user_id JOIN leaves ON leaves.user_id = users.user_id JOIN meetings ON meetings.created_by = users.user_id JOIN messages_n ON (messages_n.sender_id = users.user_id OR messages_n.receiver_id = users.user_id) JOIN projects ON (projects.created_by = users.user_id OR projects.project_id = files.project_id) JOIN tasks_n ON (tasks_n.created_by = users.user_id OR tasks_n.assignee_id = users.user_id OR tasks_n.task_id = files.task_id OR tasks_n.project_id = projects.project_id) JOIN task_comments ON (task_comments.user_id = users.user_id OR task_comments.task_id = tasks_n.task_id) JOIN teams ON (teams.created_by = users.user_id OR teams.team_id = projects.team_id) JOIN time_tracking ON (time_tracking.user_id = users.user_id OR time_tracking.task_id = tasks_n.task_id) WHERE users.user_id = {{id}} OR users.user_id IS NULL",
                              
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
                            Add: "INSERT INTO attendance (user_id, date, check_in_time, check_out_time, updated_by) VALUES ({{attendance_attendance_id}}, {{attendance_user_id}}, {{attendance_date}}, {{attendance_check_in_time}}, {{attendance_check_out_time}}, {{attendance_status}}, {{attendance_updated_by}}, {{attendance_updated_at}}, {{attendance_created_at}})",
                            
                            Update: "UPDATE attendance SET user_id = {{attendance_userId}}, date = {{attendance_date}}, check_in_time = {{attendance_checkInTime}}, check_out_time = {{attendance_checkOutTime}}, updated_by = {{attendance_updatedBy}} WHERE attendance_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, attendance_id as id, attendance.attendance_id as attendance_attendanceId, attendance.user_id as attendance_userId, attendance.date as attendance_date, attendance.check_in_time as attendance_checkInTime, attendance.check_out_time as attendance_checkOutTime, attendance.status as attendance_status, attendance.updated_by as attendance_updatedBy, attendance.updated_at as attendance_updatedAt, attendance.created_at as attendance_createdAt FROM attendance",
                              
                            View: "SELECT users.user_id as users_id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt, attendance.attendance_id as attendance_id, attendance.attendance_id as attendance_attendanceId, attendance.user_id as attendance_userId, attendance.date as attendance_date, attendance.check_in_time as attendance_checkInTime, attendance.check_out_time as attendance_checkOutTime, attendance.status as attendance_status, attendance.updated_by as attendance_updatedBy, attendance.updated_at as attendance_updatedAt, attendance.created_at as attendance_createdAt, files.file_id as files_id, files.file_id as files_fileId, files.task_id as files_taskId, files.project_id as files_projectId, files.uploaded_by as files_uploadedBy, files.file_name as files_fileName, files.file_url as files_fileUrl, files.file_size as files_fileSize, files.status as files_status, files.updated_by as files_updatedBy, files.updated_at as files_updatedAt, files.created_at as files_createdAt, invoices.invoice_id as invoices_id, invoices.invoice_id as invoices_invoiceId, invoices.user_id as invoices_userId, invoices.amount as invoices_amount, invoices.status as invoices_status, invoices.updated_by as invoices_updatedBy, invoices.updated_at as invoices_updatedAt, invoices.created_at as invoices_createdAt, leaves.leave_id as leaves_id, leaves.leave_id as leaves_leaveId, leaves.user_id as leaves_userId, leaves.start_date as leaves_startDate, leaves.end_date as leaves_endDate, leaves.reason as leaves_reason, leaves.status as leaves_status, leaves.updated_by as leaves_updatedBy, leaves.updated_at as leaves_updatedAt, leaves.created_at as leaves_createdAt, meetings.meeting_id as meetings_id, meetings.meeting_id as meetings_meetingId, meetings.created_by as meetings_createdBy, meetings.start_time as meetings_startTime, meetings.end_time as meetings_endTime, meetings.status as meetings_status, meetings.updated_by as meetings_updatedBy, meetings.updated_at as meetings_updatedAt, meetings.created_at as meetings_createdAt, messages_n.message_id as messages_n_id, messages_n.message_id as messagesN_messageId, messages_n.sender_id as messagesN_senderId, messages_n.receiver_id as messagesN_receiverId, messages_n.message as messagesN_message, messages_n.status as messagesN_status, messages_n.updated_by as messagesN_updatedBy, messages_n.updated_at as messagesN_updatedAt, messages_n.created_at as messagesN_createdAt, projects.project_id as projects_id, projects.project_id as projects_projectId, projects.team_id as projects_teamId, projects.created_by as projects_createdBy, projects.name as projects_name, projects.status as projects_status, projects.updated_by as projects_updatedBy, projects.updated_at as projects_updatedAt, projects.created_at as projects_createdAt, tasks_n.task_id as tasks_n_id, tasks_n.task_id as tasksN_taskId, tasks_n.created_by as tasksN_createdBy, tasks_n.assignee_id as tasksN_assigneeId, tasks_n.project_id as tasksN_projectId, tasks_n.title as tasksN_title, tasks_n.description as tasksN_description, tasks_n.status as tasksN_status, tasks_n.priority as tasksN_priority, tasks_n.due_date as tasksN_dueDate, tasks_n.updated_by as tasksN_updatedBy, tasks_n.updated_at as tasksN_updatedAt, tasks_n.created_at as tasksN_createdAt, task_comments.comment_id as task_comments_id, task_comments.comment_id as taskComments_commentId, task_comments.task_id as taskComments_taskId, task_comments.user_id as taskComments_userId, task_comments.comment as taskComments_comment, task_comments.status as taskComments_status, task_comments.updated_by as taskComments_updatedBy, task_comments.updated_at as taskComments_updatedAt, task_comments.created_at as taskComments_createdAt, teams.team_id as teams_id, teams.team_id as teams_teamId, teams.created_by as teams_createdBy, teams.name as teams_name, teams.status as teams_status, teams.updated_by as teams_updatedBy, teams.updated_at as teams_updatedAt, teams.created_at as teams_createdAt, time_tracking.tracking_id as time_tracking_id, time_tracking.tracking_id as timeTracking_trackingId, time_tracking.task_id as timeTracking_taskId, time_tracking.user_id as timeTracking_userId, time_tracking.start_time as timeTracking_startTime, time_tracking.end_time as timeTracking_endTime, time_tracking.duration as timeTracking_duration, time_tracking.status as timeTracking_status, time_tracking.updated_by as timeTracking_updatedBy, time_tracking.updated_at as timeTracking_updatedAt, time_tracking.created_at as timeTracking_createdAt FROM users JOIN attendance ON attendance.user_id = users.user_id JOIN files ON files.uploaded_by = users.user_id JOIN invoices ON invoices.user_id = users.user_id JOIN leaves ON leaves.user_id = users.user_id JOIN meetings ON meetings.created_by = users.user_id JOIN messages_n ON (messages_n.sender_id = users.user_id OR messages_n.receiver_id = users.user_id) JOIN projects ON (projects.created_by = users.user_id OR projects.project_id = files.project_id) JOIN tasks_n ON (tasks_n.created_by = users.user_id OR tasks_n.assignee_id = users.user_id OR tasks_n.task_id = files.task_id OR tasks_n.project_id = projects.project_id) JOIN task_comments ON (task_comments.user_id = users.user_id OR task_comments.task_id = tasks_n.task_id) JOIN teams ON (teams.created_by = users.user_id OR teams.team_id = projects.team_id) JOIN time_tracking ON (time_tracking.user_id = users.user_id OR time_tracking.task_id = tasks_n.task_id) WHERE users.user_id = {{id}} OR users.attendance_id IS NULL",
                              
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
                            Add: "INSERT INTO files (task_id, project_id, uploaded_by, file_name, file_url, file_size, updated_by) VALUES ({{files_file_id}}, {{files_task_id}}, {{files_project_id}}, {{files_uploaded_by}}, {{files_file_name}}, {{files_file_url}}, {{files_file_size}}, {{files_status}}, {{files_updated_by}}, {{files_updated_at}}, {{files_created_at}})",
                            
                            Update: "UPDATE files SET task_id = {{files_taskId}}, project_id = {{files_projectId}}, uploaded_by = {{files_uploadedBy}}, file_name = {{files_fileName}}, file_url = {{files_fileUrl}}, file_size = {{files_fileSize}}, updated_by = {{files_updatedBy}} WHERE file_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, file_id as id, files.file_id as files_fileId, files.task_id as files_taskId, files.project_id as files_projectId, files.uploaded_by as files_uploadedBy, files.file_name as files_fileName, files.file_url as files_fileUrl, files.file_size as files_fileSize, files.status as files_status, files.updated_by as files_updatedBy, files.updated_at as files_updatedAt, files.created_at as files_createdAt FROM files",
                              
                            View: "SELECT users.user_id as users_id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt, attendance.attendance_id as attendance_id, attendance.attendance_id as attendance_attendanceId, attendance.user_id as attendance_userId, attendance.date as attendance_date, attendance.check_in_time as attendance_checkInTime, attendance.check_out_time as attendance_checkOutTime, attendance.status as attendance_status, attendance.updated_by as attendance_updatedBy, attendance.updated_at as attendance_updatedAt, attendance.created_at as attendance_createdAt, files.file_id as files_id, files.file_id as files_fileId, files.task_id as files_taskId, files.project_id as files_projectId, files.uploaded_by as files_uploadedBy, files.file_name as files_fileName, files.file_url as files_fileUrl, files.file_size as files_fileSize, files.status as files_status, files.updated_by as files_updatedBy, files.updated_at as files_updatedAt, files.created_at as files_createdAt, invoices.invoice_id as invoices_id, invoices.invoice_id as invoices_invoiceId, invoices.user_id as invoices_userId, invoices.amount as invoices_amount, invoices.status as invoices_status, invoices.updated_by as invoices_updatedBy, invoices.updated_at as invoices_updatedAt, invoices.created_at as invoices_createdAt, leaves.leave_id as leaves_id, leaves.leave_id as leaves_leaveId, leaves.user_id as leaves_userId, leaves.start_date as leaves_startDate, leaves.end_date as leaves_endDate, leaves.reason as leaves_reason, leaves.status as leaves_status, leaves.updated_by as leaves_updatedBy, leaves.updated_at as leaves_updatedAt, leaves.created_at as leaves_createdAt, meetings.meeting_id as meetings_id, meetings.meeting_id as meetings_meetingId, meetings.created_by as meetings_createdBy, meetings.start_time as meetings_startTime, meetings.end_time as meetings_endTime, meetings.status as meetings_status, meetings.updated_by as meetings_updatedBy, meetings.updated_at as meetings_updatedAt, meetings.created_at as meetings_createdAt, messages_n.message_id as messages_n_id, messages_n.message_id as messagesN_messageId, messages_n.sender_id as messagesN_senderId, messages_n.receiver_id as messagesN_receiverId, messages_n.message as messagesN_message, messages_n.status as messagesN_status, messages_n.updated_by as messagesN_updatedBy, messages_n.updated_at as messagesN_updatedAt, messages_n.created_at as messagesN_createdAt, projects.project_id as projects_id, projects.project_id as projects_projectId, projects.team_id as projects_teamId, projects.created_by as projects_createdBy, projects.name as projects_name, projects.status as projects_status, projects.updated_by as projects_updatedBy, projects.updated_at as projects_updatedAt, projects.created_at as projects_createdAt, tasks_n.task_id as tasks_n_id, tasks_n.task_id as tasksN_taskId, tasks_n.created_by as tasksN_createdBy, tasks_n.assignee_id as tasksN_assigneeId, tasks_n.project_id as tasksN_projectId, tasks_n.title as tasksN_title, tasks_n.description as tasksN_description, tasks_n.status as tasksN_status, tasks_n.priority as tasksN_priority, tasks_n.due_date as tasksN_dueDate, tasks_n.updated_by as tasksN_updatedBy, tasks_n.updated_at as tasksN_updatedAt, tasks_n.created_at as tasksN_createdAt, task_comments.comment_id as task_comments_id, task_comments.comment_id as taskComments_commentId, task_comments.task_id as taskComments_taskId, task_comments.user_id as taskComments_userId, task_comments.comment as taskComments_comment, task_comments.status as taskComments_status, task_comments.updated_by as taskComments_updatedBy, task_comments.updated_at as taskComments_updatedAt, task_comments.created_at as taskComments_createdAt, teams.team_id as teams_id, teams.team_id as teams_teamId, teams.created_by as teams_createdBy, teams.name as teams_name, teams.status as teams_status, teams.updated_by as teams_updatedBy, teams.updated_at as teams_updatedAt, teams.created_at as teams_createdAt, time_tracking.tracking_id as time_tracking_id, time_tracking.tracking_id as timeTracking_trackingId, time_tracking.task_id as timeTracking_taskId, time_tracking.user_id as timeTracking_userId, time_tracking.start_time as timeTracking_startTime, time_tracking.end_time as timeTracking_endTime, time_tracking.duration as timeTracking_duration, time_tracking.status as timeTracking_status, time_tracking.updated_by as timeTracking_updatedBy, time_tracking.updated_at as timeTracking_updatedAt, time_tracking.created_at as timeTracking_createdAt FROM users JOIN attendance ON attendance.user_id = users.user_id JOIN files ON files.uploaded_by = users.user_id JOIN invoices ON invoices.user_id = users.user_id JOIN leaves ON leaves.user_id = users.user_id JOIN meetings ON meetings.created_by = users.user_id JOIN messages_n ON (messages_n.sender_id = users.user_id OR messages_n.receiver_id = users.user_id) JOIN projects ON (projects.created_by = users.user_id OR projects.project_id = files.project_id) JOIN tasks_n ON (tasks_n.created_by = users.user_id OR tasks_n.assignee_id = users.user_id OR tasks_n.task_id = files.task_id OR tasks_n.project_id = projects.project_id) JOIN task_comments ON (task_comments.user_id = users.user_id OR task_comments.task_id = tasks_n.task_id) JOIN teams ON (teams.created_by = users.user_id OR teams.team_id = projects.team_id) JOIN time_tracking ON (time_tracking.user_id = users.user_id OR time_tracking.task_id = tasks_n.task_id) WHERE users.user_id = {{id}} OR users.file_id IS NULL",
                              
                            Delete: "UPDATE files SET status = 'inactive' WHERE file_id = {{id}}",           
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
                          { Add: "insert_files", View: "view_files", List: "list_files", Update: "update_files", Delete: "delete_files" },
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
                            Add: "INSERT INTO invoices (user_id, amount, updated_by) VALUES ({{invoices_invoice_id}}, {{invoices_user_id}}, {{invoices_amount}}, {{invoices_status}}, {{invoices_updated_by}}, {{invoices_updated_at}}, {{invoices_created_at}})",
                            
                            Update: "UPDATE invoices SET user_id = {{invoices_userId}}, amount = {{invoices_amount}}, updated_by = {{invoices_updatedBy}} WHERE invoice_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, invoice_id as id, invoices.invoice_id as invoices_invoiceId, invoices.user_id as invoices_userId, invoices.amount as invoices_amount, invoices.status as invoices_status, invoices.updated_by as invoices_updatedBy, invoices.updated_at as invoices_updatedAt, invoices.created_at as invoices_createdAt FROM invoices",
                              
                            View: "SELECT users.user_id as users_id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt, attendance.attendance_id as attendance_id, attendance.attendance_id as attendance_attendanceId, attendance.user_id as attendance_userId, attendance.date as attendance_date, attendance.check_in_time as attendance_checkInTime, attendance.check_out_time as attendance_checkOutTime, attendance.status as attendance_status, attendance.updated_by as attendance_updatedBy, attendance.updated_at as attendance_updatedAt, attendance.created_at as attendance_createdAt, files.file_id as files_id, files.file_id as files_fileId, files.task_id as files_taskId, files.project_id as files_projectId, files.uploaded_by as files_uploadedBy, files.file_name as files_fileName, files.file_url as files_fileUrl, files.file_size as files_fileSize, files.status as files_status, files.updated_by as files_updatedBy, files.updated_at as files_updatedAt, files.created_at as files_createdAt, invoices.invoice_id as invoices_id, invoices.invoice_id as invoices_invoiceId, invoices.user_id as invoices_userId, invoices.amount as invoices_amount, invoices.status as invoices_status, invoices.updated_by as invoices_updatedBy, invoices.updated_at as invoices_updatedAt, invoices.created_at as invoices_createdAt, leaves.leave_id as leaves_id, leaves.leave_id as leaves_leaveId, leaves.user_id as leaves_userId, leaves.start_date as leaves_startDate, leaves.end_date as leaves_endDate, leaves.reason as leaves_reason, leaves.status as leaves_status, leaves.updated_by as leaves_updatedBy, leaves.updated_at as leaves_updatedAt, leaves.created_at as leaves_createdAt, meetings.meeting_id as meetings_id, meetings.meeting_id as meetings_meetingId, meetings.created_by as meetings_createdBy, meetings.start_time as meetings_startTime, meetings.end_time as meetings_endTime, meetings.status as meetings_status, meetings.updated_by as meetings_updatedBy, meetings.updated_at as meetings_updatedAt, meetings.created_at as meetings_createdAt, messages_n.message_id as messages_n_id, messages_n.message_id as messagesN_messageId, messages_n.sender_id as messagesN_senderId, messages_n.receiver_id as messagesN_receiverId, messages_n.message as messagesN_message, messages_n.status as messagesN_status, messages_n.updated_by as messagesN_updatedBy, messages_n.updated_at as messagesN_updatedAt, messages_n.created_at as messagesN_createdAt, projects.project_id as projects_id, projects.project_id as projects_projectId, projects.team_id as projects_teamId, projects.created_by as projects_createdBy, projects.name as projects_name, projects.status as projects_status, projects.updated_by as projects_updatedBy, projects.updated_at as projects_updatedAt, projects.created_at as projects_createdAt, tasks_n.task_id as tasks_n_id, tasks_n.task_id as tasksN_taskId, tasks_n.created_by as tasksN_createdBy, tasks_n.assignee_id as tasksN_assigneeId, tasks_n.project_id as tasksN_projectId, tasks_n.title as tasksN_title, tasks_n.description as tasksN_description, tasks_n.status as tasksN_status, tasks_n.priority as tasksN_priority, tasks_n.due_date as tasksN_dueDate, tasks_n.updated_by as tasksN_updatedBy, tasks_n.updated_at as tasksN_updatedAt, tasks_n.created_at as tasksN_createdAt, task_comments.comment_id as task_comments_id, task_comments.comment_id as taskComments_commentId, task_comments.task_id as taskComments_taskId, task_comments.user_id as taskComments_userId, task_comments.comment as taskComments_comment, task_comments.status as taskComments_status, task_comments.updated_by as taskComments_updatedBy, task_comments.updated_at as taskComments_updatedAt, task_comments.created_at as taskComments_createdAt, teams.team_id as teams_id, teams.team_id as teams_teamId, teams.created_by as teams_createdBy, teams.name as teams_name, teams.status as teams_status, teams.updated_by as teams_updatedBy, teams.updated_at as teams_updatedAt, teams.created_at as teams_createdAt, time_tracking.tracking_id as time_tracking_id, time_tracking.tracking_id as timeTracking_trackingId, time_tracking.task_id as timeTracking_taskId, time_tracking.user_id as timeTracking_userId, time_tracking.start_time as timeTracking_startTime, time_tracking.end_time as timeTracking_endTime, time_tracking.duration as timeTracking_duration, time_tracking.status as timeTracking_status, time_tracking.updated_by as timeTracking_updatedBy, time_tracking.updated_at as timeTracking_updatedAt, time_tracking.created_at as timeTracking_createdAt FROM users JOIN attendance ON attendance.user_id = users.user_id JOIN files ON files.uploaded_by = users.user_id JOIN invoices ON invoices.user_id = users.user_id JOIN leaves ON leaves.user_id = users.user_id JOIN meetings ON meetings.created_by = users.user_id JOIN messages_n ON (messages_n.sender_id = users.user_id OR messages_n.receiver_id = users.user_id) JOIN projects ON (projects.created_by = users.user_id OR projects.project_id = files.project_id) JOIN tasks_n ON (tasks_n.created_by = users.user_id OR tasks_n.assignee_id = users.user_id OR tasks_n.task_id = files.task_id OR tasks_n.project_id = projects.project_id) JOIN task_comments ON (task_comments.user_id = users.user_id OR task_comments.task_id = tasks_n.task_id) JOIN teams ON (teams.created_by = users.user_id OR teams.team_id = projects.team_id) JOIN time_tracking ON (time_tracking.user_id = users.user_id OR time_tracking.task_id = tasks_n.task_id) WHERE users.user_id = {{id}} OR users.invoice_id IS NULL",
                              
                            Delete: "UPDATE invoices SET status = 'inactive' WHERE invoice_id = {{id}}",           
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
                          { Add: "insert_invoices", View: "view_invoices", List: "list_invoices", Update: "update_invoices", Delete: "delete_invoices" },
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
                            Add: "INSERT INTO leaves (user_id, start_date, end_date, reason, updated_by) VALUES ({{leaves_leave_id}}, {{leaves_user_id}}, {{leaves_start_date}}, {{leaves_end_date}}, {{leaves_reason}}, {{leaves_status}}, {{leaves_updated_by}}, {{leaves_updated_at}}, {{leaves_created_at}})",
                            
                            Update: "UPDATE leaves SET user_id = {{leaves_userId}}, start_date = {{leaves_startDate}}, end_date = {{leaves_endDate}}, reason = {{leaves_reason}}, updated_by = {{leaves_updatedBy}} WHERE leave_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, leave_id as id, leaves.leave_id as leaves_leaveId, leaves.user_id as leaves_userId, leaves.start_date as leaves_startDate, leaves.end_date as leaves_endDate, leaves.reason as leaves_reason, leaves.status as leaves_status, leaves.updated_by as leaves_updatedBy, leaves.updated_at as leaves_updatedAt, leaves.created_at as leaves_createdAt FROM leaves",
                              
                            View: "SELECT users.user_id as users_id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt, attendance.attendance_id as attendance_id, attendance.attendance_id as attendance_attendanceId, attendance.user_id as attendance_userId, attendance.date as attendance_date, attendance.check_in_time as attendance_checkInTime, attendance.check_out_time as attendance_checkOutTime, attendance.status as attendance_status, attendance.updated_by as attendance_updatedBy, attendance.updated_at as attendance_updatedAt, attendance.created_at as attendance_createdAt, files.file_id as files_id, files.file_id as files_fileId, files.task_id as files_taskId, files.project_id as files_projectId, files.uploaded_by as files_uploadedBy, files.file_name as files_fileName, files.file_url as files_fileUrl, files.file_size as files_fileSize, files.status as files_status, files.updated_by as files_updatedBy, files.updated_at as files_updatedAt, files.created_at as files_createdAt, invoices.invoice_id as invoices_id, invoices.invoice_id as invoices_invoiceId, invoices.user_id as invoices_userId, invoices.amount as invoices_amount, invoices.status as invoices_status, invoices.updated_by as invoices_updatedBy, invoices.updated_at as invoices_updatedAt, invoices.created_at as invoices_createdAt, leaves.leave_id as leaves_id, leaves.leave_id as leaves_leaveId, leaves.user_id as leaves_userId, leaves.start_date as leaves_startDate, leaves.end_date as leaves_endDate, leaves.reason as leaves_reason, leaves.status as leaves_status, leaves.updated_by as leaves_updatedBy, leaves.updated_at as leaves_updatedAt, leaves.created_at as leaves_createdAt, meetings.meeting_id as meetings_id, meetings.meeting_id as meetings_meetingId, meetings.created_by as meetings_createdBy, meetings.start_time as meetings_startTime, meetings.end_time as meetings_endTime, meetings.status as meetings_status, meetings.updated_by as meetings_updatedBy, meetings.updated_at as meetings_updatedAt, meetings.created_at as meetings_createdAt, messages_n.message_id as messages_n_id, messages_n.message_id as messagesN_messageId, messages_n.sender_id as messagesN_senderId, messages_n.receiver_id as messagesN_receiverId, messages_n.message as messagesN_message, messages_n.status as messagesN_status, messages_n.updated_by as messagesN_updatedBy, messages_n.updated_at as messagesN_updatedAt, messages_n.created_at as messagesN_createdAt, projects.project_id as projects_id, projects.project_id as projects_projectId, projects.team_id as projects_teamId, projects.created_by as projects_createdBy, projects.name as projects_name, projects.status as projects_status, projects.updated_by as projects_updatedBy, projects.updated_at as projects_updatedAt, projects.created_at as projects_createdAt, tasks_n.task_id as tasks_n_id, tasks_n.task_id as tasksN_taskId, tasks_n.created_by as tasksN_createdBy, tasks_n.assignee_id as tasksN_assigneeId, tasks_n.project_id as tasksN_projectId, tasks_n.title as tasksN_title, tasks_n.description as tasksN_description, tasks_n.status as tasksN_status, tasks_n.priority as tasksN_priority, tasks_n.due_date as tasksN_dueDate, tasks_n.updated_by as tasksN_updatedBy, tasks_n.updated_at as tasksN_updatedAt, tasks_n.created_at as tasksN_createdAt, task_comments.comment_id as task_comments_id, task_comments.comment_id as taskComments_commentId, task_comments.task_id as taskComments_taskId, task_comments.user_id as taskComments_userId, task_comments.comment as taskComments_comment, task_comments.status as taskComments_status, task_comments.updated_by as taskComments_updatedBy, task_comments.updated_at as taskComments_updatedAt, task_comments.created_at as taskComments_createdAt, teams.team_id as teams_id, teams.team_id as teams_teamId, teams.created_by as teams_createdBy, teams.name as teams_name, teams.status as teams_status, teams.updated_by as teams_updatedBy, teams.updated_at as teams_updatedAt, teams.created_at as teams_createdAt, time_tracking.tracking_id as time_tracking_id, time_tracking.tracking_id as timeTracking_trackingId, time_tracking.task_id as timeTracking_taskId, time_tracking.user_id as timeTracking_userId, time_tracking.start_time as timeTracking_startTime, time_tracking.end_time as timeTracking_endTime, time_tracking.duration as timeTracking_duration, time_tracking.status as timeTracking_status, time_tracking.updated_by as timeTracking_updatedBy, time_tracking.updated_at as timeTracking_updatedAt, time_tracking.created_at as timeTracking_createdAt FROM users JOIN attendance ON attendance.user_id = users.user_id JOIN files ON files.uploaded_by = users.user_id JOIN invoices ON invoices.user_id = users.user_id JOIN leaves ON leaves.user_id = users.user_id JOIN meetings ON meetings.created_by = users.user_id JOIN messages_n ON (messages_n.sender_id = users.user_id OR messages_n.receiver_id = users.user_id) JOIN projects ON (projects.created_by = users.user_id OR projects.project_id = files.project_id) JOIN tasks_n ON (tasks_n.created_by = users.user_id OR tasks_n.assignee_id = users.user_id OR tasks_n.task_id = files.task_id OR tasks_n.project_id = projects.project_id) JOIN task_comments ON (task_comments.user_id = users.user_id OR task_comments.task_id = tasks_n.task_id) JOIN teams ON (teams.created_by = users.user_id OR teams.team_id = projects.team_id) JOIN time_tracking ON (time_tracking.user_id = users.user_id OR time_tracking.task_id = tasks_n.task_id) WHERE users.user_id = {{id}} OR users.leave_id IS NULL",
                              
                            Delete: "UPDATE leaves SET status = 'inactive' WHERE leave_id = {{id}}",           
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
                          { Add: "insert_leaves", View: "view_leaves", List: "list_leaves", Update: "update_leaves", Delete: "delete_leaves" },
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
                            Add: "INSERT INTO meetings (created_by, start_time, end_time, updated_by) VALUES ({{meetings_meeting_id}}, {{meetings_created_by}}, {{meetings_start_time}}, {{meetings_end_time}}, {{meetings_status}}, {{meetings_updated_by}}, {{meetings_updated_at}}, {{meetings_created_at}})",
                            
                            Update: "UPDATE meetings SET created_by = {{meetings_createdBy}}, start_time = {{meetings_startTime}}, end_time = {{meetings_endTime}}, updated_by = {{meetings_updatedBy}} WHERE meeting_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, meeting_id as id, meetings.meeting_id as meetings_meetingId, meetings.created_by as meetings_createdBy, meetings.start_time as meetings_startTime, meetings.end_time as meetings_endTime, meetings.status as meetings_status, meetings.updated_by as meetings_updatedBy, meetings.updated_at as meetings_updatedAt, meetings.created_at as meetings_createdAt FROM meetings",
                              
                            View: "SELECT users.user_id as users_id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt, attendance.attendance_id as attendance_id, attendance.attendance_id as attendance_attendanceId, attendance.user_id as attendance_userId, attendance.date as attendance_date, attendance.check_in_time as attendance_checkInTime, attendance.check_out_time as attendance_checkOutTime, attendance.status as attendance_status, attendance.updated_by as attendance_updatedBy, attendance.updated_at as attendance_updatedAt, attendance.created_at as attendance_createdAt, files.file_id as files_id, files.file_id as files_fileId, files.task_id as files_taskId, files.project_id as files_projectId, files.uploaded_by as files_uploadedBy, files.file_name as files_fileName, files.file_url as files_fileUrl, files.file_size as files_fileSize, files.status as files_status, files.updated_by as files_updatedBy, files.updated_at as files_updatedAt, files.created_at as files_createdAt, invoices.invoice_id as invoices_id, invoices.invoice_id as invoices_invoiceId, invoices.user_id as invoices_userId, invoices.amount as invoices_amount, invoices.status as invoices_status, invoices.updated_by as invoices_updatedBy, invoices.updated_at as invoices_updatedAt, invoices.created_at as invoices_createdAt, leaves.leave_id as leaves_id, leaves.leave_id as leaves_leaveId, leaves.user_id as leaves_userId, leaves.start_date as leaves_startDate, leaves.end_date as leaves_endDate, leaves.reason as leaves_reason, leaves.status as leaves_status, leaves.updated_by as leaves_updatedBy, leaves.updated_at as leaves_updatedAt, leaves.created_at as leaves_createdAt, meetings.meeting_id as meetings_id, meetings.meeting_id as meetings_meetingId, meetings.created_by as meetings_createdBy, meetings.start_time as meetings_startTime, meetings.end_time as meetings_endTime, meetings.status as meetings_status, meetings.updated_by as meetings_updatedBy, meetings.updated_at as meetings_updatedAt, meetings.created_at as meetings_createdAt, messages_n.message_id as messages_n_id, messages_n.message_id as messagesN_messageId, messages_n.sender_id as messagesN_senderId, messages_n.receiver_id as messagesN_receiverId, messages_n.message as messagesN_message, messages_n.status as messagesN_status, messages_n.updated_by as messagesN_updatedBy, messages_n.updated_at as messagesN_updatedAt, messages_n.created_at as messagesN_createdAt, projects.project_id as projects_id, projects.project_id as projects_projectId, projects.team_id as projects_teamId, projects.created_by as projects_createdBy, projects.name as projects_name, projects.status as projects_status, projects.updated_by as projects_updatedBy, projects.updated_at as projects_updatedAt, projects.created_at as projects_createdAt, tasks_n.task_id as tasks_n_id, tasks_n.task_id as tasksN_taskId, tasks_n.created_by as tasksN_createdBy, tasks_n.assignee_id as tasksN_assigneeId, tasks_n.project_id as tasksN_projectId, tasks_n.title as tasksN_title, tasks_n.description as tasksN_description, tasks_n.status as tasksN_status, tasks_n.priority as tasksN_priority, tasks_n.due_date as tasksN_dueDate, tasks_n.updated_by as tasksN_updatedBy, tasks_n.updated_at as tasksN_updatedAt, tasks_n.created_at as tasksN_createdAt, task_comments.comment_id as task_comments_id, task_comments.comment_id as taskComments_commentId, task_comments.task_id as taskComments_taskId, task_comments.user_id as taskComments_userId, task_comments.comment as taskComments_comment, task_comments.status as taskComments_status, task_comments.updated_by as taskComments_updatedBy, task_comments.updated_at as taskComments_updatedAt, task_comments.created_at as taskComments_createdAt, teams.team_id as teams_id, teams.team_id as teams_teamId, teams.created_by as teams_createdBy, teams.name as teams_name, teams.status as teams_status, teams.updated_by as teams_updatedBy, teams.updated_at as teams_updatedAt, teams.created_at as teams_createdAt, time_tracking.tracking_id as time_tracking_id, time_tracking.tracking_id as timeTracking_trackingId, time_tracking.task_id as timeTracking_taskId, time_tracking.user_id as timeTracking_userId, time_tracking.start_time as timeTracking_startTime, time_tracking.end_time as timeTracking_endTime, time_tracking.duration as timeTracking_duration, time_tracking.status as timeTracking_status, time_tracking.updated_by as timeTracking_updatedBy, time_tracking.updated_at as timeTracking_updatedAt, time_tracking.created_at as timeTracking_createdAt FROM users JOIN attendance ON attendance.user_id = users.user_id JOIN files ON files.uploaded_by = users.user_id JOIN invoices ON invoices.user_id = users.user_id JOIN leaves ON leaves.user_id = users.user_id JOIN meetings ON meetings.created_by = users.user_id JOIN messages_n ON (messages_n.sender_id = users.user_id OR messages_n.receiver_id = users.user_id) JOIN projects ON (projects.created_by = users.user_id OR projects.project_id = files.project_id) JOIN tasks_n ON (tasks_n.created_by = users.user_id OR tasks_n.assignee_id = users.user_id OR tasks_n.task_id = files.task_id OR tasks_n.project_id = projects.project_id) JOIN task_comments ON (task_comments.user_id = users.user_id OR task_comments.task_id = tasks_n.task_id) JOIN teams ON (teams.created_by = users.user_id OR teams.team_id = projects.team_id) JOIN time_tracking ON (time_tracking.user_id = users.user_id OR time_tracking.task_id = tasks_n.task_id) WHERE users.user_id = {{id}} OR users.meeting_id IS NULL",
                              
                            Delete: "UPDATE meetings SET status = 'inactive' WHERE meeting_id = {{id}}",           
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
                          { Add: "insert_meetings", View: "view_meetings", List: "list_meetings", Update: "update_meetings", Delete: "delete_meetings" },
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
                            Add: "INSERT INTO messages_n (sender_id, receiver_id, message, updated_by) VALUES ({{messages_n_message_id}}, {{messages_n_sender_id}}, {{messages_n_receiver_id}}, {{messages_n_message}}, {{messages_n_status}}, {{messages_n_updated_by}}, {{messages_n_updated_at}}, {{messages_n_created_at}})",
                            
                            Update: "UPDATE messages_n SET sender_id = {{messages_n_senderId}}, receiver_id = {{messages_n_receiverId}}, message = {{messages_n_message}}, updated_by = {{messages_n_updatedBy}} WHERE message_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, message_id as id, messages_n.message_id as messagesN_messageId, messages_n.sender_id as messagesN_senderId, messages_n.receiver_id as messagesN_receiverId, messages_n.message as messagesN_message, messages_n.status as messagesN_status, messages_n.updated_by as messagesN_updatedBy, messages_n.updated_at as messagesN_updatedAt, messages_n.created_at as messagesN_createdAt FROM messages_n",
                              
                            View: "SELECT users.user_id as users_id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt, attendance.attendance_id as attendance_id, attendance.attendance_id as attendance_attendanceId, attendance.user_id as attendance_userId, attendance.date as attendance_date, attendance.check_in_time as attendance_checkInTime, attendance.check_out_time as attendance_checkOutTime, attendance.status as attendance_status, attendance.updated_by as attendance_updatedBy, attendance.updated_at as attendance_updatedAt, attendance.created_at as attendance_createdAt, files.file_id as files_id, files.file_id as files_fileId, files.task_id as files_taskId, files.project_id as files_projectId, files.uploaded_by as files_uploadedBy, files.file_name as files_fileName, files.file_url as files_fileUrl, files.file_size as files_fileSize, files.status as files_status, files.updated_by as files_updatedBy, files.updated_at as files_updatedAt, files.created_at as files_createdAt, invoices.invoice_id as invoices_id, invoices.invoice_id as invoices_invoiceId, invoices.user_id as invoices_userId, invoices.amount as invoices_amount, invoices.status as invoices_status, invoices.updated_by as invoices_updatedBy, invoices.updated_at as invoices_updatedAt, invoices.created_at as invoices_createdAt, leaves.leave_id as leaves_id, leaves.leave_id as leaves_leaveId, leaves.user_id as leaves_userId, leaves.start_date as leaves_startDate, leaves.end_date as leaves_endDate, leaves.reason as leaves_reason, leaves.status as leaves_status, leaves.updated_by as leaves_updatedBy, leaves.updated_at as leaves_updatedAt, leaves.created_at as leaves_createdAt, meetings.meeting_id as meetings_id, meetings.meeting_id as meetings_meetingId, meetings.created_by as meetings_createdBy, meetings.start_time as meetings_startTime, meetings.end_time as meetings_endTime, meetings.status as meetings_status, meetings.updated_by as meetings_updatedBy, meetings.updated_at as meetings_updatedAt, meetings.created_at as meetings_createdAt, messages_n.message_id as messages_n_id, messages_n.message_id as messagesN_messageId, messages_n.sender_id as messagesN_senderId, messages_n.receiver_id as messagesN_receiverId, messages_n.message as messagesN_message, messages_n.status as messagesN_status, messages_n.updated_by as messagesN_updatedBy, messages_n.updated_at as messagesN_updatedAt, messages_n.created_at as messagesN_createdAt, projects.project_id as projects_id, projects.project_id as projects_projectId, projects.team_id as projects_teamId, projects.created_by as projects_createdBy, projects.name as projects_name, projects.status as projects_status, projects.updated_by as projects_updatedBy, projects.updated_at as projects_updatedAt, projects.created_at as projects_createdAt, tasks_n.task_id as tasks_n_id, tasks_n.task_id as tasksN_taskId, tasks_n.created_by as tasksN_createdBy, tasks_n.assignee_id as tasksN_assigneeId, tasks_n.project_id as tasksN_projectId, tasks_n.title as tasksN_title, tasks_n.description as tasksN_description, tasks_n.status as tasksN_status, tasks_n.priority as tasksN_priority, tasks_n.due_date as tasksN_dueDate, tasks_n.updated_by as tasksN_updatedBy, tasks_n.updated_at as tasksN_updatedAt, tasks_n.created_at as tasksN_createdAt, task_comments.comment_id as task_comments_id, task_comments.comment_id as taskComments_commentId, task_comments.task_id as taskComments_taskId, task_comments.user_id as taskComments_userId, task_comments.comment as taskComments_comment, task_comments.status as taskComments_status, task_comments.updated_by as taskComments_updatedBy, task_comments.updated_at as taskComments_updatedAt, task_comments.created_at as taskComments_createdAt, teams.team_id as teams_id, teams.team_id as teams_teamId, teams.created_by as teams_createdBy, teams.name as teams_name, teams.status as teams_status, teams.updated_by as teams_updatedBy, teams.updated_at as teams_updatedAt, teams.created_at as teams_createdAt, time_tracking.tracking_id as time_tracking_id, time_tracking.tracking_id as timeTracking_trackingId, time_tracking.task_id as timeTracking_taskId, time_tracking.user_id as timeTracking_userId, time_tracking.start_time as timeTracking_startTime, time_tracking.end_time as timeTracking_endTime, time_tracking.duration as timeTracking_duration, time_tracking.status as timeTracking_status, time_tracking.updated_by as timeTracking_updatedBy, time_tracking.updated_at as timeTracking_updatedAt, time_tracking.created_at as timeTracking_createdAt FROM users JOIN attendance ON attendance.user_id = users.user_id JOIN files ON files.uploaded_by = users.user_id JOIN invoices ON invoices.user_id = users.user_id JOIN leaves ON leaves.user_id = users.user_id JOIN meetings ON meetings.created_by = users.user_id JOIN messages_n ON (messages_n.sender_id = users.user_id OR messages_n.receiver_id = users.user_id) JOIN projects ON (projects.created_by = users.user_id OR projects.project_id = files.project_id) JOIN tasks_n ON (tasks_n.created_by = users.user_id OR tasks_n.assignee_id = users.user_id OR tasks_n.task_id = files.task_id OR tasks_n.project_id = projects.project_id) JOIN task_comments ON (task_comments.user_id = users.user_id OR task_comments.task_id = tasks_n.task_id) JOIN teams ON (teams.created_by = users.user_id OR teams.team_id = projects.team_id) JOIN time_tracking ON (time_tracking.user_id = users.user_id OR time_tracking.task_id = tasks_n.task_id) WHERE users.user_id = {{id}} OR users.message_id IS NULL",
                              
                            Delete: "UPDATE messages_n SET status = 'inactive' WHERE message_id = {{id}}",           
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
                          { Add: "insert_messages_n", View: "view_messages_n", List: "list_messages_n", Update: "update_messages_n", Delete: "delete_messages_n" },
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
                            Add: "INSERT INTO projects (team_id, created_by, name, updated_by) VALUES ({{projects_project_id}}, {{projects_team_id}}, {{projects_created_by}}, {{projects_name}}, {{projects_status}}, {{projects_updated_by}}, {{projects_updated_at}}, {{projects_created_at}})",
                            
                            Update: "UPDATE projects SET team_id = {{projects_teamId}}, created_by = {{projects_createdBy}}, name = {{projects_name}}, updated_by = {{projects_updatedBy}} WHERE project_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, project_id as id, projects.project_id as projects_projectId, projects.team_id as projects_teamId, projects.created_by as projects_createdBy, projects.name as projects_name, projects.status as projects_status, projects.updated_by as projects_updatedBy, projects.updated_at as projects_updatedAt, projects.created_at as projects_createdAt FROM projects",
                              
                            View: "SELECT users.user_id as users_id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt, attendance.attendance_id as attendance_id, attendance.attendance_id as attendance_attendanceId, attendance.user_id as attendance_userId, attendance.date as attendance_date, attendance.check_in_time as attendance_checkInTime, attendance.check_out_time as attendance_checkOutTime, attendance.status as attendance_status, attendance.updated_by as attendance_updatedBy, attendance.updated_at as attendance_updatedAt, attendance.created_at as attendance_createdAt, files.file_id as files_id, files.file_id as files_fileId, files.task_id as files_taskId, files.project_id as files_projectId, files.uploaded_by as files_uploadedBy, files.file_name as files_fileName, files.file_url as files_fileUrl, files.file_size as files_fileSize, files.status as files_status, files.updated_by as files_updatedBy, files.updated_at as files_updatedAt, files.created_at as files_createdAt, invoices.invoice_id as invoices_id, invoices.invoice_id as invoices_invoiceId, invoices.user_id as invoices_userId, invoices.amount as invoices_amount, invoices.status as invoices_status, invoices.updated_by as invoices_updatedBy, invoices.updated_at as invoices_updatedAt, invoices.created_at as invoices_createdAt, leaves.leave_id as leaves_id, leaves.leave_id as leaves_leaveId, leaves.user_id as leaves_userId, leaves.start_date as leaves_startDate, leaves.end_date as leaves_endDate, leaves.reason as leaves_reason, leaves.status as leaves_status, leaves.updated_by as leaves_updatedBy, leaves.updated_at as leaves_updatedAt, leaves.created_at as leaves_createdAt, meetings.meeting_id as meetings_id, meetings.meeting_id as meetings_meetingId, meetings.created_by as meetings_createdBy, meetings.start_time as meetings_startTime, meetings.end_time as meetings_endTime, meetings.status as meetings_status, meetings.updated_by as meetings_updatedBy, meetings.updated_at as meetings_updatedAt, meetings.created_at as meetings_createdAt, messages_n.message_id as messages_n_id, messages_n.message_id as messagesN_messageId, messages_n.sender_id as messagesN_senderId, messages_n.receiver_id as messagesN_receiverId, messages_n.message as messagesN_message, messages_n.status as messagesN_status, messages_n.updated_by as messagesN_updatedBy, messages_n.updated_at as messagesN_updatedAt, messages_n.created_at as messagesN_createdAt, projects.project_id as projects_id, projects.project_id as projects_projectId, projects.team_id as projects_teamId, projects.created_by as projects_createdBy, projects.name as projects_name, projects.status as projects_status, projects.updated_by as projects_updatedBy, projects.updated_at as projects_updatedAt, projects.created_at as projects_createdAt, tasks_n.task_id as tasks_n_id, tasks_n.task_id as tasksN_taskId, tasks_n.created_by as tasksN_createdBy, tasks_n.assignee_id as tasksN_assigneeId, tasks_n.project_id as tasksN_projectId, tasks_n.title as tasksN_title, tasks_n.description as tasksN_description, tasks_n.status as tasksN_status, tasks_n.priority as tasksN_priority, tasks_n.due_date as tasksN_dueDate, tasks_n.updated_by as tasksN_updatedBy, tasks_n.updated_at as tasksN_updatedAt, tasks_n.created_at as tasksN_createdAt, task_comments.comment_id as task_comments_id, task_comments.comment_id as taskComments_commentId, task_comments.task_id as taskComments_taskId, task_comments.user_id as taskComments_userId, task_comments.comment as taskComments_comment, task_comments.status as taskComments_status, task_comments.updated_by as taskComments_updatedBy, task_comments.updated_at as taskComments_updatedAt, task_comments.created_at as taskComments_createdAt, teams.team_id as teams_id, teams.team_id as teams_teamId, teams.created_by as teams_createdBy, teams.name as teams_name, teams.status as teams_status, teams.updated_by as teams_updatedBy, teams.updated_at as teams_updatedAt, teams.created_at as teams_createdAt, time_tracking.tracking_id as time_tracking_id, time_tracking.tracking_id as timeTracking_trackingId, time_tracking.task_id as timeTracking_taskId, time_tracking.user_id as timeTracking_userId, time_tracking.start_time as timeTracking_startTime, time_tracking.end_time as timeTracking_endTime, time_tracking.duration as timeTracking_duration, time_tracking.status as timeTracking_status, time_tracking.updated_by as timeTracking_updatedBy, time_tracking.updated_at as timeTracking_updatedAt, time_tracking.created_at as timeTracking_createdAt FROM users JOIN attendance ON attendance.user_id = users.user_id JOIN files ON files.uploaded_by = users.user_id JOIN invoices ON invoices.user_id = users.user_id JOIN leaves ON leaves.user_id = users.user_id JOIN meetings ON meetings.created_by = users.user_id JOIN messages_n ON (messages_n.sender_id = users.user_id OR messages_n.receiver_id = users.user_id) JOIN projects ON (projects.created_by = users.user_id OR projects.project_id = files.project_id) JOIN tasks_n ON (tasks_n.created_by = users.user_id OR tasks_n.assignee_id = users.user_id OR tasks_n.task_id = files.task_id OR tasks_n.project_id = projects.project_id) JOIN task_comments ON (task_comments.user_id = users.user_id OR task_comments.task_id = tasks_n.task_id) JOIN teams ON (teams.created_by = users.user_id OR teams.team_id = projects.team_id) JOIN time_tracking ON (time_tracking.user_id = users.user_id OR time_tracking.task_id = tasks_n.task_id) WHERE users.user_id = {{id}} OR users.project_id IS NULL",
                              
                            Delete: "UPDATE projects SET status = 'inactive' WHERE project_id = {{id}}",           
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
                          { Add: "insert_projects", View: "view_projects", List: "list_projects", Update: "update_projects", Delete: "delete_projects" },
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
                              
                            View: "SELECT users.user_id as users_id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt, attendance.attendance_id as attendance_id, attendance.attendance_id as attendance_attendanceId, attendance.user_id as attendance_userId, attendance.date as attendance_date, attendance.check_in_time as attendance_checkInTime, attendance.check_out_time as attendance_checkOutTime, attendance.status as attendance_status, attendance.updated_by as attendance_updatedBy, attendance.updated_at as attendance_updatedAt, attendance.created_at as attendance_createdAt, files.file_id as files_id, files.file_id as files_fileId, files.task_id as files_taskId, files.project_id as files_projectId, files.uploaded_by as files_uploadedBy, files.file_name as files_fileName, files.file_url as files_fileUrl, files.file_size as files_fileSize, files.status as files_status, files.updated_by as files_updatedBy, files.updated_at as files_updatedAt, files.created_at as files_createdAt, invoices.invoice_id as invoices_id, invoices.invoice_id as invoices_invoiceId, invoices.user_id as invoices_userId, invoices.amount as invoices_amount, invoices.status as invoices_status, invoices.updated_by as invoices_updatedBy, invoices.updated_at as invoices_updatedAt, invoices.created_at as invoices_createdAt, leaves.leave_id as leaves_id, leaves.leave_id as leaves_leaveId, leaves.user_id as leaves_userId, leaves.start_date as leaves_startDate, leaves.end_date as leaves_endDate, leaves.reason as leaves_reason, leaves.status as leaves_status, leaves.updated_by as leaves_updatedBy, leaves.updated_at as leaves_updatedAt, leaves.created_at as leaves_createdAt, meetings.meeting_id as meetings_id, meetings.meeting_id as meetings_meetingId, meetings.created_by as meetings_createdBy, meetings.start_time as meetings_startTime, meetings.end_time as meetings_endTime, meetings.status as meetings_status, meetings.updated_by as meetings_updatedBy, meetings.updated_at as meetings_updatedAt, meetings.created_at as meetings_createdAt, messages_n.message_id as messages_n_id, messages_n.message_id as messagesN_messageId, messages_n.sender_id as messagesN_senderId, messages_n.receiver_id as messagesN_receiverId, messages_n.message as messagesN_message, messages_n.status as messagesN_status, messages_n.updated_by as messagesN_updatedBy, messages_n.updated_at as messagesN_updatedAt, messages_n.created_at as messagesN_createdAt, projects.project_id as projects_id, projects.project_id as projects_projectId, projects.team_id as projects_teamId, projects.created_by as projects_createdBy, projects.name as projects_name, projects.status as projects_status, projects.updated_by as projects_updatedBy, projects.updated_at as projects_updatedAt, projects.created_at as projects_createdAt, tasks_n.task_id as tasks_n_id, tasks_n.task_id as tasksN_taskId, tasks_n.created_by as tasksN_createdBy, tasks_n.assignee_id as tasksN_assigneeId, tasks_n.project_id as tasksN_projectId, tasks_n.title as tasksN_title, tasks_n.description as tasksN_description, tasks_n.status as tasksN_status, tasks_n.priority as tasksN_priority, tasks_n.due_date as tasksN_dueDate, tasks_n.updated_by as tasksN_updatedBy, tasks_n.updated_at as tasksN_updatedAt, tasks_n.created_at as tasksN_createdAt, task_comments.comment_id as task_comments_id, task_comments.comment_id as taskComments_commentId, task_comments.task_id as taskComments_taskId, task_comments.user_id as taskComments_userId, task_comments.comment as taskComments_comment, task_comments.status as taskComments_status, task_comments.updated_by as taskComments_updatedBy, task_comments.updated_at as taskComments_updatedAt, task_comments.created_at as taskComments_createdAt, teams.team_id as teams_id, teams.team_id as teams_teamId, teams.created_by as teams_createdBy, teams.name as teams_name, teams.status as teams_status, teams.updated_by as teams_updatedBy, teams.updated_at as teams_updatedAt, teams.created_at as teams_createdAt, time_tracking.tracking_id as time_tracking_id, time_tracking.tracking_id as timeTracking_trackingId, time_tracking.task_id as timeTracking_taskId, time_tracking.user_id as timeTracking_userId, time_tracking.start_time as timeTracking_startTime, time_tracking.end_time as timeTracking_endTime, time_tracking.duration as timeTracking_duration, time_tracking.status as timeTracking_status, time_tracking.updated_by as timeTracking_updatedBy, time_tracking.updated_at as timeTracking_updatedAt, time_tracking.created_at as timeTracking_createdAt FROM users JOIN attendance ON attendance.user_id = users.user_id JOIN files ON files.uploaded_by = users.user_id JOIN invoices ON invoices.user_id = users.user_id JOIN leaves ON leaves.user_id = users.user_id JOIN meetings ON meetings.created_by = users.user_id JOIN messages_n ON (messages_n.sender_id = users.user_id OR messages_n.receiver_id = users.user_id) JOIN projects ON (projects.created_by = users.user_id OR projects.project_id = files.project_id) JOIN tasks_n ON (tasks_n.created_by = users.user_id OR tasks_n.assignee_id = users.user_id OR tasks_n.task_id = files.task_id OR tasks_n.project_id = projects.project_id) JOIN task_comments ON (task_comments.user_id = users.user_id OR task_comments.task_id = tasks_n.task_id) JOIN teams ON (teams.created_by = users.user_id OR teams.team_id = projects.team_id) JOIN time_tracking ON (time_tracking.user_id = users.user_id OR time_tracking.task_id = tasks_n.task_id) WHERE users.user_id = {{id}} OR users.task_id IS NULL",
                              
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
                            Add: "INSERT INTO task_comments (task_id, user_id, comment, updated_by) VALUES ({{task_comments_comment_id}}, {{task_comments_task_id}}, {{task_comments_user_id}}, {{task_comments_comment}}, {{task_comments_status}}, {{task_comments_updated_by}}, {{task_comments_updated_at}}, {{task_comments_created_at}})",
                            
                            Update: "UPDATE task_comments SET task_id = {{task_comments_taskId}}, user_id = {{task_comments_userId}}, comment = {{task_comments_comment}}, updated_by = {{task_comments_updatedBy}} WHERE comment_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, comment_id as id, task_comments.comment_id as taskComments_commentId, task_comments.task_id as taskComments_taskId, task_comments.user_id as taskComments_userId, task_comments.comment as taskComments_comment, task_comments.status as taskComments_status, task_comments.updated_by as taskComments_updatedBy, task_comments.updated_at as taskComments_updatedAt, task_comments.created_at as taskComments_createdAt FROM task_comments",
                              
                            View: "SELECT users.user_id as users_id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt, attendance.attendance_id as attendance_id, attendance.attendance_id as attendance_attendanceId, attendance.user_id as attendance_userId, attendance.date as attendance_date, attendance.check_in_time as attendance_checkInTime, attendance.check_out_time as attendance_checkOutTime, attendance.status as attendance_status, attendance.updated_by as attendance_updatedBy, attendance.updated_at as attendance_updatedAt, attendance.created_at as attendance_createdAt, files.file_id as files_id, files.file_id as files_fileId, files.task_id as files_taskId, files.project_id as files_projectId, files.uploaded_by as files_uploadedBy, files.file_name as files_fileName, files.file_url as files_fileUrl, files.file_size as files_fileSize, files.status as files_status, files.updated_by as files_updatedBy, files.updated_at as files_updatedAt, files.created_at as files_createdAt, invoices.invoice_id as invoices_id, invoices.invoice_id as invoices_invoiceId, invoices.user_id as invoices_userId, invoices.amount as invoices_amount, invoices.status as invoices_status, invoices.updated_by as invoices_updatedBy, invoices.updated_at as invoices_updatedAt, invoices.created_at as invoices_createdAt, leaves.leave_id as leaves_id, leaves.leave_id as leaves_leaveId, leaves.user_id as leaves_userId, leaves.start_date as leaves_startDate, leaves.end_date as leaves_endDate, leaves.reason as leaves_reason, leaves.status as leaves_status, leaves.updated_by as leaves_updatedBy, leaves.updated_at as leaves_updatedAt, leaves.created_at as leaves_createdAt, meetings.meeting_id as meetings_id, meetings.meeting_id as meetings_meetingId, meetings.created_by as meetings_createdBy, meetings.start_time as meetings_startTime, meetings.end_time as meetings_endTime, meetings.status as meetings_status, meetings.updated_by as meetings_updatedBy, meetings.updated_at as meetings_updatedAt, meetings.created_at as meetings_createdAt, messages_n.message_id as messages_n_id, messages_n.message_id as messagesN_messageId, messages_n.sender_id as messagesN_senderId, messages_n.receiver_id as messagesN_receiverId, messages_n.message as messagesN_message, messages_n.status as messagesN_status, messages_n.updated_by as messagesN_updatedBy, messages_n.updated_at as messagesN_updatedAt, messages_n.created_at as messagesN_createdAt, projects.project_id as projects_id, projects.project_id as projects_projectId, projects.team_id as projects_teamId, projects.created_by as projects_createdBy, projects.name as projects_name, projects.status as projects_status, projects.updated_by as projects_updatedBy, projects.updated_at as projects_updatedAt, projects.created_at as projects_createdAt, tasks_n.task_id as tasks_n_id, tasks_n.task_id as tasksN_taskId, tasks_n.created_by as tasksN_createdBy, tasks_n.assignee_id as tasksN_assigneeId, tasks_n.project_id as tasksN_projectId, tasks_n.title as tasksN_title, tasks_n.description as tasksN_description, tasks_n.status as tasksN_status, tasks_n.priority as tasksN_priority, tasks_n.due_date as tasksN_dueDate, tasks_n.updated_by as tasksN_updatedBy, tasks_n.updated_at as tasksN_updatedAt, tasks_n.created_at as tasksN_createdAt, task_comments.comment_id as task_comments_id, task_comments.comment_id as taskComments_commentId, task_comments.task_id as taskComments_taskId, task_comments.user_id as taskComments_userId, task_comments.comment as taskComments_comment, task_comments.status as taskComments_status, task_comments.updated_by as taskComments_updatedBy, task_comments.updated_at as taskComments_updatedAt, task_comments.created_at as taskComments_createdAt, teams.team_id as teams_id, teams.team_id as teams_teamId, teams.created_by as teams_createdBy, teams.name as teams_name, teams.status as teams_status, teams.updated_by as teams_updatedBy, teams.updated_at as teams_updatedAt, teams.created_at as teams_createdAt, time_tracking.tracking_id as time_tracking_id, time_tracking.tracking_id as timeTracking_trackingId, time_tracking.task_id as timeTracking_taskId, time_tracking.user_id as timeTracking_userId, time_tracking.start_time as timeTracking_startTime, time_tracking.end_time as timeTracking_endTime, time_tracking.duration as timeTracking_duration, time_tracking.status as timeTracking_status, time_tracking.updated_by as timeTracking_updatedBy, time_tracking.updated_at as timeTracking_updatedAt, time_tracking.created_at as timeTracking_createdAt FROM users JOIN attendance ON attendance.user_id = users.user_id JOIN files ON files.uploaded_by = users.user_id JOIN invoices ON invoices.user_id = users.user_id JOIN leaves ON leaves.user_id = users.user_id JOIN meetings ON meetings.created_by = users.user_id JOIN messages_n ON (messages_n.sender_id = users.user_id OR messages_n.receiver_id = users.user_id) JOIN projects ON (projects.created_by = users.user_id OR projects.project_id = files.project_id) JOIN tasks_n ON (tasks_n.created_by = users.user_id OR tasks_n.assignee_id = users.user_id OR tasks_n.task_id = files.task_id OR tasks_n.project_id = projects.project_id) JOIN task_comments ON (task_comments.user_id = users.user_id OR task_comments.task_id = tasks_n.task_id) JOIN teams ON (teams.created_by = users.user_id OR teams.team_id = projects.team_id) JOIN time_tracking ON (time_tracking.user_id = users.user_id OR time_tracking.task_id = tasks_n.task_id) WHERE users.user_id = {{id}} OR users.comment_id IS NULL",
                              
                            Delete: "UPDATE task_comments SET status = 'inactive' WHERE comment_id = {{id}}",           
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
                          { Add: "insert_task_comments", View: "view_task_comments", List: "list_task_comments", Update: "update_task_comments", Delete: "delete_task_comments" },
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
                            Add: "INSERT INTO teams (created_by, name, updated_by) VALUES ({{teams_team_id}}, {{teams_created_by}}, {{teams_name}}, {{teams_status}}, {{teams_updated_by}}, {{teams_updated_at}}, {{teams_created_at}})",
                            
                            Update: "UPDATE teams SET created_by = {{teams_createdBy}}, name = {{teams_name}}, updated_by = {{teams_updatedBy}} WHERE team_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, team_id as id, teams.team_id as teams_teamId, teams.created_by as teams_createdBy, teams.name as teams_name, teams.status as teams_status, teams.updated_by as teams_updatedBy, teams.updated_at as teams_updatedAt, teams.created_at as teams_createdAt FROM teams",
                              
                            View: "SELECT users.user_id as users_id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt, attendance.attendance_id as attendance_id, attendance.attendance_id as attendance_attendanceId, attendance.user_id as attendance_userId, attendance.date as attendance_date, attendance.check_in_time as attendance_checkInTime, attendance.check_out_time as attendance_checkOutTime, attendance.status as attendance_status, attendance.updated_by as attendance_updatedBy, attendance.updated_at as attendance_updatedAt, attendance.created_at as attendance_createdAt, files.file_id as files_id, files.file_id as files_fileId, files.task_id as files_taskId, files.project_id as files_projectId, files.uploaded_by as files_uploadedBy, files.file_name as files_fileName, files.file_url as files_fileUrl, files.file_size as files_fileSize, files.status as files_status, files.updated_by as files_updatedBy, files.updated_at as files_updatedAt, files.created_at as files_createdAt, invoices.invoice_id as invoices_id, invoices.invoice_id as invoices_invoiceId, invoices.user_id as invoices_userId, invoices.amount as invoices_amount, invoices.status as invoices_status, invoices.updated_by as invoices_updatedBy, invoices.updated_at as invoices_updatedAt, invoices.created_at as invoices_createdAt, leaves.leave_id as leaves_id, leaves.leave_id as leaves_leaveId, leaves.user_id as leaves_userId, leaves.start_date as leaves_startDate, leaves.end_date as leaves_endDate, leaves.reason as leaves_reason, leaves.status as leaves_status, leaves.updated_by as leaves_updatedBy, leaves.updated_at as leaves_updatedAt, leaves.created_at as leaves_createdAt, meetings.meeting_id as meetings_id, meetings.meeting_id as meetings_meetingId, meetings.created_by as meetings_createdBy, meetings.start_time as meetings_startTime, meetings.end_time as meetings_endTime, meetings.status as meetings_status, meetings.updated_by as meetings_updatedBy, meetings.updated_at as meetings_updatedAt, meetings.created_at as meetings_createdAt, messages_n.message_id as messages_n_id, messages_n.message_id as messagesN_messageId, messages_n.sender_id as messagesN_senderId, messages_n.receiver_id as messagesN_receiverId, messages_n.message as messagesN_message, messages_n.status as messagesN_status, messages_n.updated_by as messagesN_updatedBy, messages_n.updated_at as messagesN_updatedAt, messages_n.created_at as messagesN_createdAt, projects.project_id as projects_id, projects.project_id as projects_projectId, projects.team_id as projects_teamId, projects.created_by as projects_createdBy, projects.name as projects_name, projects.status as projects_status, projects.updated_by as projects_updatedBy, projects.updated_at as projects_updatedAt, projects.created_at as projects_createdAt, tasks_n.task_id as tasks_n_id, tasks_n.task_id as tasksN_taskId, tasks_n.created_by as tasksN_createdBy, tasks_n.assignee_id as tasksN_assigneeId, tasks_n.project_id as tasksN_projectId, tasks_n.title as tasksN_title, tasks_n.description as tasksN_description, tasks_n.status as tasksN_status, tasks_n.priority as tasksN_priority, tasks_n.due_date as tasksN_dueDate, tasks_n.updated_by as tasksN_updatedBy, tasks_n.updated_at as tasksN_updatedAt, tasks_n.created_at as tasksN_createdAt, task_comments.comment_id as task_comments_id, task_comments.comment_id as taskComments_commentId, task_comments.task_id as taskComments_taskId, task_comments.user_id as taskComments_userId, task_comments.comment as taskComments_comment, task_comments.status as taskComments_status, task_comments.updated_by as taskComments_updatedBy, task_comments.updated_at as taskComments_updatedAt, task_comments.created_at as taskComments_createdAt, teams.team_id as teams_id, teams.team_id as teams_teamId, teams.created_by as teams_createdBy, teams.name as teams_name, teams.status as teams_status, teams.updated_by as teams_updatedBy, teams.updated_at as teams_updatedAt, teams.created_at as teams_createdAt, time_tracking.tracking_id as time_tracking_id, time_tracking.tracking_id as timeTracking_trackingId, time_tracking.task_id as timeTracking_taskId, time_tracking.user_id as timeTracking_userId, time_tracking.start_time as timeTracking_startTime, time_tracking.end_time as timeTracking_endTime, time_tracking.duration as timeTracking_duration, time_tracking.status as timeTracking_status, time_tracking.updated_by as timeTracking_updatedBy, time_tracking.updated_at as timeTracking_updatedAt, time_tracking.created_at as timeTracking_createdAt FROM users JOIN attendance ON attendance.user_id = users.user_id JOIN files ON files.uploaded_by = users.user_id JOIN invoices ON invoices.user_id = users.user_id JOIN leaves ON leaves.user_id = users.user_id JOIN meetings ON meetings.created_by = users.user_id JOIN messages_n ON (messages_n.sender_id = users.user_id OR messages_n.receiver_id = users.user_id) JOIN projects ON (projects.created_by = users.user_id OR projects.project_id = files.project_id) JOIN tasks_n ON (tasks_n.created_by = users.user_id OR tasks_n.assignee_id = users.user_id OR tasks_n.task_id = files.task_id OR tasks_n.project_id = projects.project_id) JOIN task_comments ON (task_comments.user_id = users.user_id OR task_comments.task_id = tasks_n.task_id) JOIN teams ON (teams.created_by = users.user_id OR teams.team_id = projects.team_id) JOIN time_tracking ON (time_tracking.user_id = users.user_id OR time_tracking.task_id = tasks_n.task_id) WHERE users.user_id = {{id}} OR users.team_id IS NULL",
                              
                            Delete: "UPDATE teams SET status = 'inactive' WHERE team_id = {{id}}",           
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
                          { Add: "insert_teams", View: "view_teams", List: "list_teams", Update: "update_teams", Delete: "delete_teams" },
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
                            Add: "INSERT INTO time_tracking (task_id, user_id, start_time, end_time, duration, updated_by) VALUES ({{time_tracking_tracking_id}}, {{time_tracking_task_id}}, {{time_tracking_user_id}}, {{time_tracking_start_time}}, {{time_tracking_end_time}}, {{time_tracking_duration}}, {{time_tracking_status}}, {{time_tracking_updated_by}}, {{time_tracking_updated_at}}, {{time_tracking_created_at}})",
                            
                            Update: "UPDATE time_tracking SET task_id = {{time_tracking_taskId}}, user_id = {{time_tracking_userId}}, start_time = {{time_tracking_startTime}}, end_time = {{time_tracking_endTime}}, duration = {{time_tracking_duration}}, updated_by = {{time_tracking_updatedBy}} WHERE tracking_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, tracking_id as id, time_tracking.tracking_id as timeTracking_trackingId, time_tracking.task_id as timeTracking_taskId, time_tracking.user_id as timeTracking_userId, time_tracking.start_time as timeTracking_startTime, time_tracking.end_time as timeTracking_endTime, time_tracking.duration as timeTracking_duration, time_tracking.status as timeTracking_status, time_tracking.updated_by as timeTracking_updatedBy, time_tracking.updated_at as timeTracking_updatedAt, time_tracking.created_at as timeTracking_createdAt FROM time_tracking",
                              
                            View: "SELECT users.user_id as users_id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt, attendance.attendance_id as attendance_id, attendance.attendance_id as attendance_attendanceId, attendance.user_id as attendance_userId, attendance.date as attendance_date, attendance.check_in_time as attendance_checkInTime, attendance.check_out_time as attendance_checkOutTime, attendance.status as attendance_status, attendance.updated_by as attendance_updatedBy, attendance.updated_at as attendance_updatedAt, attendance.created_at as attendance_createdAt, files.file_id as files_id, files.file_id as files_fileId, files.task_id as files_taskId, files.project_id as files_projectId, files.uploaded_by as files_uploadedBy, files.file_name as files_fileName, files.file_url as files_fileUrl, files.file_size as files_fileSize, files.status as files_status, files.updated_by as files_updatedBy, files.updated_at as files_updatedAt, files.created_at as files_createdAt, invoices.invoice_id as invoices_id, invoices.invoice_id as invoices_invoiceId, invoices.user_id as invoices_userId, invoices.amount as invoices_amount, invoices.status as invoices_status, invoices.updated_by as invoices_updatedBy, invoices.updated_at as invoices_updatedAt, invoices.created_at as invoices_createdAt, leaves.leave_id as leaves_id, leaves.leave_id as leaves_leaveId, leaves.user_id as leaves_userId, leaves.start_date as leaves_startDate, leaves.end_date as leaves_endDate, leaves.reason as leaves_reason, leaves.status as leaves_status, leaves.updated_by as leaves_updatedBy, leaves.updated_at as leaves_updatedAt, leaves.created_at as leaves_createdAt, meetings.meeting_id as meetings_id, meetings.meeting_id as meetings_meetingId, meetings.created_by as meetings_createdBy, meetings.start_time as meetings_startTime, meetings.end_time as meetings_endTime, meetings.status as meetings_status, meetings.updated_by as meetings_updatedBy, meetings.updated_at as meetings_updatedAt, meetings.created_at as meetings_createdAt, messages_n.message_id as messages_n_id, messages_n.message_id as messagesN_messageId, messages_n.sender_id as messagesN_senderId, messages_n.receiver_id as messagesN_receiverId, messages_n.message as messagesN_message, messages_n.status as messagesN_status, messages_n.updated_by as messagesN_updatedBy, messages_n.updated_at as messagesN_updatedAt, messages_n.created_at as messagesN_createdAt, projects.project_id as projects_id, projects.project_id as projects_projectId, projects.team_id as projects_teamId, projects.created_by as projects_createdBy, projects.name as projects_name, projects.status as projects_status, projects.updated_by as projects_updatedBy, projects.updated_at as projects_updatedAt, projects.created_at as projects_createdAt, tasks_n.task_id as tasks_n_id, tasks_n.task_id as tasksN_taskId, tasks_n.created_by as tasksN_createdBy, tasks_n.assignee_id as tasksN_assigneeId, tasks_n.project_id as tasksN_projectId, tasks_n.title as tasksN_title, tasks_n.description as tasksN_description, tasks_n.status as tasksN_status, tasks_n.priority as tasksN_priority, tasks_n.due_date as tasksN_dueDate, tasks_n.updated_by as tasksN_updatedBy, tasks_n.updated_at as tasksN_updatedAt, tasks_n.created_at as tasksN_createdAt, task_comments.comment_id as task_comments_id, task_comments.comment_id as taskComments_commentId, task_comments.task_id as taskComments_taskId, task_comments.user_id as taskComments_userId, task_comments.comment as taskComments_comment, task_comments.status as taskComments_status, task_comments.updated_by as taskComments_updatedBy, task_comments.updated_at as taskComments_updatedAt, task_comments.created_at as taskComments_createdAt, teams.team_id as teams_id, teams.team_id as teams_teamId, teams.created_by as teams_createdBy, teams.name as teams_name, teams.status as teams_status, teams.updated_by as teams_updatedBy, teams.updated_at as teams_updatedAt, teams.created_at as teams_createdAt, time_tracking.tracking_id as time_tracking_id, time_tracking.tracking_id as timeTracking_trackingId, time_tracking.task_id as timeTracking_taskId, time_tracking.user_id as timeTracking_userId, time_tracking.start_time as timeTracking_startTime, time_tracking.end_time as timeTracking_endTime, time_tracking.duration as timeTracking_duration, time_tracking.status as timeTracking_status, time_tracking.updated_by as timeTracking_updatedBy, time_tracking.updated_at as timeTracking_updatedAt, time_tracking.created_at as timeTracking_createdAt FROM users JOIN attendance ON attendance.user_id = users.user_id JOIN files ON files.uploaded_by = users.user_id JOIN invoices ON invoices.user_id = users.user_id JOIN leaves ON leaves.user_id = users.user_id JOIN meetings ON meetings.created_by = users.user_id JOIN messages_n ON (messages_n.sender_id = users.user_id OR messages_n.receiver_id = users.user_id) JOIN projects ON (projects.created_by = users.user_id OR projects.project_id = files.project_id) JOIN tasks_n ON (tasks_n.created_by = users.user_id OR tasks_n.assignee_id = users.user_id OR tasks_n.task_id = files.task_id OR tasks_n.project_id = projects.project_id) JOIN task_comments ON (task_comments.user_id = users.user_id OR task_comments.task_id = tasks_n.task_id) JOIN teams ON (teams.created_by = users.user_id OR teams.team_id = projects.team_id) JOIN time_tracking ON (time_tracking.user_id = users.user_id OR time_tracking.task_id = tasks_n.task_id) WHERE users.user_id = {{id}} OR users.tracking_id IS NULL",
                              
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
                  
                ],
              },
            },
          ],
        },
      };
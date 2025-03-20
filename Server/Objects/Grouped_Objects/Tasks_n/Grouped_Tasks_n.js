const parameters = require('./CRUD_parameters');
      global.GroupedCrudsTasks_n_object = {
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
                            Add: "INSERT INTO tasks_n (created_by, assignee_id, project_id, title, description, priority, due_date, updated_by) VALUES ({{tasks_n_task_id}}, {{tasks_n_created_by}}, {{tasks_n_assignee_id}}, {{tasks_n_project_id}}, {{tasks_n_title}}, {{tasks_n_description}}, {{tasks_n_status}}, {{tasks_n_priority}}, {{tasks_n_due_date}}, {{tasks_n_updated_by}}, {{tasks_n_updated_at}}, {{tasks_n_created_at}})",
                            
                            Update: "UPDATE tasks_n SET created_by = {{tasks_n_createdBy}}, assignee_id = {{tasks_n_assigneeId}}, project_id = {{tasks_n_projectId}}, title = {{tasks_n_title}}, description = {{tasks_n_description}}, priority = {{tasks_n_priority}}, due_date = {{tasks_n_dueDate}}, updated_by = {{tasks_n_updatedBy}} WHERE task_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, task_id as id, tasks_n.task_id as tasksN_taskId, tasks_n.created_by as tasksN_createdBy, tasks_n.assignee_id as tasksN_assigneeId, tasks_n.project_id as tasksN_projectId, tasks_n.title as tasksN_title, tasks_n.description as tasksN_description, tasks_n.status as tasksN_status, tasks_n.priority as tasksN_priority, tasks_n.due_date as tasksN_dueDate, tasks_n.updated_by as tasksN_updatedBy, tasks_n.updated_at as tasksN_updatedAt, tasks_n.created_at as tasksN_createdAt FROM tasks_n",
                              
                            View: "SELECT tasks_n.task_id as tasks_n_id, tasks_n.task_id as tasksN_taskId, tasks_n.created_by as tasksN_createdBy, tasks_n.assignee_id as tasksN_assigneeId, tasks_n.project_id as tasksN_projectId, tasks_n.title as tasksN_title, tasks_n.description as tasksN_description, tasks_n.status as tasksN_status, tasks_n.priority as tasksN_priority, tasks_n.due_date as tasksN_dueDate, tasks_n.updated_by as tasksN_updatedBy, tasks_n.updated_at as tasksN_updatedAt, tasks_n.created_at as tasksN_createdAt, users.user_id as users_id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt, projects.project_id as projects_id, projects.project_id as projects_projectId, projects.team_id as projects_teamId, projects.created_by as projects_createdBy, projects.name as projects_name, projects.status as projects_status, projects.updated_by as projects_updatedBy, projects.updated_at as projects_updatedAt, projects.created_at as projects_createdAt, files.file_id as files_id, files.file_id as files_fileId, files.task_id as files_taskId, files.project_id as files_projectId, files.uploaded_by as files_uploadedBy, files.file_name as files_fileName, files.file_url as files_fileUrl, files.file_size as files_fileSize, files.status as files_status, files.updated_by as files_updatedBy, files.updated_at as files_updatedAt, files.created_at as files_createdAt, task_comments.comment_id as task_comments_id, task_comments.comment_id as taskComments_commentId, task_comments.task_id as taskComments_taskId, task_comments.user_id as taskComments_userId, task_comments.comment as taskComments_comment, task_comments.status as taskComments_status, task_comments.updated_by as taskComments_updatedBy, task_comments.updated_at as taskComments_updatedAt, task_comments.created_at as taskComments_createdAt, task_tags.tag_id as task_tags_id, task_tags.tag_id as taskTags_tagId, task_tags.task_id as taskTags_taskId, task_tags.tag as taskTags_tag, task_tags.status as taskTags_status, task_tags.updated_by as taskTags_updatedBy, task_tags.updated_at as taskTags_updatedAt, task_tags.created_at as taskTags_createdAt, time_tracking.tracking_id as time_tracking_id, time_tracking.tracking_id as timeTracking_trackingId, time_tracking.task_id as timeTracking_taskId, time_tracking.user_id as timeTracking_userId, time_tracking.start_time as timeTracking_startTime, time_tracking.end_time as timeTracking_endTime, time_tracking.duration as timeTracking_duration, time_tracking.status as timeTracking_status, time_tracking.updated_by as timeTracking_updatedBy, time_tracking.updated_at as timeTracking_updatedAt, time_tracking.created_at as timeTracking_createdAt FROM tasks_n JOIN users ON users.user_id = tasks_n.created_by JOIN projects ON (projects.project_id = tasks_n.project_id OR projects.created_by = users.user_id) JOIN files ON (files.task_id = tasks_n.task_id OR files.uploaded_by = users.user_id OR files.project_id = projects.project_id) JOIN task_comments ON (task_comments.task_id = tasks_n.task_id OR task_comments.user_id = users.user_id) JOIN task_tags ON task_tags.task_id = tasks_n.task_id JOIN time_tracking ON (time_tracking.task_id = tasks_n.task_id OR time_tracking.user_id = users.user_id) WHERE tasks_n.task_id = {{id}} OR tasks_n.task_id IS NULL",
                              
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
                              
                            View: "SELECT tasks_n.task_id as tasks_n_id, tasks_n.task_id as tasksN_taskId, tasks_n.created_by as tasksN_createdBy, tasks_n.assignee_id as tasksN_assigneeId, tasks_n.project_id as tasksN_projectId, tasks_n.title as tasksN_title, tasks_n.description as tasksN_description, tasks_n.status as tasksN_status, tasks_n.priority as tasksN_priority, tasks_n.due_date as tasksN_dueDate, tasks_n.updated_by as tasksN_updatedBy, tasks_n.updated_at as tasksN_updatedAt, tasks_n.created_at as tasksN_createdAt, users.user_id as users_id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt, projects.project_id as projects_id, projects.project_id as projects_projectId, projects.team_id as projects_teamId, projects.created_by as projects_createdBy, projects.name as projects_name, projects.status as projects_status, projects.updated_by as projects_updatedBy, projects.updated_at as projects_updatedAt, projects.created_at as projects_createdAt, files.file_id as files_id, files.file_id as files_fileId, files.task_id as files_taskId, files.project_id as files_projectId, files.uploaded_by as files_uploadedBy, files.file_name as files_fileName, files.file_url as files_fileUrl, files.file_size as files_fileSize, files.status as files_status, files.updated_by as files_updatedBy, files.updated_at as files_updatedAt, files.created_at as files_createdAt, task_comments.comment_id as task_comments_id, task_comments.comment_id as taskComments_commentId, task_comments.task_id as taskComments_taskId, task_comments.user_id as taskComments_userId, task_comments.comment as taskComments_comment, task_comments.status as taskComments_status, task_comments.updated_by as taskComments_updatedBy, task_comments.updated_at as taskComments_updatedAt, task_comments.created_at as taskComments_createdAt, task_tags.tag_id as task_tags_id, task_tags.tag_id as taskTags_tagId, task_tags.task_id as taskTags_taskId, task_tags.tag as taskTags_tag, task_tags.status as taskTags_status, task_tags.updated_by as taskTags_updatedBy, task_tags.updated_at as taskTags_updatedAt, task_tags.created_at as taskTags_createdAt, time_tracking.tracking_id as time_tracking_id, time_tracking.tracking_id as timeTracking_trackingId, time_tracking.task_id as timeTracking_taskId, time_tracking.user_id as timeTracking_userId, time_tracking.start_time as timeTracking_startTime, time_tracking.end_time as timeTracking_endTime, time_tracking.duration as timeTracking_duration, time_tracking.status as timeTracking_status, time_tracking.updated_by as timeTracking_updatedBy, time_tracking.updated_at as timeTracking_updatedAt, time_tracking.created_at as timeTracking_createdAt FROM tasks_n JOIN users ON users.user_id = tasks_n.created_by JOIN projects ON (projects.project_id = tasks_n.project_id OR projects.created_by = users.user_id) JOIN files ON (files.task_id = tasks_n.task_id OR files.uploaded_by = users.user_id OR files.project_id = projects.project_id) JOIN task_comments ON (task_comments.task_id = tasks_n.task_id OR task_comments.user_id = users.user_id) JOIN task_tags ON task_tags.task_id = tasks_n.task_id JOIN time_tracking ON (time_tracking.task_id = tasks_n.task_id OR time_tracking.user_id = users.user_id) WHERE tasks_n.task_id = {{id}} OR tasks_n.user_id IS NULL",
                              
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
                            Add: "INSERT INTO projects (team_id, created_by, name, updated_by) VALUES ({{projects_project_id}}, {{projects_team_id}}, {{projects_created_by}}, {{projects_name}}, {{projects_status}}, {{projects_updated_by}}, {{projects_updated_at}}, {{projects_created_at}})",
                            
                            Update: "UPDATE projects SET team_id = {{projects_teamId}}, created_by = {{projects_createdBy}}, name = {{projects_name}}, updated_by = {{projects_updatedBy}} WHERE project_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, project_id as id, projects.project_id as projects_projectId, projects.team_id as projects_teamId, projects.created_by as projects_createdBy, projects.name as projects_name, projects.status as projects_status, projects.updated_by as projects_updatedBy, projects.updated_at as projects_updatedAt, projects.created_at as projects_createdAt FROM projects",
                              
                            View: "SELECT tasks_n.task_id as tasks_n_id, tasks_n.task_id as tasksN_taskId, tasks_n.created_by as tasksN_createdBy, tasks_n.assignee_id as tasksN_assigneeId, tasks_n.project_id as tasksN_projectId, tasks_n.title as tasksN_title, tasks_n.description as tasksN_description, tasks_n.status as tasksN_status, tasks_n.priority as tasksN_priority, tasks_n.due_date as tasksN_dueDate, tasks_n.updated_by as tasksN_updatedBy, tasks_n.updated_at as tasksN_updatedAt, tasks_n.created_at as tasksN_createdAt, users.user_id as users_id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt, projects.project_id as projects_id, projects.project_id as projects_projectId, projects.team_id as projects_teamId, projects.created_by as projects_createdBy, projects.name as projects_name, projects.status as projects_status, projects.updated_by as projects_updatedBy, projects.updated_at as projects_updatedAt, projects.created_at as projects_createdAt, files.file_id as files_id, files.file_id as files_fileId, files.task_id as files_taskId, files.project_id as files_projectId, files.uploaded_by as files_uploadedBy, files.file_name as files_fileName, files.file_url as files_fileUrl, files.file_size as files_fileSize, files.status as files_status, files.updated_by as files_updatedBy, files.updated_at as files_updatedAt, files.created_at as files_createdAt, task_comments.comment_id as task_comments_id, task_comments.comment_id as taskComments_commentId, task_comments.task_id as taskComments_taskId, task_comments.user_id as taskComments_userId, task_comments.comment as taskComments_comment, task_comments.status as taskComments_status, task_comments.updated_by as taskComments_updatedBy, task_comments.updated_at as taskComments_updatedAt, task_comments.created_at as taskComments_createdAt, task_tags.tag_id as task_tags_id, task_tags.tag_id as taskTags_tagId, task_tags.task_id as taskTags_taskId, task_tags.tag as taskTags_tag, task_tags.status as taskTags_status, task_tags.updated_by as taskTags_updatedBy, task_tags.updated_at as taskTags_updatedAt, task_tags.created_at as taskTags_createdAt, time_tracking.tracking_id as time_tracking_id, time_tracking.tracking_id as timeTracking_trackingId, time_tracking.task_id as timeTracking_taskId, time_tracking.user_id as timeTracking_userId, time_tracking.start_time as timeTracking_startTime, time_tracking.end_time as timeTracking_endTime, time_tracking.duration as timeTracking_duration, time_tracking.status as timeTracking_status, time_tracking.updated_by as timeTracking_updatedBy, time_tracking.updated_at as timeTracking_updatedAt, time_tracking.created_at as timeTracking_createdAt FROM tasks_n JOIN users ON users.user_id = tasks_n.created_by JOIN projects ON (projects.project_id = tasks_n.project_id OR projects.created_by = users.user_id) JOIN files ON (files.task_id = tasks_n.task_id OR files.uploaded_by = users.user_id OR files.project_id = projects.project_id) JOIN task_comments ON (task_comments.task_id = tasks_n.task_id OR task_comments.user_id = users.user_id) JOIN task_tags ON task_tags.task_id = tasks_n.task_id JOIN time_tracking ON (time_tracking.task_id = tasks_n.task_id OR time_tracking.user_id = users.user_id) WHERE tasks_n.task_id = {{id}} OR tasks_n.project_id IS NULL",
                              
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
                            Add: "INSERT INTO files (task_id, project_id, uploaded_by, file_name, file_url, file_size, updated_by) VALUES ({{files_file_id}}, {{files_task_id}}, {{files_project_id}}, {{files_uploaded_by}}, {{files_file_name}}, {{files_file_url}}, {{files_file_size}}, {{files_status}}, {{files_updated_by}}, {{files_updated_at}}, {{files_created_at}})",
                            
                            Update: "UPDATE files SET task_id = {{files_taskId}}, project_id = {{files_projectId}}, uploaded_by = {{files_uploadedBy}}, file_name = {{files_fileName}}, file_url = {{files_fileUrl}}, file_size = {{files_fileSize}}, updated_by = {{files_updatedBy}} WHERE file_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, file_id as id, files.file_id as files_fileId, files.task_id as files_taskId, files.project_id as files_projectId, files.uploaded_by as files_uploadedBy, files.file_name as files_fileName, files.file_url as files_fileUrl, files.file_size as files_fileSize, files.status as files_status, files.updated_by as files_updatedBy, files.updated_at as files_updatedAt, files.created_at as files_createdAt FROM files",
                              
                            View: "SELECT tasks_n.task_id as tasks_n_id, tasks_n.task_id as tasksN_taskId, tasks_n.created_by as tasksN_createdBy, tasks_n.assignee_id as tasksN_assigneeId, tasks_n.project_id as tasksN_projectId, tasks_n.title as tasksN_title, tasks_n.description as tasksN_description, tasks_n.status as tasksN_status, tasks_n.priority as tasksN_priority, tasks_n.due_date as tasksN_dueDate, tasks_n.updated_by as tasksN_updatedBy, tasks_n.updated_at as tasksN_updatedAt, tasks_n.created_at as tasksN_createdAt, users.user_id as users_id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt, projects.project_id as projects_id, projects.project_id as projects_projectId, projects.team_id as projects_teamId, projects.created_by as projects_createdBy, projects.name as projects_name, projects.status as projects_status, projects.updated_by as projects_updatedBy, projects.updated_at as projects_updatedAt, projects.created_at as projects_createdAt, files.file_id as files_id, files.file_id as files_fileId, files.task_id as files_taskId, files.project_id as files_projectId, files.uploaded_by as files_uploadedBy, files.file_name as files_fileName, files.file_url as files_fileUrl, files.file_size as files_fileSize, files.status as files_status, files.updated_by as files_updatedBy, files.updated_at as files_updatedAt, files.created_at as files_createdAt, task_comments.comment_id as task_comments_id, task_comments.comment_id as taskComments_commentId, task_comments.task_id as taskComments_taskId, task_comments.user_id as taskComments_userId, task_comments.comment as taskComments_comment, task_comments.status as taskComments_status, task_comments.updated_by as taskComments_updatedBy, task_comments.updated_at as taskComments_updatedAt, task_comments.created_at as taskComments_createdAt, task_tags.tag_id as task_tags_id, task_tags.tag_id as taskTags_tagId, task_tags.task_id as taskTags_taskId, task_tags.tag as taskTags_tag, task_tags.status as taskTags_status, task_tags.updated_by as taskTags_updatedBy, task_tags.updated_at as taskTags_updatedAt, task_tags.created_at as taskTags_createdAt, time_tracking.tracking_id as time_tracking_id, time_tracking.tracking_id as timeTracking_trackingId, time_tracking.task_id as timeTracking_taskId, time_tracking.user_id as timeTracking_userId, time_tracking.start_time as timeTracking_startTime, time_tracking.end_time as timeTracking_endTime, time_tracking.duration as timeTracking_duration, time_tracking.status as timeTracking_status, time_tracking.updated_by as timeTracking_updatedBy, time_tracking.updated_at as timeTracking_updatedAt, time_tracking.created_at as timeTracking_createdAt FROM tasks_n JOIN users ON users.user_id = tasks_n.created_by JOIN projects ON (projects.project_id = tasks_n.project_id OR projects.created_by = users.user_id) JOIN files ON (files.task_id = tasks_n.task_id OR files.uploaded_by = users.user_id OR files.project_id = projects.project_id) JOIN task_comments ON (task_comments.task_id = tasks_n.task_id OR task_comments.user_id = users.user_id) JOIN task_tags ON task_tags.task_id = tasks_n.task_id JOIN time_tracking ON (time_tracking.task_id = tasks_n.task_id OR time_tracking.user_id = users.user_id) WHERE tasks_n.task_id = {{id}} OR tasks_n.file_id IS NULL",
                              
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
                            Add: "INSERT INTO task_comments (task_id, user_id, comment, updated_by) VALUES ({{task_comments_comment_id}}, {{task_comments_task_id}}, {{task_comments_user_id}}, {{task_comments_comment}}, {{task_comments_status}}, {{task_comments_updated_by}}, {{task_comments_updated_at}}, {{task_comments_created_at}})",
                            
                            Update: "UPDATE task_comments SET task_id = {{task_comments_taskId}}, user_id = {{task_comments_userId}}, comment = {{task_comments_comment}}, updated_by = {{task_comments_updatedBy}} WHERE comment_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, comment_id as id, task_comments.comment_id as taskComments_commentId, task_comments.task_id as taskComments_taskId, task_comments.user_id as taskComments_userId, task_comments.comment as taskComments_comment, task_comments.status as taskComments_status, task_comments.updated_by as taskComments_updatedBy, task_comments.updated_at as taskComments_updatedAt, task_comments.created_at as taskComments_createdAt FROM task_comments",
                              
                            View: "SELECT tasks_n.task_id as tasks_n_id, tasks_n.task_id as tasksN_taskId, tasks_n.created_by as tasksN_createdBy, tasks_n.assignee_id as tasksN_assigneeId, tasks_n.project_id as tasksN_projectId, tasks_n.title as tasksN_title, tasks_n.description as tasksN_description, tasks_n.status as tasksN_status, tasks_n.priority as tasksN_priority, tasks_n.due_date as tasksN_dueDate, tasks_n.updated_by as tasksN_updatedBy, tasks_n.updated_at as tasksN_updatedAt, tasks_n.created_at as tasksN_createdAt, users.user_id as users_id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt, projects.project_id as projects_id, projects.project_id as projects_projectId, projects.team_id as projects_teamId, projects.created_by as projects_createdBy, projects.name as projects_name, projects.status as projects_status, projects.updated_by as projects_updatedBy, projects.updated_at as projects_updatedAt, projects.created_at as projects_createdAt, files.file_id as files_id, files.file_id as files_fileId, files.task_id as files_taskId, files.project_id as files_projectId, files.uploaded_by as files_uploadedBy, files.file_name as files_fileName, files.file_url as files_fileUrl, files.file_size as files_fileSize, files.status as files_status, files.updated_by as files_updatedBy, files.updated_at as files_updatedAt, files.created_at as files_createdAt, task_comments.comment_id as task_comments_id, task_comments.comment_id as taskComments_commentId, task_comments.task_id as taskComments_taskId, task_comments.user_id as taskComments_userId, task_comments.comment as taskComments_comment, task_comments.status as taskComments_status, task_comments.updated_by as taskComments_updatedBy, task_comments.updated_at as taskComments_updatedAt, task_comments.created_at as taskComments_createdAt, task_tags.tag_id as task_tags_id, task_tags.tag_id as taskTags_tagId, task_tags.task_id as taskTags_taskId, task_tags.tag as taskTags_tag, task_tags.status as taskTags_status, task_tags.updated_by as taskTags_updatedBy, task_tags.updated_at as taskTags_updatedAt, task_tags.created_at as taskTags_createdAt, time_tracking.tracking_id as time_tracking_id, time_tracking.tracking_id as timeTracking_trackingId, time_tracking.task_id as timeTracking_taskId, time_tracking.user_id as timeTracking_userId, time_tracking.start_time as timeTracking_startTime, time_tracking.end_time as timeTracking_endTime, time_tracking.duration as timeTracking_duration, time_tracking.status as timeTracking_status, time_tracking.updated_by as timeTracking_updatedBy, time_tracking.updated_at as timeTracking_updatedAt, time_tracking.created_at as timeTracking_createdAt FROM tasks_n JOIN users ON users.user_id = tasks_n.created_by JOIN projects ON (projects.project_id = tasks_n.project_id OR projects.created_by = users.user_id) JOIN files ON (files.task_id = tasks_n.task_id OR files.uploaded_by = users.user_id OR files.project_id = projects.project_id) JOIN task_comments ON (task_comments.task_id = tasks_n.task_id OR task_comments.user_id = users.user_id) JOIN task_tags ON task_tags.task_id = tasks_n.task_id JOIN time_tracking ON (time_tracking.task_id = tasks_n.task_id OR time_tracking.user_id = users.user_id) WHERE tasks_n.task_id = {{id}} OR tasks_n.comment_id IS NULL",
                              
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
                            Add: "INSERT INTO task_tags (task_id, tag, updated_by) VALUES ({{task_tags_tag_id}}, {{task_tags_task_id}}, {{task_tags_tag}}, {{task_tags_status}}, {{task_tags_updated_by}}, {{task_tags_updated_at}}, {{task_tags_created_at}})",
                            
                            Update: "UPDATE task_tags SET task_id = {{task_tags_taskId}}, tag = {{task_tags_tag}}, updated_by = {{task_tags_updatedBy}} WHERE tag_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, tag_id as id, task_tags.tag_id as taskTags_tagId, task_tags.task_id as taskTags_taskId, task_tags.tag as taskTags_tag, task_tags.status as taskTags_status, task_tags.updated_by as taskTags_updatedBy, task_tags.updated_at as taskTags_updatedAt, task_tags.created_at as taskTags_createdAt FROM task_tags",
                              
                            View: "SELECT tasks_n.task_id as tasks_n_id, tasks_n.task_id as tasksN_taskId, tasks_n.created_by as tasksN_createdBy, tasks_n.assignee_id as tasksN_assigneeId, tasks_n.project_id as tasksN_projectId, tasks_n.title as tasksN_title, tasks_n.description as tasksN_description, tasks_n.status as tasksN_status, tasks_n.priority as tasksN_priority, tasks_n.due_date as tasksN_dueDate, tasks_n.updated_by as tasksN_updatedBy, tasks_n.updated_at as tasksN_updatedAt, tasks_n.created_at as tasksN_createdAt, users.user_id as users_id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt, projects.project_id as projects_id, projects.project_id as projects_projectId, projects.team_id as projects_teamId, projects.created_by as projects_createdBy, projects.name as projects_name, projects.status as projects_status, projects.updated_by as projects_updatedBy, projects.updated_at as projects_updatedAt, projects.created_at as projects_createdAt, files.file_id as files_id, files.file_id as files_fileId, files.task_id as files_taskId, files.project_id as files_projectId, files.uploaded_by as files_uploadedBy, files.file_name as files_fileName, files.file_url as files_fileUrl, files.file_size as files_fileSize, files.status as files_status, files.updated_by as files_updatedBy, files.updated_at as files_updatedAt, files.created_at as files_createdAt, task_comments.comment_id as task_comments_id, task_comments.comment_id as taskComments_commentId, task_comments.task_id as taskComments_taskId, task_comments.user_id as taskComments_userId, task_comments.comment as taskComments_comment, task_comments.status as taskComments_status, task_comments.updated_by as taskComments_updatedBy, task_comments.updated_at as taskComments_updatedAt, task_comments.created_at as taskComments_createdAt, task_tags.tag_id as task_tags_id, task_tags.tag_id as taskTags_tagId, task_tags.task_id as taskTags_taskId, task_tags.tag as taskTags_tag, task_tags.status as taskTags_status, task_tags.updated_by as taskTags_updatedBy, task_tags.updated_at as taskTags_updatedAt, task_tags.created_at as taskTags_createdAt, time_tracking.tracking_id as time_tracking_id, time_tracking.tracking_id as timeTracking_trackingId, time_tracking.task_id as timeTracking_taskId, time_tracking.user_id as timeTracking_userId, time_tracking.start_time as timeTracking_startTime, time_tracking.end_time as timeTracking_endTime, time_tracking.duration as timeTracking_duration, time_tracking.status as timeTracking_status, time_tracking.updated_by as timeTracking_updatedBy, time_tracking.updated_at as timeTracking_updatedAt, time_tracking.created_at as timeTracking_createdAt FROM tasks_n JOIN users ON users.user_id = tasks_n.created_by JOIN projects ON (projects.project_id = tasks_n.project_id OR projects.created_by = users.user_id) JOIN files ON (files.task_id = tasks_n.task_id OR files.uploaded_by = users.user_id OR files.project_id = projects.project_id) JOIN task_comments ON (task_comments.task_id = tasks_n.task_id OR task_comments.user_id = users.user_id) JOIN task_tags ON task_tags.task_id = tasks_n.task_id JOIN time_tracking ON (time_tracking.task_id = tasks_n.task_id OR time_tracking.user_id = users.user_id) WHERE tasks_n.task_id = {{id}} OR tasks_n.tag_id IS NULL",
                              
                            Delete: "UPDATE task_tags SET status = 'inactive' WHERE tag_id = {{id}}",           
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
                          { Add: "insert_task_tags", View: "view_task_tags", List: "list_task_tags", Update: "update_task_tags", Delete: "delete_task_tags" },
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
                              
                            View: "SELECT tasks_n.task_id as tasks_n_id, tasks_n.task_id as tasksN_taskId, tasks_n.created_by as tasksN_createdBy, tasks_n.assignee_id as tasksN_assigneeId, tasks_n.project_id as tasksN_projectId, tasks_n.title as tasksN_title, tasks_n.description as tasksN_description, tasks_n.status as tasksN_status, tasks_n.priority as tasksN_priority, tasks_n.due_date as tasksN_dueDate, tasks_n.updated_by as tasksN_updatedBy, tasks_n.updated_at as tasksN_updatedAt, tasks_n.created_at as tasksN_createdAt, users.user_id as users_id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt, projects.project_id as projects_id, projects.project_id as projects_projectId, projects.team_id as projects_teamId, projects.created_by as projects_createdBy, projects.name as projects_name, projects.status as projects_status, projects.updated_by as projects_updatedBy, projects.updated_at as projects_updatedAt, projects.created_at as projects_createdAt, files.file_id as files_id, files.file_id as files_fileId, files.task_id as files_taskId, files.project_id as files_projectId, files.uploaded_by as files_uploadedBy, files.file_name as files_fileName, files.file_url as files_fileUrl, files.file_size as files_fileSize, files.status as files_status, files.updated_by as files_updatedBy, files.updated_at as files_updatedAt, files.created_at as files_createdAt, task_comments.comment_id as task_comments_id, task_comments.comment_id as taskComments_commentId, task_comments.task_id as taskComments_taskId, task_comments.user_id as taskComments_userId, task_comments.comment as taskComments_comment, task_comments.status as taskComments_status, task_comments.updated_by as taskComments_updatedBy, task_comments.updated_at as taskComments_updatedAt, task_comments.created_at as taskComments_createdAt, task_tags.tag_id as task_tags_id, task_tags.tag_id as taskTags_tagId, task_tags.task_id as taskTags_taskId, task_tags.tag as taskTags_tag, task_tags.status as taskTags_status, task_tags.updated_by as taskTags_updatedBy, task_tags.updated_at as taskTags_updatedAt, task_tags.created_at as taskTags_createdAt, time_tracking.tracking_id as time_tracking_id, time_tracking.tracking_id as timeTracking_trackingId, time_tracking.task_id as timeTracking_taskId, time_tracking.user_id as timeTracking_userId, time_tracking.start_time as timeTracking_startTime, time_tracking.end_time as timeTracking_endTime, time_tracking.duration as timeTracking_duration, time_tracking.status as timeTracking_status, time_tracking.updated_by as timeTracking_updatedBy, time_tracking.updated_at as timeTracking_updatedAt, time_tracking.created_at as timeTracking_createdAt FROM tasks_n JOIN users ON users.user_id = tasks_n.created_by JOIN projects ON (projects.project_id = tasks_n.project_id OR projects.created_by = users.user_id) JOIN files ON (files.task_id = tasks_n.task_id OR files.uploaded_by = users.user_id OR files.project_id = projects.project_id) JOIN task_comments ON (task_comments.task_id = tasks_n.task_id OR task_comments.user_id = users.user_id) JOIN task_tags ON task_tags.task_id = tasks_n.task_id JOIN time_tracking ON (time_tracking.task_id = tasks_n.task_id OR time_tracking.user_id = users.user_id) WHERE tasks_n.task_id = {{id}} OR tasks_n.tracking_id IS NULL",
                              
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
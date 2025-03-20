const parameters = require('./CRUD_parameters');
      global.GroupedCrudsFiles_object = {
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
                            Add: "INSERT INTO files (task_id, project_id, uploaded_by, file_name, file_url, file_size, updated_by) VALUES ({{files_file_id}}, {{files_task_id}}, {{files_project_id}}, {{files_uploaded_by}}, {{files_file_name}}, {{files_file_url}}, {{files_file_size}}, {{files_status}}, {{files_updated_by}}, {{files_updated_at}}, {{files_created_at}})",
                            
                            Update: "UPDATE files SET task_id = {{files_taskId}}, project_id = {{files_projectId}}, uploaded_by = {{files_uploadedBy}}, file_name = {{files_fileName}}, file_url = {{files_fileUrl}}, file_size = {{files_fileSize}}, updated_by = {{files_updatedBy}} WHERE file_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, file_id as id, files.file_id as files_fileId, files.task_id as files_taskId, files.project_id as files_projectId, files.uploaded_by as files_uploadedBy, files.file_name as files_fileName, files.file_url as files_fileUrl, files.file_size as files_fileSize, files.status as files_status, files.updated_by as files_updatedBy, files.updated_at as files_updatedAt, files.created_at as files_createdAt FROM files",
                              
                            View: "SELECT files.file_id as files_id, files.file_id as files_fileId, files.task_id as files_taskId, files.project_id as files_projectId, files.uploaded_by as files_uploadedBy, files.file_name as files_fileName, files.file_url as files_fileUrl, files.file_size as files_fileSize, files.status as files_status, files.updated_by as files_updatedBy, files.updated_at as files_updatedAt, files.created_at as files_createdAt, tasks_n.task_id as tasks_n_id, tasks_n.task_id as tasksN_taskId, tasks_n.created_by as tasksN_createdBy, tasks_n.assignee_id as tasksN_assigneeId, tasks_n.project_id as tasksN_projectId, tasks_n.title as tasksN_title, tasks_n.description as tasksN_description, tasks_n.status as tasksN_status, tasks_n.priority as tasksN_priority, tasks_n.due_date as tasksN_dueDate, tasks_n.updated_by as tasksN_updatedBy, tasks_n.updated_at as tasksN_updatedAt, tasks_n.created_at as tasksN_createdAt, projects.project_id as projects_id, projects.project_id as projects_projectId, projects.team_id as projects_teamId, projects.created_by as projects_createdBy, projects.name as projects_name, projects.status as projects_status, projects.updated_by as projects_updatedBy, projects.updated_at as projects_updatedAt, projects.created_at as projects_createdAt, users.user_id as users_id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt FROM files JOIN tasks_n ON tasks_n.task_id = files.task_id JOIN projects ON (projects.project_id = files.project_id OR projects.project_id = tasks_n.project_id) JOIN users ON (users.user_id = files.uploaded_by OR users.user_id = tasks_n.created_by OR users.user_id = projects.created_by) WHERE files.file_id = {{id}} OR files.file_id IS NULL",
                              
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
                            Add: "INSERT INTO tasks_n (created_by, assignee_id, project_id, title, description, priority, due_date, updated_by) VALUES ({{tasks_n_task_id}}, {{tasks_n_created_by}}, {{tasks_n_assignee_id}}, {{tasks_n_project_id}}, {{tasks_n_title}}, {{tasks_n_description}}, {{tasks_n_status}}, {{tasks_n_priority}}, {{tasks_n_due_date}}, {{tasks_n_updated_by}}, {{tasks_n_updated_at}}, {{tasks_n_created_at}})",
                            
                            Update: "UPDATE tasks_n SET created_by = {{tasks_n_createdBy}}, assignee_id = {{tasks_n_assigneeId}}, project_id = {{tasks_n_projectId}}, title = {{tasks_n_title}}, description = {{tasks_n_description}}, priority = {{tasks_n_priority}}, due_date = {{tasks_n_dueDate}}, updated_by = {{tasks_n_updatedBy}} WHERE task_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, task_id as id, tasks_n.task_id as tasksN_taskId, tasks_n.created_by as tasksN_createdBy, tasks_n.assignee_id as tasksN_assigneeId, tasks_n.project_id as tasksN_projectId, tasks_n.title as tasksN_title, tasks_n.description as tasksN_description, tasks_n.status as tasksN_status, tasks_n.priority as tasksN_priority, tasks_n.due_date as tasksN_dueDate, tasks_n.updated_by as tasksN_updatedBy, tasks_n.updated_at as tasksN_updatedAt, tasks_n.created_at as tasksN_createdAt FROM tasks_n",
                              
                            View: "SELECT files.file_id as files_id, files.file_id as files_fileId, files.task_id as files_taskId, files.project_id as files_projectId, files.uploaded_by as files_uploadedBy, files.file_name as files_fileName, files.file_url as files_fileUrl, files.file_size as files_fileSize, files.status as files_status, files.updated_by as files_updatedBy, files.updated_at as files_updatedAt, files.created_at as files_createdAt, tasks_n.task_id as tasks_n_id, tasks_n.task_id as tasksN_taskId, tasks_n.created_by as tasksN_createdBy, tasks_n.assignee_id as tasksN_assigneeId, tasks_n.project_id as tasksN_projectId, tasks_n.title as tasksN_title, tasks_n.description as tasksN_description, tasks_n.status as tasksN_status, tasks_n.priority as tasksN_priority, tasks_n.due_date as tasksN_dueDate, tasks_n.updated_by as tasksN_updatedBy, tasks_n.updated_at as tasksN_updatedAt, tasks_n.created_at as tasksN_createdAt, projects.project_id as projects_id, projects.project_id as projects_projectId, projects.team_id as projects_teamId, projects.created_by as projects_createdBy, projects.name as projects_name, projects.status as projects_status, projects.updated_by as projects_updatedBy, projects.updated_at as projects_updatedAt, projects.created_at as projects_createdAt, users.user_id as users_id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt FROM files JOIN tasks_n ON tasks_n.task_id = files.task_id JOIN projects ON (projects.project_id = files.project_id OR projects.project_id = tasks_n.project_id) JOIN users ON (users.user_id = files.uploaded_by OR users.user_id = tasks_n.created_by OR users.user_id = projects.created_by) WHERE files.file_id = {{id}} OR files.task_id IS NULL",
                              
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
                            Add: "INSERT INTO projects (team_id, created_by, name, updated_by) VALUES ({{projects_project_id}}, {{projects_team_id}}, {{projects_created_by}}, {{projects_name}}, {{projects_status}}, {{projects_updated_by}}, {{projects_updated_at}}, {{projects_created_at}})",
                            
                            Update: "UPDATE projects SET team_id = {{projects_teamId}}, created_by = {{projects_createdBy}}, name = {{projects_name}}, updated_by = {{projects_updatedBy}} WHERE project_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, project_id as id, projects.project_id as projects_projectId, projects.team_id as projects_teamId, projects.created_by as projects_createdBy, projects.name as projects_name, projects.status as projects_status, projects.updated_by as projects_updatedBy, projects.updated_at as projects_updatedAt, projects.created_at as projects_createdAt FROM projects",
                              
                            View: "SELECT files.file_id as files_id, files.file_id as files_fileId, files.task_id as files_taskId, files.project_id as files_projectId, files.uploaded_by as files_uploadedBy, files.file_name as files_fileName, files.file_url as files_fileUrl, files.file_size as files_fileSize, files.status as files_status, files.updated_by as files_updatedBy, files.updated_at as files_updatedAt, files.created_at as files_createdAt, tasks_n.task_id as tasks_n_id, tasks_n.task_id as tasksN_taskId, tasks_n.created_by as tasksN_createdBy, tasks_n.assignee_id as tasksN_assigneeId, tasks_n.project_id as tasksN_projectId, tasks_n.title as tasksN_title, tasks_n.description as tasksN_description, tasks_n.status as tasksN_status, tasks_n.priority as tasksN_priority, tasks_n.due_date as tasksN_dueDate, tasks_n.updated_by as tasksN_updatedBy, tasks_n.updated_at as tasksN_updatedAt, tasks_n.created_at as tasksN_createdAt, projects.project_id as projects_id, projects.project_id as projects_projectId, projects.team_id as projects_teamId, projects.created_by as projects_createdBy, projects.name as projects_name, projects.status as projects_status, projects.updated_by as projects_updatedBy, projects.updated_at as projects_updatedAt, projects.created_at as projects_createdAt, users.user_id as users_id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt FROM files JOIN tasks_n ON tasks_n.task_id = files.task_id JOIN projects ON (projects.project_id = files.project_id OR projects.project_id = tasks_n.project_id) JOIN users ON (users.user_id = files.uploaded_by OR users.user_id = tasks_n.created_by OR users.user_id = projects.created_by) WHERE files.file_id = {{id}} OR files.project_id IS NULL",
                              
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
                            Add: "INSERT INTO users (email, phone_no, cnic, email, phone_no, cnic, first_name, last_name, gender, father_name, image_attachment_id, address, date_of_birth, blood_group, religion, updated_by) VALUES ({{users_user_id}}, {{users_email}}, {{users_status}}, {{users_phone_no}}, {{users_status}}, {{users_cnic}}, {{users_status}}, {{users_email}}, {{users_status}}, {{users_phone_no}}, {{users_status}}, {{users_cnic}}, {{users_status}}, {{users_first_name}}, {{users_last_name}}, {{users_gender}}, {{users_father_name}}, {{users_image_attachment_id}}, {{users_address}}, {{users_date_of_birth}}, {{users_blood_group}}, {{users_religion}}, {{users_updated_by}}, {{users_created_at}}, {{users_updated_at}})",
                            
                            Update: "UPDATE users SET email = {{users_email}}, phone_no = {{users_phoneNo}}, cnic = {{users_cnic}}, email = {{users_email}}, phone_no = {{users_phoneNo}}, cnic = {{users_cnic}}, first_name = {{users_firstName}}, last_name = {{users_lastName}}, gender = {{users_gender}}, father_name = {{users_fatherName}}, image_attachment_id = {{users_imageAttachmentId}}, address = {{users_address}}, date_of_birth = {{users_dateOfBirth}}, blood_group = {{users_bloodGroup}}, religion = {{users_religion}}, updated_by = {{users_updatedBy}} WHERE user_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, user_id as id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt FROM users",
                              
                            View: "SELECT files.file_id as files_id, files.file_id as files_fileId, files.task_id as files_taskId, files.project_id as files_projectId, files.uploaded_by as files_uploadedBy, files.file_name as files_fileName, files.file_url as files_fileUrl, files.file_size as files_fileSize, files.status as files_status, files.updated_by as files_updatedBy, files.updated_at as files_updatedAt, files.created_at as files_createdAt, tasks_n.task_id as tasks_n_id, tasks_n.task_id as tasksN_taskId, tasks_n.created_by as tasksN_createdBy, tasks_n.assignee_id as tasksN_assigneeId, tasks_n.project_id as tasksN_projectId, tasks_n.title as tasksN_title, tasks_n.description as tasksN_description, tasks_n.status as tasksN_status, tasks_n.priority as tasksN_priority, tasks_n.due_date as tasksN_dueDate, tasks_n.updated_by as tasksN_updatedBy, tasks_n.updated_at as tasksN_updatedAt, tasks_n.created_at as tasksN_createdAt, projects.project_id as projects_id, projects.project_id as projects_projectId, projects.team_id as projects_teamId, projects.created_by as projects_createdBy, projects.name as projects_name, projects.status as projects_status, projects.updated_by as projects_updatedBy, projects.updated_at as projects_updatedAt, projects.created_at as projects_createdAt, users.user_id as users_id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt FROM files JOIN tasks_n ON tasks_n.task_id = files.task_id JOIN projects ON (projects.project_id = files.project_id OR projects.project_id = tasks_n.project_id) JOIN users ON (users.user_id = files.uploaded_by OR users.user_id = tasks_n.created_by OR users.user_id = projects.created_by) WHERE files.file_id = {{id}} OR files.user_id IS NULL",
                              
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
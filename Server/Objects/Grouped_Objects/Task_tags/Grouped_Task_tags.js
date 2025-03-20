const parameters = require('./CRUD_parameters');
      global.GroupedCrudsTask_tags_object = {
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
                            Add: "INSERT INTO task_tags (task_id, tag, updated_by) VALUES ({{task_tags_tag_id}}, {{task_tags_task_id}}, {{task_tags_tag}}, {{task_tags_status}}, {{task_tags_updated_by}}, {{task_tags_updated_at}}, {{task_tags_created_at}})",
                            
                            Update: "UPDATE task_tags SET task_id = {{task_tags_taskId}}, tag = {{task_tags_tag}}, updated_by = {{task_tags_updatedBy}} WHERE tag_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, tag_id as id, task_tags.tag_id as taskTags_tagId, task_tags.task_id as taskTags_taskId, task_tags.tag as taskTags_tag, task_tags.status as taskTags_status, task_tags.updated_by as taskTags_updatedBy, task_tags.updated_at as taskTags_updatedAt, task_tags.created_at as taskTags_createdAt FROM task_tags",
                              
                            View: "SELECT task_tags.tag_id as task_tags_id, task_tags.tag_id as taskTags_tagId, task_tags.task_id as taskTags_taskId, task_tags.tag as taskTags_tag, task_tags.status as taskTags_status, task_tags.updated_by as taskTags_updatedBy, task_tags.updated_at as taskTags_updatedAt, task_tags.created_at as taskTags_createdAt, tasks_n.task_id as tasks_n_id, tasks_n.task_id as tasksN_taskId, tasks_n.created_by as tasksN_createdBy, tasks_n.assignee_id as tasksN_assigneeId, tasks_n.project_id as tasksN_projectId, tasks_n.title as tasksN_title, tasks_n.description as tasksN_description, tasks_n.status as tasksN_status, tasks_n.priority as tasksN_priority, tasks_n.due_date as tasksN_dueDate, tasks_n.updated_by as tasksN_updatedBy, tasks_n.updated_at as tasksN_updatedAt, tasks_n.created_at as tasksN_createdAt FROM task_tags JOIN tasks_n ON tasks_n.task_id = task_tags.task_id WHERE task_tags.tag_id = {{id}} OR task_tags.tag_id IS NULL",
                              
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
                            Add: "INSERT INTO tasks_n (created_by, assignee_id, project_id, title, description, priority, due_date, updated_by) VALUES ({{tasks_n_task_id}}, {{tasks_n_created_by}}, {{tasks_n_assignee_id}}, {{tasks_n_project_id}}, {{tasks_n_title}}, {{tasks_n_description}}, {{tasks_n_status}}, {{tasks_n_priority}}, {{tasks_n_due_date}}, {{tasks_n_updated_by}}, {{tasks_n_updated_at}}, {{tasks_n_created_at}})",
                            
                            Update: "UPDATE tasks_n SET created_by = {{tasks_n_createdBy}}, assignee_id = {{tasks_n_assigneeId}}, project_id = {{tasks_n_projectId}}, title = {{tasks_n_title}}, description = {{tasks_n_description}}, priority = {{tasks_n_priority}}, due_date = {{tasks_n_dueDate}}, updated_by = {{tasks_n_updatedBy}} WHERE task_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, task_id as id, tasks_n.task_id as tasksN_taskId, tasks_n.created_by as tasksN_createdBy, tasks_n.assignee_id as tasksN_assigneeId, tasks_n.project_id as tasksN_projectId, tasks_n.title as tasksN_title, tasks_n.description as tasksN_description, tasks_n.status as tasksN_status, tasks_n.priority as tasksN_priority, tasks_n.due_date as tasksN_dueDate, tasks_n.updated_by as tasksN_updatedBy, tasks_n.updated_at as tasksN_updatedAt, tasks_n.created_at as tasksN_createdAt FROM tasks_n",
                              
                            View: "SELECT task_tags.tag_id as task_tags_id, task_tags.tag_id as taskTags_tagId, task_tags.task_id as taskTags_taskId, task_tags.tag as taskTags_tag, task_tags.status as taskTags_status, task_tags.updated_by as taskTags_updatedBy, task_tags.updated_at as taskTags_updatedAt, task_tags.created_at as taskTags_createdAt, tasks_n.task_id as tasks_n_id, tasks_n.task_id as tasksN_taskId, tasks_n.created_by as tasksN_createdBy, tasks_n.assignee_id as tasksN_assigneeId, tasks_n.project_id as tasksN_projectId, tasks_n.title as tasksN_title, tasks_n.description as tasksN_description, tasks_n.status as tasksN_status, tasks_n.priority as tasksN_priority, tasks_n.due_date as tasksN_dueDate, tasks_n.updated_by as tasksN_updatedBy, tasks_n.updated_at as tasksN_updatedAt, tasks_n.created_at as tasksN_createdAt FROM task_tags JOIN tasks_n ON tasks_n.task_id = task_tags.task_id WHERE task_tags.tag_id = {{id}} OR task_tags.task_id IS NULL",
                              
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
                  
                ],
              },
            },
          ],
        },
      };
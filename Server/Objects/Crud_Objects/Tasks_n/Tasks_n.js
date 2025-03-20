/* CRUD Objects for table: tasks_n */
        
    const parameters = require('./CRUD_parameters');
    global.CrudTasks_n_object = {
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
                          List: "SELECT tasks_n.task_id as id, task_id as tasks_n_taskId, created_by as tasks_n_createdBy, assignee_id as tasks_n_assigneeId, project_id as tasks_n_projectId, title as tasks_n_title, description as tasks_n_description, status as tasks_n_status, priority as tasks_n_priority, due_date as tasks_n_dueDate, updated_by as tasks_n_updatedBy, updated_at as tasks_n_updatedAt, created_at as tasks_n_createdAt, users.first_name as users_firstName, COUNT(*) OVER () AS table_count FROM tasks_n LEFT JOIN users ON tasks_n.assignee_id = users.task_id",
                          View: "SELECT tasks_n.task_id as id, task_id as tasks_n_taskId, created_by as tasks_n_createdBy, assignee_id as tasks_n_assigneeId, project_id as tasks_n_projectId, title as tasks_n_title, description as tasks_n_description, status as tasks_n_status, priority as tasks_n_priority, due_date as tasks_n_dueDate, updated_by as tasks_n_updatedBy, updated_at as tasks_n_updatedAt, created_at as tasks_n_createdAt, users.first_name as users_firstName FROM tasks_n LEFT JOIN users ON tasks_n.assignee_id = users.task_id WHERE task_id = {{id}} OR task_id IS NULL",
                          Delete: "UPDATE tasks_n SET status = 'inactive' WHERE task_id = {{id}}",           
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
                      permission: { Add: "insert_tasks_n", View:"view_tasks_n", List:"list_tasks_n", Update: "update_tasks_n", Delete: "delete_tasks_n" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Tasks_n retrieved successfully!",
                    errorMessage: "Failed to retrieve Tasks_n.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
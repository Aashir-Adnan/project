/* CRUD Objects for table: tasks */
        
    const parameters = require('./CRUD_parameters');
    global.CrudTasks_object = {
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
                          Add: "INSERT INTO tasks (task_title, task_title, type, task_description, parent_task_id, attachement_id, task_flow_id, task_assigned_to_user_role_designation_department_id, created_by_user_role_designation_department_id, updated_by) VALUES ({{tasks_task_id}}, {{tasks_task_title}}, {{tasks_status}}, {{tasks_task_title}}, {{tasks_status}}, {{tasks_type}}, {{tasks_task_description}}, {{tasks_parent_task_id}}, {{tasks_attachement_id}}, {{tasks_task_flow_id}}, {{tasks_task_assigned_to_user_role_designation_department_id}}, {{tasks_created_by_user_role_designation_department_id}}, {{tasks_updated_at}}, {{tasks_created_at}}, {{tasks_updated_by}})",
                          Update: "UPDATE tasks SET task_title = {{tasks_taskTitle}}, task_title = {{tasks_taskTitle}}, type = {{tasks_type}}, task_description = {{tasks_taskDescription}}, parent_task_id = {{tasks_parentTaskId}}, attachement_id = {{tasks_attachementId}}, task_flow_id = {{tasks_taskFlowId}}, task_assigned_to_user_role_designation_department_id = {{tasks_taskAssignedToUserRoleDesignationDepartmentId}}, created_by_user_role_designation_department_id = {{tasks_createdByUserRoleDesignationDepartmentId}}, updated_by = {{tasks_updatedBy}} WHERE task_id = {{id}}",
                          List: "SELECT tasks.task_id as id, task_id as tasks_taskId, task_title as tasks_taskTitle, status as tasks_status, task_title as tasks_taskTitle, status as tasks_status, type as tasks_type, task_description as tasks_taskDescription, parent_task_id as tasks_parentTaskId, attachement_id as tasks_attachementId, task_flow_id as tasks_taskFlowId, task_assigned_to_user_role_designation_department_id as tasks_taskAssignedToUserRoleDesignationDepartmentId, created_by_user_role_designation_department_id as tasks_createdByUserRoleDesignationDepartmentId, updated_at as tasks_updatedAt, created_at as tasks_createdAt, updated_by as tasks_updatedBy, COUNT(*) OVER () AS table_count FROM tasks ",
                          View: "SELECT tasks.task_id as id, task_id as tasks_taskId, task_title as tasks_taskTitle, status as tasks_status, task_title as tasks_taskTitle, status as tasks_status, type as tasks_type, task_description as tasks_taskDescription, parent_task_id as tasks_parentTaskId, attachement_id as tasks_attachementId, task_flow_id as tasks_taskFlowId, task_assigned_to_user_role_designation_department_id as tasks_taskAssignedToUserRoleDesignationDepartmentId, created_by_user_role_designation_department_id as tasks_createdByUserRoleDesignationDepartmentId, updated_at as tasks_updatedAt, created_at as tasks_createdAt, updated_by as tasks_updatedBy FROM tasks  WHERE task_id = {{id}} OR task_id IS NULL",
                          Delete: "UPDATE tasks SET status = 'inactive' WHERE task_id = {{id}}",           
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
                      permission: { Add: "insert_tasks", View:"view_tasks", List:"list_tasks", Update: "update_tasks", Delete: "delete_tasks" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Tasks retrieved successfully!",
                    errorMessage: "Failed to retrieve Tasks.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
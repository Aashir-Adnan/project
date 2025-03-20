/* CRUD Objects for table: task_history */
        
    const parameters = require('./CRUD_parameters');
    global.CrudTask_history_object = {
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
                          Add: "INSERT INTO task_history (task_id, task_flow_step_id, action, action_by_user_role_designation_department_id, updated_by) VALUES ({{task_history_task_history_id}}, {{task_history_task_id}}, {{task_history_task_flow_step_id}}, {{task_history_action}}, {{task_history_status}}, {{task_history_action_by_user_role_designation_department_id}}, {{task_history_updated_at}}, {{task_history_created_at}}, {{task_history_updated_by}})",
                          Update: "UPDATE task_history SET task_id = {{task_history_taskId}}, task_flow_step_id = {{task_history_taskFlowStepId}}, action = {{task_history_action}}, action_by_user_role_designation_department_id = {{task_history_actionByUserRoleDesignationDepartmentId}}, updated_by = {{task_history_updatedBy}} WHERE task_history_id = {{id}}",
                          List: "SELECT task_history.task_history_id as id, task_history_id as task_history_taskHistoryId, task_id as task_history_taskId, task_flow_step_id as task_history_taskFlowStepId, action as task_history_action, status as task_history_status, action_by_user_role_designation_department_id as task_history_actionByUserRoleDesignationDepartmentId, updated_at as task_history_updatedAt, created_at as task_history_createdAt, updated_by as task_history_updatedBy, COUNT(*) OVER () AS table_count FROM task_history ",
                          View: "SELECT task_history.task_history_id as id, task_history_id as task_history_taskHistoryId, task_id as task_history_taskId, task_flow_step_id as task_history_taskFlowStepId, action as task_history_action, status as task_history_status, action_by_user_role_designation_department_id as task_history_actionByUserRoleDesignationDepartmentId, updated_at as task_history_updatedAt, created_at as task_history_createdAt, updated_by as task_history_updatedBy FROM task_history  WHERE task_history_id = {{id}} OR task_history_id IS NULL",
                          Delete: "UPDATE task_history SET status = 'inactive' WHERE task_history_id = {{id}}",           
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
                      permission: { Add: "insert_task_history", View:"view_task_history", List:"list_task_history", Update: "update_task_history", Delete: "delete_task_history" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Task_history retrieved successfully!",
                    errorMessage: "Failed to retrieve Task_history.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
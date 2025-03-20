/* CRUD Objects for table: task_flow_steps */
        
    const parameters = require('./CRUD_parameters');
    global.CrudTask_flow_steps_object = {
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
                          Add: "INSERT INTO task_flow_steps (task_flow_id, step_title, step_order, step_description, is_cross_department, step_assigned_to_role_department_id, created_by_user_role_department_id, updated_by) VALUES ({{task_flow_steps_task_flow_step_id}}, {{task_flow_steps_task_flow_id}}, {{task_flow_steps_step_title}}, {{task_flow_steps_step_order}}, {{task_flow_steps_status}}, {{task_flow_steps_step_description}}, {{task_flow_steps_is_cross_department}}, {{task_flow_steps_step_assigned_to_role_department_id}}, {{task_flow_steps_created_by_user_role_department_id}}, {{task_flow_steps_updated_at}}, {{task_flow_steps_created_at}}, {{task_flow_steps_updated_by}})",
                          Update: "UPDATE task_flow_steps SET task_flow_id = {{task_flow_steps_taskFlowId}}, step_title = {{task_flow_steps_stepTitle}}, step_order = {{task_flow_steps_stepOrder}}, step_description = {{task_flow_steps_stepDescription}}, is_cross_department = {{task_flow_steps_isCrossDepartment}}, step_assigned_to_role_department_id = {{task_flow_steps_stepAssignedToRoleDepartmentId}}, created_by_user_role_department_id = {{task_flow_steps_createdByUserRoleDepartmentId}}, updated_by = {{task_flow_steps_updatedBy}} WHERE task_flow_step_id = {{id}}",
                          List: "SELECT task_flow_steps.task_flow_step_id as id, task_flow_step_id as task_flow_steps_taskFlowStepId, task_flow_id as task_flow_steps_taskFlowId, step_title as task_flow_steps_stepTitle, step_order as task_flow_steps_stepOrder, status as task_flow_steps_status, step_description as task_flow_steps_stepDescription, is_cross_department as task_flow_steps_isCrossDepartment, step_assigned_to_role_department_id as task_flow_steps_stepAssignedToRoleDepartmentId, created_by_user_role_department_id as task_flow_steps_createdByUserRoleDepartmentId, updated_at as task_flow_steps_updatedAt, created_at as task_flow_steps_createdAt, updated_by as task_flow_steps_updatedBy, COUNT(*) OVER () AS table_count FROM task_flow_steps ",
                          View: "SELECT task_flow_steps.task_flow_step_id as id, task_flow_step_id as task_flow_steps_taskFlowStepId, task_flow_id as task_flow_steps_taskFlowId, step_title as task_flow_steps_stepTitle, step_order as task_flow_steps_stepOrder, status as task_flow_steps_status, step_description as task_flow_steps_stepDescription, is_cross_department as task_flow_steps_isCrossDepartment, step_assigned_to_role_department_id as task_flow_steps_stepAssignedToRoleDepartmentId, created_by_user_role_department_id as task_flow_steps_createdByUserRoleDepartmentId, updated_at as task_flow_steps_updatedAt, created_at as task_flow_steps_createdAt, updated_by as task_flow_steps_updatedBy FROM task_flow_steps  WHERE task_flow_step_id = {{id}} OR task_flow_step_id IS NULL",
                          Delete: "UPDATE task_flow_steps SET status = 'inactive' WHERE task_flow_step_id = {{id}}",           
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
                      permission: { Add: "insert_task_flow_steps", View:"view_task_flow_steps", List:"list_task_flow_steps", Update: "update_task_flow_steps", Delete: "delete_task_flow_steps" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Task_flow_steps retrieved successfully!",
                    errorMessage: "Failed to retrieve Task_flow_steps.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
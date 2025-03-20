const parameters = require('./CRUD_parameters');
      global.GroupedCrudsTask_flow_steps_object = {
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
                            
                            List: "SELECT COUNT(*) as total_count, task_flow_step_id as id, task_flow_steps.task_flow_step_id as taskFlowSteps_taskFlowStepId, task_flow_steps.task_flow_id as taskFlowSteps_taskFlowId, task_flow_steps.step_title as taskFlowSteps_stepTitle, task_flow_steps.step_order as taskFlowSteps_stepOrder, task_flow_steps.status as taskFlowSteps_status, task_flow_steps.step_description as taskFlowSteps_stepDescription, task_flow_steps.is_cross_department as taskFlowSteps_isCrossDepartment, task_flow_steps.step_assigned_to_role_department_id as taskFlowSteps_stepAssignedToRoleDepartmentId, task_flow_steps.created_by_user_role_department_id as taskFlowSteps_createdByUserRoleDepartmentId, task_flow_steps.updated_at as taskFlowSteps_updatedAt, task_flow_steps.created_at as taskFlowSteps_createdAt, task_flow_steps.updated_by as taskFlowSteps_updatedBy FROM task_flow_steps",
                              
                            View: "SELECT task_flow_steps.task_flow_step_id as task_flow_steps_id, task_flow_steps.task_flow_step_id as taskFlowSteps_taskFlowStepId, task_flow_steps.task_flow_id as taskFlowSteps_taskFlowId, task_flow_steps.step_title as taskFlowSteps_stepTitle, task_flow_steps.step_order as taskFlowSteps_stepOrder, task_flow_steps.status as taskFlowSteps_status, task_flow_steps.step_description as taskFlowSteps_stepDescription, task_flow_steps.is_cross_department as taskFlowSteps_isCrossDepartment, task_flow_steps.step_assigned_to_role_department_id as taskFlowSteps_stepAssignedToRoleDepartmentId, task_flow_steps.created_by_user_role_department_id as taskFlowSteps_createdByUserRoleDepartmentId, task_flow_steps.updated_at as taskFlowSteps_updatedAt, task_flow_steps.created_at as taskFlowSteps_createdAt, task_flow_steps.updated_by as taskFlowSteps_updatedBy FROM task_flow_steps  WHERE task_flow_steps.task_flow_step_id = {{id}} OR task_flow_steps.task_flow_step_id IS NULL",
                              
                            Delete: "UPDATE task_flow_steps SET status = 'inactive' WHERE task_flow_step_id = {{id}}",           
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
                          { Add: "insert_task_flow_steps", View: "view_task_flow_steps", List: "list_task_flow_steps", Update: "update_task_flow_steps", Delete: "delete_task_flow_steps" },
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
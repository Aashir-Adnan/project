/* CRUD Objects for table: task_flows */
        
    const parameters = require('./CRUD_parameters');
    global.CrudTask_flows_object = {
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
                          Add: "INSERT INTO task_flows (task_flow_title, task_flow_title, task_flow_description, is_default, created_by_user_role_designation_department_id, updated_by) VALUES ({{task_flows_task_flow_id}}, {{task_flows_task_flow_title}}, {{task_flows_status}}, {{task_flows_task_flow_title}}, {{task_flows_status}}, {{task_flows_task_flow_description}}, {{task_flows_is_default}}, {{task_flows_created_by_user_role_designation_department_id}}, {{task_flows_updated_at}}, {{task_flows_created_at}}, {{task_flows_updated_by}})",
                          Update: "UPDATE task_flows SET task_flow_title = {{task_flows_taskFlowTitle}}, task_flow_title = {{task_flows_taskFlowTitle}}, task_flow_description = {{task_flows_taskFlowDescription}}, is_default = {{task_flows_isDefault}}, created_by_user_role_designation_department_id = {{task_flows_createdByUserRoleDesignationDepartmentId}}, updated_by = {{task_flows_updatedBy}} WHERE task_flow_id = {{id}}",
                          List: "SELECT task_flows.task_flow_id as id, task_flow_id as task_flows_taskFlowId, task_flow_title as task_flows_taskFlowTitle, status as task_flows_status, task_flow_title as task_flows_taskFlowTitle, status as task_flows_status, task_flow_description as task_flows_taskFlowDescription, is_default as task_flows_isDefault, created_by_user_role_designation_department_id as task_flows_createdByUserRoleDesignationDepartmentId, updated_at as task_flows_updatedAt, created_at as task_flows_createdAt, updated_by as task_flows_updatedBy, COUNT(*) OVER () AS table_count FROM task_flows ",
                          View: "SELECT task_flows.task_flow_id as id, task_flow_id as task_flows_taskFlowId, task_flow_title as task_flows_taskFlowTitle, status as task_flows_status, task_flow_title as task_flows_taskFlowTitle, status as task_flows_status, task_flow_description as task_flows_taskFlowDescription, is_default as task_flows_isDefault, created_by_user_role_designation_department_id as task_flows_createdByUserRoleDesignationDepartmentId, updated_at as task_flows_updatedAt, created_at as task_flows_createdAt, updated_by as task_flows_updatedBy FROM task_flows  WHERE task_flow_id = {{id}} OR task_flow_id IS NULL",
                          Delete: "UPDATE task_flows SET status = 'inactive' WHERE task_flow_id = {{id}}",           
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
                      permission: { Add: "insert_task_flows", View:"view_task_flows", List:"list_task_flows", Update: "update_task_flows", Delete: "delete_task_flows" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Task_flows retrieved successfully!",
                    errorMessage: "Failed to retrieve Task_flows.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
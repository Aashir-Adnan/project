/* CRUD Objects for table: roles_designations_department */
        
    const parameters = require('./CRUD_parameters');
    global.CrudRoles_designations_department_object = {
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
                          Add: "INSERT INTO roles_designations_department (designation_id, role_id, department_id, designation_id, role_id, department_id, updated_by) VALUES ({{roles_designations_department_role_designation_department_id}}, {{roles_designations_department_designation_id}}, {{roles_designations_department_role_id}}, {{roles_designations_department_department_id}}, {{roles_designations_department_status}}, {{roles_designations_department_designation_id}}, {{roles_designations_department_role_id}}, {{roles_designations_department_department_id}}, {{roles_designations_department_status}}, {{roles_designations_department_updated_by}}, {{roles_designations_department_created_at}}, {{roles_designations_department_updated_at}})",
                          Update: "UPDATE roles_designations_department SET designation_id = {{roles_designations_department_designationId}}, role_id = {{roles_designations_department_roleId}}, department_id = {{roles_designations_department_departmentId}}, designation_id = {{roles_designations_department_designationId}}, role_id = {{roles_designations_department_roleId}}, department_id = {{roles_designations_department_departmentId}}, updated_by = {{roles_designations_department_updatedBy}} WHERE role_designation_department_id = {{id}}",
                          List: "SELECT roles_designations_department.role_designation_department_id as id, role_designation_department_id as roles_designations_department_roleDesignationDepartmentId, designation_id as roles_designations_department_designationId, role_id as roles_designations_department_roleId, department_id as roles_designations_department_departmentId, status as roles_designations_department_status, designation_id as roles_designations_department_designationId, role_id as roles_designations_department_roleId, department_id as roles_designations_department_departmentId, status as roles_designations_department_status, updated_by as roles_designations_department_updatedBy, created_at as roles_designations_department_createdAt, updated_at as roles_designations_department_updatedAt, COUNT(*) OVER () AS table_count FROM roles_designations_department ",
                          View: "SELECT roles_designations_department.role_designation_department_id as id, role_designation_department_id as roles_designations_department_roleDesignationDepartmentId, designation_id as roles_designations_department_designationId, role_id as roles_designations_department_roleId, department_id as roles_designations_department_departmentId, status as roles_designations_department_status, designation_id as roles_designations_department_designationId, role_id as roles_designations_department_roleId, department_id as roles_designations_department_departmentId, status as roles_designations_department_status, updated_by as roles_designations_department_updatedBy, created_at as roles_designations_department_createdAt, updated_at as roles_designations_department_updatedAt FROM roles_designations_department  WHERE role_designation_department_id = {{id}} OR role_designation_department_id IS NULL",
                          Delete: "UPDATE roles_designations_department SET status = 'inactive' WHERE role_designation_department_id = {{id}}",           
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
                      permission: { Add: "insert_roles_designations_department", View:"view_roles_designations_department", List:"list_roles_designations_department", Update: "update_roles_designations_department", Delete: "delete_roles_designations_department" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Roles_designations_department retrieved successfully!",
                    errorMessage: "Failed to retrieve Roles_designations_department.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
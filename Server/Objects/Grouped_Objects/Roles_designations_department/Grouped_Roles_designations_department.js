const parameters = require('./CRUD_parameters');
      global.GroupedCrudsRoles_designations_department_object = {
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
                            
                            List: "SELECT COUNT(*) as total_count, role_designation_department_id as id, roles_designations_department.role_designation_department_id as rolesDesignationsDepartment_roleDesignationDepartmentId, roles_designations_department.designation_id as rolesDesignationsDepartment_designationId, roles_designations_department.role_id as rolesDesignationsDepartment_roleId, roles_designations_department.department_id as rolesDesignationsDepartment_departmentId, roles_designations_department.status as rolesDesignationsDepartment_status, roles_designations_department.designation_id as rolesDesignationsDepartment_designationId, roles_designations_department.role_id as rolesDesignationsDepartment_roleId, roles_designations_department.department_id as rolesDesignationsDepartment_departmentId, roles_designations_department.status as rolesDesignationsDepartment_status, roles_designations_department.updated_by as rolesDesignationsDepartment_updatedBy, roles_designations_department.created_at as rolesDesignationsDepartment_createdAt, roles_designations_department.updated_at as rolesDesignationsDepartment_updatedAt FROM roles_designations_department",
                              
                            View: "SELECT roles_designations_department.role_designation_department_id as roles_designations_department_id, roles_designations_department.role_designation_department_id as rolesDesignationsDepartment_roleDesignationDepartmentId, roles_designations_department.designation_id as rolesDesignationsDepartment_designationId, roles_designations_department.role_id as rolesDesignationsDepartment_roleId, roles_designations_department.department_id as rolesDesignationsDepartment_departmentId, roles_designations_department.status as rolesDesignationsDepartment_status, roles_designations_department.designation_id as rolesDesignationsDepartment_designationId, roles_designations_department.role_id as rolesDesignationsDepartment_roleId, roles_designations_department.department_id as rolesDesignationsDepartment_departmentId, roles_designations_department.status as rolesDesignationsDepartment_status, roles_designations_department.updated_by as rolesDesignationsDepartment_updatedBy, roles_designations_department.created_at as rolesDesignationsDepartment_createdAt, roles_designations_department.updated_at as rolesDesignationsDepartment_updatedAt FROM roles_designations_department  WHERE roles_designations_department.role_designation_department_id = {{id}} OR roles_designations_department.role_designation_department_id IS NULL",
                              
                            Delete: "UPDATE roles_designations_department SET status = 'inactive' WHERE role_designation_department_id = {{id}}",           
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
                          { Add: "insert_roles_designations_department", View: "view_roles_designations_department", List: "list_roles_designations_department", Update: "update_roles_designations_department", Delete: "delete_roles_designations_department" },
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
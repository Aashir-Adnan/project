const parameters = require('./CRUD_parameters');
      global.GroupedCrudsDepartments_object = {
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
                            Add: "INSERT INTO departments (department_name, department_name, updated_by) VALUES ({{departments_department_id}}, {{departments_department_name}}, {{departments_status}}, {{departments_department_name}}, {{departments_status}}, {{departments_updated_by}}, {{departments_created_at}}, {{departments_updated_at}})",
                            
                            Update: "UPDATE departments SET department_name = {{departments_departmentName}}, department_name = {{departments_departmentName}}, updated_by = {{departments_updatedBy}} WHERE department_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, department_id as id, departments.department_id as departments_departmentId, departments.department_name as departments_departmentName, departments.status as departments_status, departments.department_name as departments_departmentName, departments.status as departments_status, departments.updated_by as departments_updatedBy, departments.created_at as departments_createdAt, departments.updated_at as departments_updatedAt FROM departments",
                              
                            View: "SELECT departments.department_id as departments_id, departments.department_id as departments_departmentId, departments.department_name as departments_departmentName, departments.status as departments_status, departments.department_name as departments_departmentName, departments.status as departments_status, departments.updated_by as departments_updatedBy, departments.created_at as departments_createdAt, departments.updated_at as departments_updatedAt FROM departments  WHERE departments.department_id = {{id}} OR departments.department_id IS NULL",
                              
                            Delete: "UPDATE departments SET status = 'inactive' WHERE department_id = {{id}}",           
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
                          { Add: "insert_departments", View: "view_departments", List: "list_departments", Update: "update_departments", Delete: "delete_departments" },
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
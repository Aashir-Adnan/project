/* CRUD Objects for table: user_roles_designations_department */
        
    const parameters = require('./CRUD_parameters');
    global.CrudUser_roles_designations_department_object = {
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
                          Add: "INSERT INTO user_roles_designations_department (role_designation_department_id, user_id, role_designation_department_id, user_id, start_date, end_date, updated_by) VALUES ({{user_roles_designations_department_user_role_designation_department_id}}, {{user_roles_designations_department_role_designation_department_id}}, {{user_roles_designations_department_user_id}}, {{user_roles_designations_department_status}}, {{user_roles_designations_department_role_designation_department_id}}, {{user_roles_designations_department_user_id}}, {{user_roles_designations_department_status}}, {{user_roles_designations_department_start_date}}, {{user_roles_designations_department_end_date}}, {{user_roles_designations_department_updated_by}}, {{user_roles_designations_department_created_at}}, {{user_roles_designations_department_updated_at}})",
                          Update: "UPDATE user_roles_designations_department SET role_designation_department_id = {{user_roles_designations_department_roleDesignationDepartmentId}}, user_id = {{user_roles_designations_department_userId}}, role_designation_department_id = {{user_roles_designations_department_roleDesignationDepartmentId}}, user_id = {{user_roles_designations_department_userId}}, start_date = {{user_roles_designations_department_startDate}}, end_date = {{user_roles_designations_department_endDate}}, updated_by = {{user_roles_designations_department_updatedBy}} WHERE user_role_designation_department_id = {{id}}",
                          List: "SELECT user_roles_designations_department.user_role_designation_department_id as id, user_role_designation_department_id as user_roles_designations_department_userRoleDesignationDepartmentId, role_designation_department_id as user_roles_designations_department_roleDesignationDepartmentId, user_id as user_roles_designations_department_userId, status as user_roles_designations_department_status, role_designation_department_id as user_roles_designations_department_roleDesignationDepartmentId, user_id as user_roles_designations_department_userId, status as user_roles_designations_department_status, start_date as user_roles_designations_department_startDate, end_date as user_roles_designations_department_endDate, updated_by as user_roles_designations_department_updatedBy, created_at as user_roles_designations_department_createdAt, updated_at as user_roles_designations_department_updatedAt, COUNT(*) OVER () AS table_count FROM user_roles_designations_department ",
                          View: "SELECT user_roles_designations_department.user_role_designation_department_id as id, user_role_designation_department_id as user_roles_designations_department_userRoleDesignationDepartmentId, role_designation_department_id as user_roles_designations_department_roleDesignationDepartmentId, user_id as user_roles_designations_department_userId, status as user_roles_designations_department_status, role_designation_department_id as user_roles_designations_department_roleDesignationDepartmentId, user_id as user_roles_designations_department_userId, status as user_roles_designations_department_status, start_date as user_roles_designations_department_startDate, end_date as user_roles_designations_department_endDate, updated_by as user_roles_designations_department_updatedBy, created_at as user_roles_designations_department_createdAt, updated_at as user_roles_designations_department_updatedAt FROM user_roles_designations_department  WHERE user_role_designation_department_id = {{id}} OR user_role_designation_department_id IS NULL",
                          Delete: "UPDATE user_roles_designations_department SET status = 'inactive' WHERE user_role_designation_department_id = {{id}}",           
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
                      permission: { Add: "insert_user_roles_designations_department", View:"view_user_roles_designations_department", List:"list_user_roles_designations_department", Update: "update_user_roles_designations_department", Delete: "delete_user_roles_designations_department" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "User_roles_designations_department retrieved successfully!",
                    errorMessage: "Failed to retrieve User_roles_designations_department.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
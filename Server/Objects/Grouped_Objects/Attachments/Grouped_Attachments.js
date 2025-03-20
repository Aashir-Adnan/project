const parameters = require('./CRUD_parameters');
      global.GroupedCrudsAttachments_object = {
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
                            Add: "INSERT INTO attachments (attachment_name, attachment_name, uploaded_by_user_role_designation_department_id, attachment_type, attachment_size, attachment_link, updated_by) VALUES ({{attachments_attachment_id}}, {{attachments_attachment_name}}, {{attachments_status}}, {{attachments_attachment_name}}, {{attachments_status}}, {{attachments_uploaded_by_user_role_designation_department_id}}, {{attachments_attachment_type}}, {{attachments_attachment_size}}, {{attachments_attachment_link}}, {{attachments_updated_by}}, {{attachments_created_at}}, {{attachments_updated_at}})",
                            
                            Update: "UPDATE attachments SET attachment_name = {{attachments_attachmentName}}, attachment_name = {{attachments_attachmentName}}, uploaded_by_user_role_designation_department_id = {{attachments_uploadedByUserRoleDesignationDepartmentId}}, attachment_type = {{attachments_attachmentType}}, attachment_size = {{attachments_attachmentSize}}, attachment_link = {{attachments_attachmentLink}}, updated_by = {{attachments_updatedBy}} WHERE attachment_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, attachment_id as id, attachments.attachment_id as attachments_attachmentId, attachments.attachment_name as attachments_attachmentName, attachments.status as attachments_status, attachments.attachment_name as attachments_attachmentName, attachments.status as attachments_status, attachments.uploaded_by_user_role_designation_department_id as attachments_uploadedByUserRoleDesignationDepartmentId, attachments.attachment_type as attachments_attachmentType, attachments.attachment_size as attachments_attachmentSize, attachments.attachment_link as attachments_attachmentLink, attachments.updated_by as attachments_updatedBy, attachments.created_at as attachments_createdAt, attachments.updated_at as attachments_updatedAt FROM attachments",
                              
                            View: "SELECT attachments.attachment_id as attachments_id, attachments.attachment_id as attachments_attachmentId, attachments.attachment_name as attachments_attachmentName, attachments.status as attachments_status, attachments.attachment_name as attachments_attachmentName, attachments.status as attachments_status, attachments.uploaded_by_user_role_designation_department_id as attachments_uploadedByUserRoleDesignationDepartmentId, attachments.attachment_type as attachments_attachmentType, attachments.attachment_size as attachments_attachmentSize, attachments.attachment_link as attachments_attachmentLink, attachments.updated_by as attachments_updatedBy, attachments.created_at as attachments_createdAt, attachments.updated_at as attachments_updatedAt, user_roles_designations_department.user_role_designation_department_id as user_roles_designations_department_id, user_roles_designations_department.user_role_designation_department_id as userRolesDesignationsDepartment_userRoleDesignationDepartmentId, user_roles_designations_department.role_designation_department_id as userRolesDesignationsDepartment_roleDesignationDepartmentId, user_roles_designations_department.user_id as userRolesDesignationsDepartment_userId, user_roles_designations_department.status as userRolesDesignationsDepartment_status, user_roles_designations_department.role_designation_department_id as userRolesDesignationsDepartment_roleDesignationDepartmentId, user_roles_designations_department.user_id as userRolesDesignationsDepartment_userId, user_roles_designations_department.status as userRolesDesignationsDepartment_status, user_roles_designations_department.start_date as userRolesDesignationsDepartment_startDate, user_roles_designations_department.end_date as userRolesDesignationsDepartment_endDate, user_roles_designations_department.updated_by as userRolesDesignationsDepartment_updatedBy, user_roles_designations_department.created_at as userRolesDesignationsDepartment_createdAt, user_roles_designations_department.updated_at as userRolesDesignationsDepartment_updatedAt FROM attachments JOIN user_roles_designations_department ON user_roles_designations_department.user_role_designation_department_id = attachments.uploaded_by_user_role_designation_department_id WHERE attachments.attachment_id = {{id}} OR attachments.attachment_id IS NULL",
                              
                            Delete: "UPDATE attachments SET status = 'inactive' WHERE attachment_id = {{id}}",           
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
                          { Add: "insert_attachments", View: "view_attachments", List: "list_attachments", Update: "update_attachments", Delete: "delete_attachments" },
                        ],
                        pagination: { pageSize: 10 },
                      },
                    },
                    response: {
                      successMessage: "task_history retrieved successfully!",
                      errorMessage: "Failed to retrieve task_history.",
                    },
                  }
                  ,
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
                            
                            List: "SELECT COUNT(*) as total_count, user_role_designation_department_id as id, user_roles_designations_department.user_role_designation_department_id as userRolesDesignationsDepartment_userRoleDesignationDepartmentId, user_roles_designations_department.role_designation_department_id as userRolesDesignationsDepartment_roleDesignationDepartmentId, user_roles_designations_department.user_id as userRolesDesignationsDepartment_userId, user_roles_designations_department.status as userRolesDesignationsDepartment_status, user_roles_designations_department.role_designation_department_id as userRolesDesignationsDepartment_roleDesignationDepartmentId, user_roles_designations_department.user_id as userRolesDesignationsDepartment_userId, user_roles_designations_department.status as userRolesDesignationsDepartment_status, user_roles_designations_department.start_date as userRolesDesignationsDepartment_startDate, user_roles_designations_department.end_date as userRolesDesignationsDepartment_endDate, user_roles_designations_department.updated_by as userRolesDesignationsDepartment_updatedBy, user_roles_designations_department.created_at as userRolesDesignationsDepartment_createdAt, user_roles_designations_department.updated_at as userRolesDesignationsDepartment_updatedAt FROM user_roles_designations_department",
                              
                            View: "SELECT attachments.attachment_id as attachments_id, attachments.attachment_id as attachments_attachmentId, attachments.attachment_name as attachments_attachmentName, attachments.status as attachments_status, attachments.attachment_name as attachments_attachmentName, attachments.status as attachments_status, attachments.uploaded_by_user_role_designation_department_id as attachments_uploadedByUserRoleDesignationDepartmentId, attachments.attachment_type as attachments_attachmentType, attachments.attachment_size as attachments_attachmentSize, attachments.attachment_link as attachments_attachmentLink, attachments.updated_by as attachments_updatedBy, attachments.created_at as attachments_createdAt, attachments.updated_at as attachments_updatedAt, user_roles_designations_department.user_role_designation_department_id as user_roles_designations_department_id, user_roles_designations_department.user_role_designation_department_id as userRolesDesignationsDepartment_userRoleDesignationDepartmentId, user_roles_designations_department.role_designation_department_id as userRolesDesignationsDepartment_roleDesignationDepartmentId, user_roles_designations_department.user_id as userRolesDesignationsDepartment_userId, user_roles_designations_department.status as userRolesDesignationsDepartment_status, user_roles_designations_department.role_designation_department_id as userRolesDesignationsDepartment_roleDesignationDepartmentId, user_roles_designations_department.user_id as userRolesDesignationsDepartment_userId, user_roles_designations_department.status as userRolesDesignationsDepartment_status, user_roles_designations_department.start_date as userRolesDesignationsDepartment_startDate, user_roles_designations_department.end_date as userRolesDesignationsDepartment_endDate, user_roles_designations_department.updated_by as userRolesDesignationsDepartment_updatedBy, user_roles_designations_department.created_at as userRolesDesignationsDepartment_createdAt, user_roles_designations_department.updated_at as userRolesDesignationsDepartment_updatedAt FROM attachments JOIN user_roles_designations_department ON user_roles_designations_department.user_role_designation_department_id = attachments.uploaded_by_user_role_designation_department_id WHERE attachments.attachment_id = {{id}} OR attachments.user_role_designation_department_id IS NULL",
                              
                            Delete: "UPDATE user_roles_designations_department SET status = 'inactive' WHERE user_role_designation_department_id = {{id}}",           
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
                          { Add: "insert_user_roles_designations_department", View: "view_user_roles_designations_department", List: "list_user_roles_designations_department", Update: "update_user_roles_designations_department", Delete: "delete_user_roles_designations_department" },
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
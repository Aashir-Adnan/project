/* CRUD Objects for table: attachments */
        
    const parameters = require('./CRUD_parameters');
    global.CrudAttachments_object = {
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
                          List: "SELECT attachments.attachment_id as id, attachment_id as attachments_attachmentId, attachment_name as attachments_attachmentName, status as attachments_status, attachment_name as attachments_attachmentName, status as attachments_status, uploaded_by_user_role_designation_department_id as attachments_uploadedByUserRoleDesignationDepartmentId, attachment_type as attachments_attachmentType, attachment_size as attachments_attachmentSize, attachment_link as attachments_attachmentLink, updated_by as attachments_updatedBy, created_at as attachments_createdAt, updated_at as attachments_updatedAt, COUNT(*) OVER () AS table_count FROM attachments ",
                          View: "SELECT attachments.attachment_id as id, attachment_id as attachments_attachmentId, attachment_name as attachments_attachmentName, status as attachments_status, attachment_name as attachments_attachmentName, status as attachments_status, uploaded_by_user_role_designation_department_id as attachments_uploadedByUserRoleDesignationDepartmentId, attachment_type as attachments_attachmentType, attachment_size as attachments_attachmentSize, attachment_link as attachments_attachmentLink, updated_by as attachments_updatedBy, created_at as attachments_createdAt, updated_at as attachments_updatedAt FROM attachments  WHERE attachment_id = {{id}} OR attachment_id IS NULL",
                          Delete: "UPDATE attachments SET status = 'inactive' WHERE attachment_id = {{id}}",           
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
                      permission: { Add: "insert_attachments", View:"view_attachments", List:"list_attachments", Update: "update_attachments", Delete: "delete_attachments" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Attachments retrieved successfully!",
                    errorMessage: "Failed to retrieve Attachments.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
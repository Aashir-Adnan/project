/* CRUD Objects for table: templates */
        
    const parameters = require('./CRUD_parameters');
    global.CrudTemplates_object = {
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
                          Add: "INSERT INTO templates (template_title, template_department, created_by_user_designation_department_id, template_type, template_body, template_desc, template_sender_email, list_of_attributes, updated_by) VALUES ({{templates_template_id}}, {{templates_template_title}}, {{templates_template_department}}, {{templates_status}}, {{templates_created_by_user_designation_department_id}}, {{templates_template_type}}, {{templates_template_body}}, {{templates_template_desc}}, {{templates_template_sender_email}}, {{templates_list_of_attributes}}, {{templates_updated_by}}, {{templates_created_at}}, {{templates_updated_at}})",
                          Update: "UPDATE templates SET template_title = {{templates_templateTitle}}, template_department = {{templates_templateDepartment}}, created_by_user_designation_department_id = {{templates_createdByUserDesignationDepartmentId}}, template_type = {{templates_templateType}}, template_body = {{templates_templateBody}}, template_desc = {{templates_templateDesc}}, template_sender_email = {{templates_templateSenderEmail}}, list_of_attributes = {{templates_listOfAttributes}}, updated_by = {{templates_updatedBy}} WHERE template_id = {{id}}",
                          List: "SELECT templates.template_id as id, template_id as templates_templateId, template_title as templates_templateTitle, template_department as templates_templateDepartment, status as templates_status, created_by_user_designation_department_id as templates_createdByUserDesignationDepartmentId, template_type as templates_templateType, template_body as templates_templateBody, template_desc as templates_templateDesc, template_sender_email as templates_templateSenderEmail, list_of_attributes as templates_listOfAttributes, updated_by as templates_updatedBy, created_at as templates_createdAt, updated_at as templates_updatedAt, COUNT(*) OVER () AS table_count FROM templates ",
                          View: "SELECT templates.template_id as id, template_id as templates_templateId, template_title as templates_templateTitle, template_department as templates_templateDepartment, status as templates_status, created_by_user_designation_department_id as templates_createdByUserDesignationDepartmentId, template_type as templates_templateType, template_body as templates_templateBody, template_desc as templates_templateDesc, template_sender_email as templates_templateSenderEmail, list_of_attributes as templates_listOfAttributes, updated_by as templates_updatedBy, created_at as templates_createdAt, updated_at as templates_updatedAt FROM templates  WHERE template_id = {{id}} OR template_id IS NULL",
                          Delete: "UPDATE templates SET status = 'inactive' WHERE template_id = {{id}}",           
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
                      permission: { Add: "insert_templates", View:"view_templates", List:"list_templates", Update: "update_templates", Delete: "delete_templates" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Templates retrieved successfully!",
                    errorMessage: "Failed to retrieve Templates.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
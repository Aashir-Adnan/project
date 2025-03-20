const parameters = {
            "steps": [
                {
                "title": "Step 1",
                "parameters": {
                    "fields": [
                    {
                        "name": "templates",
                        "type": "section",
                        "hideInCreateForm": false,
                        "visible": false,
                        "required": false,
                        "disabled": false,
                        "validations": "",
                        "dependancyCheck": false,
                        "isPrefilled": false,
                        "source": "req.body",
                        "title": "Templates",
                        "childFields": [
                            
                                {
                                "name": "template_id",
                                "label": "Template Id",
                                "title": "",
                                "type": "textField",
                                "required": false,
                                "hideInCreateForm": false,
                                "visible": true,
                                "disabled": false,
                                "dependancyCheck": false,
                                "isPrefilled": false,
                                "source": "req.body",
                                "min": "",
                                "max": "",
                                "selectServer": false,
                                "dynamicKey": "templates_templateId",
                                "alias" : "templates.template_id",
                                },
                                {
                                "name": "template_title",
                                "label": "Template Title",
                                "title": "",
                                "type": "textField",
                                "required": false,
                                "hideInCreateForm": false,
                                "visible": true,
                                "disabled": false,
                                "dependancyCheck": false,
                                "isPrefilled": false,
                                "source": "req.body",
                                "min": "",
                                "max": "",
                                "selectServer": false,
                                "dynamicKey": "templates_templateTitle",
                                "alias" : "templates.template_title",
                                },
                                {
                                "name": "template_department",
                                "label": "Template Department",
                                "title": "",
                                "type": "textField",
                                "required": false,
                                "hideInCreateForm": false,
                                "visible": true,
                                "disabled": false,
                                "dependancyCheck": false,
                                "isPrefilled": false,
                                "source": "req.body",
                                "min": "",
                                "max": "",
                                "selectServer": false,
                                "dynamicKey": "templates_templateDepartment",
                                "alias" : "templates.template_department",
                                },
                                {
                                "name": "created_by_user_designation_department_id",
                                "label": "Created By User Designation Department Id",
                                "title": "",
                                "type": "textField",
                                "required": false,
                                "hideInCreateForm": false,
                                "visible": true,
                                "disabled": false,
                                "dependancyCheck": false,
                                "isPrefilled": false,
                                "source": "req.body",
                                "min": "",
                                "max": "",
                                "selectServer": false,
                                "dynamicKey": "templates_createdByUserDesignationDepartmentId",
                                "alias" : "templates.created_by_user_designation_department_id",
                                },
                                {
                                "name": "template_type",
                                "label": "Template Type",
                                "title": "",
                                "type": "textField",
                                "required": false,
                                "hideInCreateForm": false,
                                "visible": true,
                                "disabled": false,
                                "dependancyCheck": false,
                                "isPrefilled": false,
                                "source": "req.body",
                                "min": "",
                                "max": "",
                                "selectServer": false,
                                "dynamicKey": "templates_templateType",
                                "alias" : "templates.template_type",
                                },
                                {
                                "name": "template_body",
                                "label": "Template Body",
                                "title": "",
                                "type": "textField",
                                "required": false,
                                "hideInCreateForm": false,
                                "visible": true,
                                "disabled": false,
                                "dependancyCheck": false,
                                "isPrefilled": false,
                                "source": "req.body",
                                "min": "",
                                "max": "",
                                "selectServer": false,
                                "dynamicKey": "templates_templateBody",
                                "alias" : "templates.template_body",
                                },
                                {
                                "name": "template_desc",
                                "label": "Template Desc",
                                "title": "",
                                "type": "textField",
                                "required": false,
                                "hideInCreateForm": false,
                                "visible": true,
                                "disabled": false,
                                "dependancyCheck": false,
                                "isPrefilled": false,
                                "source": "req.body",
                                "min": "",
                                "max": "",
                                "selectServer": false,
                                "dynamicKey": "templates_templateDesc",
                                "alias" : "templates.template_desc",
                                },
                                {
                                "name": "template_sender_email",
                                "label": "Template Sender Email",
                                "title": "",
                                "type": "textField",
                                "required": false,
                                "hideInCreateForm": false,
                                "visible": true,
                                "disabled": false,
                                "dependancyCheck": false,
                                "isPrefilled": false,
                                "source": "req.body",
                                "min": "",
                                "max": "",
                                "selectServer": false,
                                "dynamicKey": "templates_templateSenderEmail",
                                "alias" : "templates.template_sender_email",
                                },
                                {
                                "name": "list_of_attributes",
                                "label": "List Of Attributes",
                                "title": "",
                                "type": "textField",
                                "required": false,
                                "hideInCreateForm": false,
                                "visible": true,
                                "disabled": false,
                                "dependancyCheck": false,
                                "isPrefilled": false,
                                "source": "req.body",
                                "min": "",
                                "max": "",
                                "selectServer": false,
                                "dynamicKey": "templates_listOfAttributes",
                                "alias" : "templates.list_of_attributes",
                                },
                                {
                                "name": "updated_by",
                                "label": "Updated By",
                                "title": "",
                                "type": "textField",
                                "required": false,
                                "hideInCreateForm": false,
                                "visible": true,
                                "disabled": false,
                                "dependancyCheck": false,
                                "isPrefilled": false,
                                "source": "req.body",
                                "min": "",
                                "max": "",
                                "selectServer": false,
                                "dynamicKey": "templates_updatedBy",
                                "alias" : "templates.updated_by",
                                },
                                
                        ]
                    }
                    ]
                },
                "buttons": [
                    {
                    "type": "submit",
                    "label": "Submit"
                    }
                ]
                }
            ],
            "colMapper": "{ 'templates_templateId' : 'template_id',  'templates_templateTitle' : 'template_title',  'templates_templateDepartment' : 'template_department',  'templates_status' : 'status',  'templates_createdByUserDesignationDepartmentId' : 'created_by_user_designation_department_id',  'templates_templateType' : 'template_type',  'templates_templateBody' : 'template_body',  'templates_templateDesc' : 'template_desc',  'templates_templateSenderEmail' : 'template_sender_email',  'templates_listOfAttributes' : 'list_of_attributes',  'templates_updatedBy' : 'updated_by',  'templates_createdAt' : 'created_at',  'templates_updatedAt' : 'updated_at'}"
            };
            module.exports = parameters;
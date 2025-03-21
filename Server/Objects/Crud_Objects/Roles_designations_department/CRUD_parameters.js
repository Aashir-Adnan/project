const parameters = {
            "steps": [
                {
                "title": "Step 1",
                "parameters": {
                    "fields": [
                    {
                        "name": "roles_designations_department",
                        "type": "section",
                        "hideInCreateForm": false,
                        "visible": false,
                        "required": false,
                        "disabled": false,
                        "validations": "",
                        "dependancyCheck": false,
                        "isPrefilled": false,
                        "source": "req.body",
                        "title": "Roles_designations_department",
                        "childFields": [
                            
                                {
                                "name": "role_designation_department_id",
                                "label": "Role Designation Department Id",
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
                                "dynamicKey": "roles_designations_department_roleDesignationDepartmentId",
                                "alias" : "roles_designations_department.role_designation_department_id",
                                },
                                {
                                "name": "designation_id",
                                "label": "Designation Id",
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
                                "dynamicKey": "roles_designations_department_designationId",
                                "alias" : "roles_designations_department.designation_id",
                                },
                                {
                                "name": "role_id",
                                "label": "Role Id",
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
                                "dynamicKey": "roles_designations_department_roleId",
                                "alias" : "roles_designations_department.role_id",
                                },
                                {
                                "name": "department_id",
                                "label": "Department Id",
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
                                "dynamicKey": "roles_designations_department_departmentId",
                                "alias" : "roles_designations_department.department_id",
                                },
                                {
                                "name": "designation_id",
                                "label": "Designation Id",
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
                                "dynamicKey": "roles_designations_department_designationId",
                                "alias" : "roles_designations_department.designation_id",
                                },
                                {
                                "name": "role_id",
                                "label": "Role Id",
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
                                "dynamicKey": "roles_designations_department_roleId",
                                "alias" : "roles_designations_department.role_id",
                                },
                                {
                                "name": "department_id",
                                "label": "Department Id",
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
                                "dynamicKey": "roles_designations_department_departmentId",
                                "alias" : "roles_designations_department.department_id",
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
                                "dynamicKey": "roles_designations_department_updatedBy",
                                "alias" : "roles_designations_department.updated_by",
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
            "colMapper": "{ 'roles_designations_department_roleDesignationDepartmentId' : 'role_designation_department_id',  'roles_designations_department_designationId' : 'designation_id',  'roles_designations_department_roleId' : 'role_id',  'roles_designations_department_departmentId' : 'department_id',  'roles_designations_department_status' : 'status',  'roles_designations_department_designationId' : 'designation_id',  'roles_designations_department_roleId' : 'role_id',  'roles_designations_department_departmentId' : 'department_id',  'roles_designations_department_status' : 'status',  'roles_designations_department_updatedBy' : 'updated_by',  'roles_designations_department_createdAt' : 'created_at',  'roles_designations_department_updatedAt' : 'updated_at'}"
            };
            module.exports = parameters;
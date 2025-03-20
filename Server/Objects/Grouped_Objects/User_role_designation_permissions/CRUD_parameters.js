const parameters = {
            "steps": [
                
                        {
                            "title": "user_role_designation_permissions Info",
                            "parameters": {
                                "fields": [
                                    {
                                        "name": "user_role_designation_permissions",
                                        "type": "section",
                                        "hideInCreateForm": false,
                                        "visible": false,
                                        "required": false,
                                        "disabled": false,
                                        "validations": "",
                                        "dependancyCheck": false,
                                        "isPrefilled": false,
                                        "source": "req.body",
                                        "title": "User_role_designation_permissions",
                                        "childFields": [
                                                {
                                                        "name": "id",
                                                        "label": "id",
                                                        "title": "",
                                                        "type": "textField",
                                                        "required": false,
                                                        "hideInCreateForm": true,
                                                        "visible": true,
                                                        "disabled": false,
                                                        "dependancyCheck": false,
                                                        "isPrefilled": false,
                                                        "source": "req.query",
                                                        "min": "",
                                                        "max": "",
                                                        "selectServer": false,
                                                        "dynamicKey": "id"
                                                },
                                            
                                                    {
                                                        "name": "userRoleDesignationDepartmentId",
                                                        "label": "User Role Designation Department Id",
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
                                                        "dynamicKey": "user_role_designation_permissions_userRoleDesignationDepartmentId"
                                                    },
                                                    {
                                                        "name": "permissionId",
                                                        "label": "Permission Id",
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
                                                        "dynamicKey": "user_role_designation_permissions_permissionId"
                                                    },
                                                    {
                                                        "name": "userRoleDesignationDepartmentId",
                                                        "label": "User Role Designation Department Id",
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
                                                        "dynamicKey": "user_role_designation_permissions_userRoleDesignationDepartmentId"
                                                    },
                                                    {
                                                        "name": "permissionId",
                                                        "label": "Permission Id",
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
                                                        "dynamicKey": "user_role_designation_permissions_permissionId"
                                                    },
                                                    {
                                                        "name": "updatedBy",
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
                                                        "dynamicKey": "user_role_designation_permissions_updatedBy"
                                                    }
                                        ]
                                    }
                                ]
                            },
                            "buttons": [
                                {
                                    "type": "submit",
                                    "label": "Submit"
                                }
                            ],
                            "permission": "user_role_designation_permissions_view"
                        }
            ],
            "colMapper": "{ 'user_role_designation_permissions_userRoleDesignationPermissionId' : 'user_role_designation_permission_id',  'user_role_designation_permissions_userRoleDesignationDepartmentId' : 'user_role_designation_department_id',  'user_role_designation_permissions_permissionId' : 'permission_id',  'user_role_designation_permissions_status' : 'status',  'user_role_designation_permissions_userRoleDesignationDepartmentId' : 'user_role_designation_department_id',  'user_role_designation_permissions_permissionId' : 'permission_id',  'user_role_designation_permissions_status' : 'status',  'user_role_designation_permissions_updatedBy' : 'updated_by',  'user_role_designation_permissions_updatedAt' : 'updated_at',  'user_role_designation_permissions_createdAt' : 'created_at'}"
        };
        module.exports = parameters;
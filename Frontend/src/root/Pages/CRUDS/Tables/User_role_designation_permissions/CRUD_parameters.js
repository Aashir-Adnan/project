export const parameters = {
              "steps": [
                
                    {
                        "title": "user_role_designation_permissions Info",
                        "parameters": {
                            "fields": [
                                {
                                    "name": "userRoleDesignationPermissions",
                                    "type": "section",
                                    "hideInCreateForm": false,
                                    "visible": false,
                                    "required": false,
                                    "disabled": false,
                                    "validations": "",
                                    "dependancyCheck": false,
                                    "isPrefilled": false,
                                    "source": "req.body",
                                    "title": "UserRoleDesignationPermissions",
                                    "childFields": [
                                            {
                                              "name": "id",
                                              "label": "id",
                                              "title": "",
                                              "type": "textField",
                                              "required": false,
                                              "hideInCreateForm": true,
                                              "hideInViewForm" : true,
                                              "visible": false,
                                              "disabled": false,
                                              "dependancyCheck": false,
                                              "isPrefilled": false,
                                              "source": "req.query",
                                              "min": "",
                                              "max": "",
                                              "selectServer": false,
                                              "dynamicKey": "id",
                                              "alias" : "user_role_designation_permissions.id"

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
                                                "validations": [],
                                                "selectServer": false,
                                                "dynamicKey": "userRoleDesignationPermissions_userRoleDesignationDepartmentId",
                                                "alias" : "user_role_designation_permissions.user_role_designation_department_id"
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
                                                "validations": [],
                                                "selectServer": false,
                                                "dynamicKey": "userRoleDesignationPermissions_permissionId",
                                                "alias" : "user_role_designation_permissions.permission_id"
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
                                                "validations": [],
                                                "selectServer": false,
                                                "dynamicKey": "userRoleDesignationPermissions_userRoleDesignationDepartmentId",
                                                "alias" : "user_role_designation_permissions.user_role_designation_department_id"
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
                                                "validations": [],
                                                "selectServer": false,
                                                "dynamicKey": "userRoleDesignationPermissions_permissionId",
                                                "alias" : "user_role_designation_permissions.permission_id"
                                            },
                                            {
                                              "type": "listOfFields",
                                              "name": "options",
                                              "label": "Add User Role Designation Permissions",
                                              "hideInCreateForm": true,

                                              "hideInViewForm": true,
                                              "title": "Select User Role Designation Permissions",
                                              "dependancyCheck": false,
                                              "childFields": [
                                            
                                            ]
                                          }
                                        ,
                                        
                                            {
                                                "name": "updatedBy",
                                                "label": "Updated By",
                                                "title": "",
                                                "type": "dateTime",
                                                "required": false,
                                                "hideInCreateForm": true,
                                                "hideInViewForm" : true,
                                                "visible": false,
                                                "disabled": false,
                                                "dependancyCheck": false,
                                                "isPrefilled": false,
                                                "source": "req.body",
                                                "min": "",
                                                "max": "",
                                                "validations": [],
                                                "selectServer": false,
                                                "dynamicKey": "userRoleDesignationPermissions_updatedBy",
                                                "alias" : "user_role_designation_permissions.updated_by"
                                            },
                                            {
                                                "name": "updatedAt",
                                                "label": "Updated At",
                                                "title": "",
                                                "type": "dateTime",
                                                "required": false,
                                                "hideInCreateForm": true,
                                                "hideInViewForm" : true,
                                                "visible": false,
                                                "disabled": false,
                                                "dependancyCheck": false,
                                                "isPrefilled": false,
                                                "source": "req.body",
                                                "min": "",
                                                "max": "",
                                                "validations": [],
                                                "selectServer": false,
                                                "dynamicKey": "userRoleDesignationPermissions_updatedAt",
                                                "alias" : "user_role_designation_permissions.updated_at"
                                            },
                                            {
                                                "name": "createdAt",
                                                "label": "Created At",
                                                "title": "",
                                                "type": "dateTime",
                                                "required": false,
                                                "hideInCreateForm": true,
                                                "hideInViewForm" : true,
                                                "visible": false,
                                                "disabled": false,
                                                "dependancyCheck": false,
                                                "isPrefilled": false,
                                                "source": "req.body",
                                                "min": "",
                                                "max": "",
                                                "validations": [],
                                                "selectServer": false,
                                                "dynamicKey": "userRoleDesignationPermissions_createdAt",
                                                "alias" : "user_role_designation_permissions.created_at"
                                            },
                                          
                                            {
                                                "name": "status",
                                                "label": "Status",
                                                "title": "",
                                                "type": "select",
                                                "required": false,
                                                "hideInCreateForm": false,
                                                "visible": true,
                                                "disabled": false,
                                                "dependancyCheck": false,
                                                "isPrefilled": false,
                                                "source": "req.body",
                                                "min": "",
                                                "max": "",
                                                "validations": [],
                                                "selectServer": false,
                                                "dynamicKey": "userRoleDesignationPermissions_status",
                                                options:[
                                                    {value:'inactive',label:'inactive'},
                                                    {value:'active',label:'active'}
                                                ],
                                                "alias" : "user_role_designation_permissions.status"
                                            },
                                            {
                                                "name": "status",
                                                "label": "Status",
                                                "title": "",
                                                "type": "select",
                                                "required": false,
                                                "hideInCreateForm": false,
                                                "visible": true,
                                                "disabled": false,
                                                "dependancyCheck": false,
                                                "isPrefilled": false,
                                                "source": "req.body",
                                                "min": "",
                                                "max": "",
                                                "validations": [],
                                                "selectServer": false,
                                                "dynamicKey": "userRoleDesignationPermissions_status",
                                                options:[
                                                    {value:'inactive',label:'inactive'},
                                                    {value:'active',label:'active'}
                                                ],
                                                "alias" : "user_role_designation_permissions.status"
                                            }

                                    ]
                                }
                            ]
                        },
                        "permission": "user_role_designation_permissions_view"
                    }                  
              ],
              "colMapper": { 'user_role_designation_permissions_userRoleDesignationPermissionId' : 'user_role_designation_permission_id',  'user_role_designation_permissions_userRoleDesignationDepartmentId' : 'user_role_designation_department_id',  'user_role_designation_permissions_permissionId' : 'permission_id',  'user_role_designation_permissions_status' : 'status',  'user_role_designation_permissions_userRoleDesignationDepartmentId' : 'user_role_designation_department_id',  'user_role_designation_permissions_permissionId' : 'permission_id',  'user_role_designation_permissions_status' : 'status',  'user_role_designation_permissions_updatedBy' : 'updated_by',  'user_role_designation_permissions_updatedAt' : 'updated_at',  'user_role_designation_permissions_createdAt' : 'created_at'}
          };
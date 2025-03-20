export const parameters = {
              "steps": [
                
                    {
                        "title": "alter_table_errors Info",
                        "parameters": {
                            "fields": [
                                {
                                    "name": "alterTableErrors",
                                    "type": "section",
                                    "hideInCreateForm": false,
                                    "visible": false,
                                    "required": false,
                                    "disabled": false,
                                    "validations": "",
                                    "dependancyCheck": false,
                                    "isPrefilled": false,
                                    "source": "req.body",
                                    "title": "AlterTableErrors",
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
                                              "alias" : "alter_table_errors.id"

                                            },
                                        
                                            {
                                                "name": "tableName",
                                                "label": "Table Name",
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
                                                "dynamicKey": "alterTableErrors_tableName",
                                                "alias" : "alter_table_errors.table_name"
                                            },
                                            {
                                                "name": "errorMessage",
                                                "label": "Error Message",
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
                                                "dynamicKey": "alterTableErrors_errorMessage",
                                                "alias" : "alter_table_errors.error_message"
                                            },
                                            {
                                                "name": "errorTime",
                                                "label": "Error Time",
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
                                                "dynamicKey": "alterTableErrors_errorTime",
                                                "alias" : "alter_table_errors.error_time"
                                            },
                                            {
                                              "type": "listOfFields",
                                              "name": "options",
                                              "label": "Add Alter Table Errors",
                                              "hideInCreateForm": false,

                                              "hideInViewForm": false,
                                              "title": "Select Alter Table Errors",
                                              "dependancyCheck": false,
                                              "childFields": [
                                            
                                                {
                                                    "name": "createdBy",
                                                    "label": "Created By",
                                                    "title": "",
                                                    "type": "select",
                                                    "required": false,
                                                    "hideInCreateForm": false,
                                                    "hideInViewForm": true,
                                                    "visible": false,
                                                    "disabled": false,
                                                    "dependancyCheck": false,
                                                    "isPrefilled": false,
                                                    "source": "req.body",
                                                    "min": "",
                                                    "max": "",
                                                    "validations": [],
                                                    "selectServer": true,
                                                    "dynamicKey": "alterTableErrors_createdBy",
                                                    "selectServerUrl": "/list/user_roles_designations_department/dropdown?version=1.0",
                                                    "alias" : "alter_table_errors.created_by"
                                                }
                                                
                                                
                                            ]
                                          }
                                        ,
                                        ,
                                          

                                    ]
                                }
                            ]
                        },
                        "permission": "alter_table_errors_view"
                    },
                    {
                        "title": "user_roles_designations_department Info",
                        "parameters": {
                            "fields": [
                                {
                                    "name": "userRolesDesignationsDepartment",
                                    "type": "section",
                                    "hideInCreateForm": false,
                                    "visible": false,
                                    "required": false,
                                    "disabled": false,
                                    "validations": "",
                                    "dependancyCheck": false,
                                    "isPrefilled": false,
                                    "source": "req.body",
                                    "title": "AlterTableErrors",
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
                                              "alias" : "user_roles_designations_department.id"

                                            },
                                        
                                            {
                                                "name": "startDate",
                                                "label": "Start Date",
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
                                                "dynamicKey": "userRolesDesignationsDepartment_startDate",
                                                "alias" : "user_roles_designations_department.start_date"
                                            },
                                            {
                                                "name": "endDate",
                                                "label": "End Date",
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
                                                "dynamicKey": "userRolesDesignationsDepartment_endDate",
                                                "alias" : "user_roles_designations_department.end_date"
                                            },
                                            {
                                              "type": "listOfFields",
                                              "name": "options",
                                              "label": "Add User Roles Designations Department",
                                              "hideInCreateForm": false,

                                              "hideInViewForm": false,
                                              "title": "Select User Roles Designations Department",
                                              "dependancyCheck": false,
                                              "childFields": [
                                            
                                                {
                                                    "name": "roleDesignationDepartmentId",
                                                    "label": "Role Designation Department Id",
                                                    "title": "",
                                                    "type": "select",
                                                    "required": false,
                                                    "hideInCreateForm": false,
                                                    "hideInViewForm": true,
                                                    "visible": false,
                                                    "disabled": false,
                                                    "dependancyCheck": false,
                                                    "isPrefilled": false,
                                                    "source": "req.body",
                                                    "min": "",
                                                    "max": "",
                                                    "validations": [],
                                                    "selectServer": true,
                                                    "dynamicKey": "userRolesDesignationsDepartment_roleDesignationDepartmentId",
                                                    "selectServerUrl": "/list/roles_designations_department/dropdown?version=1.0",
                                                    "alias" : "user_roles_designations_department.role_designation_department_id"
                                                }
                                                
                                                ,
                                                {
                                                    "name": "userId",
                                                    "label": "User Id",
                                                    "title": "",
                                                    "type": "select",
                                                    "required": false,
                                                    "hideInCreateForm": false,
                                                    "hideInViewForm": true,
                                                    "visible": false,
                                                    "disabled": false,
                                                    "dependancyCheck": false,
                                                    "isPrefilled": false,
                                                    "source": "req.body",
                                                    "min": "",
                                                    "max": "",
                                                    "validations": [],
                                                    "selectServer": true,
                                                    "dynamicKey": "userRolesDesignationsDepartment_userId",
                                                    "selectServerUrl": "/list/users/dropdown?version=1.0",
                                                    "alias" : "user_roles_designations_department.user_id"
                                                }
                                                ,
                                                {
                                                    "name": "firstName",
                                                    "label": "First Name",
                                                    "title": "",
                                                    "type": "textField",
                                                    "required": false,
                                                    "hideInCreateForm": true,
                                                    "hideInViewForm": false,
                                                    "visible": true,
                                                    "disabled": false,
                                                    "dependancyCheck": false,
                                                    "isPrefilled": false,
                                                    "source": "req.body",
                                                    "min": "",
                                                    "max": "",
                                                    "validations": [],
                                                    "dynamicKey" : "userRolesDesignationsDepartment_FirstName",
                                                    "selectServer": false,
                                                    "alias" : "user_roles_designations_department.user_id"
                                                }
                                                ,
                                                {
                                                    "name": "createdBy",
                                                    "label": "Created By",
                                                    "title": "",
                                                    "type": "select",
                                                    "required": false,
                                                    "hideInCreateForm": false,
                                                    "hideInViewForm": true,
                                                    "visible": false,
                                                    "disabled": false,
                                                    "dependancyCheck": false,
                                                    "isPrefilled": false,
                                                    "source": "req.body",
                                                    "min": "",
                                                    "max": "",
                                                    "validations": [],
                                                    "selectServer": true,
                                                    "dynamicKey": "userRolesDesignationsDepartment_createdBy",
                                                    "selectServerUrl": "/list/user_roles_designations_department/dropdown?version=1.0",
                                                    "alias" : "user_roles_designations_department.created_by"
                                                }
                                                
                                                
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
                                                "dynamicKey": "userRolesDesignationsDepartment_updatedBy",
                                                "alias" : "user_roles_designations_department.updated_by"
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
                                                "dynamicKey": "userRolesDesignationsDepartment_createdAt",
                                                "alias" : "user_roles_designations_department.created_at"
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
                                                "dynamicKey": "userRolesDesignationsDepartment_updatedAt",
                                                "alias" : "user_roles_designations_department.updated_at"
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
                                                "dynamicKey": "userRolesDesignationsDepartment_status",
                                                options:[
                                                    {value:'inactive',label:'inactive'},
                                                    {value:'active',label:'active'}
                                                ],
                                                "alias" : "user_roles_designations_department.status"
                                            }

                                    ]
                                }
                            ]
                        },
                        "permission": "user_roles_designations_department_view"
                    }                  
              ],
              "colMapper": { 'alter_table_errors_id' : 'id',  'alter_table_errors_tableName' : 'table_name',  'alter_table_errors_errorMessage' : 'error_message',  'alter_table_errors_errorTime' : 'error_time',  'alter_table_errors_createdBy' : 'created_by',  'user_roles_designations_department_userRoleDesignationDepartmentId' : 'user_role_designation_department_id',  'user_roles_designations_department_roleDesignationDepartmentId' : 'role_designation_department_id',  'user_roles_designations_department_userId' : 'user_id',  'user_roles_designations_department_startDate' : 'start_date',  'user_roles_designations_department_endDate' : 'end_date',  'user_roles_designations_department_status' : 'status',  'user_roles_designations_department_updatedBy' : 'updated_by',  'user_roles_designations_department_createdAt' : 'created_at',  'user_roles_designations_department_updatedAt' : 'updated_at',  'user_roles_designations_department_createdBy' : 'created_by'}
          };
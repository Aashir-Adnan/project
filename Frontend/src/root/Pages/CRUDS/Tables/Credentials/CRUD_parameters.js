export const parameters = {
              "steps": [
                
                    {
                        "title": "credentials Info",
                        "parameters": {
                            "fields": [
                                {
                                    "name": "credentials",
                                    "type": "section",
                                    "hideInCreateForm": false,
                                    "visible": false,
                                    "required": false,
                                    "disabled": false,
                                    "validations": "",
                                    "dependancyCheck": false,
                                    "isPrefilled": false,
                                    "source": "req.body",
                                    "title": "Credentials",
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
                                              "alias" : "credentials.id"

                                            },
                                        
                                            {
                                                "name": "credentialsInfo",
                                                "label": "Credentials Info",
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
                                                "dynamicKey": "credentials_credentialsInfo",
                                                "alias" : "credentials.credentials_info"
                                            },
                                            {
                                                "name": "inventorySubCategoryItemId",
                                                "label": "Inventory Sub Category Item Id",
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
                                                "dynamicKey": "credentials_inventorySubCategoryItemId",
                                                "alias" : "credentials.inventory_sub_category_item_id"
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
                                                "dynamicKey": "credentials_userRoleDesignationDepartmentId",
                                                "alias" : "credentials.user_role_designation_department_id"
                                            },
                                            {
                                              "type": "listOfFields",
                                              "name": "options",
                                              "label": "Add Credentials",
                                              "hideInCreateForm": true,

                                              "hideInViewForm": true,
                                              "title": "Select Credentials",
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
                                                "dynamicKey": "credentials_updatedBy",
                                                "alias" : "credentials.updated_by"
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
                                                "dynamicKey": "credentials_updatedAt",
                                                "alias" : "credentials.updated_at"
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
                                                "dynamicKey": "credentials_createdAt",
                                                "alias" : "credentials.created_at"
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
                                                "dynamicKey": "credentials_status",
                                                options:[
                                                    {value:'inactive',label:'inactive'},
                                                    {value:'active',label:'active'}
                                                ],
                                                "alias" : "credentials.status"
                                            }

                                    ]
                                }
                            ]
                        },
                        "permission": "credentials_view"
                    }                  
              ],
              "colMapper": { 'credentials_credentialsId' : 'credentials_id',  'credentials_credentialsInfo' : 'credentials_info',  'credentials_inventorySubCategoryItemId' : 'inventory_sub_category_item_id',  'credentials_userRoleDesignationDepartmentId' : 'user_role_designation_department_id',  'credentials_status' : 'status',  'credentials_updatedBy' : 'updated_by',  'credentials_updatedAt' : 'updated_at',  'credentials_createdAt' : 'created_at'}
          };
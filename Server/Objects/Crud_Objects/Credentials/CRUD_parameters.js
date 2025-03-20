const parameters = {
            "steps": [
                {
                "title": "Step 1",
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
                                "name": "credentials_id",
                                "label": "Credentials Id",
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
                                "dynamicKey": "credentials_credentialsId",
                                "alias" : "credentials.credentials_id",
                                },
                                {
                                "name": "credentials_info",
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
                                "selectServer": false,
                                "dynamicKey": "credentials_credentialsInfo",
                                "alias" : "credentials.credentials_info",
                                },
                                {
                                "name": "inventory_sub_category_item_id",
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
                                "selectServer": false,
                                "dynamicKey": "credentials_inventorySubCategoryItemId",
                                "alias" : "credentials.inventory_sub_category_item_id",
                                },
                                {
                                "name": "user_role_designation_department_id",
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
                                "dynamicKey": "credentials_userRoleDesignationDepartmentId",
                                "alias" : "credentials.user_role_designation_department_id",
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
                                "dynamicKey": "credentials_updatedBy",
                                "alias" : "credentials.updated_by",
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
            "colMapper": "{ 'credentials_credentialsId' : 'credentials_id',  'credentials_credentialsInfo' : 'credentials_info',  'credentials_inventorySubCategoryItemId' : 'inventory_sub_category_item_id',  'credentials_userRoleDesignationDepartmentId' : 'user_role_designation_department_id',  'credentials_status' : 'status',  'credentials_updatedBy' : 'updated_by',  'credentials_updatedAt' : 'updated_at',  'credentials_createdAt' : 'created_at'}"
            };
            module.exports = parameters;
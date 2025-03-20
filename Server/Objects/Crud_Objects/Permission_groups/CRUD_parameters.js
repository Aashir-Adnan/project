const parameters = {
            "steps": [
                {
                "title": "Step 1",
                "parameters": {
                    "fields": [
                    {
                        "name": "permission_groups",
                        "type": "section",
                        "hideInCreateForm": false,
                        "visible": false,
                        "required": false,
                        "disabled": false,
                        "validations": "",
                        "dependancyCheck": false,
                        "isPrefilled": false,
                        "source": "req.body",
                        "title": "Permission_groups",
                        "childFields": [
                            
                                {
                                "name": "permission_group_id",
                                "label": "Permission Group Id",
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
                                "dynamicKey": "permission_groups_permissionGroupId",
                                "alias" : "permission_groups.permission_group_id",
                                },
                                {
                                "name": "group_name",
                                "label": "Group Name",
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
                                "dynamicKey": "permission_groups_groupName",
                                "alias" : "permission_groups.group_name",
                                },
                                {
                                "name": "group_name",
                                "label": "Group Name",
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
                                "dynamicKey": "permission_groups_groupName",
                                "alias" : "permission_groups.group_name",
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
                                "dynamicKey": "permission_groups_updatedBy",
                                "alias" : "permission_groups.updated_by",
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
            "colMapper": "{ 'permission_groups_permissionGroupId' : 'permission_group_id',  'permission_groups_groupName' : 'group_name',  'permission_groups_status' : 'status',  'permission_groups_groupName' : 'group_name',  'permission_groups_status' : 'status',  'permission_groups_updatedBy' : 'updated_by',  'permission_groups_createdAt' : 'created_at',  'permission_groups_updatedAt' : 'updated_at'}"
            };
            module.exports = parameters;
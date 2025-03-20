const parameters = {
            "steps": [
                
                        {
                            "title": "permission_groups_permissions Info",
                            "parameters": {
                                "fields": [
                                    {
                                        "name": "permission_groups_permissions",
                                        "type": "section",
                                        "hideInCreateForm": false,
                                        "visible": false,
                                        "required": false,
                                        "disabled": false,
                                        "validations": "",
                                        "dependancyCheck": false,
                                        "isPrefilled": false,
                                        "source": "req.body",
                                        "title": "Permission_groups_permissions",
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
                                                        "name": "groupId",
                                                        "label": "Group Id",
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
                                                        "dynamicKey": "permission_groups_permissions_groupId"
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
                                                        "dynamicKey": "permission_groups_permissions_permissionId"
                                                    },
                                                    {
                                                        "name": "groupId",
                                                        "label": "Group Id",
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
                                                        "dynamicKey": "permission_groups_permissions_groupId"
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
                                                        "dynamicKey": "permission_groups_permissions_permissionId"
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
                                                        "dynamicKey": "permission_groups_permissions_updatedBy"
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
                            "permission": "permission_groups_permissions_view"
                        }
            ],
            "colMapper": "{ 'permission_groups_permissions_permissionGroupPermissionId' : 'permission_group_permission_id',  'permission_groups_permissions_groupId' : 'group_id',  'permission_groups_permissions_permissionId' : 'permission_id',  'permission_groups_permissions_status' : 'status',  'permission_groups_permissions_groupId' : 'group_id',  'permission_groups_permissions_permissionId' : 'permission_id',  'permission_groups_permissions_status' : 'status',  'permission_groups_permissions_updatedBy' : 'updated_by',  'permission_groups_permissions_updatedAt' : 'updated_at',  'permission_groups_permissions_createdAt' : 'created_at'}"
        };
        module.exports = parameters;
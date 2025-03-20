const parameters = {
            "steps": [
                
                        {
                            "title": "chatting_group_members Info",
                            "parameters": {
                                "fields": [
                                    {
                                        "name": "chatting_group_members",
                                        "type": "section",
                                        "hideInCreateForm": false,
                                        "visible": false,
                                        "required": false,
                                        "disabled": false,
                                        "validations": "",
                                        "dependancyCheck": false,
                                        "isPrefilled": false,
                                        "source": "req.body",
                                        "title": "Chatting_group_members",
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
                                                        "name": "chattingGroupId",
                                                        "label": "Chatting Group Id",
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
                                                        "dynamicKey": "chatting_group_members_chattingGroupId"
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
                                                        "dynamicKey": "chatting_group_members_userRoleDesignationDepartmentId"
                                                    },
                                                    {
                                                        "name": "chattingGroupPermissionId",
                                                        "label": "Chatting Group Permission Id",
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
                                                        "dynamicKey": "chatting_group_members_chattingGroupPermissionId"
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
                                                        "dynamicKey": "chatting_group_members_updatedBy"
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
                            "permission": "chatting_group_members_view"
                        }
            ],
            "colMapper": "{ 'chatting_group_members_chattingGroupMemberId' : 'chatting_group_member_id',  'chatting_group_members_chattingGroupId' : 'chatting_group_id',  'chatting_group_members_userRoleDesignationDepartmentId' : 'user_role_designation_department_id',  'chatting_group_members_chattingGroupPermissionId' : 'chatting_group_permission_id',  'chatting_group_members_status' : 'status',  'chatting_group_members_updatedBy' : 'updated_by',  'chatting_group_members_createdAt' : 'created_at',  'chatting_group_members_updatedAt' : 'updated_at'}"
        };
        module.exports = parameters;
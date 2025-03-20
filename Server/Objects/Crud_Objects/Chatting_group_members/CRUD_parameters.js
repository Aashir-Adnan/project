const parameters = {
            "steps": [
                {
                "title": "Step 1",
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
                                "name": "chatting_group_member_id",
                                "label": "Chatting Group Member Id",
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
                                "dynamicKey": "chatting_group_members_chattingGroupMemberId",
                                "alias" : "chatting_group_members.chatting_group_member_id",
                                },
                                {
                                "name": "chatting_group_id",
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
                                "dynamicKey": "chatting_group_members_chattingGroupId",
                                "alias" : "chatting_group_members.chatting_group_id",
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
                                "dynamicKey": "chatting_group_members_userRoleDesignationDepartmentId",
                                "alias" : "chatting_group_members.user_role_designation_department_id",
                                },
                                {
                                "name": "chatting_group_permission_id",
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
                                "dynamicKey": "chatting_group_members_chattingGroupPermissionId",
                                "alias" : "chatting_group_members.chatting_group_permission_id",
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
                                "dynamicKey": "chatting_group_members_updatedBy",
                                "alias" : "chatting_group_members.updated_by",
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
            "colMapper": "{ 'chatting_group_members_chattingGroupMemberId' : 'chatting_group_member_id',  'chatting_group_members_chattingGroupId' : 'chatting_group_id',  'chatting_group_members_userRoleDesignationDepartmentId' : 'user_role_designation_department_id',  'chatting_group_members_chattingGroupPermissionId' : 'chatting_group_permission_id',  'chatting_group_members_status' : 'status',  'chatting_group_members_updatedBy' : 'updated_by',  'chatting_group_members_createdAt' : 'created_at',  'chatting_group_members_updatedAt' : 'updated_at'}"
            };
            module.exports = parameters;
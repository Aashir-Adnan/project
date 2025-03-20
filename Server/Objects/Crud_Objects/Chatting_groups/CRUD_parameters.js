const parameters = {
            "steps": [
                {
                "title": "Step 1",
                "parameters": {
                    "fields": [
                    {
                        "name": "chatting_groups",
                        "type": "section",
                        "hideInCreateForm": false,
                        "visible": false,
                        "required": false,
                        "disabled": false,
                        "validations": "",
                        "dependancyCheck": false,
                        "isPrefilled": false,
                        "source": "req.body",
                        "title": "Chatting_groups",
                        "childFields": [
                            
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
                                "dynamicKey": "chatting_groups_chattingGroupId",
                                "alias" : "chatting_groups.chatting_group_id",
                                },
                                {
                                "name": "chatting_group_name",
                                "label": "Chatting Group Name",
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
                                "dynamicKey": "chatting_groups_chattingGroupName",
                                "alias" : "chatting_groups.chatting_group_name",
                                },
                                {
                                "name": "chatting_group_name",
                                "label": "Chatting Group Name",
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
                                "dynamicKey": "chatting_groups_chattingGroupName",
                                "alias" : "chatting_groups.chatting_group_name",
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
                                "dynamicKey": "chatting_groups_updatedBy",
                                "alias" : "chatting_groups.updated_by",
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
            "colMapper": "{ 'chatting_groups_chattingGroupId' : 'chatting_group_id',  'chatting_groups_chattingGroupName' : 'chatting_group_name',  'chatting_groups_status' : 'status',  'chatting_groups_chattingGroupName' : 'chatting_group_name',  'chatting_groups_status' : 'status',  'chatting_groups_updatedBy' : 'updated_by',  'chatting_groups_updatedAt' : 'updated_at',  'chatting_groups_createdAt' : 'created_at'}"
            };
            module.exports = parameters;
export const parameters = {
              "steps": [
                
                    {
                        "title": "chatting_group_members Info",
                        "parameters": {
                            "fields": [
                                {
                                    "name": "chattingGroupMembers",
                                    "type": "section",
                                    "hideInCreateForm": false,
                                    "visible": false,
                                    "required": false,
                                    "disabled": false,
                                    "validations": "",
                                    "dependancyCheck": false,
                                    "isPrefilled": false,
                                    "source": "req.body",
                                    "title": "ChattingGroupMembers",
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
                                              "alias" : "chatting_group_members.id"

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
                                                "validations": [],
                                                "selectServer": false,
                                                "dynamicKey": "chattingGroupMembers_chattingGroupId",
                                                "alias" : "chatting_group_members.chatting_group_id"
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
                                                "dynamicKey": "chattingGroupMembers_userRoleDesignationDepartmentId",
                                                "alias" : "chatting_group_members.user_role_designation_department_id"
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
                                                "validations": [],
                                                "selectServer": false,
                                                "dynamicKey": "chattingGroupMembers_chattingGroupPermissionId",
                                                "alias" : "chatting_group_members.chatting_group_permission_id"
                                            },
                                            {
                                              "type": "listOfFields",
                                              "name": "options",
                                              "label": "Add Chatting Group Members",
                                              "hideInCreateForm": true,

                                              "hideInViewForm": true,
                                              "title": "Select Chatting Group Members",
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
                                                "dynamicKey": "chattingGroupMembers_updatedBy",
                                                "alias" : "chatting_group_members.updated_by"
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
                                                "dynamicKey": "chattingGroupMembers_createdAt",
                                                "alias" : "chatting_group_members.created_at"
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
                                                "dynamicKey": "chattingGroupMembers_updatedAt",
                                                "alias" : "chatting_group_members.updated_at"
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
                                                "dynamicKey": "chattingGroupMembers_status",
                                                options:[
                                                    {value:'inactive',label:'inactive'},
                                                    {value:'active',label:'active'}
                                                ],
                                                "alias" : "chatting_group_members.status"
                                            }

                                    ]
                                }
                            ]
                        },
                        "permission": "chatting_group_members_view"
                    }                  
              ],
              "colMapper": { 'chatting_group_members_chattingGroupMemberId' : 'chatting_group_member_id',  'chatting_group_members_chattingGroupId' : 'chatting_group_id',  'chatting_group_members_userRoleDesignationDepartmentId' : 'user_role_designation_department_id',  'chatting_group_members_chattingGroupPermissionId' : 'chatting_group_permission_id',  'chatting_group_members_status' : 'status',  'chatting_group_members_updatedBy' : 'updated_by',  'chatting_group_members_createdAt' : 'created_at',  'chatting_group_members_updatedAt' : 'updated_at'}
          };
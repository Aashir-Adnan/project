const parameters = {
            "steps": [
                
                        {
                            "title": "notifications Info",
                            "parameters": {
                                "fields": [
                                    {
                                        "name": "notifications",
                                        "type": "section",
                                        "hideInCreateForm": false,
                                        "visible": false,
                                        "required": false,
                                        "disabled": false,
                                        "validations": "",
                                        "dependancyCheck": false,
                                        "isPrefilled": false,
                                        "source": "req.body",
                                        "title": "Notifications",
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
                                                        "name": "notificationTitle",
                                                        "label": "Notification Title",
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
                                                        "dynamicKey": "notifications_notificationTitle"
                                                    },
                                                    {
                                                        "name": "notificationTitle",
                                                        "label": "Notification Title",
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
                                                        "dynamicKey": "notifications_notificationTitle"
                                                    },
                                                    {
                                                        "name": "notificationMessage",
                                                        "label": "Notification Message",
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
                                                        "dynamicKey": "notifications_notificationMessage"
                                                    },
                                                    {
                                                        "name": "sentToUserRoleDesignationDepartmentId",
                                                        "label": "Sent To User Role Designation Department Id",
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
                                                        "dynamicKey": "notifications_sentToUserRoleDesignationDepartmentId"
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
                                                        "dynamicKey": "notifications_updatedBy"
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
                            "permission": "notifications_view"
                        }
            ],
            "colMapper": "{ 'notifications_notificationId' : 'notification_id',  'notifications_notificationTitle' : 'notification_title',  'notifications_status' : 'status',  'notifications_notificationTitle' : 'notification_title',  'notifications_status' : 'status',  'notifications_notificationMessage' : 'notification_message',  'notifications_sentToUserRoleDesignationDepartmentId' : 'sent_to_user_role_designation_department_id',  'notifications_updatedBy' : 'updated_by',  'notifications_updatedAt' : 'updated_at',  'notifications_createdAt' : 'created_at'}"
        };
        module.exports = parameters;
const parameters = {
            "steps": [
                {
                "title": "Step 1",
                "parameters": {
                    "fields": [
                    {
                        "name": "user_device_notifications",
                        "type": "section",
                        "hideInCreateForm": false,
                        "visible": false,
                        "required": false,
                        "disabled": false,
                        "validations": "",
                        "dependancyCheck": false,
                        "isPrefilled": false,
                        "source": "req.body",
                        "title": "User_device_notifications",
                        "childFields": [
                            
                                {
                                "name": "user_device_notification_id",
                                "label": "User Device Notification Id",
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
                                "dynamicKey": "user_device_notifications_userDeviceNotificationId",
                                "alias" : "user_device_notifications.user_device_notification_id",
                                },
                                {
                                "name": "user_device_id",
                                "label": "User Device Id",
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
                                "dynamicKey": "user_device_notifications_userDeviceId",
                                "alias" : "user_device_notifications.user_device_id",
                                },
                                {
                                "name": "notification_id",
                                "label": "Notification Id",
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
                                "dynamicKey": "user_device_notifications_notificationId",
                                "alias" : "user_device_notifications.notification_id",
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
                                "dynamicKey": "user_device_notifications_updatedBy",
                                "alias" : "user_device_notifications.updated_by",
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
            "colMapper": "{ 'user_device_notifications_userDeviceNotificationId' : 'user_device_notification_id',  'user_device_notifications_userDeviceId' : 'user_device_id',  'user_device_notifications_notificationId' : 'notification_id',  'user_device_notifications_status' : 'status',  'user_device_notifications_updatedBy' : 'updated_by',  'user_device_notifications_updatedAt' : 'updated_at',  'user_device_notifications_createdAt' : 'created_at'}"
            };
            module.exports = parameters;
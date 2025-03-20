export const parameters = {
              "steps": [
                
                    {
                        "title": "user_device_notifications Info",
                        "parameters": {
                            "fields": [
                                {
                                    "name": "userDeviceNotifications",
                                    "type": "section",
                                    "hideInCreateForm": false,
                                    "visible": false,
                                    "required": false,
                                    "disabled": false,
                                    "validations": "",
                                    "dependancyCheck": false,
                                    "isPrefilled": false,
                                    "source": "req.body",
                                    "title": "UserDeviceNotifications",
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
                                              "alias" : "user_device_notifications.id"

                                            },
                                        
                                            {
                                                "name": "userDeviceId",
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
                                                "validations": [],
                                                "selectServer": false,
                                                "dynamicKey": "userDeviceNotifications_userDeviceId",
                                                "alias" : "user_device_notifications.user_device_id"
                                            },
                                            {
                                                "name": "notificationId",
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
                                                "validations": [],
                                                "selectServer": false,
                                                "dynamicKey": "userDeviceNotifications_notificationId",
                                                "alias" : "user_device_notifications.notification_id"
                                            },
                                            {
                                              "type": "listOfFields",
                                              "name": "options",
                                              "label": "Add User Device Notifications",
                                              "hideInCreateForm": true,

                                              "hideInViewForm": true,
                                              "title": "Select User Device Notifications",
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
                                                "dynamicKey": "userDeviceNotifications_updatedBy",
                                                "alias" : "user_device_notifications.updated_by"
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
                                                "dynamicKey": "userDeviceNotifications_updatedAt",
                                                "alias" : "user_device_notifications.updated_at"
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
                                                "dynamicKey": "userDeviceNotifications_createdAt",
                                                "alias" : "user_device_notifications.created_at"
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
                                                "dynamicKey": "userDeviceNotifications_status",
                                                options:[
                                                    {value:'inactive',label:'inactive'},
                                                    {value:'active',label:'active'}
                                                ],
                                                "alias" : "user_device_notifications.status"
                                            }

                                    ]
                                }
                            ]
                        },
                        "permission": "user_device_notifications_view"
                    }                  
              ],
              "colMapper": { 'user_device_notifications_userDeviceNotificationId' : 'user_device_notification_id',  'user_device_notifications_userDeviceId' : 'user_device_id',  'user_device_notifications_notificationId' : 'notification_id',  'user_device_notifications_status' : 'status',  'user_device_notifications_updatedBy' : 'updated_by',  'user_device_notifications_updatedAt' : 'updated_at',  'user_device_notifications_createdAt' : 'created_at'}
          };
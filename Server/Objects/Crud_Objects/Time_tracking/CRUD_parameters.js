const parameters = {
            "steps": [
                {
                "title": "Step 1",
                "parameters": {
                    "fields": [
                    {
                        "name": "time_tracking",
                        "type": "section",
                        "hideInCreateForm": false,
                        "visible": false,
                        "required": false,
                        "disabled": false,
                        "validations": "",
                        "dependancyCheck": false,
                        "isPrefilled": false,
                        "source": "req.body",
                        "title": "Time_tracking",
                        "childFields": [
                            
                                {
                                "name": "tracking_id",
                                "label": "Tracking Id",
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
                                "dynamicKey": "time_tracking_trackingId",
                                "alias" : "time_tracking.tracking_id",
                                },
                                {
                                "name": "task_id",
                                "label": "Task Id",
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
                                "dynamicKey": "time_tracking_taskId",
                                "alias" : "time_tracking.task_id",
                                },
                                {
                                "name": "user_id",
                                "label": "User Id",
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
                                "dynamicKey": "time_tracking_userId",
                                "alias" : "time_tracking.user_id",
                                },
                                {
                                "name": "start_time",
                                "label": "Start Time",
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
                                "dynamicKey": "time_tracking_startTime",
                                "alias" : "time_tracking.start_time",
                                },
                                {
                                "name": "end_time",
                                "label": "End Time",
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
                                "dynamicKey": "time_tracking_endTime",
                                "alias" : "time_tracking.end_time",
                                },
                                {
                                "name": "duration",
                                "label": "Duration",
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
                                "dynamicKey": "time_tracking_duration",
                                "alias" : "time_tracking.duration",
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
                                "dynamicKey": "time_tracking_updatedBy",
                                "alias" : "time_tracking.updated_by",
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
            "colMapper": "{ 'time_tracking_trackingId' : 'tracking_id',  'time_tracking_taskId' : 'task_id',  'time_tracking_userId' : 'user_id',  'time_tracking_startTime' : 'start_time',  'time_tracking_endTime' : 'end_time',  'time_tracking_duration' : 'duration',  'time_tracking_status' : 'status',  'time_tracking_updatedBy' : 'updated_by',  'time_tracking_updatedAt' : 'updated_at',  'time_tracking_createdAt' : 'created_at'}"
            };
            module.exports = parameters;
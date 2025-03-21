const parameters = {
            "steps": [
                {
                "title": "Step 1",
                "parameters": {
                    "fields": [
                    {
                        "name": "tasks_n",
                        "type": "section",
                        "hideInCreateForm": false,
                        "visible": false,
                        "required": false,
                        "disabled": false,
                        "validations": "",
                        "dependancyCheck": false,
                        "isPrefilled": false,
                        "source": "req.body",
                        "title": "Tasks_n",
                        "childFields": [
                            
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
                                "dynamicKey": "tasks_n_taskId",
                                "alias" : "tasks_n.task_id",
                                },
                                {
                                "name": "created_by",
                                "label": "Created By",
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
                                "dynamicKey": "tasks_n_createdBy",
                                "alias" : "tasks_n.created_by",
                                },
                                {
                                "name": "assignee_id",
                                "label": "Assignee Id",
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
                                "dynamicKey": "tasks_n_assigneeId",
                                "alias" : "tasks_n.assignee_id",
                                },
                                {
                                "name": "project_id",
                                "label": "Project Id",
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
                                "dynamicKey": "tasks_n_projectId",
                                "alias" : "tasks_n.project_id",
                                },
                                {
                                "name": "title",
                                "label": "Title",
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
                                "dynamicKey": "tasks_n_title",
                                "alias" : "tasks_n.title",
                                },
                                {
                                "name": "description",
                                "label": "Description",
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
                                "dynamicKey": "tasks_n_description",
                                "alias" : "tasks_n.description",
                                },
                                {
                                "name": "priority",
                                "label": "Priority",
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
                                "dynamicKey": "tasks_n_priority",
                                "alias" : "tasks_n.priority",
                                },
                                {
                                "name": "due_date",
                                "label": "Due Date",
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
                                "dynamicKey": "tasks_n_dueDate",
                                "alias" : "tasks_n.due_date",
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
                                "dynamicKey": "tasks_n_updatedBy",
                                "alias" : "tasks_n.updated_by",
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
            "colMapper": "{ 'tasks_n_taskId' : 'task_id',  'tasks_n_createdBy' : 'created_by',  'tasks_n_assigneeId' : 'assignee_id',  'tasks_n_projectId' : 'project_id',  'tasks_n_title' : 'title',  'tasks_n_description' : 'description',  'tasks_n_status' : 'status',  'tasks_n_priority' : 'priority',  'tasks_n_dueDate' : 'due_date',  'tasks_n_updatedBy' : 'updated_by',  'tasks_n_updatedAt' : 'updated_at',  'tasks_n_createdAt' : 'created_at'}"
            };
            module.exports = parameters;
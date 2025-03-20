const parameters = {
            "steps": [
                
                        {
                            "title": "task_flow_steps Info",
                            "parameters": {
                                "fields": [
                                    {
                                        "name": "task_flow_steps",
                                        "type": "section",
                                        "hideInCreateForm": false,
                                        "visible": false,
                                        "required": false,
                                        "disabled": false,
                                        "validations": "",
                                        "dependancyCheck": false,
                                        "isPrefilled": false,
                                        "source": "req.body",
                                        "title": "Task_flow_steps",
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
                                                        "name": "taskFlowId",
                                                        "label": "Task Flow Id",
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
                                                        "dynamicKey": "task_flow_steps_taskFlowId"
                                                    },
                                                    {
                                                        "name": "stepTitle",
                                                        "label": "Step Title",
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
                                                        "dynamicKey": "task_flow_steps_stepTitle"
                                                    },
                                                    {
                                                        "name": "stepOrder",
                                                        "label": "Step Order",
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
                                                        "dynamicKey": "task_flow_steps_stepOrder"
                                                    },
                                                    {
                                                        "name": "stepDescription",
                                                        "label": "Step Description",
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
                                                        "dynamicKey": "task_flow_steps_stepDescription"
                                                    },
                                                    {
                                                        "name": "isCrossDepartment",
                                                        "label": "Is Cross Department",
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
                                                        "dynamicKey": "task_flow_steps_isCrossDepartment"
                                                    },
                                                    {
                                                        "name": "stepAssignedToRoleDepartmentId",
                                                        "label": "Step Assigned To Role Department Id",
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
                                                        "dynamicKey": "task_flow_steps_stepAssignedToRoleDepartmentId"
                                                    },
                                                    {
                                                        "name": "createdByUserRoleDepartmentId",
                                                        "label": "Created By User Role Department Id",
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
                                                        "dynamicKey": "task_flow_steps_createdByUserRoleDepartmentId"
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
                                                        "dynamicKey": "task_flow_steps_updatedBy"
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
                            "permission": "task_flow_steps_view"
                        }
            ],
            "colMapper": "{ 'task_flow_steps_taskFlowStepId' : 'task_flow_step_id',  'task_flow_steps_taskFlowId' : 'task_flow_id',  'task_flow_steps_stepTitle' : 'step_title',  'task_flow_steps_stepOrder' : 'step_order',  'task_flow_steps_status' : 'status',  'task_flow_steps_stepDescription' : 'step_description',  'task_flow_steps_isCrossDepartment' : 'is_cross_department',  'task_flow_steps_stepAssignedToRoleDepartmentId' : 'step_assigned_to_role_department_id',  'task_flow_steps_createdByUserRoleDepartmentId' : 'created_by_user_role_department_id',  'task_flow_steps_updatedAt' : 'updated_at',  'task_flow_steps_createdAt' : 'created_at',  'task_flow_steps_updatedBy' : 'updated_by'}"
        };
        module.exports = parameters;
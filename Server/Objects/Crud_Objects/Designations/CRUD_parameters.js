const parameters = {
            "steps": [
                {
                "title": "Step 1",
                "parameters": {
                    "fields": [
                    {
                        "name": "designations",
                        "type": "section",
                        "hideInCreateForm": false,
                        "visible": false,
                        "required": false,
                        "disabled": false,
                        "validations": "",
                        "dependancyCheck": false,
                        "isPrefilled": false,
                        "source": "req.body",
                        "title": "Designations",
                        "childFields": [
                            
                                {
                                "name": "designation_id",
                                "label": "Designation Id",
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
                                "dynamicKey": "designations_designationId",
                                "alias" : "designations.designation_id",
                                },
                                {
                                "name": "designation_name",
                                "label": "Designation Name",
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
                                "dynamicKey": "designations_designationName",
                                "alias" : "designations.designation_name",
                                },
                                {
                                "name": "designation_name",
                                "label": "Designation Name",
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
                                "dynamicKey": "designations_designationName",
                                "alias" : "designations.designation_name",
                                },
                                {
                                "name": "senior_designation_id",
                                "label": "Senior Designation Id",
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
                                "dynamicKey": "designations_seniorDesignationId",
                                "alias" : "designations.senior_designation_id",
                                },
                                {
                                "name": "senior_designation_id",
                                "label": "Senior Designation Id",
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
                                "dynamicKey": "designations_seniorDesignationId",
                                "alias" : "designations.senior_designation_id",
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
                                "dynamicKey": "designations_updatedBy",
                                "alias" : "designations.updated_by",
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
            "colMapper": "{ 'designations_designationId' : 'designation_id',  'designations_designationName' : 'designation_name',  'designations_status' : 'status',  'designations_designationName' : 'designation_name',  'designations_status' : 'status',  'designations_seniorDesignationId' : 'senior_designation_id',  'designations_seniorDesignationId' : 'senior_designation_id',  'designations_updatedBy' : 'updated_by',  'designations_createdAt' : 'created_at',  'designations_updatedAt' : 'updated_at'}"
            };
            module.exports = parameters;
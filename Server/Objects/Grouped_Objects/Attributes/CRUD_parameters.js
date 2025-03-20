const parameters = {
            "steps": [
                
                        {
                            "title": "attributes Info",
                            "parameters": {
                                "fields": [
                                    {
                                        "name": "attributes",
                                        "type": "section",
                                        "hideInCreateForm": false,
                                        "visible": false,
                                        "required": false,
                                        "disabled": false,
                                        "validations": "",
                                        "dependancyCheck": false,
                                        "isPrefilled": false,
                                        "source": "req.body",
                                        "title": "Attributes",
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
                                                        "name": "attributesName",
                                                        "label": "Attributes Name",
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
                                                        "dynamicKey": "attributes_attributesName"
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
                                                        "dynamicKey": "attributes_updatedBy"
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
                            "permission": "attributes_view"
                        }
            ],
            "colMapper": "{ 'attributes_attributesId' : 'attributes_id',  'attributes_attributesName' : 'attributes_name',  'attributes_status' : 'status',  'attributes_updatedBy' : 'updated_by',  'attributes_updatedAt' : 'updated_at',  'attributes_createdAt' : 'created_at'}"
        };
        module.exports = parameters;
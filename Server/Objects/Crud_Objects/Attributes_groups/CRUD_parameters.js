const parameters = {
            "steps": [
                {
                "title": "Step 1",
                "parameters": {
                    "fields": [
                    {
                        "name": "attributes_groups",
                        "type": "section",
                        "hideInCreateForm": false,
                        "visible": false,
                        "required": false,
                        "disabled": false,
                        "validations": "",
                        "dependancyCheck": false,
                        "isPrefilled": false,
                        "source": "req.body",
                        "title": "Attributes_groups",
                        "childFields": [
                            
                                {
                                "name": "attributes_groups_id",
                                "label": "Attributes Groups Id",
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
                                "dynamicKey": "attributes_groups_attributesGroupsId",
                                "alias" : "attributes_groups.attributes_groups_id",
                                },
                                {
                                "name": "attributes_groups_name",
                                "label": "Attributes Groups Name",
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
                                "dynamicKey": "attributes_groups_attributesGroupsName",
                                "alias" : "attributes_groups.attributes_groups_name",
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
                                "dynamicKey": "attributes_groups_updatedBy",
                                "alias" : "attributes_groups.updated_by",
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
            "colMapper": "{ 'attributes_groups_attributesGroupsId' : 'attributes_groups_id',  'attributes_groups_attributesGroupsName' : 'attributes_groups_name',  'attributes_groups_status' : 'status',  'attributes_groups_updatedBy' : 'updated_by',  'attributes_groups_updatedAt' : 'updated_at',  'attributes_groups_createdAt' : 'created_at'}"
            };
            module.exports = parameters;
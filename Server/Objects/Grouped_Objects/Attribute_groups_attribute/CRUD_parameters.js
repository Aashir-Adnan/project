const parameters = {
            "steps": [
                
                        {
                            "title": "attribute_groups_attribute Info",
                            "parameters": {
                                "fields": [
                                    {
                                        "name": "attribute_groups_attribute",
                                        "type": "section",
                                        "hideInCreateForm": false,
                                        "visible": false,
                                        "required": false,
                                        "disabled": false,
                                        "validations": "",
                                        "dependancyCheck": false,
                                        "isPrefilled": false,
                                        "source": "req.body",
                                        "title": "Attribute_groups_attribute",
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
                                                        "name": "attributesId",
                                                        "label": "Attributes Id",
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
                                                        "dynamicKey": "attribute_groups_attribute_attributesId"
                                                    },
                                                    {
                                                        "name": "attributesGroupsId",
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
                                                        "dynamicKey": "attribute_groups_attribute_attributesGroupsId"
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
                                                        "dynamicKey": "attribute_groups_attribute_updatedBy"
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
                            "permission": "attribute_groups_attribute_view"
                        }
            ],
            "colMapper": "{ 'attribute_groups_attribute_attributeGroupsAttributeId' : 'attribute_groups_attribute_id',  'attribute_groups_attribute_attributesId' : 'attributes_id',  'attribute_groups_attribute_attributesGroupsId' : 'attributes_groups_id',  'attribute_groups_attribute_status' : 'status',  'attribute_groups_attribute_updatedBy' : 'updated_by',  'attribute_groups_attribute_updatedAt' : 'updated_at',  'attribute_groups_attribute_createdAt' : 'created_at'}"
        };
        module.exports = parameters;
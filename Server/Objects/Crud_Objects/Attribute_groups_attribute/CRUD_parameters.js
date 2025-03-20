const parameters = {
            "steps": [
                {
                "title": "Step 1",
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
                                "name": "attribute_groups_attribute_id",
                                "label": "Attribute Groups Attribute Id",
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
                                "dynamicKey": "attribute_groups_attribute_attributeGroupsAttributeId",
                                "alias" : "attribute_groups_attribute.attribute_groups_attribute_id",
                                },
                                {
                                "name": "attributes_id",
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
                                "dynamicKey": "attribute_groups_attribute_attributesId",
                                "alias" : "attribute_groups_attribute.attributes_id",
                                },
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
                                "dynamicKey": "attribute_groups_attribute_attributesGroupsId",
                                "alias" : "attribute_groups_attribute.attributes_groups_id",
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
                                "dynamicKey": "attribute_groups_attribute_updatedBy",
                                "alias" : "attribute_groups_attribute.updated_by",
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
            "colMapper": "{ 'attribute_groups_attribute_attributeGroupsAttributeId' : 'attribute_groups_attribute_id',  'attribute_groups_attribute_attributesId' : 'attributes_id',  'attribute_groups_attribute_attributesGroupsId' : 'attributes_groups_id',  'attribute_groups_attribute_status' : 'status',  'attribute_groups_attribute_updatedBy' : 'updated_by',  'attribute_groups_attribute_updatedAt' : 'updated_at',  'attribute_groups_attribute_createdAt' : 'created_at'}"
            };
            module.exports = parameters;
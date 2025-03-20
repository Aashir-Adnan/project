const parameters = {
            "steps": [
                {
                "title": "Step 1",
                "parameters": {
                    "fields": [
                    {
                        "name": "attribute_sub_category_item",
                        "type": "section",
                        "hideInCreateForm": false,
                        "visible": false,
                        "required": false,
                        "disabled": false,
                        "validations": "",
                        "dependancyCheck": false,
                        "isPrefilled": false,
                        "source": "req.body",
                        "title": "Attribute_sub_category_item",
                        "childFields": [
                            
                                {
                                "name": "attribute_sub_category_item_id",
                                "label": "Attribute Sub Category Item Id",
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
                                "dynamicKey": "attribute_sub_category_item_attributeSubCategoryItemId",
                                "alias" : "attribute_sub_category_item.attribute_sub_category_item_id",
                                },
                                {
                                "name": "inventory_sub_category_item_id",
                                "label": "Inventory Sub Category Item Id",
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
                                "dynamicKey": "attribute_sub_category_item_inventorySubCategoryItemId",
                                "alias" : "attribute_sub_category_item.inventory_sub_category_item_id",
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
                                "dynamicKey": "attribute_sub_category_item_attributesId",
                                "alias" : "attribute_sub_category_item.attributes_id",
                                },
                                {
                                "name": "attribute_value",
                                "label": "Attribute Value",
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
                                "dynamicKey": "attribute_sub_category_item_attributeValue",
                                "alias" : "attribute_sub_category_item.attribute_value",
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
                                "dynamicKey": "attribute_sub_category_item_updatedBy",
                                "alias" : "attribute_sub_category_item.updated_by",
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
            "colMapper": "{ 'attribute_sub_category_item_attributeSubCategoryItemId' : 'attribute_sub_category_item_id',  'attribute_sub_category_item_inventorySubCategoryItemId' : 'inventory_sub_category_item_id',  'attribute_sub_category_item_attributesId' : 'attributes_id',  'attribute_sub_category_item_attributeValue' : 'attribute_value',  'attribute_sub_category_item_status' : 'status',  'attribute_sub_category_item_updatedBy' : 'updated_by',  'attribute_sub_category_item_updatedAt' : 'updated_at',  'attribute_sub_category_item_createdAt' : 'created_at'}"
            };
            module.exports = parameters;
const parameters = {
            "steps": [
                
                        {
                            "title": "attribute_sub_category_item Info",
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
                                                        "name": "inventorySubCategoryItemId",
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
                                                        "dynamicKey": "attribute_sub_category_item_inventorySubCategoryItemId"
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
                                                        "dynamicKey": "attribute_sub_category_item_attributesId"
                                                    },
                                                    {
                                                        "name": "attributeValue",
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
                                                        "dynamicKey": "attribute_sub_category_item_attributeValue"
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
                                                        "dynamicKey": "attribute_sub_category_item_updatedBy"
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
                            "permission": "attribute_sub_category_item_view"
                        }
            ],
            "colMapper": "{ 'attribute_sub_category_item_attributeSubCategoryItemId' : 'attribute_sub_category_item_id',  'attribute_sub_category_item_inventorySubCategoryItemId' : 'inventory_sub_category_item_id',  'attribute_sub_category_item_attributesId' : 'attributes_id',  'attribute_sub_category_item_attributeValue' : 'attribute_value',  'attribute_sub_category_item_status' : 'status',  'attribute_sub_category_item_updatedBy' : 'updated_by',  'attribute_sub_category_item_updatedAt' : 'updated_at',  'attribute_sub_category_item_createdAt' : 'created_at'}"
        };
        module.exports = parameters;
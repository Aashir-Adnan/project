const parameters = {
            "steps": [
                {
                "title": "Step 1",
                "parameters": {
                    "fields": [
                    {
                        "name": "inventory_sub_category",
                        "type": "section",
                        "hideInCreateForm": false,
                        "visible": false,
                        "required": false,
                        "disabled": false,
                        "validations": "",
                        "dependancyCheck": false,
                        "isPrefilled": false,
                        "source": "req.body",
                        "title": "Inventory_sub_category",
                        "childFields": [
                            
                                {
                                "name": "inventory_sub_category_id",
                                "label": "Inventory Sub Category Id",
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
                                "dynamicKey": "inventory_sub_category_inventorySubCategoryId",
                                "alias" : "inventory_sub_category.inventory_sub_category_id",
                                },
                                {
                                "name": "inventory_types_category_id",
                                "label": "Inventory Types Category Id",
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
                                "dynamicKey": "inventory_sub_category_inventoryTypesCategoryId",
                                "alias" : "inventory_sub_category.inventory_types_category_id",
                                },
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
                                "dynamicKey": "inventory_sub_category_attributeGroupsAttributeId",
                                "alias" : "inventory_sub_category.attribute_groups_attribute_id",
                                },
                                {
                                "name": "sub_category_items_name",
                                "label": "Sub Category Items Name",
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
                                "dynamicKey": "inventory_sub_category_subCategoryItemsName",
                                "alias" : "inventory_sub_category.sub_category_items_name",
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
                                "dynamicKey": "inventory_sub_category_updatedBy",
                                "alias" : "inventory_sub_category.updated_by",
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
            "colMapper": "{ 'inventory_sub_category_inventorySubCategoryId' : 'inventory_sub_category_id',  'inventory_sub_category_inventoryTypesCategoryId' : 'inventory_types_category_id',  'inventory_sub_category_attributeGroupsAttributeId' : 'attribute_groups_attribute_id',  'inventory_sub_category_subCategoryItemsName' : 'sub_category_items_name',  'inventory_sub_category_status' : 'status',  'inventory_sub_category_updatedBy' : 'updated_by',  'inventory_sub_category_updatedAt' : 'updated_at',  'inventory_sub_category_createdAt' : 'created_at'}"
            };
            module.exports = parameters;
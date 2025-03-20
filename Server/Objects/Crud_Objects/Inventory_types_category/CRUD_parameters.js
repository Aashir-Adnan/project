const parameters = {
            "steps": [
                {
                "title": "Step 1",
                "parameters": {
                    "fields": [
                    {
                        "name": "inventory_types_category",
                        "type": "section",
                        "hideInCreateForm": false,
                        "visible": false,
                        "required": false,
                        "disabled": false,
                        "validations": "",
                        "dependancyCheck": false,
                        "isPrefilled": false,
                        "source": "req.body",
                        "title": "Inventory_types_category",
                        "childFields": [
                            
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
                                "dynamicKey": "inventory_types_category_inventoryTypesCategoryId",
                                "alias" : "inventory_types_category.inventory_types_category_id",
                                },
                                {
                                "name": "inventory_id",
                                "label": "Inventory Id",
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
                                "dynamicKey": "inventory_types_category_inventoryId",
                                "alias" : "inventory_types_category.inventory_id",
                                },
                                {
                                "name": "category_name",
                                "label": "Category Name",
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
                                "dynamicKey": "inventory_types_category_categoryName",
                                "alias" : "inventory_types_category.category_name",
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
                                "dynamicKey": "inventory_types_category_updatedBy",
                                "alias" : "inventory_types_category.updated_by",
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
            "colMapper": "{ 'inventory_types_category_inventoryTypesCategoryId' : 'inventory_types_category_id',  'inventory_types_category_inventoryId' : 'inventory_id',  'inventory_types_category_categoryName' : 'category_name',  'inventory_types_category_status' : 'status',  'inventory_types_category_updatedBy' : 'updated_by',  'inventory_types_category_updatedAt' : 'updated_at',  'inventory_types_category_createdAt' : 'created_at'}"
            };
            module.exports = parameters;
const parameters = {
            "steps": [
                
                        {
                            "title": "inventory_sub_category_items Info",
                            "parameters": {
                                "fields": [
                                    {
                                        "name": "inventory_sub_category_items",
                                        "type": "section",
                                        "hideInCreateForm": false,
                                        "visible": false,
                                        "required": false,
                                        "disabled": false,
                                        "validations": "",
                                        "dependancyCheck": false,
                                        "isPrefilled": false,
                                        "source": "req.body",
                                        "title": "Inventory_sub_category_items",
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
                                                        "name": "inventorySubCategoryId",
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
                                                        "dynamicKey": "inventory_sub_category_items_inventorySubCategoryId"
                                                    },
                                                    {
                                                        "name": "parentInventorySubCategoryItemId",
                                                        "label": "Parent Inventory Sub Category Item Id",
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
                                                        "dynamicKey": "inventory_sub_category_items_parentInventorySubCategoryItemId"
                                                    },
                                                    {
                                                        "name": "itemLocationId",
                                                        "label": "Item Location Id",
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
                                                        "dynamicKey": "inventory_sub_category_items_itemLocationId"
                                                    },
                                                    {
                                                        "name": "inventoryBillId",
                                                        "label": "Inventory Bill Id",
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
                                                        "dynamicKey": "inventory_sub_category_items_inventoryBillId"
                                                    },
                                                    {
                                                        "name": "inventorySubCategoryItemName",
                                                        "label": "Inventory Sub Category Item Name",
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
                                                        "dynamicKey": "inventory_sub_category_items_inventorySubCategoryItemName"
                                                    },
                                                    {
                                                        "name": "companyName",
                                                        "label": "Company Name",
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
                                                        "dynamicKey": "inventory_sub_category_items_companyName"
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
                                                        "dynamicKey": "inventory_sub_category_items_updatedBy"
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
                            "permission": "inventory_sub_category_items_view"
                        }
            ],
            "colMapper": "{ 'inventory_sub_category_items_inventorySubCategoryItemId' : 'inventory_sub_category_item_id',  'inventory_sub_category_items_inventorySubCategoryId' : 'inventory_sub_category_id',  'inventory_sub_category_items_parentInventorySubCategoryItemId' : 'parent_inventory_sub_category_item_id',  'inventory_sub_category_items_itemLocationId' : 'item_location_id',  'inventory_sub_category_items_inventoryBillId' : 'inventory_bill_id',  'inventory_sub_category_items_inventorySubCategoryItemName' : 'inventory_sub_category_item_name',  'inventory_sub_category_items_companyName' : 'company_name',  'inventory_sub_category_items_status' : 'status',  'inventory_sub_category_items_updatedBy' : 'updated_by',  'inventory_sub_category_items_updatedAt' : 'updated_at',  'inventory_sub_category_items_createdAt' : 'created_at'}"
        };
        module.exports = parameters;
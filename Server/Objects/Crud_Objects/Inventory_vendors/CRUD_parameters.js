const parameters = {
            "steps": [
                {
                "title": "Step 1",
                "parameters": {
                    "fields": [
                    {
                        "name": "inventory_vendors",
                        "type": "section",
                        "hideInCreateForm": false,
                        "visible": false,
                        "required": false,
                        "disabled": false,
                        "validations": "",
                        "dependancyCheck": false,
                        "isPrefilled": false,
                        "source": "req.body",
                        "title": "Inventory_vendors",
                        "childFields": [
                            
                                {
                                "name": "inventory_vendor_id",
                                "label": "Inventory Vendor Id",
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
                                "dynamicKey": "inventory_vendors_inventoryVendorId",
                                "alias" : "inventory_vendors.inventory_vendor_id",
                                },
                                {
                                "name": "vendor_name",
                                "label": "Vendor Name",
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
                                "dynamicKey": "inventory_vendors_vendorName",
                                "alias" : "inventory_vendors.vendor_name",
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
                                "dynamicKey": "inventory_vendors_updatedBy",
                                "alias" : "inventory_vendors.updated_by",
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
            "colMapper": "{ 'inventory_vendors_inventoryVendorId' : 'inventory_vendor_id',  'inventory_vendors_vendorName' : 'vendor_name',  'inventory_vendors_status' : 'status',  'inventory_vendors_updatedBy' : 'updated_by',  'inventory_vendors_updatedAt' : 'updated_at',  'inventory_vendors_createdAt' : 'created_at'}"
            };
            module.exports = parameters;
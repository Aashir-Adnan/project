const parameters = {
            "steps": [
                {
                "title": "Step 1",
                "parameters": {
                    "fields": [
                    {
                        "name": "inventory_bill",
                        "type": "section",
                        "hideInCreateForm": false,
                        "visible": false,
                        "required": false,
                        "disabled": false,
                        "validations": "",
                        "dependancyCheck": false,
                        "isPrefilled": false,
                        "source": "req.body",
                        "title": "Inventory_bill",
                        "childFields": [
                            
                                {
                                "name": "inventory_bill_id",
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
                                "dynamicKey": "inventory_bill_inventoryBillId",
                                "alias" : "inventory_bill.inventory_bill_id",
                                },
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
                                "dynamicKey": "inventory_bill_inventoryVendorId",
                                "alias" : "inventory_bill.inventory_vendor_id",
                                },
                                {
                                "name": "bill_serial_number",
                                "label": "Bill Serial Number",
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
                                "dynamicKey": "inventory_bill_billSerialNumber",
                                "alias" : "inventory_bill.bill_serial_number",
                                },
                                {
                                "name": "company_name",
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
                                "dynamicKey": "inventory_bill_companyName",
                                "alias" : "inventory_bill.company_name",
                                },
                                {
                                "name": "bill_amount",
                                "label": "Bill Amount",
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
                                "dynamicKey": "inventory_bill_billAmount",
                                "alias" : "inventory_bill.bill_amount",
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
                                "dynamicKey": "inventory_bill_updatedBy",
                                "alias" : "inventory_bill.updated_by",
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
            "colMapper": "{ 'inventory_bill_inventoryBillId' : 'inventory_bill_id',  'inventory_bill_inventoryVendorId' : 'inventory_vendor_id',  'inventory_bill_billSerialNumber' : 'bill_serial_number',  'inventory_bill_companyName' : 'company_name',  'inventory_bill_billAmount' : 'bill_amount',  'inventory_bill_status' : 'status',  'inventory_bill_updatedBy' : 'updated_by',  'inventory_bill_updatedAt' : 'updated_at',  'inventory_bill_createdAt' : 'created_at'}"
            };
            module.exports = parameters;
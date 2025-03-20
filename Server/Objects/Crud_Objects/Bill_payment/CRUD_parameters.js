const parameters = {
            "steps": [
                {
                "title": "Step 1",
                "parameters": {
                    "fields": [
                    {
                        "name": "bill_payment",
                        "type": "section",
                        "hideInCreateForm": false,
                        "visible": false,
                        "required": false,
                        "disabled": false,
                        "validations": "",
                        "dependancyCheck": false,
                        "isPrefilled": false,
                        "source": "req.body",
                        "title": "Bill_payment",
                        "childFields": [
                            
                                {
                                "name": "bill_payment_id",
                                "label": "Bill Payment Id",
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
                                "dynamicKey": "bill_payment_billPaymentId",
                                "alias" : "bill_payment.bill_payment_id",
                                },
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
                                "dynamicKey": "bill_payment_inventoryBillId",
                                "alias" : "bill_payment.inventory_bill_id",
                                },
                                {
                                "name": "payment_by",
                                "label": "Payment By",
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
                                "dynamicKey": "bill_payment_paymentBy",
                                "alias" : "bill_payment.payment_by",
                                },
                                {
                                "name": "due_date",
                                "label": "Due Date",
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
                                "dynamicKey": "bill_payment_dueDate",
                                "alias" : "bill_payment.due_date",
                                },
                                {
                                "name": "total_payment",
                                "label": "Total Payment",
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
                                "dynamicKey": "bill_payment_totalPayment",
                                "alias" : "bill_payment.total_payment",
                                },
                                {
                                "name": "remaining_payment",
                                "label": "Remaining Payment",
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
                                "dynamicKey": "bill_payment_remainingPayment",
                                "alias" : "bill_payment.remaining_payment",
                                },
                                {
                                "name": "payment_method",
                                "label": "Payment Method",
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
                                "dynamicKey": "bill_payment_paymentMethod",
                                "alias" : "bill_payment.payment_method",
                                },
                                {
                                "name": "last_payment_date",
                                "label": "Last Payment Date",
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
                                "dynamicKey": "bill_payment_lastPaymentDate",
                                "alias" : "bill_payment.last_payment_date",
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
                                "dynamicKey": "bill_payment_updatedBy",
                                "alias" : "bill_payment.updated_by",
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
            "colMapper": "{ 'bill_payment_billPaymentId' : 'bill_payment_id',  'bill_payment_inventoryBillId' : 'inventory_bill_id',  'bill_payment_paymentBy' : 'payment_by',  'bill_payment_dueDate' : 'due_date',  'bill_payment_totalPayment' : 'total_payment',  'bill_payment_remainingPayment' : 'remaining_payment',  'bill_payment_paymentMethod' : 'payment_method',  'bill_payment_lastPaymentDate' : 'last_payment_date',  'bill_payment_status' : 'status',  'bill_payment_updatedBy' : 'updated_by',  'bill_payment_updatedAt' : 'updated_at',  'bill_payment_createdAt' : 'created_at'}"
            };
            module.exports = parameters;
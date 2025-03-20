const parameters = {
            "steps": [
                {
                "title": "Step 1",
                "parameters": {
                    "fields": [
                    {
                        "name": "item_location",
                        "type": "section",
                        "hideInCreateForm": false,
                        "visible": false,
                        "required": false,
                        "disabled": false,
                        "validations": "",
                        "dependancyCheck": false,
                        "isPrefilled": false,
                        "source": "req.body",
                        "title": "Item_location",
                        "childFields": [
                            
                                {
                                "name": "item_location_id",
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
                                "dynamicKey": "item_location_itemLocationId",
                                "alias" : "item_location.item_location_id",
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
                                "dynamicKey": "item_location_inventorySubCategoryItemId",
                                "alias" : "item_location.inventory_sub_category_item_id",
                                },
                                {
                                "name": "location_name",
                                "label": "Location Name",
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
                                "dynamicKey": "item_location_locationName",
                                "alias" : "item_location.location_name",
                                },
                                {
                                "name": "departure_date",
                                "label": "Departure Date",
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
                                "dynamicKey": "item_location_departureDate",
                                "alias" : "item_location.departure_date",
                                },
                                {
                                "name": "arrival_date",
                                "label": "Arrival Date",
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
                                "dynamicKey": "item_location_arrivalDate",
                                "alias" : "item_location.arrival_date",
                                },
                                {
                                "name": "placed_by_user_role_designation_department_id",
                                "label": "Placed By User Role Designation Department Id",
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
                                "dynamicKey": "item_location_placedByUserRoleDesignationDepartmentId",
                                "alias" : "item_location.placed_by_user_role_designation_department_id",
                                },
                                {
                                "name": "displaced_by_user_role_designation_department_id",
                                "label": "Displaced By User Role Designation Department Id",
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
                                "dynamicKey": "item_location_displacedByUserRoleDesignationDepartmentId",
                                "alias" : "item_location.displaced_by_user_role_designation_department_id",
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
                                "dynamicKey": "item_location_updatedBy",
                                "alias" : "item_location.updated_by",
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
            "colMapper": "{ 'item_location_itemLocationId' : 'item_location_id',  'item_location_inventorySubCategoryItemId' : 'inventory_sub_category_item_id',  'item_location_locationName' : 'location_name',  'item_location_departureDate' : 'departure_date',  'item_location_arrivalDate' : 'arrival_date',  'item_location_placedByUserRoleDesignationDepartmentId' : 'placed_by_user_role_designation_department_id',  'item_location_displacedByUserRoleDesignationDepartmentId' : 'displaced_by_user_role_designation_department_id',  'item_location_status' : 'status',  'item_location_updatedBy' : 'updated_by',  'item_location_updatedAt' : 'updated_at',  'item_location_createdAt' : 'created_at'}"
            };
            module.exports = parameters;
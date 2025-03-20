const parameters = {
            "steps": [
                
                        {
                            "title": "item_location Info",
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
                                                        "dynamicKey": "item_location_inventorySubCategoryItemId"
                                                    },
                                                    {
                                                        "name": "locationName",
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
                                                        "dynamicKey": "item_location_locationName"
                                                    },
                                                    {
                                                        "name": "departureDate",
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
                                                        "dynamicKey": "item_location_departureDate"
                                                    },
                                                    {
                                                        "name": "arrivalDate",
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
                                                        "dynamicKey": "item_location_arrivalDate"
                                                    },
                                                    {
                                                        "name": "placedByUserRoleDesignationDepartmentId",
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
                                                        "dynamicKey": "item_location_placedByUserRoleDesignationDepartmentId"
                                                    },
                                                    {
                                                        "name": "displacedByUserRoleDesignationDepartmentId",
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
                                                        "dynamicKey": "item_location_displacedByUserRoleDesignationDepartmentId"
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
                                                        "dynamicKey": "item_location_updatedBy"
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
                            "permission": "item_location_view"
                        }
            ],
            "colMapper": "{ 'item_location_itemLocationId' : 'item_location_id',  'item_location_inventorySubCategoryItemId' : 'inventory_sub_category_item_id',  'item_location_locationName' : 'location_name',  'item_location_departureDate' : 'departure_date',  'item_location_arrivalDate' : 'arrival_date',  'item_location_placedByUserRoleDesignationDepartmentId' : 'placed_by_user_role_designation_department_id',  'item_location_displacedByUserRoleDesignationDepartmentId' : 'displaced_by_user_role_designation_department_id',  'item_location_status' : 'status',  'item_location_updatedBy' : 'updated_by',  'item_location_updatedAt' : 'updated_at',  'item_location_createdAt' : 'created_at'}"
        };
        module.exports = parameters;
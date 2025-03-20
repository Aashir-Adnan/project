export const parameters = {
              "steps": [
                
                    {
                        "title": "inventory_sub_category Info",
                        "parameters": {
                            "fields": [
                                {
                                    "name": "inventorySubCategory",
                                    "type": "section",
                                    "hideInCreateForm": false,
                                    "visible": false,
                                    "required": false,
                                    "disabled": false,
                                    "validations": "",
                                    "dependancyCheck": false,
                                    "isPrefilled": false,
                                    "source": "req.body",
                                    "title": "InventorySubCategory",
                                    "childFields": [
                                            {
                                              "name": "id",
                                              "label": "id",
                                              "title": "",
                                              "type": "textField",
                                              "required": false,
                                              "hideInCreateForm": true,
                                              "hideInViewForm" : true,
                                              "visible": false,
                                              "disabled": false,
                                              "dependancyCheck": false,
                                              "isPrefilled": false,
                                              "source": "req.query",
                                              "min": "",
                                              "max": "",
                                              "selectServer": false,
                                              "dynamicKey": "id",
                                              "alias" : "inventory_sub_category.id"

                                            },
                                        
                                            {
                                                "name": "inventoryTypesCategoryId",
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
                                                "validations": [],
                                                "selectServer": false,
                                                "dynamicKey": "inventorySubCategory_inventoryTypesCategoryId",
                                                "alias" : "inventory_sub_category.inventory_types_category_id"
                                            },
                                            {
                                                "name": "attributeGroupsAttributeId",
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
                                                "validations": [],
                                                "selectServer": false,
                                                "dynamicKey": "inventorySubCategory_attributeGroupsAttributeId",
                                                "alias" : "inventory_sub_category.attribute_groups_attribute_id"
                                            },
                                            {
                                                "name": "subCategoryItemsName",
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
                                                "validations": [],
                                                "selectServer": false,
                                                "dynamicKey": "inventorySubCategory_subCategoryItemsName",
                                                "alias" : "inventory_sub_category.sub_category_items_name"
                                            },
                                            {
                                              "type": "listOfFields",
                                              "name": "options",
                                              "label": "Add Inventory Sub Category",
                                              "hideInCreateForm": true,

                                              "hideInViewForm": true,
                                              "title": "Select Inventory Sub Category",
                                              "dependancyCheck": false,
                                              "childFields": [
                                            
                                            ]
                                          }
                                        ,
                                        
                                            {
                                                "name": "updatedBy",
                                                "label": "Updated By",
                                                "title": "",
                                                "type": "dateTime",
                                                "required": false,
                                                "hideInCreateForm": true,
                                                "hideInViewForm" : true,
                                                "visible": false,
                                                "disabled": false,
                                                "dependancyCheck": false,
                                                "isPrefilled": false,
                                                "source": "req.body",
                                                "min": "",
                                                "max": "",
                                                "validations": [],
                                                "selectServer": false,
                                                "dynamicKey": "inventorySubCategory_updatedBy",
                                                "alias" : "inventory_sub_category.updated_by"
                                            },
                                            {
                                                "name": "updatedAt",
                                                "label": "Updated At",
                                                "title": "",
                                                "type": "dateTime",
                                                "required": false,
                                                "hideInCreateForm": true,
                                                "hideInViewForm" : true,
                                                "visible": false,
                                                "disabled": false,
                                                "dependancyCheck": false,
                                                "isPrefilled": false,
                                                "source": "req.body",
                                                "min": "",
                                                "max": "",
                                                "validations": [],
                                                "selectServer": false,
                                                "dynamicKey": "inventorySubCategory_updatedAt",
                                                "alias" : "inventory_sub_category.updated_at"
                                            },
                                            {
                                                "name": "createdAt",
                                                "label": "Created At",
                                                "title": "",
                                                "type": "dateTime",
                                                "required": false,
                                                "hideInCreateForm": true,
                                                "hideInViewForm" : true,
                                                "visible": false,
                                                "disabled": false,
                                                "dependancyCheck": false,
                                                "isPrefilled": false,
                                                "source": "req.body",
                                                "min": "",
                                                "max": "",
                                                "validations": [],
                                                "selectServer": false,
                                                "dynamicKey": "inventorySubCategory_createdAt",
                                                "alias" : "inventory_sub_category.created_at"
                                            },
                                          
                                            {
                                                "name": "status",
                                                "label": "Status",
                                                "title": "",
                                                "type": "select",
                                                "required": false,
                                                "hideInCreateForm": false,
                                                "visible": true,
                                                "disabled": false,
                                                "dependancyCheck": false,
                                                "isPrefilled": false,
                                                "source": "req.body",
                                                "min": "",
                                                "max": "",
                                                "validations": [],
                                                "selectServer": false,
                                                "dynamicKey": "inventorySubCategory_status",
                                                options:[
                                                    {value:'inactive',label:'inactive'},
                                                    {value:'active',label:'active'}
                                                ],
                                                "alias" : "inventory_sub_category.status"
                                            }

                                    ]
                                }
                            ]
                        },
                        "permission": "inventory_sub_category_view"
                    }                  
              ],
              "colMapper": { 'inventory_sub_category_inventorySubCategoryId' : 'inventory_sub_category_id',  'inventory_sub_category_inventoryTypesCategoryId' : 'inventory_types_category_id',  'inventory_sub_category_attributeGroupsAttributeId' : 'attribute_groups_attribute_id',  'inventory_sub_category_subCategoryItemsName' : 'sub_category_items_name',  'inventory_sub_category_status' : 'status',  'inventory_sub_category_updatedBy' : 'updated_by',  'inventory_sub_category_updatedAt' : 'updated_at',  'inventory_sub_category_createdAt' : 'created_at'}
          };
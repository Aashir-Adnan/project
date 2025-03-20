export const parameters = {
              "steps": [
                
                    {
                        "title": "attribute_sub_category_item Info",
                        "parameters": {
                            "fields": [
                                {
                                    "name": "attributeSubCategoryItem",
                                    "type": "section",
                                    "hideInCreateForm": false,
                                    "visible": false,
                                    "required": false,
                                    "disabled": false,
                                    "validations": "",
                                    "dependancyCheck": false,
                                    "isPrefilled": false,
                                    "source": "req.body",
                                    "title": "AttributeSubCategoryItem",
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
                                              "alias" : "attribute_sub_category_item.id"

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
                                                "validations": [],
                                                "selectServer": false,
                                                "dynamicKey": "attributeSubCategoryItem_inventorySubCategoryItemId",
                                                "alias" : "attribute_sub_category_item.inventory_sub_category_item_id"
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
                                                "validations": [],
                                                "selectServer": false,
                                                "dynamicKey": "attributeSubCategoryItem_attributesId",
                                                "alias" : "attribute_sub_category_item.attributes_id"
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
                                                "validations": [],
                                                "selectServer": false,
                                                "dynamicKey": "attributeSubCategoryItem_attributeValue",
                                                "alias" : "attribute_sub_category_item.attribute_value"
                                            },
                                            {
                                              "type": "listOfFields",
                                              "name": "options",
                                              "label": "Add Attribute Sub Category Item",
                                              "hideInCreateForm": true,

                                              "hideInViewForm": true,
                                              "title": "Select Attribute Sub Category Item",
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
                                                "dynamicKey": "attributeSubCategoryItem_updatedBy",
                                                "alias" : "attribute_sub_category_item.updated_by"
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
                                                "dynamicKey": "attributeSubCategoryItem_updatedAt",
                                                "alias" : "attribute_sub_category_item.updated_at"
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
                                                "dynamicKey": "attributeSubCategoryItem_createdAt",
                                                "alias" : "attribute_sub_category_item.created_at"
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
                                                "dynamicKey": "attributeSubCategoryItem_status",
                                                options:[
                                                    {value:'inactive',label:'inactive'},
                                                    {value:'active',label:'active'}
                                                ],
                                                "alias" : "attribute_sub_category_item.status"
                                            }

                                    ]
                                }
                            ]
                        },
                        "permission": "attribute_sub_category_item_view"
                    }                  
              ],
              "colMapper": { 'attribute_sub_category_item_attributeSubCategoryItemId' : 'attribute_sub_category_item_id',  'attribute_sub_category_item_inventorySubCategoryItemId' : 'inventory_sub_category_item_id',  'attribute_sub_category_item_attributesId' : 'attributes_id',  'attribute_sub_category_item_attributeValue' : 'attribute_value',  'attribute_sub_category_item_status' : 'status',  'attribute_sub_category_item_updatedBy' : 'updated_by',  'attribute_sub_category_item_updatedAt' : 'updated_at',  'attribute_sub_category_item_createdAt' : 'created_at'}
          };
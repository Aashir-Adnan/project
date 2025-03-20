export const parameters = {
              "steps": [
                
                    {
                        "title": "platforms Info",
                        "parameters": {
                            "fields": [
                                {
                                    "name": "platforms",
                                    "type": "section",
                                    "hideInCreateForm": false,
                                    "visible": false,
                                    "required": false,
                                    "disabled": false,
                                    "validations": "",
                                    "dependancyCheck": false,
                                    "isPrefilled": false,
                                    "source": "req.body",
                                    "title": "Platforms",
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
                                              "alias" : "platforms.id"

                                            },
                                        
                                            {
                                                "name": "platformName",
                                                "label": "Platform Name",
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
                                                "dynamicKey": "platforms_platformName",
                                                "alias" : "platforms.platform_name"
                                            },
                                            {
                                                "name": "platformName",
                                                "label": "Platform Name",
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
                                                "dynamicKey": "platforms_platformName",
                                                "alias" : "platforms.platform_name"
                                            },
                                            {
                                              "type": "listOfFields",
                                              "name": "options",
                                              "label": "Add Platforms",
                                              "hideInCreateForm": true,

                                              "hideInViewForm": true,
                                              "title": "Select Platforms",
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
                                                "dynamicKey": "platforms_updatedBy",
                                                "alias" : "platforms.updated_by"
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
                                                "dynamicKey": "platforms_createdAt",
                                                "alias" : "platforms.created_at"
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
                                                "dynamicKey": "platforms_updatedAt",
                                                "alias" : "platforms.updated_at"
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
                                                "dynamicKey": "platforms_status",
                                                options:[
                                                    {value:'inactive',label:'inactive'},
                                                    {value:'active',label:'active'}
                                                ],
                                                "alias" : "platforms.status"
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
                                                "dynamicKey": "platforms_status",
                                                options:[
                                                    {value:'inactive',label:'inactive'},
                                                    {value:'active',label:'active'}
                                                ],
                                                "alias" : "platforms.status"
                                            }

                                    ]
                                }
                            ]
                        },
                        "permission": "platforms_view"
                    }                  
              ],
              "colMapper": { 'platforms_platformId' : 'platform_id',  'platforms_platformName' : 'platform_name',  'platforms_status' : 'status',  'platforms_platformName' : 'platform_name',  'platforms_status' : 'status',  'platforms_updatedBy' : 'updated_by',  'platforms_createdAt' : 'created_at',  'platforms_updatedAt' : 'updated_at'}
          };
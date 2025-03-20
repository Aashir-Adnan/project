/* Frontend Parameters for table: projects */
        
          export const parameters = {
              "steps": [
                  {
                  "title": "projects Info",
                  "parameters": {
                      "fields": [
                      {
                          "name": "projects",
                          "type": "section",
                          "hideInCreateForm": false,
                          "visible": false,
                          "required": false,
                          "disabled": false,
                          "validations": "",
                          "dependancyCheck": false,
                          "isPrefilled": false,
                          "source": "req.body",
                          "title": "Projects",
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
                                            "dynamicKey": "id"
                                          },
                                      
                                          {
                                              "name": "name",
                                              "label": "Name",
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
                                              "dynamicKey": "projects_name"
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
                                              "validations": [],
                                              "selectServer": false,
                                              "dynamicKey": "projects_updatedBy"
                                          },
                                          {
                                            "type": "listOfFields",
                                            "name": "options",
                                            "label": "Add Projects",
                                            "hideInCreateForm": false,

                                            "hideInViewForm": false,
                                            "title": "Select Projects",
                                            "dependancyCheck": false,
                                            "childFields": [
                                          
                                              {
                                                  "name": "teamId",
                                                  "label": "Team Id",
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
                                                  "selectServer": true,
                                                  "dynamicKey": "projects_teamId",
                                                  "selectServerUrl": "/list/teams/dropdown?version=1.0"
                                              },
                                              {
                                                  "name": "createdBy",
                                                  "label": "Created By",
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
                                                  "selectServer": true,
                                                  "dynamicKey": "projects_createdBy",
                                                  "selectServerUrl": "/list/users/dropdown?version=1.0"
                                              }
                                          ]
                                        }
                                      ,
                                      
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
                                              "dynamicKey": "projects_updatedAt"
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
                                              "dynamicKey": "projects_createdAt"
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
                                              "dynamicKey": "projects_status",
                                              options:[
                                                  {value:'inactive',label:'inactive'},
                                                  {value:'active',label:'active'}
                                              ]
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
                  ]
                  }
              ],
              "colMapper": "{ 'projects_projectId' : 'project_id',  'projects_teamId' : 'team_id',  'projects_createdBy' : 'created_by',  'projects_name' : 'name',  'projects_status' : 'status',  'projects_updatedBy' : 'updated_by',  'projects_updatedAt' : 'updated_at',  'projects_createdAt' : 'created_at'}"
              };
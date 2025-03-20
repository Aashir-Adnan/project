/* Frontend Parameters for table: designations */
        
          export const parameters = {
              "steps": [
                  {
                  "title": "designations Info",
                  "parameters": {
                      "fields": [
                      {
                          "name": "designations",
                          "type": "section",
                          "hideInCreateForm": false,
                          "visible": false,
                          "required": false,
                          "disabled": false,
                          "validations": "",
                          "dependancyCheck": false,
                          "isPrefilled": false,
                          "source": "req.body",
                          "title": "Designations",
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
                                              "name": "designationName",
                                              "label": "Designation Name",
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
                                              "dynamicKey": "designations_designationName"
                                          },
                                          {
                                              "name": "designationName",
                                              "label": "Designation Name",
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
                                              "dynamicKey": "designations_designationName"
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
                                              "dynamicKey": "designations_updatedBy"
                                          },
                                          {
                                            "type": "listOfFields",
                                            "name": "options",
                                            "label": "Add Designations",
                                            "hideInCreateForm": false,

                                            "hideInViewForm": false,
                                            "title": "Select Designations",
                                            "dependancyCheck": false,
                                            "childFields": [
                                          
                                              {
                                                  "name": "seniorDesignationId",
                                                  "label": "Senior Designation Id",
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
                                                  "dynamicKey": "designations_seniorDesignationId",
                                                  "selectServerUrl": "/list/designations/dropdown?version=1.0"
                                              },
                                              {
                                                  "name": "seniorDesignationId",
                                                  "label": "Senior Designation Id",
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
                                                  "dynamicKey": "designations_seniorDesignationId",
                                                  "selectServerUrl": "/list/designations/dropdown?version=1.0"
                                              }
                                          ]
                                        }
                                      ,
                                      
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
                                              "dynamicKey": "designations_createdAt"
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
                                              "dynamicKey": "designations_updatedAt"
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
                                              "dynamicKey": "designations_status",
                                              options:[
                                                  {value:'inactive',label:'inactive'},
                                                  {value:'active',label:'active'}
                                              ]
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
                                              "dynamicKey": "designations_status",
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
              "colMapper": "{ 'designations_designationId' : 'designation_id',  'designations_designationName' : 'designation_name',  'designations_status' : 'status',  'designations_designationName' : 'designation_name',  'designations_status' : 'status',  'designations_seniorDesignationId' : 'senior_designation_id',  'designations_seniorDesignationId' : 'senior_designation_id',  'designations_updatedBy' : 'updated_by',  'designations_createdAt' : 'created_at',  'designations_updatedAt' : 'updated_at'}"
              };
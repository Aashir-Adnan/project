/* Frontend Parameters for table: task_comments */
        
          export const parameters = {
              "steps": [
                  {
                  "title": "taskComments Info",
                  "parameters": {
                      "fields": [
                      {
                          "name": "taskComments",
                          "type": "section",
                          "hideInCreateForm": false,
                          "visible": false,
                          "required": false,
                          "disabled": false,
                          "validations": "",
                          "dependancyCheck": false,
                          "isPrefilled": false,
                          "source": "req.body",
                          "title": "TaskComments",
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
                                              "name": "comment",
                                              "label": "Comment",
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
                                              "dynamicKey": "taskComments_comment"
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
                                              "dynamicKey": "taskComments_updatedBy"
                                          },
                                          {
                                            "type": "listOfFields",
                                            "name": "options",
                                            "label": "Add Task Comments",
                                            "hideInCreateForm": false,

                                            "hideInViewForm": false,
                                            "title": "Select Task Comments",
                                            "dependancyCheck": false,
                                            "childFields": [
                                          
                                              {
                                                  "name": "taskId",
                                                  "label": "Task Id",
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
                                                  "dynamicKey": "taskComments_taskId",
                                                  "selectServerUrl": "/list/tasks_n/dropdown?version=1.0"
                                              },
                                              {
                                                  "name": "userId",
                                                  "label": "User Id",
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
                                                  "dynamicKey": "taskComments_userId",
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
                                              "dynamicKey": "taskComments_updatedAt"
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
                                              "dynamicKey": "taskComments_createdAt"
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
                                              "dynamicKey": "taskComments_status",
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
              "colMapper": "{ 'task_comments_commentId' : 'comment_id',  'task_comments_taskId' : 'task_id',  'task_comments_userId' : 'user_id',  'task_comments_comment' : 'comment',  'task_comments_status' : 'status',  'task_comments_updatedBy' : 'updated_by',  'task_comments_updatedAt' : 'updated_at',  'task_comments_createdAt' : 'created_at'}"
              };
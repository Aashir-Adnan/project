/* Frontend Parameters for table: messages_n */
        
          export const parameters = {
              "steps": [
                  {
                  "title": "messagesN Info",
                  "parameters": {
                      "fields": [
                      {
                          "name": "messagesN",
                          "type": "section",
                          "hideInCreateForm": false,
                          "visible": false,
                          "required": false,
                          "disabled": false,
                          "validations": "",
                          "dependancyCheck": false,
                          "isPrefilled": false,
                          "source": "req.body",
                          "title": "MessagesN",
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
                                              "name": "message",
                                              "label": "Message",
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
                                              "dynamicKey": "messagesN_message"
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
                                              "dynamicKey": "messagesN_updatedBy"
                                          },
                                          {
                                            "type": "listOfFields",
                                            "name": "options",
                                            "label": "Add Messages N",
                                            "hideInCreateForm": false,

                                            "hideInViewForm": false,
                                            "title": "Select Messages N",
                                            "dependancyCheck": false,
                                            "childFields": [
                                          
                                              {
                                                  "name": "senderId",
                                                  "label": "Sender Id",
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
                                                  "dynamicKey": "messagesN_senderId",
                                                  "selectServerUrl": "/list/users/dropdown?version=1.0"
                                              },
                                              {
                                                  "name": "receiverId",
                                                  "label": "Receiver Id",
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
                                                  "dynamicKey": "messagesN_receiverId",
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
                                              "dynamicKey": "messagesN_updatedAt"
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
                                              "dynamicKey": "messagesN_createdAt"
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
                                              "dynamicKey": "messagesN_status",
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
              "colMapper": "{ 'messages_n_messageId' : 'message_id',  'messages_n_senderId' : 'sender_id',  'messages_n_receiverId' : 'receiver_id',  'messages_n_message' : 'message',  'messages_n_status' : 'status',  'messages_n_updatedBy' : 'updated_by',  'messages_n_updatedAt' : 'updated_at',  'messages_n_createdAt' : 'created_at'}"
              };
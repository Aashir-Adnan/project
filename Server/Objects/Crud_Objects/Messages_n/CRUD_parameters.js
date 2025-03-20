const parameters = {
            "steps": [
                {
                "title": "Step 1",
                "parameters": {
                    "fields": [
                    {
                        "name": "messages_n",
                        "type": "section",
                        "hideInCreateForm": false,
                        "visible": false,
                        "required": false,
                        "disabled": false,
                        "validations": "",
                        "dependancyCheck": false,
                        "isPrefilled": false,
                        "source": "req.body",
                        "title": "Messages_n",
                        "childFields": [
                            
                                {
                                "name": "message_id",
                                "label": "Message Id",
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
                                "dynamicKey": "messages_n_messageId",
                                "alias" : "messages_n.message_id",
                                },
                                {
                                "name": "sender_id",
                                "label": "Sender Id",
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
                                "dynamicKey": "messages_n_senderId",
                                "alias" : "messages_n.sender_id",
                                },
                                {
                                "name": "receiver_id",
                                "label": "Receiver Id",
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
                                "dynamicKey": "messages_n_receiverId",
                                "alias" : "messages_n.receiver_id",
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
                                "selectServer": false,
                                "dynamicKey": "messages_n_message",
                                "alias" : "messages_n.message",
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
                                "dynamicKey": "messages_n_updatedBy",
                                "alias" : "messages_n.updated_by",
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
            "colMapper": "{ 'messages_n_messageId' : 'message_id',  'messages_n_senderId' : 'sender_id',  'messages_n_receiverId' : 'receiver_id',  'messages_n_message' : 'message',  'messages_n_status' : 'status',  'messages_n_updatedBy' : 'updated_by',  'messages_n_updatedAt' : 'updated_at',  'messages_n_createdAt' : 'created_at'}"
            };
            module.exports = parameters;
export const parameters = {
              "steps": [
                
                    {
                        "title": "device_otp Info",
                        "parameters": {
                            "fields": [
                                {
                                    "name": "deviceOtp",
                                    "type": "section",
                                    "hideInCreateForm": false,
                                    "visible": false,
                                    "required": false,
                                    "disabled": false,
                                    "validations": "",
                                    "dependancyCheck": false,
                                    "isPrefilled": false,
                                    "source": "req.body",
                                    "title": "DeviceOtp",
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
                                              "alias" : "device_otp.id"

                                            },
                                        
                                            {
                                                "name": "userDeviceId",
                                                "label": "User Device Id",
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
                                                "dynamicKey": "deviceOtp_userDeviceId",
                                                "alias" : "device_otp.user_device_id"
                                            },
                                            {
                                                "name": "otp",
                                                "label": "Otp",
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
                                                "dynamicKey": "deviceOtp_otp",
                                                "alias" : "device_otp.otp"
                                            },
                                            {
                                                "name": "deviceOtpId",
                                                "label": "Device Otp Id",
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
                                                "dynamicKey": "deviceOtp_deviceOtpId",
                                                "alias" : "device_otp.device_otp_id"
                                            },
                                            {
                                                "name": "otpFailureCount",
                                                "label": "Otp Failure Count",
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
                                                "dynamicKey": "deviceOtp_otpFailureCount",
                                                "alias" : "device_otp.otp_failure_count"
                                            },
                                            {
                                              "type": "listOfFields",
                                              "name": "options",
                                              "label": "Add Device Otp",
                                              "hideInCreateForm": true,

                                              "hideInViewForm": true,
                                              "title": "Select Device Otp",
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
                                                "dynamicKey": "deviceOtp_updatedBy",
                                                "alias" : "device_otp.updated_by"
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
                                                "dynamicKey": "deviceOtp_updatedAt",
                                                "alias" : "device_otp.updated_at"
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
                                                "dynamicKey": "deviceOtp_createdAt",
                                                "alias" : "device_otp.created_at"
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
                                                "dynamicKey": "deviceOtp_status",
                                                options:[
                                                    {value:'inactive',label:'inactive'},
                                                    {value:'active',label:'active'}
                                                ],
                                                "alias" : "device_otp.status"
                                            }

                                    ]
                                }
                            ]
                        },
                        "permission": "device_otp_view"
                    }                  
              ],
              "colMapper": { 'device_otp_userDeviceId' : 'user_device_id',  'device_otp_otp' : 'otp',  'device_otp_status' : 'status',  'device_otp_deviceOtpId' : 'device_otp_id',  'device_otp_otpFailureCount' : 'otp_failure_count',  'device_otp_updatedBy' : 'updated_by',  'device_otp_updatedAt' : 'updated_at',  'device_otp_createdAt' : 'created_at'}
          };
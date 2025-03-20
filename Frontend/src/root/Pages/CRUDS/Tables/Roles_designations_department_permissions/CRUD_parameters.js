/* Frontend Parameters for table: roles_designations_department_permissions */
        
          export const parameters = {
              "steps": [
                  {
                  "title": "rolesDesignationsDepartmentPermissions Info",
                  "parameters": {
                      "fields": [
                      {
                          "name": "rolesDesignationsDepartmentPermissions",
                          "type": "section",
                          "hideInCreateForm": false,
                          "visible": false,
                          "required": false,
                          "disabled": false,
                          "validations": "",
                          "dependancyCheck": false,
                          "isPrefilled": false,
                          "source": "req.body",
                          "title": "RolesDesignationsDepartmentPermissions",
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
                                              "dynamicKey": "rolesDesignationsDepartmentPermissions_updatedBy"
                                          },
                                          {
                                            "type": "listOfFields",
                                            "name": "options",
                                            "label": "Add Roles Designations Department Permissions",
                                            "hideInCreateForm": false,

                                            "hideInViewForm": false,
                                            "title": "Select Roles Designations Department Permissions",
                                            "dependancyCheck": false,
                                            "childFields": [
                                          
                                              {
                                                  "name": "roleDesignationDepartmentId",
                                                  "label": "Role Designation Department Id",
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
                                                  "dynamicKey": "rolesDesignationsDepartmentPermissions_roleDesignationDepartmentId",
                                                  "selectServerUrl": "/list/roles_designations_department/dropdown?version=1.0"
                                              },
                                              {
                                                  "name": "permissionGroupId",
                                                  "label": "Permission Group Id",
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
                                                  "dynamicKey": "rolesDesignationsDepartmentPermissions_permissionGroupId",
                                                  "selectServerUrl": "/list/permission_groups/dropdown?version=1.0"
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
                                                  "dynamicKey": "rolesDesignationsDepartmentPermissions_createdBy",
                                                  "selectServerUrl": "/list/user_roles_designations_department/dropdown?version=1.0"
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
                                              "dynamicKey": "rolesDesignationsDepartmentPermissions_createdAt"
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
                                              "dynamicKey": "rolesDesignationsDepartmentPermissions_updatedAt"
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
              "colMapper": "{ 'roles_designations_department_permissions_roleDesignationDepartmentPermissionsId' : 'role_designation_department_permissions_id',  'roles_designations_department_permissions_roleDesignationDepartmentId' : 'role_designation_department_id',  'roles_designations_department_permissions_permissionGroupId' : 'permission_group_id',  'roles_designations_department_permissions_UpdatedBy' : 'Updated_by',  'roles_designations_department_permissions_createdAt' : 'created_at',  'roles_designations_department_permissions_updatedAt' : 'updated_at',  'roles_designations_department_permissions_createdBy' : 'created_by'}"
              };
const parameters = require('./CRUD_parameters');
      global.GroupedCrudsTeams_object = {
        versions: {
          versionData: [
            {
              "*": {
                steps: [
                  
                  {
                    config: {
                      features: {
                        multistep: false,
                        parameters: true,
                        pagination: true,
                      },
                      communication: {
                        encryption: {
                          platformEncryption: true,
                        },
                      },
                      verification: {
                        otp: false,
                        accessToken: false,
                      },
                    },
                    data: {
                      parameters: parameters,
                      apiInfo: {
                        query: {
                          queryNature: { Add: "INSERT", Update: "UPDATE", View: "SELECT", Delete: "DELETE", List: "SELECT" },
                          queryPayload: {
                            Add: "INSERT INTO teams (created_by, name, updated_by) VALUES ({{teams_team_id}}, {{teams_created_by}}, {{teams_name}}, {{teams_status}}, {{teams_updated_by}}, {{teams_updated_at}}, {{teams_created_at}})",
                            
                            Update: "UPDATE teams SET created_by = {{teams_createdBy}}, name = {{teams_name}}, updated_by = {{teams_updatedBy}} WHERE team_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, team_id as id, teams.team_id as teams_teamId, teams.created_by as teams_createdBy, teams.name as teams_name, teams.status as teams_status, teams.updated_by as teams_updatedBy, teams.updated_at as teams_updatedAt, teams.created_at as teams_createdAt FROM teams",
                              
                            View: "SELECT teams.team_id as teams_id, teams.team_id as teams_teamId, teams.created_by as teams_createdBy, teams.name as teams_name, teams.status as teams_status, teams.updated_by as teams_updatedBy, teams.updated_at as teams_updatedAt, teams.created_at as teams_createdAt, users.user_id as users_id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt, projects.project_id as projects_id, projects.project_id as projects_projectId, projects.team_id as projects_teamId, projects.created_by as projects_createdBy, projects.name as projects_name, projects.status as projects_status, projects.updated_by as projects_updatedBy, projects.updated_at as projects_updatedAt, projects.created_at as projects_createdAt FROM teams JOIN users ON users.user_id = teams.created_by JOIN projects ON (projects.team_id = teams.team_id OR projects.created_by = users.user_id) WHERE teams.team_id = {{id}} OR teams.team_id IS NULL",
                              
                            Delete: "UPDATE teams SET status = 'inactive' WHERE team_id = {{id}}",           
                          },
                          database: "mainDb",
                        },
                        utilityFunctions: {
                          callbackFunction: null,
                          payloadFunction: [],
                          preProcessFunction: "crudApiGenerator",
                        },
                      },
                      requestMetaData: {
                        requestMethod: { Add: "POST", View: "GET", Update: "PUT", Delete: "DELETE", List: "GET" },
                        permission: [
                          { Add: "insert_teams", View: "view_teams", List: "list_teams", Update: "update_teams", Delete: "delete_teams" },
                        ],
                        pagination: { pageSize: 10 },
                      },
                    },
                    response: {
                      successMessage: "task_history retrieved successfully!",
                      errorMessage: "Failed to retrieve task_history.",
                    },
                  }
                  ,
                  {
                    config: {
                      features: {
                        multistep: false,
                        parameters: true,
                        pagination: true,
                      },
                      communication: {
                        encryption: {
                          platformEncryption: true,
                        },
                      },
                      verification: {
                        otp: false,
                        accessToken: false,
                      },
                    },
                    data: {
                      parameters: parameters,
                      apiInfo: {
                        query: {
                          queryNature: { Add: "INSERT", Update: "UPDATE", View: "SELECT", Delete: "DELETE", List: "SELECT" },
                          queryPayload: {
                            Add: "INSERT INTO users (email, phone_no, cnic, email, phone_no, cnic, first_name, last_name, gender, father_name, image_attachment_id, address, date_of_birth, blood_group, religion, updated_by) VALUES ({{users_user_id}}, {{users_email}}, {{users_status}}, {{users_phone_no}}, {{users_status}}, {{users_cnic}}, {{users_status}}, {{users_email}}, {{users_status}}, {{users_phone_no}}, {{users_status}}, {{users_cnic}}, {{users_status}}, {{users_first_name}}, {{users_last_name}}, {{users_gender}}, {{users_father_name}}, {{users_image_attachment_id}}, {{users_address}}, {{users_date_of_birth}}, {{users_blood_group}}, {{users_religion}}, {{users_updated_by}}, {{users_created_at}}, {{users_updated_at}})",
                            
                            Update: "UPDATE users SET email = {{users_email}}, phone_no = {{users_phoneNo}}, cnic = {{users_cnic}}, email = {{users_email}}, phone_no = {{users_phoneNo}}, cnic = {{users_cnic}}, first_name = {{users_firstName}}, last_name = {{users_lastName}}, gender = {{users_gender}}, father_name = {{users_fatherName}}, image_attachment_id = {{users_imageAttachmentId}}, address = {{users_address}}, date_of_birth = {{users_dateOfBirth}}, blood_group = {{users_bloodGroup}}, religion = {{users_religion}}, updated_by = {{users_updatedBy}} WHERE user_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, user_id as id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt FROM users",
                              
                            View: "SELECT teams.team_id as teams_id, teams.team_id as teams_teamId, teams.created_by as teams_createdBy, teams.name as teams_name, teams.status as teams_status, teams.updated_by as teams_updatedBy, teams.updated_at as teams_updatedAt, teams.created_at as teams_createdAt, users.user_id as users_id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt, projects.project_id as projects_id, projects.project_id as projects_projectId, projects.team_id as projects_teamId, projects.created_by as projects_createdBy, projects.name as projects_name, projects.status as projects_status, projects.updated_by as projects_updatedBy, projects.updated_at as projects_updatedAt, projects.created_at as projects_createdAt FROM teams JOIN users ON users.user_id = teams.created_by JOIN projects ON (projects.team_id = teams.team_id OR projects.created_by = users.user_id) WHERE teams.team_id = {{id}} OR teams.user_id IS NULL",
                              
                            Delete: "UPDATE users SET status = 'inactive' WHERE user_id = {{id}}",           
                          },
                          database: "mainDb",
                        },
                        utilityFunctions: {
                          callbackFunction: null,
                          payloadFunction: [],
                          preProcessFunction: "crudApiGenerator",
                        },
                      },
                      requestMetaData: {
                        requestMethod: { Add: "POST", View: "GET", Update: "PUT", Delete: "DELETE", List: "GET" },
                        permission: [
                          { Add: "insert_users", View: "view_users", List: "list_users", Update: "update_users", Delete: "delete_users" },
                        ],
                        pagination: { pageSize: 10 },
                      },
                    },
                    response: {
                      successMessage: "task_history retrieved successfully!",
                      errorMessage: "Failed to retrieve task_history.",
                    },
                  }
                  ,
                  {
                    config: {
                      features: {
                        multistep: false,
                        parameters: true,
                        pagination: true,
                      },
                      communication: {
                        encryption: {
                          platformEncryption: true,
                        },
                      },
                      verification: {
                        otp: false,
                        accessToken: false,
                      },
                    },
                    data: {
                      parameters: parameters,
                      apiInfo: {
                        query: {
                          queryNature: { Add: "INSERT", Update: "UPDATE", View: "SELECT", Delete: "DELETE", List: "SELECT" },
                          queryPayload: {
                            Add: "INSERT INTO projects (team_id, created_by, name, updated_by) VALUES ({{projects_project_id}}, {{projects_team_id}}, {{projects_created_by}}, {{projects_name}}, {{projects_status}}, {{projects_updated_by}}, {{projects_updated_at}}, {{projects_created_at}})",
                            
                            Update: "UPDATE projects SET team_id = {{projects_teamId}}, created_by = {{projects_createdBy}}, name = {{projects_name}}, updated_by = {{projects_updatedBy}} WHERE project_id = {{id}}",
                            
                            List: "SELECT COUNT(*) as total_count, project_id as id, projects.project_id as projects_projectId, projects.team_id as projects_teamId, projects.created_by as projects_createdBy, projects.name as projects_name, projects.status as projects_status, projects.updated_by as projects_updatedBy, projects.updated_at as projects_updatedAt, projects.created_at as projects_createdAt FROM projects",
                              
                            View: "SELECT teams.team_id as teams_id, teams.team_id as teams_teamId, teams.created_by as teams_createdBy, teams.name as teams_name, teams.status as teams_status, teams.updated_by as teams_updatedBy, teams.updated_at as teams_updatedAt, teams.created_at as teams_createdAt, users.user_id as users_id, users.user_id as users_userId, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.email as users_email, users.status as users_status, users.phone_no as users_phoneNo, users.status as users_status, users.cnic as users_cnic, users.status as users_status, users.first_name as users_firstName, users.last_name as users_lastName, users.gender as users_gender, users.father_name as users_fatherName, users.image_attachment_id as users_imageAttachmentId, users.address as users_address, users.date_of_birth as users_dateOfBirth, users.blood_group as users_bloodGroup, users.religion as users_religion, users.updated_by as users_updatedBy, users.created_at as users_createdAt, users.updated_at as users_updatedAt, projects.project_id as projects_id, projects.project_id as projects_projectId, projects.team_id as projects_teamId, projects.created_by as projects_createdBy, projects.name as projects_name, projects.status as projects_status, projects.updated_by as projects_updatedBy, projects.updated_at as projects_updatedAt, projects.created_at as projects_createdAt FROM teams JOIN users ON users.user_id = teams.created_by JOIN projects ON (projects.team_id = teams.team_id OR projects.created_by = users.user_id) WHERE teams.team_id = {{id}} OR teams.project_id IS NULL",
                              
                            Delete: "UPDATE projects SET status = 'inactive' WHERE project_id = {{id}}",           
                          },
                          database: "mainDb",
                        },
                        utilityFunctions: {
                          callbackFunction: null,
                          payloadFunction: [],
                          preProcessFunction: "crudApiGenerator",
                        },
                      },
                      requestMetaData: {
                        requestMethod: { Add: "POST", View: "GET", Update: "PUT", Delete: "DELETE", List: "GET" },
                        permission: [
                          { Add: "insert_projects", View: "view_projects", List: "list_projects", Update: "update_projects", Delete: "delete_projects" },
                        ],
                        pagination: { pageSize: 10 },
                      },
                    },
                    response: {
                      successMessage: "task_history retrieved successfully!",
                      errorMessage: "Failed to retrieve task_history.",
                    },
                  }
                  
                ],
              },
            },
          ],
        },
      };
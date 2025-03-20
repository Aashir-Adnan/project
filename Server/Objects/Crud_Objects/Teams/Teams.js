/* CRUD Objects for table: teams */
        
    const parameters = require('./CRUD_parameters');
    global.CrudTeams_object = {
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
                          List: "SELECT teams.team_id as id, team_id as teams_teamId, created_by as teams_createdBy, name as teams_name, status as teams_status, updated_by as teams_updatedBy, updated_at as teams_updatedAt, created_at as teams_createdAt, COUNT(*) OVER () AS table_count FROM teams ",
                          View: "SELECT teams.team_id as id, team_id as teams_teamId, created_by as teams_createdBy, name as teams_name, status as teams_status, updated_by as teams_updatedBy, updated_at as teams_updatedAt, created_at as teams_createdAt FROM teams  WHERE team_id = {{id}} OR team_id IS NULL",
                          Delete: "UPDATE teams SET status = 'inactive' WHERE team_id = {{id}}",           
                          database: "mainDb",
                        }
                      },
                      utilityFunctions: {
                        callbackFunction: null,
                        payloadFunction: [],
                        preProcessFunction: "crudApiGenerator"
                      },
                    },
                    requestMetaData: {
                      requestMethod: { Add: "POST", View: "GET", Update: "PUT", Delete: "DELETE", List: "GET" },
                      permission: { Add: "insert_teams", View:"view_teams", List:"list_teams", Update: "update_teams", Delete: "delete_teams" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Teams retrieved successfully!",
                    errorMessage: "Failed to retrieve Teams.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
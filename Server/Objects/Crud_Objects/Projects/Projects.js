/* CRUD Objects for table: projects */
        
    const parameters = require('./CRUD_parameters');
    global.CrudProjects_object = {
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
                          Add: "INSERT INTO projects (team_id, created_by, name, updated_by) VALUES ({{projects_project_id}}, {{projects_team_id}}, {{projects_created_by}}, {{projects_name}}, {{projects_status}}, {{projects_updated_by}}, {{projects_updated_at}}, {{projects_created_at}})",
                          Update: "UPDATE projects SET team_id = {{projects_teamId}}, created_by = {{projects_createdBy}}, name = {{projects_name}}, updated_by = {{projects_updatedBy}} WHERE project_id = {{id}}",
                          List: "SELECT projects.project_id as id, project_id as projects_projectId, team_id as projects_teamId, created_by as projects_createdBy, name as projects_name, status as projects_status, updated_by as projects_updatedBy, updated_at as projects_updatedAt, created_at as projects_createdAt, COUNT(*) OVER () AS table_count FROM projects ",
                          View: "SELECT projects.project_id as id, project_id as projects_projectId, team_id as projects_teamId, created_by as projects_createdBy, name as projects_name, status as projects_status, updated_by as projects_updatedBy, updated_at as projects_updatedAt, created_at as projects_createdAt FROM projects  WHERE project_id = {{id}} OR project_id IS NULL",
                          Delete: "UPDATE projects SET status = 'inactive' WHERE project_id = {{id}}",           
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
                      permission: { Add: "insert_projects", View:"view_projects", List:"list_projects", Update: "update_projects", Delete: "delete_projects" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Projects retrieved successfully!",
                    errorMessage: "Failed to retrieve Projects.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
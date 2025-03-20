/* CRUD Objects for table: designations */
        
    const parameters = require('./CRUD_parameters');
    global.CrudDesignations_object = {
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
                          Add: "INSERT INTO designations (designation_name, designation_name, senior_designation_id, senior_designation_id, updated_by) VALUES ({{designations_designation_id}}, {{designations_designation_name}}, {{designations_status}}, {{designations_designation_name}}, {{designations_status}}, {{designations_senior_designation_id}}, {{designations_senior_designation_id}}, {{designations_updated_by}}, {{designations_created_at}}, {{designations_updated_at}})",
                          Update: "UPDATE designations SET designation_name = {{designations_designationName}}, designation_name = {{designations_designationName}}, senior_designation_id = {{designations_seniorDesignationId}}, senior_designation_id = {{designations_seniorDesignationId}}, updated_by = {{designations_updatedBy}} WHERE designation_id = {{id}}",
                          List: "SELECT designations.designation_id as id, designation_id as designations_designationId, designation_name as designations_designationName, status as designations_status, designation_name as designations_designationName, status as designations_status, senior_designation_id as designations_seniorDesignationId, senior_designation_id as designations_seniorDesignationId, updated_by as designations_updatedBy, created_at as designations_createdAt, updated_at as designations_updatedAt, COUNT(*) OVER () AS table_count FROM designations ",
                          View: "SELECT designations.designation_id as id, designation_id as designations_designationId, designation_name as designations_designationName, status as designations_status, designation_name as designations_designationName, status as designations_status, senior_designation_id as designations_seniorDesignationId, senior_designation_id as designations_seniorDesignationId, updated_by as designations_updatedBy, created_at as designations_createdAt, updated_at as designations_updatedAt FROM designations  WHERE designation_id = {{id}} OR designation_id IS NULL",
                          Delete: "UPDATE designations SET status = 'inactive' WHERE designation_id = {{id}}",           
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
                      permission: { Add: "insert_designations", View:"view_designations", List:"list_designations", Update: "update_designations", Delete: "delete_designations" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Designations retrieved successfully!",
                    errorMessage: "Failed to retrieve Designations.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
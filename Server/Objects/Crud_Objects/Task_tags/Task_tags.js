/* CRUD Objects for table: task_tags */
        
    const parameters = require('./CRUD_parameters');
    global.CrudTask_tags_object = {
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
                          Add: "INSERT INTO task_tags (task_id, tag, updated_by) VALUES ({{task_tags_tag_id}}, {{task_tags_task_id}}, {{task_tags_tag}}, {{task_tags_status}}, {{task_tags_updated_by}}, {{task_tags_updated_at}}, {{task_tags_created_at}})",
                          Update: "UPDATE task_tags SET task_id = {{task_tags_taskId}}, tag = {{task_tags_tag}}, updated_by = {{task_tags_updatedBy}} WHERE tag_id = {{id}}",
                          List: "SELECT task_tags.tag_id as id, tag_id as task_tags_tagId, task_id as task_tags_taskId, tag as task_tags_tag, status as task_tags_status, updated_by as task_tags_updatedBy, updated_at as task_tags_updatedAt, created_at as task_tags_createdAt, COUNT(*) OVER () AS table_count FROM task_tags ",
                          View: "SELECT task_tags.tag_id as id, tag_id as task_tags_tagId, task_id as task_tags_taskId, tag as task_tags_tag, status as task_tags_status, updated_by as task_tags_updatedBy, updated_at as task_tags_updatedAt, created_at as task_tags_createdAt FROM task_tags  WHERE tag_id = {{id}} OR tag_id IS NULL",
                          Delete: "UPDATE task_tags SET status = 'inactive' WHERE tag_id = {{id}}",           
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
                      permission: { Add: "insert_task_tags", View:"view_task_tags", List:"list_task_tags", Update: "update_task_tags", Delete: "delete_task_tags" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Task_tags retrieved successfully!",
                    errorMessage: "Failed to retrieve Task_tags.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
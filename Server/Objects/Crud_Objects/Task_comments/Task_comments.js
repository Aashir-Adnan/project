/* CRUD Objects for table: task_comments */
        
    const parameters = require('./CRUD_parameters');
    global.CrudTask_comments_object = {
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
                          Add: "INSERT INTO task_comments (task_id, user_id, comment, updated_by) VALUES ({{task_comments_comment_id}}, {{task_comments_task_id}}, {{task_comments_user_id}}, {{task_comments_comment}}, {{task_comments_status}}, {{task_comments_updated_by}}, {{task_comments_updated_at}}, {{task_comments_created_at}})",
                          Update: "UPDATE task_comments SET task_id = {{task_comments_taskId}}, user_id = {{task_comments_userId}}, comment = {{task_comments_comment}}, updated_by = {{task_comments_updatedBy}} WHERE comment_id = {{id}}",
                          List: "SELECT task_comments.comment_id as id, comment_id as task_comments_commentId, task_id as task_comments_taskId, user_id as task_comments_userId, comment as task_comments_comment, status as task_comments_status, updated_by as task_comments_updatedBy, updated_at as task_comments_updatedAt, created_at as task_comments_createdAt, users.first_name as users_firstName, COUNT(*) OVER () AS table_count FROM task_comments LEFT JOIN users ON task_comments.user_id = users.comment_id",
                          View: "SELECT task_comments.comment_id as id, comment_id as task_comments_commentId, task_id as task_comments_taskId, user_id as task_comments_userId, comment as task_comments_comment, status as task_comments_status, updated_by as task_comments_updatedBy, updated_at as task_comments_updatedAt, created_at as task_comments_createdAt, users.first_name as users_firstName FROM task_comments LEFT JOIN users ON task_comments.user_id = users.comment_id WHERE comment_id = {{id}} OR comment_id IS NULL",
                          Delete: "UPDATE task_comments SET status = 'inactive' WHERE comment_id = {{id}}",           
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
                      permission: { Add: "insert_task_comments", View:"view_task_comments", List:"list_task_comments", Update: "update_task_comments", Delete: "delete_task_comments" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Task_comments retrieved successfully!",
                    errorMessage: "Failed to retrieve Task_comments.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
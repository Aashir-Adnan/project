/* CRUD Objects for table: files */
        
    const parameters = require('./CRUD_parameters');
    global.CrudFiles_object = {
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
                          Add: "INSERT INTO files (task_id, project_id, uploaded_by, file_name, file_url, file_size, updated_by) VALUES ({{files_file_id}}, {{files_task_id}}, {{files_project_id}}, {{files_uploaded_by}}, {{files_file_name}}, {{files_file_url}}, {{files_file_size}}, {{files_status}}, {{files_updated_by}}, {{files_updated_at}}, {{files_created_at}})",
                          Update: "UPDATE files SET task_id = {{files_taskId}}, project_id = {{files_projectId}}, uploaded_by = {{files_uploadedBy}}, file_name = {{files_fileName}}, file_url = {{files_fileUrl}}, file_size = {{files_fileSize}}, updated_by = {{files_updatedBy}} WHERE file_id = {{id}}",
                          List: "SELECT files.file_id as id, file_id as files_fileId, task_id as files_taskId, project_id as files_projectId, uploaded_by as files_uploadedBy, file_name as files_fileName, file_url as files_fileUrl, file_size as files_fileSize, status as files_status, updated_by as files_updatedBy, updated_at as files_updatedAt, created_at as files_createdAt, COUNT(*) OVER () AS table_count FROM files ",
                          View: "SELECT files.file_id as id, file_id as files_fileId, task_id as files_taskId, project_id as files_projectId, uploaded_by as files_uploadedBy, file_name as files_fileName, file_url as files_fileUrl, file_size as files_fileSize, status as files_status, updated_by as files_updatedBy, updated_at as files_updatedAt, created_at as files_createdAt FROM files  WHERE file_id = {{id}} OR file_id IS NULL",
                          Delete: "UPDATE files SET status = 'inactive' WHERE file_id = {{id}}",           
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
                      permission: { Add: "insert_files", View:"view_files", List:"list_files", Update: "update_files", Delete: "delete_files" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Files retrieved successfully!",
                    errorMessage: "Failed to retrieve Files.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
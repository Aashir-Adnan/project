/* CRUD Objects for table: users */
        
    const parameters = require('./CRUD_parameters');
    global.CrudUsers_object = {
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
                          Add: "INSERT INTO users (email, phone_no, cnic, email, phone_no, cnic, first_name, last_name, gender, father_name, image_attachment_id, address, date_of_birth, blood_group, religion, updated_by) VALUES ({{users_user_id}}, {{users_email}}, {{users_status}}, {{users_phone_no}}, {{users_status}}, {{users_cnic}}, {{users_status}}, {{users_email}}, {{users_status}}, {{users_phone_no}}, {{users_status}}, {{users_cnic}}, {{users_status}}, {{users_first_name}}, {{users_last_name}}, {{users_gender}}, {{users_father_name}}, {{users_image_attachment_id}}, {{users_address}}, {{users_date_of_birth}}, {{users_blood_group}}, {{users_religion}}, {{users_updated_by}}, {{users_created_at}}, {{users_updated_at}})",
                          Update: "UPDATE users SET email = {{users_email}}, phone_no = {{users_phoneNo}}, cnic = {{users_cnic}}, email = {{users_email}}, phone_no = {{users_phoneNo}}, cnic = {{users_cnic}}, first_name = {{users_firstName}}, last_name = {{users_lastName}}, gender = {{users_gender}}, father_name = {{users_fatherName}}, image_attachment_id = {{users_imageAttachmentId}}, address = {{users_address}}, date_of_birth = {{users_dateOfBirth}}, blood_group = {{users_bloodGroup}}, religion = {{users_religion}}, updated_by = {{users_updatedBy}} WHERE user_id = {{id}}",
                          List: "SELECT users.user_id as id, user_id as users_userId, email as users_email, status as users_status, phone_no as users_phoneNo, status as users_status, cnic as users_cnic, status as users_status, email as users_email, status as users_status, phone_no as users_phoneNo, status as users_status, cnic as users_cnic, status as users_status, first_name as users_firstName, last_name as users_lastName, gender as users_gender, father_name as users_fatherName, image_attachment_id as users_imageAttachmentId, address as users_address, date_of_birth as users_dateOfBirth, blood_group as users_bloodGroup, religion as users_religion, updated_by as users_updatedBy, created_at as users_createdAt, updated_at as users_updatedAt, COUNT(*) OVER () AS table_count FROM users ",
                          View: "SELECT users.user_id as id, user_id as users_userId, email as users_email, status as users_status, phone_no as users_phoneNo, status as users_status, cnic as users_cnic, status as users_status, email as users_email, status as users_status, phone_no as users_phoneNo, status as users_status, cnic as users_cnic, status as users_status, first_name as users_firstName, last_name as users_lastName, gender as users_gender, father_name as users_fatherName, image_attachment_id as users_imageAttachmentId, address as users_address, date_of_birth as users_dateOfBirth, blood_group as users_bloodGroup, religion as users_religion, updated_by as users_updatedBy, created_at as users_createdAt, updated_at as users_updatedAt FROM users  WHERE user_id = {{id}} OR user_id IS NULL",
                          Delete: "UPDATE users SET status = 'inactive' WHERE user_id = {{id}}",           
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
                      permission: { Add: "insert_users", View:"view_users", List:"list_users", Update: "update_users", Delete: "delete_users" },
                      pagination: { pageSize: 10 },
                    },
                  },
                  response: {
                    successMessage: "Users retrieved successfully!",
                    errorMessage: "Failed to retrieve Users.",
                  },
                },
              ],
            },
          },
        ],
      },
    };
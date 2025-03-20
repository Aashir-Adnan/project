const executeQueryWithPagination = require('../Database/executeQueryWithPagination.js');
const getPaginationParams = require('../Constants/getPaginationParams.js');
const projectDB = require('../Database/projectDb.js');
const { executeQuery } = require('../Database/queryExecution.js');

// Function to build the SQL query based on the request path
const buildQuery = (path, email, urddId, permission) => {
    if (path === '/login' || email) {
        // Query for login request validation based on email and permission
        return `
            SELECT urdp.*
            FROM user_roles_designations_department urdd
            JOIN user_role_designation_permissions urdp ON urdd.user_role_designation_department_id = urdp.user_role_designation_department_id
            JOIN permissions p ON urdp.permission_id = p.permission_id
            JOIN users u ON urdpp.user_id = u.user_id
            WHERE u.email = '${email}' AND p.permission_name = '${permission}'
        `;
    } else {
        return `
            SELECT urdp.*
            FROM user_roles_designations_department urdd
            JOIN user_role_designation_permissions urdp ON urdd.user_role_designation_department_id = urdp.user_role_designation_department_id
            JOIN permissions p ON urdp.permission_id = p.permission_id
            WHERE urdd.user_role_designation_department_id = ${urddId} AND p.permission_name = '${permission}'
        `;
    }
};

// Main function to check if the user has the required permission
const permissionChecker = async (req, res, apiData, DecryptedBody, requestedPath) => {
    try {
        const permission = apiData.requestMetaData.permission;
        const { email } = DecryptedBody || {}; // Get email from the decrypted body
        const urddId = req.query.urdd_id || DecryptedBody["urdd_id"] || null; // Get urddId from query params

        if (!email && !urddId) {
            throw new Error("SSC: E22 => Missing required parameters (email or urddId).")
        }

        const query = buildQuery(requestedPath, email, urddId, permission); // Build the query
        const connection = projectDB();
        const permissionResults = await executeQuery(query, "", connection);
        
        if (permissionResults.length <= 0) {
            throw new Error("SSC: E41 => Forbidden: You do not have permission to access this resource.");
        }

        const response = {
            excluded: null,
            included: {},
            meta: {"created_by" : DecryptedBody.urdd_id || req.query.urdd_id || []}
        };

        permissionResults.forEach(row => {
            if (row.excluded_id) {
                response.excluded = row.excluded_id;
            }
            if (row.included_id) {
                const includedData = JSON.parse(row.included_id); // Assuming the stored JSON format is valid
                Object.keys(includedData).forEach(key => {
                    response.included[key] = includedData[key];
                });
            }
        });

        return response;
    } catch (error) {
        throw new Error(error.message);
    }
};


module.exports = permissionChecker;

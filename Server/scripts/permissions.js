const projectDB = require("../Database/projectDb");
const {executeQuery} = require("../Database/queryExecution")
const fetchTablesQuery = `
    SELECT 
        table_name 
    FROM 
        information_schema.tables 
    WHERE 
        table_schema = 'projectdb_new';
`;


const operations = ['list', 'add', 'update', 'delete', 'view', 'export', 'filter', 'sort'];

async function createAdminProfile() {
    let connection;
    try {
        connection = projectDB();
        
        // Step 1: Create the Admin Profile user
        const userInsertQuery = `
            INSERT INTO users (email, first_name, last_name, phone_no, cnic, gender, father_name, image_attachment_id, address, date_of_birth, blood_group, religion)
            VALUES ('admin@example.com', 'Admin', 'Profile', '1234567890', '12345-6789012-3', 'Male', 'Admin Senior', NULL, 'Admin Address', '1990-01-01', 'O+', 'None');
        `;

        // Get the last inserted user_id
        const userId = (await executeQuery( userInsertQuery, [], projectDB())).insertId;
        
        // Step 2: Fetch required IDs
        const departmentQuery = `SELECT department_id FROM departments WHERE department_name = 'Human Resources';`;
        const designationQuery = `SELECT designation_id FROM designations WHERE designation_name = 'CEO';`;
        const roleQuery = `SELECT role_id FROM roles WHERE role_name = 'Admin';`;
        
        const departmentResult = await executeQuery( departmentQuery, [], projectDB());
        const designationResult = await executeQuery( designationQuery, [], projectDB());
        const roleResult = await executeQuery( roleQuery, [], projectDB());
        
        const departmentId = departmentResult[0].department_id;
        const designationId = designationResult[0].designation_id;
        const roleId = roleResult[0].role_id;
        
        // Step 3: Insert into role_designation_department
        const roleDesignationDeptQuery = `
            INSERT INTO roles_designations_department (designation_id, role_id, department_id)
            VALUES (${designationId}, ${roleId}, ${departmentId});
        `;
        const roleDesignationDeptId = (await executeQuery( roleDesignationDeptQuery, [], projectDB())).insertId;

        // Get the last inserted role_designation_department_id
        
        
        // Step 4: Assign user to user_roles_designations_department
        const userRoleDesignationDeptQuery = `
            INSERT INTO user_roles_designations_department (user_id, role_designation_department_id)
            VALUES (${userId}, ${roleDesignationDeptId});
        `;

        // Get the last inserted user_roles_designation_department_id
        const userRoleDesignationDeptId = (await executeQuery( userRoleDesignationDeptQuery, [], projectDB())).insertId
        
        // Step 5: Assign all permissions to the new user role designation department
        const permissionsQuery = `SELECT permission_id FROM permissions;`;
        const permissionsResult = await executeQuery( permissionsQuery, [], projectDB());
        
        const tables = await executeQuery(
            null,
            "SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = ?",
            [dbConfig.database],
            projectDB()
        );
        let allColumns = {};
        for (const { TABLE_NAME } of tables) {
                const columns = await executeQuery(
                  null,
                  `SELECT 
                    c.COLUMN_NAME, 
                    c.COLUMN_KEY, 
                    k.REFERENCED_TABLE_NAME, 
                    k.REFERENCED_COLUMN_NAME, 
                    k.CONSTRAINT_NAME 
                  FROM INFORMATION_SCHEMA.COLUMNS c
                  LEFT JOIN INFORMATION_SCHEMA.KEY_COLUMN_USAGE k
                    ON c.TABLE_SCHEMA = k.TABLE_SCHEMA 
                    AND c.TABLE_NAME = k.TABLE_NAME 
                    AND c.COLUMN_NAME = k.COLUMN_NAME
                  WHERE c.TABLE_SCHEMA = ? 
                    AND c.TABLE_NAME = ?`,
                  [dbConfig.database, TABLE_NAME],
                  projectDB()
                );
                allColumns[TABLE_NAME] = columns;
        }
        for (const permission of permissionsResult) {
            console.log(permission.split('_'))
            const assignPermissionQuery = `
                INSERT INTO user_role_designation_permissions (user_role_designation_department_id, permission_id)
                VALUES (${userRoleDesignationDeptId}, ${permission.permission_id});
            `;
            await executeQuery( assignPermissionQuery, [], projectDB());
        }
        
        console.log("Admin profile created and assigned all permissions successfully.");


        return "Admin profile created successfully";

    } catch (error) {
        console.error("Error creating admin profile:", error);
    } finally {
        if (connection) connection.end();
    }
}


async function insertPermissions() {
    try {
        // Fetch all table names from the schema
        let connection = projectDB(); // Establish a connection to the database
        const tablesResult = await executeQuery( fetchTablesQuery, [], connection);
        const tables = tablesResult.map(row => row.table_name); // Extract table names

        let insertQueries = []; // To batch insert queries

        tables.forEach(table => {
            operations.forEach(operation => {
                const permissionName = `${operation}_${table}`;
                const insertQuery = `
                    INSERT INTO permissions (permission_name, status)
                    VALUES ('${permissionName}', 'active')
                    ON DUPLICATE KEY UPDATE permission_name = permission_name;
                `;
                insertQueries.push(insertQuery);
            });
        });

        // Execute all insert queries in a batch
        for (let query of insertQueries) {
            connection = projectDB(); // Establish a connection to the database
            await executeQuery( query, [], connection);
        }

        console.log("Permissions inserted successfully.");
        createAdminProfile();
        return "Permissions inserted successfully";
    } catch (error) {
        console.error("Error inserting permissions:", error);
    } finally {
    }
}

module.exports = {insertPermissions}
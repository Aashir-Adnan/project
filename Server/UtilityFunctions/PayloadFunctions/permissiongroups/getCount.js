const projectDB = require("../../../Database/projectDb");
const { executeQuery } = require("../../../Database/queryExecution");

async function total_count(req, res){
    const query = `
        SELECT
            COUNT(*) as count
        FROM 
            permission_groups
    `
    const connection = projectDB(); 
    const results = await executeQuery(query, "", connection);
    return results[0]?.count
}

module.exports = {total_count};
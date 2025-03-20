const executeQueryWithPagination = require("../Database/executeQueryWithPagination.js");
const { executeQuery } = require("../Database/queryExecution.js");
const getPaginationParams = require("../Constants/getPaginationParams.js");
const getDateTime = require("../Constants/getDateTime.js");
const totalCount = require("../UtilityFunctions/PayloadFunctions/getTotalCount/get_total_count.js");
const dbConnections = {
  securitydb: require("../Database/securityDB.js"),
  projectdb_new: require("../Database/projectDb.js"),
};
function extractTableAliases(query) {
  const tableAliasMap = {};
  const tableRegex =
    /\b(?:FROM|JOIN)\s+([^\s]+)(?:\s+AS\s+([^\s]+)|\s+([^\s]+))?/gi;
  let match;

  while ((match = tableRegex.exec(query)) !== null) {
    const tableName = match[1];
    const alias = match[2] || match[3] || generateAlias(tableName);
    tableAliasMap[tableName] =
      alias.toLowerCase() !== "where" ? alias : tableName;
  }
  return tableAliasMap;
}

const objectResolver = async (
  req,
  res,
  decryptedBody,
  apiObject,
  permissionObject
) => {
  try {
    const { page, limit } = getPaginationParams(req);
    const [CreatedAtDate, CreatedAtTime] = getDateTime();
    const [UpdatedAtDate, UpdatedAtTime] = [CreatedAtDate, CreatedAtTime];
    const createdAt = CreatedAtDate + CreatedAtTime;
    const updatedAt = createdAt;

    const { queryPayload } = apiObject.data.apiInfo.query;
    if (!queryPayload) {
      return;
    }
    const { queryNature } = apiObject.data.apiInfo.query;

    let paramValues = {};
    let results;
    let completeQuery = queryPayload;
    let fields = apiObject.data.parameters.fields;
    let total_count = 0;

    if (fields != undefined) {
      if (Array.isArray(fields[0])) {
        fields = fields[0];
      }

      // Iterate through fields to populate paramValues
      for (const field of fields) {
        let source = field.source; // Source of the parameter
        const name = field.name; // Name of the parameter
        if (
          source === "req.body" ||
          source === "req.headers" ||
          source == undefined
        ) {
          paramValues[name] = decryptedBody[name] || paramValues[name];
        } else if (source === "req.query") {
          paramValues[name] = req.query[name] || paramValues[name];
        }
      }

      if (permissionObject) {
        console.log(
          "OBJECT RESOLVER || permission object:  ",
          permissionObject
        );
        const hasWhereClause = /\bWHERE\b/i.test(completeQuery);
        if (!hasWhereClause) {
          completeQuery += " WHERE ( 1=1";
        }

        Object.keys(permissionObject.included).forEach((key) => {
          const values = permissionObject.included[key];
          completeQuery += ` AND ${key} IN (${values.join(",")})`;
        });

        Object.keys(permissionObject.excluded || {}).forEach((key) => {
          const values = permissionObject.excluded[key];
          completeQuery += ` AND ${key} NOT IN (${values.join(",")})`;
        });

        if (permissionObject.meta) {
          const values = decryptedBody.userRoleId || req.query.userRoleId;
          const tableAliases = extractTableAliases(completeQuery);

          let conditions = [];

          Object.values(tableAliases).forEach((alias) => {
            conditions.push(`${alias}.created_by IN (${values})`);
          });

          if (conditions.length > 0) {
            completeQuery += ` OR (${conditions.join(" OR ")}))`;
          }
          console.log("OBJECT RESOLVER || conditions: ", conditions);
        }

      }

      // Check if any key in decryptedBody is an array
      const arrayKey = Object.keys(decryptedBody).find((key) =>
        Array.isArray(decryptedBody[key])
      );

      if (
        decryptedBody[arrayKey] &&
        typeof decryptedBody[arrayKey][0] != "object"
      ) {
        // *Condition 1: Key is an array of values*
        const arrayValues = decryptedBody[arrayKey];
        results = [];

        for (const value of arrayValues) {
          // Replace the array key with the current value
          paramValues[arrayKey] = value;
          const query = replaceNestedPlaceholders(completeQuery, paramValues);
          const databaseName = getConnectionDbName(
            apiObject.data.apiInfo.query.database
          );
          console.log("DATABASE NAME IN ARRAYS: ", databaseName);
          const connection = await dbConnections[databaseName]();

          if (apiObject.config.features.pagination) {
            const paginatedResult = await executeQueryWithPagination(
              req,
              res,
              query,
              "",
              connection,
              page,
              limit,
              apiObject.data.columnMapper
            );
            results.push(paginatedResult);
          } else {
            const queryResult = await executeQuery(
              res,
              query,
              "",
              connection,
              false
            );
            results.push(queryResult);
          }
        }
      } else {
        // *Condition 2: Key is an array of objects*
        const objectArrayKey = Object.keys(decryptedBody).find(
          (key) =>
            Array.isArray(decryptedBody[key]) &&
            typeof decryptedBody[key][0] === "object"
        );
        if (objectArrayKey) {
          const objectArray = decryptedBody[objectArrayKey];
          console.log(
            "CHECKING ARRAY OF OBJECTS",
            decryptedBody[objectArrayKey]
          );
          results = [];

          for (const obj of objectArray) {
            // Treat obj as the decryptedBody for this iteration

            let currentParamValues = {};
            for (const field of fields) {
              const name = field.name;
              if (obj[name] !== undefined || decryptedBody[name]) {
                currentParamValues[name] =
                  obj[name] || decryptedBody[name] || req.query[name] || null;
              } else if (field.source === "req.query") {
                currentParamValues[name] =
                  obj[name] || decryptedBody[name] || req.query[name] || null;
              }
            }

            const query = replaceNestedPlaceholders(
              completeQuery,
              currentParamValues
            );
            const databaseName = getConnectionDbName(
              apiObject.data.apiInfo.query.database
            );
            console.log("DATABASE NAME IN ARRAY OF OBJECTS: ", databaseName);
            const connection = await dbConnections[databaseName]();

            if (apiObject.config.features.pagination) {
              const paginatedResult = await executeQueryWithPagination(
                req,
                res,
                query,
                "",
                connection,
                page,
                limit,
                apiObject.data.columnMapper
              );
              results.push(paginatedResult);
            } else {
              const queryResult = await executeQuery(
                res,
                query,
                "",
                connection,
                false
              );
              results.push(queryResult);
            }
          }
        } else {
          // If no array key, proceed with the normal flow
          completeQuery = replaceNestedPlaceholders(completeQuery, paramValues);
          completeQuery = completeQuery
            .replace(/{{CreatedAtDate}}/g, `${CreatedAtDate}`)
            .replace(/{{CreatedAtTime}}/g, `${CreatedAtTime}`)
            .replace(/{{UpdatedAtDate}}/g, `${UpdatedAtDate}`)
            .replace(/{{UpdatedAtTime}}/g, `${UpdatedAtTime}`)
            .replace(/{{createdAt}}/g, `${createdAt}`)
            .replace(/{{updatedAt}}/g, `${updatedAt}`);

          const databaseName = getConnectionDbName(
            apiObject.data.apiInfo.query.database
          );
          console.log(
            "DATQABASE IN OBJECT",
            apiObject.data.apiInfo.query.database
          );
          console.log("DATABASE NAME IN BASE CASE: ", databaseName);
          const connection = await dbConnections[databaseName]();

          if (apiObject.config.features.pagination) {
            results = await executeQueryWithPagination(
              req,
              res,
              completeQuery,
              "",
              connection,
              page,
              limit,
              apiObject.data.columnMapper
            );
            if (queryNature === "SELECT") {
              total_count = await totalCount(
                req,
                res,
                completeQuery,
                connection
              );
            }
          } else {
            results = await executeQuery(
              res,
              completeQuery,
              "",
              connection,
              false
            );
            if (queryNature === "SELECT") {
              total_count = await totalCount(
                req,
                res,
                completeQuery,
                connection
              );
            }
          }
        }
      }
    }

    const response = {
      results,
      total_count,
    };

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};
// Helper function to replace nested placeholders
const replaceNestedPlaceholders = (query, params) => {
  return query.replace(/{{(.*?)}}/g, (match, key) => {
    const keys = key.split("."); // Split by dot for nested properties
    let value = params;
    // Navigate through the object based on the keys
    for (const k of keys) {
      if (
        typeof value[k] === "string" &&
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(value[k])
      ) {
        // Split the string to format it into SQL DATETIME
        const [date, time] = value[k].split("T");
        const formattedTime = time.split(".")[0]; // Remove milliseconds
        value[k] = `${date} ${formattedTime}`;
      }

      if (value[k] !== undefined) {
        value = value[k];
      } else {
        return "NULL"; // Replace unresolved placeholders with NULL
      }
    }

    // Format the value, wrapping strings in quotes
    if (typeof value === "string") {
      return `'${value}'`; // Wrap string values in quotes
    } else if (value instanceof Date) {
      // Convert to SQL DATETIME format
      return `'${value.toISOString().split("T")[0]} ${
        value.toISOString().split("T")[1].split(".")[0]
      }'`;
    }
    return value; // Return other types (like numbers) as they are
  });
};
function getConnectionDbName(databaseName) {
  switch (databaseName) {
    case "securitydb":
      return "securitydb";
    case "mainDb":
      return "projectdb_new";
    default:
      return "projectdb_new";
  }
}

module.exports = objectResolver;

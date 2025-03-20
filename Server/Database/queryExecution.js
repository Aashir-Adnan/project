
async function executeQuery(query, values, connection, endConnection = true) {
  try {
    const result = await new Promise((resolve, reject) => {
      connection.query(query, values, (err, result) => {
        if (endConnection) {
          connection.end();
        }

        if (err) {
          console.log(err)
          reject(err); 
        } else {
          resolve(result);
        }
      });
    });

    return result;
  } catch (error) {
    throw new Error(`Error executing the query. Please try again later.:: ${error.message}`);
  }
}

module.exports = {executeQuery}

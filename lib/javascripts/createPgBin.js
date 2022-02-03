const { Client } = require('pg');
const ALPHA_NUMERIC = 'abcdefghijklmnopqrstuvwxyz0123456789';

async function createPgBin(key) {
  const client = new Client({
    database: "request_bin"
  });

  await client.connect();

  await client.query("INSERT INTO bin (key) VALUES($1)", [key]);

  await client.end();
}


// Generate a random string of 4 characters
async function generatePgKey() {
  const len = 4;
  let result = "";

  do {
    for (let i = 0; i < len; i++) {
      result += ALPHA_NUMERIC.charAt(Math.floor(Math.random() * ALPHA_NUMERIC.length));
    }
  } while (await !isUniqueKey(result));

  return result;
}

// Queury postgres to check if key is unique
async function isUniqueKey(key) {
  try {
    const client = new Client({
      database: "request_bin"
    });

    await client.connect();

    const res = await client.query("SELECT key FROM bin WHERE key=$1", [key]);

    await client.end();
    return res.rows.length === 0;
  } catch (error) {
    console.log("\nError occured checking the unique key\n");
    console.log(error);
  }
};

module.exports = {
  createPgBin,
  generatePgKey,
};
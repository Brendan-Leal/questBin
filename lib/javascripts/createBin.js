const { Client } = require('pg');
const ALPHA_NUMERIC = 'abcdefghijklmnopqrstuvwxyz0123456789';

async function createBin() {
  const client = new Client({
    database: "request_bin"
  });
  await client.connect();

  let key = await generateKey(client);

  console.log("KEY: ", key);

  await client.query("INSERT INTO bin (key) VALUES($1)", [key]);

  await client.end();
}

async function generateKey(client) {
  const len = 4;
  let result = "";

  do {
    for (let i = 0; i < len; i++) {
      result += ALPHA_NUMERIC.charAt(Math.floor(Math.random() * ALPHA_NUMERIC.length));
    }
  } while (!isUniqueKey(result, client));

  return result;
}

async function isUniqueKey(key, client) {
  const res = await client.query("SELECT key FROM bin WHERE key=$1", [key]);
  return res.rows.length > 0;
};

module.exports = createBin;
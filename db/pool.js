const { Pool, Client } = require("pg");
const connectionString = process.env.DATABASE_URL;

module.exports = new Pool({
  connectionString: connectionString,
});


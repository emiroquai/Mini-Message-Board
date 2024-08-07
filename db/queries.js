const pool = require("./pool");

async function getAllMessages() {
  const result = await pool.query("SELECT * FROM messages");
  const messages = result.rows;
  return messages;
}
module.exports = {
  getAllMessages,
};
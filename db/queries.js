const pool = require("./pool");

async function getAllMessages() {
  const result = await pool.query("SELECT * FROM messages");
  const messages = result.rows;
  return messages;
};

async function insertMessage(message) {
  await pool.query("INSERT INTO messages (text, \"user\", added) VALUES ($1, $2, $3)", [message.messageText, message.messageUser, new Date()]);
};

module.exports = {
  getAllMessages,
  insertMessage,
};
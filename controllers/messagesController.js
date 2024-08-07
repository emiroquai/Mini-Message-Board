const db = require("../db/queries");
const { formatDistanceToNow } = require("date-fns");

async function getMessages(req, res) {
  //Get messages from db
  const messages = await db.getAllMessages();
  console.log("Messages:", messages);
  res.render("index", { 
    messages: messages, 
    formatDistanceToNow: formatDistanceToNow 
  });
}

async function newMessageGet(req, res) {
  res.render("form");
}

async function newMessagePost(req, res) {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/")

}

async function messageDetailGet(req, res) {
  messageIndex = parseInt(req.params.messageIndex);
  if (!isNaN(messageIndex) && messageIndex >= 0 && messageIndex < messages.length) {
    res.render("messageDetail", { 
      messageIndex: messageIndex, 
      messages: messages, 
      formatDistanceToNow: formatDistanceToNow 
    });    
  } else {
    res.status(404).send("Message not found");
  }
}

module.exports = {
  getMessages,
  newMessageGet,
  newMessagePost,
  messageDetailGet
}
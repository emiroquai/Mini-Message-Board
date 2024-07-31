const express = require("express");
const app = express();
const path = require("path");
const { formatDistanceToNow } = require("date-fns");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

app.get("/", (req, res) => {
  res.render("index", { messages: messages, formatDistanceToNow: formatDistanceToNow });
});

app.get("/new", (req, res) => {
  res.render("form", { messages: messages})
});

app.post("/new", (req, res) => {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/")
});

app.get("/messages/:messageIndex", (req, res) => {
  messageIndex = parseInt(req.params.messageIndex);
  if (!isNaN(messageIndex) && messageIndex >= 0 && messageIndex < messages.length) {
    res.render("messageDetail", { messageIndex: messageIndex, messages: messages, formatDistanceToNow: formatDistanceToNow })    
  } else {
    res.status(404).send("Message not found");
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Mini Message Board app - listening on port ${PORT}!`));
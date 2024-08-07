require('dotenv').config()
const express = require("express");
const app = express();
const path = require("path");
const messagesRouter = require('./routes/messagesRouter');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));
app.use("/", messagesRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Mini Message Board app - listening on port ${PORT}!`));
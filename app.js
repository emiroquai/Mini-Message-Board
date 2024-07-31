const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/new", (req, res) => {
  res.render("new");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Mini Message Board app - listening on port ${PORT}!`));
const { Router } = require("express");
const messagesController = require("../controllers/messagesController");
const messagesRouter = Router();

messagesRouter.get("/", messagesController.getMessages);
messagesRouter.get("/new", messagesController.newMessageGet);
messagesRouter.post("/new", messagesController.newMessagePost);
messagesRouter.get("/messages/:messageIndex", messagesController.messageDetailGet);

module.exports = messagesRouter;

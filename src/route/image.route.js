const express = require("express");
const insertAiImage = require("../controllers/image.controller");
const imageRouter = express.Router();

imageRouter.post("/create-image", insertAiImage);

module.exports = imageRouter;

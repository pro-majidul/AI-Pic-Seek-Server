const express = require("express");
const { postUserComment } = require("../controllers/comment.controller");
const commentRouter = express.Router();

// commentRouter.get("/image/:imageId");
// commentRouter.post('/image/:imageId')

commentRouter.post("/create", postUserComment);

module.exports = commentRouter;

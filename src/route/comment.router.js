const express = require("express");
const { postUserComment } = require("../controllers/comment.controller");
const commentRouter = express.Router();

// commentRouter.get('/')

commentRouter.post("/" , postUserComment)

module.exports = commentRouter;
const express = require("express");
const {
  postUserComment,
  getAllComments,
} = require("../controllers/comment.controller");
const commentRouter = express.Router();

commentRouter.get("/chat/:imageId/:email", getAllComments);
// commentRouter.post('/image/:imageId')

commentRouter.post("/create", postUserComment);

module.exports = commentRouter;

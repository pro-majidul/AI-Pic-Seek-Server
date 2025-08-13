const express = require("express");
const {
  insertAiImage,
  getAllImages,
} = require("../controllers/image.controller");
const imageRouter = express.Router();

imageRouter.post("/create-image", insertAiImage);
imageRouter.get("/all-image", getAllImages);

module.exports = imageRouter;

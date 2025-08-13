const express = require("express");
const {
  insertAiImage,
  getAllImages,
  getSingleImage,
} = require("../controllers/image.controller");
const imageRouter = express.Router();

imageRouter.post("/create-image", insertAiImage);
imageRouter.get("/all-image", getAllImages);
imageRouter.get("/single/:id", getSingleImage);

module.exports = imageRouter;

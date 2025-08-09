//definition
const express = require("express");
const app = express();
const cors = require("cors");
const { logger } = require("./middleware/logger");
const UploadImageBBGetURL = require("../utils/ai/generateImageURL");
const generateImageBuffer = require("../utils/ai/genarateImageBuffer");
const { imageCollection } = require("../utils/ConnectDB");

//middleware
app.use(cors());
app.use(express.json());
app.use(logger);

//playground

app.post("/create-image", async (req, res) => {
  const { email, username, prompt, category, userImg } = req.body;
  console.log(req.body);

  if (!email || !username || !prompt || !category || !userImg) {
    res.status(400).send({
      status: 400,
      message: "Please provide email, username , prompt, category , userImg",
    });
    return;
  }
  // 1 + 2 generate a final prompt + generate a ImageBuffer
  const buffer = await generateImageBuffer(prompt, category);

  // 3 convert ImageBuffer into ImageUrl and upload on Imagebb
  const imageURL = await UploadImageBBGetURL(buffer, prompt);

  const finalImageURL = imageURL?.data?.display_url;

  // res.send(finalImageURL);

  // 4 Insert data in database

  const documents = {
    email,
    username,
    prompt,
    category,
    userImg,
    finalImageURL,
    createdAt: new Date().toISOString(),
  };
  const result = await imageCollection.insertOne(documents);
  res.status(200).send({
    ...result,
    finalImageURL
  });
  console.log(result);

  // 5 send response in frontend
  // res.send(result);
});

app.get("/", (req, res) => {
  res.send({
    status: 200,
    message: `🚩 server in running on ⚡`,
  });
});

module.exports = app;

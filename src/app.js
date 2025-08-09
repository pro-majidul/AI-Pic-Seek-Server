//definition
const express = require("express");
const app = express();
const cors = require("cors");
const { logger } = require("./middleware/logger");
const UploadImageBBGetURL = require("../utils/ai/generateImageURL");

//middleware
app.use(cors());
app.use(express.json());
app.use(logger);

//playground

app.post("/create-image", async (req, res) => {
  const { email, username, prompt, category, userImg } = req.body;

  if (!email || !username || !prompt || !category || !userImg) {
    res.status(400).send({
      status: 400,
      message: "Please provide email, username , prompt, category , userImg",
    });
    // 1 + 2 generate a final prompt + generate a ImageBuffer
    const buffer = await generateImageBuffer(prompt, category);
    // 3 convert ImageBuffer into ImageUrl and upload on Imagebb
    const imageURL = await UploadImageBBGetURL(buffer, prompt);
    const finalImageURL = imageURL?.data?.display_url;
    // 4 Insert data in database
  }
  res.send({});
});

app.get("/", (req, res) => {
  res.send({
    status: 200,
    message: `🚩 server in running on ⚡`,
  });
});

module.exports = app;

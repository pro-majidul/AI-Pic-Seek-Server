//definition
const express = require("express");
const app = express();
const cors = require("cors");
const { logger } = require("./middleware/logger");

//middleware
app.use(cors());
app.use(express.json());
app.use(logger);

//playground

app.post("/create-image", async (req, res) => {
  const { email, username, prompt, category, userImg } = req.body;
  if (email || username || prompt || category || userImg) {
    res.status(400).send({
      status: 400,
      message: "Please provide email, username , prompt, category , userImg",
    });
    return;
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

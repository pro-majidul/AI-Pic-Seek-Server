//definition
const express = require("express");
const app = express();
const cors = require("cors");
const { logger } = require("./middleware/logger");
const imageRouter = require("./route/image.route");


//middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// routes

app.use("/api/image", imageRouter);



//playground

app.get("/", (req, res) => {
  res.send({
    status: 200,
    message: `🚩 server in running on ⚡`,
  });
});

module.exports = app;

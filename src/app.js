//definition 
const express = require("express");
const app = express();




//middleware





//playground



app.get("/", (req, res) => {
  res.send({
    status: 200,
    message: `🚩 server in running on ⚡`,
  });
});

module.exports = app;

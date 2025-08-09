const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send({
    status: 200,
    message: `🚩 server in running on port ⚡ ${port}`,
  });
});

app.listen(port, () => {
  console.log(`🛸 server in running on port ⚡ ${port}`);
});


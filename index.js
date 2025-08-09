//definition 
const app = require("./src/app");
const { ConnectDB } = require("./utils/ConnectDB");
require("dotenv").config();
const port = process.env.PORT || 5000;

//Database Connection
ConnectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`🛸 server in running on port ⚡ ${port}`);
    });

    console.log("MongodbURI connected successfully");
  })
  .catch((err) => console.log("Mongodb fetch some Connect errors"));

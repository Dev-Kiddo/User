const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

const mongoose = require("mongoose");

const DB_URL = process.env.DB_URL.replace("<password>", process.env.DB_PASS);

mongoose.connect(DB_URL).then(() => {
  console.log("DATABASE... CONNECTED");
});

//Server
const port = 8888;
app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});

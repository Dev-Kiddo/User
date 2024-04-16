const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const fs = require("fs");

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const userModel = require("./models/userModel");

const DB_URL = process.env.DB_URL.replace("<password>", process.env.DB_PASS);

mongoose.connect(DB_URL).then(() => {
  console.log("Import connection ...");
});

const allUsers = JSON.parse(
  fs.readFileSync("./Dev-data/user-data.json", "utf-8")
);

const importDB = async () => {
  try {
    await userModel.create(allUsers);
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

const clearDB = async () => {
  try {
    await userModel.deleteMany();
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importDB();
  console.log("DB IMPORTED");
} else if (process.argv[2] === "--clearDB") {
  clearDB();
  console.log("DB CLEARED");
}

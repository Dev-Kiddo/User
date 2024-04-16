const express = require("express");
const app = express();
const morgan = require("morgan");

const router = require("./routes/userRouter");

//Middleware Call's
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1", router);

module.exports = app;

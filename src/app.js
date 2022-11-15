const express = require("express");
const StudentRouter = require("./routes/StudentRoute");
const mongodb = require("./database/dbconnect");
const bodyParse = require("body-parser");
const app = express();

app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());

app.use("/student", StudentRouter);

app.use((req, res, next) => {
  res.status(404).json({
    error: `bad request`,
  });
});

module.exports = app;
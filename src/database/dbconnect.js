const mongoose = require("mongoose");
mongoose
.connect("mongodb://localhost:27017/API")
.then(() => {
    console.log("db connection is successfully");
})
.catch((err) => {
    console.log("No connection")
});
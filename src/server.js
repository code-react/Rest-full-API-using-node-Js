const express = require('express');
const port = process.env.port || 5000;
const res = require("express/lib/response")
const app = require("./app")






app.listen(port, () => {
    console.log(`server is listenig on port ${port}`)
})
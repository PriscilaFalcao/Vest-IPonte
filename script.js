const express = require("express");
const hostname = "127.0.0.1";
const port = 3080;
const app = express();
const bodyParser = require("body-parser");
// const { param } = require('express/lib/request');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("./front"));
app.use(express.json());
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
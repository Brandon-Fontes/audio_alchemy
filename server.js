const express = require("express");

const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8080;


app.listen(PORT, function() {
  console.log(`Server now listening on PORT ${PORT}!`);
});
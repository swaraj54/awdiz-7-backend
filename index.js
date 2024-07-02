const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello Everyone kjabduklamdnhaw.");
});

app.listen(3000);

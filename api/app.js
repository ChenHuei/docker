const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res, next) => {
  res.json([
    { id: 1, title: "title 1" },
    { id: 2, title: "title 2" },
  ]);
});

app.listen(4000, () => {
  console.log("listening for request on port 4000");
});

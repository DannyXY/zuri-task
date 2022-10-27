var express = require("express");
var server = express();
var cors = require("cors");
require("dotenv").config();

const data = {
  slackUsername: "dannyx",
  backend: true,
  age: 19,
  bio: "Quick learner, interested in new things",
};

server.use(cors());

server.get("/details", (req, res) => {
  res.status(200).json(data);
});

server.listen(process.env.PORT, () => {
  console.log(`server is listening on port ${process.env.PORT}`);
});

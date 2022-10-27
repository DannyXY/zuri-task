var http = require("http");
require("dotenv").config();

var server = http.createServer(function (req, res) {
  const data = {
    slackUsername: "dannyx",
    backend: true,
    age: 19,
    bio: "Quick learner, interested in new things",
  };
  if (req.method == "GET") {
    if (req.url == "/details") {
      res.writeHead(200, { "Content-type": "application/json" });
      res.write(JSON.stringify(data));

      res.end();
    } else {
      res.end("we're not fully scaled at the moment");
    }
  } else {
    res.end("this method isn't allowed for this route");
  }

});

server.listen(process.env.PORT);
console.log(`Server is listening on port ${process.env.PORT}`);

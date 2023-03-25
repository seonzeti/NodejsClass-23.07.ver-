const http = require("http");
const fs = require("fs").promises;

http
  .createServer(async (req, res) => {
    try {
      console.log("try");
      const htmlFile = await fs.readFile("./ex03.html");
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(htmlFile);
    } catch (err) {
      res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
      res.end(err.message);
    }
  })
  .listen(8888);

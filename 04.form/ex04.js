const http = require("http");
const m_url = require("url");

http
  .createServer((req, res) => {
    let query = m_url.parse(req.url, true).query;
    let num = Number(query.num);

    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });

    res.write("<html>");
    res.write("<body><table border='1px solid black'>");

    for (let i = 1; i <= 9; i++) {
      res.write(`<tr><td>${num} * ${i} = ${num * i}</td></tr>`);
    }

    res.write("</table></body>");
    res.write("</html>");
    res.end();
  })
  .listen(8888);

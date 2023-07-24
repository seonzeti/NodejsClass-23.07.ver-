// 나의 IP주소
//선생님 IP주소 : 172.30.1.55
var http = require("http");
const ip = require("ip");

http
  .createServer(function (req, res) {
    var ip_res = ip.address();
    console.log(ip_res);

    if (ip_res == "192.168.0.10") {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.write("<html>");
      res.write("<body>");
      res.write("선생님 환영합니다.");
      res.write("</body>");
      res.write("</html>");
      res.end();
    }
  })
  .listen(8888);

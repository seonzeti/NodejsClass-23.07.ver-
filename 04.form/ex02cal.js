console.log("ex02cal start");

const http = require("http");
const m_url = require("url");

http
  .createServer((req, res) => {
    console.log("create server!", req.url);
    let query = m_url.parse(req.url, true).query;
    let result = 0;
    console.log("쿼리 값 : ", query);

    //사용자가 선택한 연산을 수행하여 응답하는 서버페이지를 구축하시오.

    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });

    res.write("<html>");
    res.write("<body>");

    res.write("사용자가 보내는 num1값 : " + query.num1 + "<br>");
    res.write("사용자가 보내는 num2값 : " + query.num2 + "<br>");


    if (query.cal === "+") {
      result = Number(query.num1) + Number(query.num2);
    } else if (query.cal === "-") {
      result = Number(query.num1) - Number(query.num2);
    } else if (query.cal === "*") {
      result = Number(query.num1) * Number(query.num2);
    } else if (query.cal === "/") {
      result = Number(query.num1) / Number(query.num2);
    }

    res.write("연산 결과는 : " + result + "입니다. <br>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  })
  .listen(8888);

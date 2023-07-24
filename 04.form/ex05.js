var http = require("http");
var m_url = require("url");
var qs = require("querystring");
//문자열을 queryString형태로 변환(name과 value값으로 분석)

//post방식으로 요청이 왔을 때 처리하는 방법
http
  .createServer(function (request, response) {
    var body = "";

    // 사용자가 입력한 값을 누적하는 함수
    request.on("data", function (data) {
      body += data;
      console.log(body);
    });

    // 사용자가 입력한 데이터수신이 끝났을 때 데이터를 출력하는 함수
    request.on("end", function () {
      var post = qs.parse(body);

      console.log("사용자가 입력한 ID값 : " + post.id);
      console.log("사용자가 입력한 PW값 : " + post.pw);
    });
  })
  .listen(8888);

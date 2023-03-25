var http = require('http');
var m_url = require('url');
//사용자가 요청한 URL을 분석하기위해 사용하는 모듈

http.createServer(function(request, response){
    
    console.log("서버시작");
    console.log("PM2설치성공!");
    console.log("사용자가 요청한 URL : " + request.url);
    // 현재 request.url 값 :  /?id=hot&pw=123
       //QueryString : URL을 통해서 서버로 값을 보내는 방법

    var query = m_url.parse(request.url, true).query;
    // console.log("사용자가 입력한 ID값: " + query.id);
    // console.log("사용자가 입력한 PW값: " + query.pw);

    response.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
    response.write("<html>")
    response.write("<body>")
    response.write("사용자가 입력한 ID값: " + query.id + "<br>")
    response.write("사용자가 입력한 PW값: " + query.pw + "<br>")
    response.write("</body>")
    response.write("</html>")
    response.end();

}).listen(8888);    


// favicon 오류 : 예전에 리액트 앱을 로컬에서 돌린 적이 있기 때문에 리액트 default favicon이 캐시에 저장된 것이다.
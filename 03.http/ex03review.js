//선생님 IP주소 : 172.30.1.55
var http = require('http');

http.createServer(function(req, res){
    var ip = req.connection.remoteAddress;
    var ip_res = ip.substring(7);

    if(ip_res == "172.30.1.44"){
        res.writeHead(200, {'Content-Type' : 'text/html;charset-utf-8'});
        res.write("<html>")
        res.write("<body>")
        res.write("선생님 환영합니다.")
        res.write("</body>")
        res.write("</html>")
        res.end();
    }
}).listen(8888);

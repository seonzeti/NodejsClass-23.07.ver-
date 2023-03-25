const http = require('http');
const qs = require('querystring');

http.createServer(function(request, response){
    
    let body = "";

    request.on('data', function(data){
        body += data;
    })

    request.on('end', function(){
        let post = qs.parse(body);

        response.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
        response.write("<html>")
        response.write("<body>")
        response.write("ID : " + post.id + "<br>")
        response.write("NAME " + post.name + "<br>")
        response.write("EMAIL " + post.email + "<br>")
        response.write("</body>")
        response.write("</html>")
        response.end();


    })


}).listen(8888);
console.log("ex03td start");

const http = require("http");
const m_url = require("url");

http.createServer((req,res)=>{
    let query = m_url.parse(req.url, true).query;
    console.log('query', query)

    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });

    res.write("<html>");
    res.write("<body><table border='1px solid black'><tr>");

    for (let i = 0 ; i < query.inputTd ; i++){
        res.write(`<td>${i+1}</td>`)
    }

    res.write("</tr></table></body>");
    res.write("</html>");
    res.end();

}).listen(8888)

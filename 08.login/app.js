const express = require("express");
const app = express();
const nunjucks = require('nunjucks')
const indexRouter= require('./routes')

const bodyParser = require("body-parser");
// 클라이언트 POST request data의 body로부터 파라미터를 편리하게 추출

//bodyParser 미들웨어 추가
app.use(bodyParser.urlencoded({ extended: true }));


app.set ("view engine", "html")
app.set("port", process.env.PORT || 8888);

nunjucks.configure("views", {
    express : app, 
    watch : true
})

app.use('/', indexRouter)

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "서버 연결 대기중..");
});


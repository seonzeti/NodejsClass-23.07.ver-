// Node.js와 Mysql을 연결해줄 수 있는 모듈이 필요함
// npm i express mysql

// 폴더 구성
// config - 데이터 관리 (DB와 관련된 )
// public - 정적인 페이지, 사진 등
// routes - 경로이동
// views - 동적인 페이지

const express = require("express");
const app = express();
const indexRouter = require("./routes");
const userRouter = require("./routes/user");
const bodyParser = require("body-parser");

const nunjucks = require("nunjucks");

app.use(bodyParser.urlencoded({extended:true}));
app.set("port", process.env.PORT || 8888);
app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
  watch: true,
});

app.use("/", indexRouter);
app.use("/user", userRouter);
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 서버 연결 대기 중... ");
});

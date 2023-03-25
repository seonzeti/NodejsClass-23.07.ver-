const express = require("express");
const app = express();
const m_url = require("url");

const bodyParser = require("body-parser");
// 클라이언트 POST request data의 body로부터 파라미터를 편리하게 추출

//bodyParser 미들웨어 추가
app.use(bodyParser.urlencoded({ extended: true }));

app.set("port", process.env.PORT || 8888);

// static : 정적인 파일 경로를 지정 (미들웨어)
app.use(express.static(__dirname + "/public"));

app.get("/get", (req, res) => {
  console.log("get app enter");
  let query = m_url.parse(req.url, true).query;
  let id = req.query.id;
  let pw = req.query.pw;
});

app.post("/post", (req, res) => {
  console.log("post app enter");

  let id = req.body.id;
  let pw = req.body.pw;

  console.log(id, pw);
  res.end();
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 서버 연결 대기중...");
});

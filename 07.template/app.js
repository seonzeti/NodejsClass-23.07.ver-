const express = require("express");
const indexRouter = require("./routes");
const app = express();

// HTML은 정적인 언어이기 때문에 1000개의 데이터를 추가하고 싶다면 하나하나 코딩해서 넣어야함
// JS를 이용한다면? 간단하게 반복문으로 사용 가능함
// 템플릿 엔진 : JS를 사용해서 HTML를 렌더링 할 수 있도록 함
// 종류 : Nunjucks, EJS, PUG ... etc

// 넌적스 템플릿 엔진 사용
// 1) 넌적스 설치
//npm install nunjucks
//npm install nunjucks chokidar
// 2) require
const nunjucks = require("nunjucks");

app.set("port", process.env.PORT || 8888);
app.set("view engine", "html");


// configure 의 첫번째 인수 : views 폴더의 경로
// 두번째 인수 : 옵션
//  -- express 속성 : app 객체 연결
//  -- watch 속성 : true 일 때, html파일이 변경되면 템플릿 엔진을 다시 렌더링한다
nunjucks.configure("views", {
  express: app,
  watch: true,
});

app.use("/", indexRouter);
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 서버 연결 대기 중... ");
});

//app.js : node module 로딩, 초기화, router 유입점
const express = require("express");
const app = express();

const indexRouter = require("./routes"); //index.js 는 생략이 가능하다 (기본값)
const userRouter = require("./routes/user");

app.set("port", process.env.PORT || 8888);

app.use("/", indexRouter);
app.use("/user", userRouter);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 서버 연결 대기중...");
});

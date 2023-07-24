/* 
    1. server.js 생성 
    2. 터미널 오픈해서 npm init 입력
    3. npm install express(서버 만들어줌) ws (웹소켓 뚫어주는거)
    
*/

const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(8888);

// 웹소켓 연결
const webSocket = require("ws");
const socket = new webSocket.Server({
  port: 8889,
});

socket.on("connection", (ws, req) => {
  ws.on("message", (msg) => {
    console.log("user message ", msg.toString());
    ws.send("bye");
  });
});

const express = require("express");
const router = express.Router();

// 쿠키 (Cookie) : 클라이언트 웹 브라우저에 저장되는 정보
// cookie-parser 모듈을 이용해 쿠키를 설정할 수 있다.
// => 고객이 가지고 있는 정보!

// (1) 설치 npm i cookie-parser
// (2) 모듈

// (3) 쿠키 설정하기
router.get("/setcookie", (req, res) => {
  console.log("setting cookie router");

  let nick = "망글곰";
  res.cookie("nickname", nick, {
    maxAge: 10000, 
    // maxAge : 쿠키의 수명을 밀리초단위로 설정 (만료시간)
  });

  res.cookie("menu", "아메리카노", {
    expires: new Date(Date.now() + 60 * 60 * 24 * 1000 * 2),
    // expires : 만료 날짜를 시간으로 설정 
  });
  res.send("쿠키 생성 완료!");
});

// (4) 쿠키 확인하기
router.get("/getcookies", (req, res) => {
  console.log(req.cookies);
  res.send(req.cookies.nickname);
});

// (5) 쿠키 삭제하기
router.get("/delcookies", (req, res) => {
  res.clearCookie("dinner");
  res.send("쿠키 삭제 완료");
});

// 보안이 중요하지 않은 정보들을 브라우저에 저장해야할 때 사용
// 쿠키는 서버의 자원을 전혀 사용하지 않고, 오로지 클라이언트의 자원이다.

// 쿠키는 사용자가 브라우저를 종료하더라도 그 기록이 남아있다. 만료도 지정 가능 
// ex) 장바구니, 오늘 다시는 이 창 보지 않기 체크, 아이디/비번 저장

module.exports = router;

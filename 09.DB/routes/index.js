//페이지와 관련된 Router 

const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  console.log("/경로 라우터 생성 ");
  res.render("main");
});

// 회원가입 페이지 렌더링
router.get("/join", (req, res) => {
  console.log("join");
  res.render("join");
});

// 로그인 페이지 렌더링
router.get("/login", (req, res) => {
  res.render("login");
});

// 회원 검색 페이지 렌더링
router.get("/search", (req, res) => {
  res.render("search");
});

// 회원 삭제 페이지 렌더링
router.get("/delete", (req, res) => {
  res.render("delete");
});

module.exports = router;

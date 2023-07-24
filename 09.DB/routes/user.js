// user 관리에 대한 로직

const express = require("express");
const router = express.Router();

const conn = require("../config/database");

// 가입 로직 처리
router.post("/handlejoin", (req, res) => {
  console.log("handle join");
  let { id, pw, nick } = req.body;

  let sql = "insert into member values (?,?,?)";
  // DB 연동
  conn.query(sql, [id, pw, nick], (err, rows) => {
    if (rows) {
      console.log("회원가입 성공!");
      res.render("main", { id: id });
    } else {
      console.log("회원가입 실패!");
    }
  });
});

// 로그인 로직 처리
router.post("/handlelogin", (req, res) => {
  console.log("handle login");

  let { id, pw } = req.body;
  let sql = "select * from member where id = ? AND pw = ?";

  // DB연동
  conn.query(sql, [id, pw], (err, rows) => {
    if (rows.length > 0) {
      console.log("login success");
      res.render("main", { user: rows[0].id });
    } else {
      res.send(
        "<script>alert('잘못 입력하셨습니다.');location.href='http://localhost:8888/';</script>"
      );
    }
  });
});

// 회원 전체 검색
router.get("/selectAll", (req, res) => {
  let sql = "select * from member";
  conn.query(sql, (err, rows) => {
    console.log(rows);
    res.render("select", { list: rows });
  });
});

// 회원 검색 기능
router.get("/select", (req, res) => {
  console.log(req.query);

  let sql = "select * from member where id = ?";
  conn.query(sql, [req.query.id], (err, rows) => {
    console.log(rows);
    res.render("select", { list: rows });
  });
});

// 회원 삭제 기능
router.post("/deleteUser", (req, res) => {
  let { id, pw } = req.body;

  let sql = "delete from member where id = ? AND pw = ?";
  conn.query(sql, [id, pw], (err, rows) => {
    if (rows.affectedRows > 0) {
      // 회원 탈퇴 성공!
      res.render("main");
    } else {
      res.send(
        "<script>alert('잘못 입력하셨습니다.');location.href='http://localhost:8888/';</script>"
      );
    }
  });
});
module.exports = router;

const express = require("express");
const router = express.Router();
const conn = require("../config/database");

router.post("/join", async (req, res) => {
  if (req.body.password === req.body.password2) {
    let sql = "select id from nodejs2_member where id = ?";
    conn.query(sql, [req.body.id], (err, rows) => {
      console.log("select문 rows :", rows.length);
      if (rows.length == 0) {
        let sql2 = "insert into nodejs2_member values (?,?,?,?)";
        conn.query(
          sql2,
          [req.body.id, req.body.pw, req.body.name, req.body.address],
          (err, rows) => {
            if (rows) {
              res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
              res.write('<script >alert("로그인 성공!")</script>');
              res.write('<script>window.location="/"</script>');
            } else {
              res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
              res.write('<script >alert("로그인 실패!")</script>');
              res.write('<script>window.location="/join"</script>');
            }
          }
        );
      } else {
        res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        res.write('<script >alert("로그인 실패!")</script>');
        res.write('<script>window.location="/join"</script>');
      }
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    res.write('<script >alert("로그인 실패!")</script>');
    res.write('<script>window.location="/join"</script>');
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("index Router Enter");
  res.render("login");
});

router.post("/login", (req, res) => {
  console.log("login Router Enter");
  let id = req.body.userId;
  let pw = req.body.userPw;

  console.log("id :", id, "pw :", pw);

  if (id === "admin" && pw === "1234") {
    res.render("loginSuccess", { user : id });
  } else {
    res.render("loginFailed");
  }
});

module.exports = router;

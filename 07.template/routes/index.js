const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("index Router");

  // 특정 요청 시 -> index.html 응답 + 특정 데이터가 html에 출력되도록 함

  // render('파일명', {보내는 값})

    res.render("index", { title: "SYP" });
  //   index.html를 렌더링 해서 보내겠다!
   // res.render("extend", { title: "SYP" });
});

module.exports = router;

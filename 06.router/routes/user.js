const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.params, req.query);
  res.send("USER ROUTER!!");
});

//  ***  유용한 팁! *** 
// 라우트 매개변수
// 문자 그대로 /:id 라는 라우터를 의미하는게 아니라, :뒤에 있는 매개변수에는 다른 값을 넣을 수 있게 된다 
// 해당 객체는 req.params 안에 들어있다. 
// 만약 :id 라면 req.params.id 안에, :type이라면 req.params.type 안에 들어있다 
// 단, 일반 라우터보다 뒤쪽에 있어야 다른 라우터들을 방해하지 않는다. 

router.get("/:id", (req, res) => {
  console.log(req.params, req.query);
  res.send("USER ROUTER!!");
  //   res.send 안에는 순수 number 형 데이터를 보낼 수 없다.
});

module.exports = router;

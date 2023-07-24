const express = require('express')
const router = express.Router()

// 세션 (Session)
// Server가 Client 에게 암호화된 아이디 (Session ID)를 부여함 
// 서버의 자원을 쓰는 것이기 때문에 너무 많은 세션을 사용하지 않는 것이 좋다. 


// (1) 세션 생성하기 
router.get('/setsession', (req,res)=>{
    req.session.nick = 'seonzeti';
    res.send('세션 생성 완료!')
})

// (2) 세션 값 확인하기 
router.get('/getsession', (req,res)=>{
    res.send('user : ', req.session.nick)
})

// (3) 세션 삭제하기 
router.get('/delsession', (req,res)=>{
    req.session.nick = '' // 하나만 삭제 
    req.session.destroy() // 전체삭제 
    res.send('세션 삭제 완료')
})

module.exports = router;
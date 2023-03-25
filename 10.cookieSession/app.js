const express = require('express')
const app = express()

// 쿠키
const cookieRouter = require('./routes/cookie')
const cookieParser = require('cookie-parser') // 쿠키 확인

// 세션 
const sessionRouter = require('./routes/session')
const session = require('express-session')
const fileStore = require('session-file-store')(session)

app.set('port', process.env.PORT || 8888)

// 쿠키 미들웨어 
app.use(cookieParser())
app.use('/c', cookieRouter)

// 세션 미들웨어 
app.use(session({
    httpOnly : true,  // http 요청으로 온 것만 처리
    resave : false,  // 세션을 언제나 재 저장 할지?
    secret : 'secret',  // 암호화 할 때 쓰이는 키 
    store : new fileStore() //여러 사용자의 세션을 저장하기 위한 저장소 
}))

app.use('/s', sessionRouter)


app.listen(app.get('port'), ()=>{
    console.log(app.get('port'),'번 포트에서 서버 연결 대기중 .. ')
})

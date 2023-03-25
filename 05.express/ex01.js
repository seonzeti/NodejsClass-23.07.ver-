const express = require('express');
const app = express(); // app 생성 


// app.set('key',value) : 키에 값을 저장하도록 설정 
app.set('port', process.env.PORT||8888);
                // 기본 포트가 있다면 그 번호로 포트를 지정해주세요 
                // 그렇지 않다면 8888으로 포트 지정하겠습니다~ 

// 2. 
app.get('/',(req,res)=>{//get 으로 요청 시
    res.send('Hello World') // 작성한 텍스트 응답
})



// 1. 
// app.listen 이 가장 하단에 있어야함 
app.listen(app.get('port'), ()=>{
    // port 로 오는 요청 기다림
   console.log(app.get('port'), '번 포트에서 서버 연결 대기중...');
});
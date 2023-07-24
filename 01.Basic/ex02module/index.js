// require : 모듈을 가져오는 명령어 
const {odd, even} = require('./var')
const checkNumber = require('./func')

function checkStringOddorEven(str){
    let res = str.length % 2 ? odd : even
    return res
}

console.log(checkNumber(10))
console.log(checkStringOddorEven('hello'))

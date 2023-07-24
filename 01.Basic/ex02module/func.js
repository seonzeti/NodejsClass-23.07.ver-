const {odd, even} = require('./var')

function checkOddEven(num){
    let res = num % 2 ? odd : even 
    return res
}

module.exports = checkOddEven 
const string = "abc";
const number = 1;
const boolean = true;
const obj = {
  outside: {
    inside: {
      key: "value",
    },
  },
};


console.log("평범한 로그");
console.log(string, number, boolean);


// 배열의 요소로 객체를 넣으면 객체의 속성들이 테이블 형식으로 표현이 된다.
console.table(
  [
    {
      name: "장원영",
      birth: 2004,
    }, 
    {
      name: "안유진",
      birth: 2003,
    },
  ]
);

console.dir(obj)


// time ~ timeEnd 사이의 시간을 측정함
console.time('시간 측정')
for (let i = 0 ; i< 100000 ; i++){}
console.timeEnd('시간 측정')
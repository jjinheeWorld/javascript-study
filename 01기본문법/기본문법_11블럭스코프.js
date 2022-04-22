/**
 * Block Scope (블럭 스코프)
 * - 변수 유효 범위
 * - 내부에서 외부로 접근 가능
 * - 외부에서 내부로는 접근 X
 *
 * 처음부터 => var => 함수 단위 유효 범위
 * ES2015+ => let, const => 블럭 단위 유효 범위
 */

var globalVal = "전역 변수";
var varVal = "함수-단위";
const constVal = "블럭-단위";

// for (let index = 0; index < 3; index++) {} // index is not defined
for (var index = 0; index < 3; index++) {}

console.log(outerFunc());

function outerFunc() {
  console.log(globalVal); // 전역 변수
  // console.log(innerVal);

  function innerFunc() {
    var innerVal = "함수 내부 지역 변수";
    console.log(globalVal); // 전역 변수
    console.log(index); // 3
  }
  innerFunc();

  return "짜잔";
}

{
  let a = "a";
}

if (true) {
  let a = "a";
  var b = "b";
}

// console.log(a); // a is not defined
console.log(b); // b

/* 값
더 이상 나눌 수 없는 값
더 이상 평가될 수 없는 하나의 식으로 자료형을 간단히 이루는 값
*/

// 객체를 제외한 모든 타입은 불변 값(변경할 수 없는 값)을 정의, 원시 값

// 문자열 값 (원시 값)
var str = "word";
str.toUpperCase();

console.log(str);

/**
 * typeof
 */

const un = undefined;
const nu = null;
const bool = false;
const num = 0;
const str2 = "문자열";

console.log(typeof un);
console.log(typeof nu);
console.log(typeof bool);
console.log(typeof num);
console.log(typeof str2);

// =========================================================
// 원시 값이 아닌 데이터 타입은 레퍼런스, 객체 타입을 의미

/**
 * 객체
 */
const obj = {
  name: "lee",
};

/**
 * 배열
 */
const arr = ["lee"];

/**
 * 함수
 */
function func() {
  return "lee";
}

console.log(typeof obj);
console.log(typeof arr);
console.log(typeof func);

// =========================================================

/**
 * 원시 값 비교
 *
 * 동등 연산자를 사용할때
 * 엄격한 비교 => ===
 * 느슨한 비교 => ==
 */

if (num === 0) {
  console.log("num은 0입니다");
} else {
  console.log("num은 0이 아닙니다");
}

if (num == 0) {
  console.log("num은 0입니다");
} else {
  console.log("num은 0이 아닙니다");
}

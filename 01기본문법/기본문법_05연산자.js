/* 연산자
값의 연산을 위해 사용되는 부호
연산의 대상이 되는 피연산자 연산을 부호로 표현하는 연산자
*/

// === 서로 같은지 엄격하게 검사
// !== 서로 다른지 엄격하게 검사
// == 서로 같은지 느슨하게 검사
// != 서로 다른지 느슨하게 검사

let count = 0;
count += 1;

console.log(count); // 1

// 증감 단항 연산자
count--;
count--;
count--;
count++;
count++;
count++;

console.log(count); // 1

// AND 연산자
// 좌항과 우항을 비교했을 때, 둘 다 참일때 true를 그 외에는 false를 반환
var a1 = true && true; // t && t returns true
var a2 = true && false; // t && f returns false
var a3 = false && true; // f && t returns false
var a4 = false && 3 == 4; // f && f returns false
var a5 = "Cat" && "Dog"; // t && t returns Dog
var a6 = false && "Cat"; // f && t returns false
var a7 = "Cat" && false; // t && f returns false
var a8 = true && true && true && true; // t && t && t && t returns true
var a9 = true && true && false && true && true; // t && t && f && t && t returns false

// OR 연산자
// 둘 중 하나가 참일 때 true를 그 외에는 false를 반환
var o1 = true || true; // t || t returns true
var o2 = false || true; // f || t returns true
var o3 = true || false; // t || f returns true
var o4 = false || 3 == 4; // f || f returns false
var o5 = "Cat" || "Dog"; // t || t returns Cat
var o6 = false || "Cat"; // f || t returns Cat
var o7 = "Cat" || false; // t || f returns Cat
var o8 = false || false || false || false || true; // f || f || f || f || t returns true

// && => and => 그리고
// || => or  => 또는

// NOT 연산자
var n1 = !true; // !t returns false
var n2 = !false; // !f returns true
var n3 = !"Cat"; // !t returns false

// 삼항 연산자
const temp = 1 === "1" ? "참일때" : "거짓일때";

let temp2;

if (1 === "1") {
  temp2 = "참일때";
} else {
  temp2 = "거짓일때";
}

console.log(temp2); // 거짓일때

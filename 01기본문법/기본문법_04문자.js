/**
 * 문자
 */

const word = "문자";
const word2 = "문자";

// 백틱을 통해 개행 문자열 표기 가능
const word3 = `문자



`;

console.log(word[0]); // 문
console.log(word.length); // 2

const words = word + "    " + word2;

console.log(words);
console.log(word3);

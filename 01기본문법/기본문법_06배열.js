/**
 * 배열
 */
const data = "a";
const num = 0;
const boolean = true;

// 자바스크립트 배열의 인덱스는 0부터 시작
const arr = [data, num, boolean, "name"];

console.log(arr.length); // 4
console.log(arr[0]); // a
console.log(typeof arr); // object

arr[4] = "Test";
arr[0] = "첫번째";
arr[1] = "Second";

console.log(arr); // [ '첫번째', 'Second', true, 'name', 'Test' ]

// 배열 추가
arr.push("마지막");
arr.unshift("첫번째 또 추가");

console.log(arr); // [ '첫번째 또 추가', '첫번째', 'Second', true, 'name', 'Test', '마지막' ]

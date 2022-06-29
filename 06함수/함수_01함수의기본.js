// 사용예제1
function sum(a, b) {
  console.log('메롱!');
  return a + b;
}
const result = sum(1, 2);
console.log(result);

// 사용예제2
function fullName(firstName, lastName) {
  return `${lastName} ${firstName} ✋`;
}
let lastName = '이';
let firstName = '진희';
console.log(fullName(firstName, lastName));

let lastName2 = '이';
let firstName2 = '진명';
console.log(fullName(firstName2, lastName2));

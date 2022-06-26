// 퀴즈!
let num = 2;
// num의 숫자가 짝수이면 👍, 홀수라면 👎을 출력하도록
// 조건문 if
if (num % 2 === 0) {
  console.log('👍');
} else {
  console.log('👎');
}
// 삼항연산자
let emoji = num % 2 === 0 ? '👍' : '👎';
console.log(emoji);

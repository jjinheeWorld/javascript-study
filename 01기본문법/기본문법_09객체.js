/**
 * 객체
 */

// 나라는 사람을 프로그래밍 언어로 표현한다면?
const jinheeLee = {
  // key : value
  // 객체 안에 객체, 함수, 배열을 넣을 수도 있다!
  name: {
    first: "lee",
    last: "jin-hee",
  },
  age: 27,
  gender: "female",
  introduce: function (guest) {
    return "hello " + guest + " my name is jinhee";
  }, // 객체에 저장된 값이 함수인 경우, 이를 메서드(method)라고 부름
  hobby: ["youtube", "badminton"],
};

// 객체 접근은 괄호를 통해서, 점을 통해서 가능하다.
console.log(jinheeLee["name"]["first"]); // lee
console.log(jinheeLee.name.last); // jin-hee
console.log(jinheeLee.age); // 27
console.log(jinheeLee.introduce("lee")); // hello lee my name is jinhee

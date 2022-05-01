// 참조 타입
// 객체, 배열, 함수
const object = {
  name: "lee", // @0001
  age: 27,
  arr: [],
  func: function () {},
  child: {},
};

const array = [[], 11, "lee", function () {}];

function func() {}

// instanceof
console.log(object instanceof Object); // true
console.log(func instanceof Function); // true
console.log(array instanceof Array); // true

// 원시 값은 불변 값
const str = "string";
str.toUpperCase();

console.log(str); // string

// 참조 타입은 가변적
// 객체
const obj = {
  str: "string",
};
obj.str.toUpperCase();
console.log(obj); // { str: 'string' }

obj.num = 123;
obj.bool = true;
console.log(obj); // { str: 'string', num: 123, bool: true }

// 배열
const arr = [1, 2, 3];
console.log(arr[0]); // 1
console.log(arr[1]); // 2
console.log(arr[2]); // 3

arr[3] = 1000;
console.log(arr); // [ 1, 2, 3, 1000 ]

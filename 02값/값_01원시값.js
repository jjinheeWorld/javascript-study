// 원시 값은 불변 값
typeof undefined;
typeof true;
typeof "string";
typeof 123;
typeof 9007199254740992n;
typeof Symbol();
typeof null;

const test = "string";
console.log(test.toLocaleUpperCase()); // STRING
console.log(test); // string

const bool = false;
console.log(!bool); // true
console.log(bool); // false

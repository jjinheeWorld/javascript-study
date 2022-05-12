// 문자열타입
let string = '안녕하세요';
string = `안녕!`;
console.log(string); // 안녕!

// 특수 문자 출력하는 법
string = "'안녕!'";
console.log(string);
/* '안녕!' */

string = '안녕!\n진희야!';
console.log(string);
/* 
안녕!
진희야! 
*/

string = '안녕!\n진희야!\t\t내 이름은';
console.log(string);
/* 
안녕!
진희야!         내 이름은
*/

string = '안녕!\n진희야!\t\t내 이름은\\';
console.log(string);
/* 
안녕!
진희야!         내 이름은\
*/
string = '안녕!\n진희야!\t\t내 이름은\\\u09AC';
console.log(string);
/* 
안녕!
진희야!         내 이름은\ব
*/

// 템블릿 리터럴 (Template Literal) ``
let id = '진희';
let greetings = "'안녕!, " + id + "✋\n즐거운 하루 보내요!'";
console.log(greetings);
/*
'안녕!, 진희✋
즐거운 하루 보내요!'
*/

greetings = `'안녕!, ${id}✋
즐거운 하루 보내요!'`;
console.log(greetings);
/*
'안녕!, 진희✋
즐거운 하루 보내요!'
*/

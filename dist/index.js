"use strict";
// function greet(name: string): string {
//   return `Hello, ${name}`;
// }
// console.log(greet("GY"));
//---
// let age: number = 25;
// age = 26;
// const firstName: string = "Alice";
// // firstName = "Bob"; //오류!
// var isOld: boolean = false;
//---
// let score: number = 90;
// let studentName: string;
// studentName = "John";
// score = 95;
// // score = "95"; //오류!
//---
// let score = 90;
// score = 95;
// score = "95";  //타입을 지정해주진 않았지만 타입 추론에 의해 오류가 뜸
//---
// let score;
// score = 95;
// score = "95"; //선언과 동시에 초기값을 주지 않았다면 any 타입이 됨
// 해당 방식은 지양해야 함
//---
// const firstName = "Alice";
// const greeting = "Hello";
// const age = 30;
// const message = `My name is ${firstName} and I am ${age} years old.`;
// console.log(message);
//---
// const intNum = 42;  //integer
// const floatNum = 3.14;  //floating-point number
// const result = intNum / 0;
// //자바스크립트에서 어떤 숫자를 0으로 나누면 오류가 나지 않고 'Infinity'한 값이 반환됨
// // const invalid = "abc" * 3;  //오류
// console.log(result);
// ---
// let hexadecimalNumber = 0xf00d;
// let binaryNumber = 0b1010;
// let octalNumber = 0o744;
// hexadecimalNumber = 12;
// console.log(hexadecimalNumber);
// console.log(binaryNumber);
// console.log(octalNumber);
//---
// const isAdult: boolean = true;
// const hasPermission = false;
// if (isAdult && !hasPermission) {
//   console.log("Access denied");
// } else {
//   console.log("Access granted");
// }
// if (0) {
//   console.log("This will not be printed");
// }
// //자바스크립트에서의 false, truely 값은 타입스크립트에서도 동일하게 사용된다.
// //빈 문자열, null, undefined, 0 등의 값들은 조건문 등에서 false로 해석된다.
//---
// const bigIntNumber = 12343525232867869284793678659274986235727432n; //숫자 끝에 n을 붙이거나 BigInt를 써줌
// const anotherBigInt = BigInt("12343525232867869284793678659274986235727432");
// //tsconfig에서 컴파일 대상이 ES2016 버전으로 되어 있기 때문에 BigInt를 쓰면 빨간 줄로 오류가 남
// //->2020으로 수정한 다음 저장하면 됨( "target": "es2020")
// console.log(bigIntNumber + anotherBigInt);
// //일반 int랑 BigInt를 연산하면 컴파일 오류가 남
//---
//그 외 타입들
//any: 모르니까 신경 끄자
//unknown: 모르니까 조심하자
//null&undefined
//void
//never
let anyValue = 10; //Number
anyValue = "Hello"; //String
anyValue = true; //Boolean
anyValue = [1, 2, 3]; //Array
anyValue = { name: "John" }; //Object
//어떤 값을 넣어도 오류가 나지 않음
let anyString = 123;
console.log(anyString.toUpperCase());
console.log(anyString.nonExistentMethod()); //어느 기본 타입에도 존재하지 않는 메소드

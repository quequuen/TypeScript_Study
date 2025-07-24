function greet(name: string): string {
  return `Hello, ${name}`;
}

console.log(greet("GY"));

let age: number = 25;
age = 26;

const firstName: string = "Alice";
// firstName = "Bob"; //오류!

var isOld: boolean = false;

// let score: number = 90;

let studentName: string;
studentName = "John";

// score = 95;
// score = "95"; //오류!

// let score = 90;

// score = 95;
// score = "95"; //타입을 지정해주진 않았지만 타입 추론에 의해 오류가 뜸

// let score;

// score = 95;
// score = "95"; //선언과 동시에 초기값을 주지 않았다면 any 타입이 됨
// 해당 방식은 지양해야 함

// const firstName = "Alice";
const greeting = "Hello";

// const age = 30;
const message = `My name is ${firstName} and I am ${age} years old.`;

console.log(message);

const intNum = 42; //integer
const floatNum = 3.14; //floating-point number
const result = intNum / 0;
//자바스크립트에서 어떤 숫자를 0으로 나누면 오류가 나지 않고 'Infinity'한 값이 반환됨

// const invalid = "abc" * 3;  //오류

console.log(result);

let hexadecimalNumber = 0xf00d;
let binaryNumber = 0b1010;
let octalNumber = 0o744;

hexadecimalNumber = 12;

console.log(hexadecimalNumber);
console.log(binaryNumber);
console.log(octalNumber);

const isAdult: boolean = true;
const hasPermission = false;

if (isAdult && !hasPermission) {
  console.log("Access denied");
} else {
  console.log("Access granted");
}

if (0) {
  console.log("This will not be printed");
}

//자바스크립트에서의 false, truely 값은 타입스크립트에서도 동일하게 사용된다.
//빈 문자열, null, undefined, 0 등의 값들은 조건문 등에서 false로 해석된다.

const bigIntNumber = 12343525232867869284793678659274986235727432n; //숫자 끝에 n을 붙이거나 BigInt를 써줌
const anotherBigInt = BigInt("12343525232867869284793678659274986235727432");
//tsconfig에서 컴파일 대상이 ES2016 버전으로 되어 있기 때문에 BigInt를 쓰면 빨간 줄로 오류가 남
//->2020으로 수정한 다음 저장하면 됨( "target": "es2020")
console.log(bigIntNumber + anotherBigInt);
//일반 int랑 BigInt를 연산하면 컴파일 오류가 남

//----------------------------------------------------------------

//그 외 타입들
//any: 모르니까 신경 끄자
//unknown: 모르니까 조심하자
//null&undefined
//void
//never

let anyValue: any = 10; //Number
anyValue = "Hello"; //String
anyValue = true; //Boolean
anyValue = [1, 2, 3]; //Array
anyValue = { name: "John" }; //Object
//어떤 값을 넣어도 오류가 나지 않음

// let anyString: any = "123";
let anyString: string = "123";
console.log(anyString.toUpperCase());
// console.log(anyString.nonExistentMethod()); //어느 기본 타입에도 존재하지 않는 메소드
//타입스크립트는 anyString 변수가 어떤 타입일지 알 수 없으므로 컴파일 오류를 발생시키지 않음.(위험함)
//anyString이 숫자일 때는 toUpperCase()에서 오류가 발생하고 anyString이 문자열일 때는 nonExstentMethod()에서 오류가 발생
//문자열에도 존재하지 않기 때문->오류가 컴파일 시점에서 걸러지지 않고 이처럼 런타임 시점에서야 오류가 발생하게 됨

//any를 사용하는 때
//외부의 라이브러리를 사용하거나, 네트워크에서 데이터를 받아오는 등 다루어야 할 데이터의 타입을 미리 알 수 없는 경우
function processData(data: any) {
  return data.someProperty?.someMethod?.() || data;
  //만약 다른 타입이더라도 오류는 발생하지 않도록 물음표 연산자를 활용한 옵셔널 체이닝을 사용
}

//any가 타입을 모르는 데이터에 대해 관대해지는 반면, 'unknown'은 오히려 엄격해짐
let anyVar: any = 10;
let unknownVar: unknown = 10;
//숫자값을 초기에 같이 할당해도 any, unknown으로 타입을 지정해 줄 시, 타입스크립트는 여전히 타입을 확신하지 않음

let anyNumber: number = anyVar;
anyVar.toFixed(2);
//any 변수는 타입 변경이 가능

// let unknownNumber: number = unknownVar;
// unknownVar.toFixed(2);
//unknown은 어떤 타입의 값이 담겼을 지 모르기 때문에, 다른 자료형의 다른 변수에 값을 넘겨주지 못하도록 막음
//unknown 타입을 처리하는 방법
function processValue(val: unknown): string {
  //인수는 unknown 타입, 반환값은 string
  if (typeof val === "string") {
    //여기서 알 수 있는 점은 typeof 반환 값은 string 값이다.
    return val.toUpperCase();
  }

  if (typeof val === "number") {
    return val.toFixed(2);
  }

  return String(val);
}

console.log(processValue("hello"));
console.log(processValue(42));
console.log(processValue(true));
// any는 안전성보다는 빠른 개발과 테스트가 필요한 경우 사용된다.

let unknownValue: unknown = "Hello, TypeScript!";

//Type assertion - when you're certain of the type
let stringLength = (unknownValue as string).length;
//as를 사용하여 해당 변수의 값이 문자열 타입임을 나타냄
//이렇게 작성하면 타입스크립트는 이를 신뢰하고 컴파일 단계에서 오류를 발생시키지 않게 된다.
//(대신 이는 문자열임을 확신할 수 있는 상태에서만 사용)

//Type gaurd - safer
if (typeof unknownValue === "string") {
  let length = unknownValue.length;
}

function processUserData(user: unknown): string {
  //Type guard for object
  if (typeof user === "object" && user !== null) {
    if ("name" in user && typeof (user as any).name === "string") {
      //해당 객체의 안에 name이라는 속성이 있는지 확인 후 name 속성의 타입이 문자열인지 확인한다.
      return (user as any).name.toUpperCase();
    }
  }
  return "Invalid user data";
}

console.log(processUserData({ name: "John Doe" }));

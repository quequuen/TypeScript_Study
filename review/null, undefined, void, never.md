<h1>null과 undefined</h1>

- null: 값을 의도적으로 비워둘 깨 사용.
- undefined: 변수가 선언되었지만 값이 아직 할당되지 않았거나 정의되지 않은 상태를 나타냄.

ex)
let nullValue: null = null;
let undefinedValue: undefined = undefined;
☞ null과 undefined는 각각 null, undefined만 할당 할 수 있기 때문에 실무에서는 안 쓰임.

//Error with strictNullChecks
let stringValue: string = null;
let numberValue: number = undefined;
☞ 해당 오류는 tsconfig에서 strictNullChecks를 false로 하면 나지 않지만 만약에 오류를 제어하기 위해 true로 해 둘 것.

+) union 타입
let optionalString: string | null = "Hello";
optionalString = null;

let potertiallyUndefinedNumber: number | undefined;
console.log(potertiallyUndefinedNumber);

<h1>void와 never</h1>

- 둘의 공통점: 함수나 메소드의 반환값에 사용되며 '반환되는 값을 받을 수 없음.'을 의미함.
- void: 값을 생성하는 표현식을 평가해서 undefined를 반환. (만나도 줄 선물이 없는 산타.)

  1. 반환값은 undefined
     : null은 undefined와 다른 타입이기 때문에 void 반환 값에 충족되지 않는다.
     ex) 함수나 표현식의 반환값이 void 타입일 때
     return undefined; (O)
     return null; (X)

  ex)
  const numbers = [1,2,3,4,5];
  numbers.forEach((num: number)=>{
  console.log(num\*2);
  });
  ☞ console로만 출력할 뿐 return 하지 않았기 때문에 반환값은 undefined.

- never: 절대 끝나지 않거나(무한 루프) 값을 반환하지 않는 함수하는 것을 명시.(절대 만날 수 없는 산타)

  1. never의 두가지 사용법: 무한루프 또는 throw Error
     ex)
     function throwError(message: string): never{
     throw new Error(message);
     }
     ☞ 특정 오류를 던지는 용도의 함수에는 반환값 타입으로 'never'가 사용됨.

  ex)
  function infiniteLoop(): never{
  while(true){
  console.log("Running...");
  }
  }
  ☞ 무한루프를 돌게 되면 터미널 내에서 오류가 발생하게 되는데 이 오류를 발생시키지 않기 위해 사용됨.

  2.  never가 주로 쓰이는 자세한 예시
      ex)
      function handleValue(x: string | number | boolean | object): void {
      //Type narrowing using typeof
      if(typeof x === "string"){
      console.log("It's a string:", x.toUpperCase());
      } else if (typeof x === "number") {
      console.log("It's a number:", x.toFixed(2));
      } else if (typeof x === "boolean") {
      console.log("It's a boolean:", x ? "true" : "false");
      } else if (typeof x === "object") {
      console.log("It's a object:", x.toString());
      } else {
      //
      //

              const unreachable: never = x;
              throw new Error(`Unexpected type: ${x}`);
          }
          ☞ 매개변수가 문자열도, 숫자도, 불리언도 아닌 케이스는 절대 발생하지 않지만 추가
          ☞ 추후에 함수에 대한 인자의 변화가 있을 시 else 문에 일부러 에러를 일으켜 object, 해당 함수에 대한 내용을 잊지 않고 넣을 수 있음.

  }

  handleValue({name: "John"});
  ☞ 객체이기 때문에 오류가 발생, 추후에 handleValue 인수 타입에 object 넣음

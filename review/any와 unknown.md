<h1>any와 unknown</h1>

- any: 어떤 값을 넣어도 오류가 나지 않음. (모르니까 신경 끄자)

1. 오류가 자바스크립트처럼 컴파일 시점에서 걸러지지 않고 런타임 시점에서야 오류가 발생해 발견되기 때문에 사용할 때는 주의해야 한다.
2. any를 사용하는 경우
   : 외부의 라이브러리를 사용하거나, 네트워크에서 데이터를 받아오는 등 다루어야 할 데이터의 타입을 미리 알 수 없는 경우
   ex)
   function processData(data:any){
   return data.someProperty?.someMethod?.()||data;
   }
   ☞ 만약 다른 타입이더라도 오류는 발생하지 않도록 물음표 연산자를 활용한 옵셔널 체이닝을 사용

⭐️ any가 타입을 모르는 데이터에 대해 관대해지는 반면, 'unknown'은 오히려 엄격해짐

- unknown: 어떤 타입의 값이 담겼을 지 모르기 때문에, 다른 자료형의 다른 변수에 값을 넘겨주지 못하도록 막음. (모르니까 조심하자)

1. unknown 타입 사용법(Type assertion, Type gaurd)
   ex)
   let unknownValue: unknown = "Hello, TypeScript!";

   //Type assertion - when you're certain of ter type
   let stringLength = (unknownValue as string).length;
   ☞ as를 사용하여 해당 변수의 값이 문자열 타입임을 나타냄
   ☞ 이렇게 작성하면 타입스크립트는 이를 신뢰하고 컴파일 단계에서 오류를 발생시키지 않게 된다. (대신 이 방법은 문자열임을 확신할 수 있는 상태에서만 사용)

   //Type gaurd - safer
   if(typeof unknownValue === "string"){
   let length = unknownValue.length;
   }

   ☞ 타입을 그때 그때 파악해서 처리함으로 더 안전함.

2. unknown 타입을 사용하는 예시
   ex)

   function processUserData(user: unknown): string {
   //Type gaurd for object
   if(typeof user === "object" && user !== null){
   if("name" in user && typeof (user as any).name === "string"){
   //해당 객체의 안에 name이라는 속성이 있는지 확인 후 name 속성의 타입이 문자열인지 확인한다.
   return (user as any).name.toUpperCase();
   }
   }
   return "Invalid user data";
   }

   console.log(processUserDAta({name: "John Doe"}));

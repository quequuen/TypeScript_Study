<h1>any와 unknown</h1>

- any: 어떤 값을 넣어도 오류가 나지 않음. (모르니까 신경 끄자)<br>
  <br>

1. 오류가 자바스크립트처럼 컴파일 시점에서 걸러지지 않고 런타임 시점에서야 오류가 발생해 발견되기 때문에 사용할 때는 주의해야 한다.<br>
2. any를 사용하는 경우<br>
   : 외부의 라이브러리를 사용하거나, 네트워크에서 데이터를 받아오는 등 다루어야 할 데이터의 타입을 미리 알 수 없는 경우<br><br>
   ex)<br>
   function processData(data:any){<br>
   return data.someProperty?.someMethod?.()||data;<br>
   }<br>
   ☞ 만약 다른 타입이더라도 오류는 발생하지 않도록 물음표 연산자를 활용한 옵셔널 체이닝을 사용<br>
   <br>
   ⭐️ any가 타입을 모르는 데이터에 대해 관대해지는 반면, 'unknown'은 오히려 엄격해짐<br>
   <br>

- unknown: 아무 타입이나 올 수 있지만 직접 확인없이 사용 못함. (모르니까 조심하자)<br>
  <br>

1. unknown 타입 사용법(Type assertion, Type gaurd)<br><br>
   ex)<br>
   let unknownValue: unknown = "Hello, TypeScript!";<br>
   <br>
   //Type assertion - when you're certain of ter type<br>
   let stringLength = (unknownValue as string).length;<br>
   ☞ as를 사용하여 해당 변수의 값이 문자열 타입임을 나타냄<br>
   ☞ 이렇게 작성하면 타입스크립트는 이를 신뢰하고 컴파일 단계에서 오류를 발생시키지 않게 된다. (대신 이 방법은 문자열임을 확신할 수 있는 상태에서만 사용)<br>
   <br>
   //Type gaurd - safer<br>
   if(typeof unknownValue === "string"){<br>
   let length = unknownValue.length;<br>
   }<br>
   <br>
   ☞ 타입을 그때 그때 파악해서 처리함으로 더 안전함.<br>
   <br>
2. unknown 타입을 사용하는 예시<br>
   ex)<br>
   <br>
   function processUserData(user: unknown): string {<br>
   //Type gaurd for object<br>
   if(typeof user === "object" && user !== null){<br>
   if("name" in user && typeof (user as any).name === "string"){<br>
   //해당 객체의 안에 name이라는 속성이 있는지 확인 후 name 속성의 타입이 문자열인지 확인한다.<br>
   return (user as any).name.toUpperCase();<br>
   }<br>
   }<br>
   return "Invalid user data";<br>
   }<br>
   <br>
   console.log(processUserDAta({name: "John Doe"}));<br>

{
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

  //----------------------------------------------------------------
  //null과 undefined

  //null: 값을 의도적으로 비워둘 때 사용.
  //undefined: 변수가 선언되었지만 값이 아직 할당되지 않았거나 정의되지 않은 상태를 나타냄.

  let nullValue: null = null;
  let undefinedValue: undefined = undefined;

  //Error with strictNullChecks
  // let stringValue: string = null;
  // let numberValue: number = undefined;
  //tsconfig에서 strictNullChecks를 false로 하면 오류가 나지 않음

  //null과 undefined는 각각 null, undefined만 할당 할 수 있기 때문에 실무에서는 안 쓰임

  let optionalString: string | null = "Hello";
  //union 타입 가능
  optionalString = null;

  let potertiallyUndefinedNumber: number | undefined;
  console.log(potertiallyUndefinedNumber);

  //void,never
  //공통점: 함수나 메소드의 반환값에 사용되며 '반환되는 값을 받을 수 없음'을 의미함.
  //void: (만나도 줄 선물이 없는 산타)
  //never: 절대 끝나지 않거나(무한루프) 값을 반환하지 않는 함수라는 것을 명시.(절대 만날 수 없는 산타)
  //never의 두가지 사용법: 무한 루프, throw Error

  function printLength(text: string | null): void {
    if (text === null) {
      console.log("No text provided");
      return;
    }

    //Now TypeScript knows 'text' is a string
    console.log(`Text length: ${text.length}`);
    return undefined;
    //void 값을 반환하는 함수는 undefined를 반환함.
    //return null;
    //null은 undefined와 다른 타입이기 때문에 void 반환 값에 충족이 되지 않음.
  }

  printLength(null);
  printLength("Hello, world!");

  const numbers = [1, 2, 3, 4, 5];

  numbers.forEach((num: number): void => {
    console.log(num * 2);
  });

  function throwError(message: string): never {
    throw new Error(message);
  }
  //특정 오류를 던지는 용도의 함수에는 반환값 타입으로 'never'가 사용됨.

  function infiniteLoop(): never {
    //무한루프를 돌게 되면 터미널 내에서 오류가 발생하게 되는데 이 오류를 발생시키지 않기 위해 사용됨.
    while (true) {
      console.log("Running...");
    }
  }

  function handleValue(x: string | number | boolean | object): void {
    //Type narrowing using typeof
    if (typeof x === "string") {
      console.log("It's a string:", x.toUpperCase());
    } else if (typeof x === "number") {
      console.log("It's a number:", x.toFixed(2));
    } else if (typeof x === "boolean") {
      console.log("It's a boolean:", x ? "true" : "false");
    } else if (typeof x === "object") {
      console.log("It's a object:", x.toString());
    } else {
      // 매개변수가 문자열도, 숫자도, 불리언도 아닌 케이스는 절대 발생하지 않지만 추가
      // 추후에 함수에 대한 인자의 변화가 있을 시 else 문에 일부러 에러를 일으켜 object, 해당 함수에 대한 내용을 잊지 않고 넣을 수 있음.

      const unreachable: never = x;
      throw new Error(`Unexpected type: ${x}`);
    }
  }

  handleValue({ name: "John" });
  //객체이기 때문에 오류가 발생, 추후에 handleValue 인수 타입에 object 넣음
}
//----------------------------------------------------------------
{
  //배열과 튜플, 객체 기초
  let numbers: number[] = [1, 2, 3, 4, 5, 6];

  let fruits: Array<string> = ["Apple", "Banana", "Orange"];

  let scores: number[] = [];
  scores.push(95);
  scores.push(88);

  // scores.push("A+"); //오류!

  let colors = ["Red", "Green", "Blue"];
  // colors.push(123);  //오류!

  console.log(numbers[0], fruits[1], colors[2]);

  //내부 요소가 지정된 타입과 달라도 오류를 일으킴
  let matrix: number[][] = [
    //2차원 배열
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    //[7,8,true]
  ];

  console.log(matrix[0][1]);

  let cube: number[][][] = [
    //3차원 배열
    [
      [1, 2],
      [3, 4],
    ],
    [
      [5, 6],
      [7, 8], //7
    ],
  ];

  console.log(cube[1][0][1]);

  const names: string[] = ["Alice", "Bob", "Charlie", "David", "Boy"];

  const nameLengths: number[] = names.map((name) => name.length);
  console.log(nameLengths);

  const longNames: string[] = names.filter((name) => name.length > 4);
  console.log(longNames);

  const foundName: string | undefined = names.find((name) =>
    name.startsWith("B")
  );
  console.log(foundName);
  //filter가 아닌 find이기 때문에 오류가 나지 않고 먼저 나오는 Bob 출력

  const originalArray: number[] = [1, 2, 3, 4, 5];
  originalArray[0] = 10;

  const readOnlyNumbers: ReadonlyArray<number> = originalArray; //제네릭
  const readOnlyScores: readonly number[] = [90, 85, 95];

  // readOnlyNumbers[0] = 10;  //ReadonlyArray라서 재할당 불가
  // readOnlyScores.push(100);  //readonly라서 재할당 불가

  //스프레드 연산자 사용
  const newArray = [...readOnlyNumbers, 6]; //[1,2,3,4,5,6]
  newArray[0] = 0;
  newArray.push(7);

  console.log(newArray);

  //튜플

  let person: [string, number] = ["John", 30];
  console.log(person[0]);
  console.log(person[1]);

  // person = [30,'John'];
  // person = ['John',30, true];
  //튜플은 배열처럼 생겼지만, 각 요소의 타입과 순서가 정해져 있고 이를 어기면 컴파일 오류가 발생함.

  //구조분해 할당
  const [firstName, age] = person;
  console.log(firstName);
  console.log(age);

  type OptinalTuple = [string, number, boolean?];
  //튜플은 선택적 요소도 포함 가능
  const complete: OptinalTuple = ["Jane", 25, true];
  //마지막 요소가 들어갈 수도 있고
  const partial: OptinalTuple = ["Mike", 40];
  //마지막 요소가 들어가지 않을 수도 있음

  //튜플을 함수 반환값으로 사용하는 예제
  function getUserInfo(): [string, number, boolean] {
    return ["alex_dev", 28, false];
  }

  //리턴값 구조 분해 할당
  const [username, userAge, isAdmin] = getUserInfo();
  console.log(`Username: ${username}, Age: ${userAge}, Admin: ${isAdmin}`);

  //타입 추론에 있어 배열과 튜플의 차이

  const inferredArray = [1, "Hello"];
  //inferredArray: (string | number)[]

  const inferredTuple = [1, "Hello"] as const;
  //inferredTuple: readonly [1,'Hello']
  //각 값이 상수가 되어버려서 이 값들 외에는 다른 값들이 들어올 수 없음
  //실무에서 필요시 특정 데이터 묶음의 값 제약이 가능함.

  // inferredTuple[0] = 2;  //오류
  // inferredTuple[1] = "world";  //오류

  let explicitTuple: [number, string] = [1, "Hello"];
  explicitTuple = [2, "world"];

  const person2: { name: string; age: number } = { name: "John", age: 25 };

  // const wrongPerson1: { name: string; age: number } = {
  //   name: "John",
  //   age: "25",
  // };
  // age의 타입이 숫자인 관계로 "25"와는 타입이 맞지 않아 오류

  // const wrongPerson2: { name: string; age: number } = { name: "Mark" };
  // name과 age가 와야 하는데 name만 와서 오류

  // const wrongPerson3: {name: string; age: number} = {name: "John", age: 25, married: true,}
  // 타입에서 정의 되지 않은 속성을 넣어 오류

  const person3: { name: string; age: number } = {
    name: "John",
    age: 25,
  };

  person3.name = "Jane";
  // person3.age = "30";
  // person3.married = true;

  // 객체 사용 예시
  interface User {
    id: number;
    username: string;
    isAdmin: boolean;
  }

  const adminUser: User = {
    id: 0,
    username: "admin",
    isAdmin: true,
  };

  // const user1: User1 = {
  //   id: 1, username: "admin",
  // }
  // User1이란 타입을 정의헤놓은 객체가 없을 뿐더러 isAdmin이 들어가지 않아 구조가 일치하지 않음

  // const user2: User = {
  //   id: "2",
  //   username: "admin",
  //   isAdmin: false,
  // }
  // id 타입이 맞지 않음
}
{
  //열거형(enum)
  //열거형이 필요한 예
  {
    const USER_ROLE_ADMIN = 0;
    const USER_ROLE_MANAGER = 1;
    const USER_ROLE_EMPLOYEE = 2;
    const USER_ROLE_GUEST = 3;

    function checkUserAccess(userRole: number): boolean {
      if (userRole === USER_ROLE_ADMIN || userRole === USER_ROLE_MANAGER) {
        return true;
      }
      return false;
    }

    console.log(checkUserAccess(USER_ROLE_ADMIN));
    console.log(checkUserAccess(2));
    console.log(checkUserAccess(99)); //의도치 않은 숫자 99가 들어가도 실행
  }
  //열거형으로 수정

  enum UserRole {
    Admin = 0,
    Manager = 1,
    Employee = 2,
    Guest = 3,
  }

  function checkUserAccess(userRole: UserRole): boolean {
    if (userRole === UserRole.Admin || userRole === UserRole.Manager) {
      return true;
    }
    return false;
  }

  console.log(checkUserAccess(UserRole.Admin));
  console.log(checkUserAccess(3));
  // console.log(checkUserAccess(99)); //지정해놓은 숫자가 아닌 다른 수가 들어가서 오류
  // 열거형은 쉽게 말해 '딱 이 값들만 가질 수 있는' 새로운 타입을 만드는 것

  enum Direction {
    Up, //0
    Down, //1
    Left, //2
    Right, //3
  }
  //값을 할당할 이름들만 넣고, 이들의 값들을 명시하지도 않음

  console.log(Direction.Up);
  console.log(Direction.Down);
  console.log(Direction.Left);
  console.log(Direction.Right);

  console.log(Direction[0]);
  console.log(Direction[1]);

  enum HttpStatus {
    OK = 200,
    Created = 201,
    BadRequest = 400,
    Unanthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    InternalServerError = 500,
  }

  const status1: HttpStatus = HttpStatus.OK;
  const status2: HttpStatus = 201;
  // const status3: HttpStatus = 203; //열거형 선언문에 포함되지 않는 값이라 오류

  console.log(status1);
  console.log(status2);

  enum Priority {
    Low = 5,
    Medium,
    High = 10,
    Critical,
  }

  console.log(Priority.Low);
  console.log(Priority.Medium);
  console.log(Priority.High);
  console.log(Priority.Critical);
  //일부 멤버에만 값을 지정할 경우, 값이 지정되지 않은 멤버들은 이전 값에서 자동으로 1이 증가한 값을 갖게 됨.

  enum Theme {
    Light = "light-theme",
    Dark = "dark-theme",
    System = "system-theme",
  }

  function applyTheme(theme: Theme): void {
    const className = theme;
    console.log(`Theme applied: ${className}`);
  }

  applyTheme(Theme.Dark); //Theme applied: dark-theme
  // applyTheme("light_theme");
  //열거형의 값에 있어서 문자열의 경우 숫자와 다른 점이 존재
  // 숫자값은 열거형의 값이 들어갈 자리에 대신 들어갈 수 있었지만 문자열은 그렇게 하지 못함.
  // 그렇기 때문에 이와 값이 문자열을 직접 넣으면 컴파일 오류가 발생

  console.log(Theme.Dark);
  console.log(Theme.System);
  console.log(Theme.Light);

  //같은 열거형 내에서 숫자 값과 문자열 값 함께 사용 가능
  //하지만 이처럼 혼합된 값들을 사용하는 방식은 코드의 의도를 명확히 전달하기 어렵기 때문에 권장되지는 않음
  enum ApiResponse {
    Success = 200,
    Created = 201,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
    ServerError = 500,
    SUCCESS_MESSAGE = "Operation completed successfully",
    ERROR_MESSAGE = "An error ocurred during the operation",
  }
  {
    enum Direction {
      Up,
      Down,
      Left,
      Right,
    }
    //열거형으로 정의한 모든 요소들이 dist 파일에 들어감

    const dir = Direction.Up;

    const enum FastDirection {
      Up,
      Down,
      Left,
      Right,
    }
    //앞에 const가 붙음
    //const가 붙은 열거형과 붙지 않은 열거형은 겉으로는 대부분 똑같이 동작하지만 컴파일 및 실행과정에서 차이가 있어
    //dist 파일을 보면 구조가 다름
    //const가 붙은 열거형은 dist 파일에 안 들어감

    const fastDir = FastDirection.Up;
    //fastDir에 담길 값이 결과적으로 0이기 때문에 dist 폴더의 내용과 같이 단순히 0으로 하드코딩 됨
    //어차피 코드에서 다른 멤버들이 안 쓰일 거를 생각하면 이게 합리적임
    //이러한 이유로 'const' 열거형은 최적화가 특별히 중요한 상황들에서 사용
    //객체 생성 없이 모든 멤버들의 값을 인라인화므로 컴파일된 파일들의 크기가 작고 런타임 성능이 최적화됨

    // const fastUp = FastDirection[0]; //다만 const 열거형을 사용하면 숫자 타입의 값도 역방향으로 접근 불가
    //또한 런타임에 사용되는 자바스크립트 코드에 해당 열거형의 객체가 없기 때문에 디버깅 및 분석과정에 어려움이 있음
    // 때문에 성능 최적화가 무엇보다 중요한 특별한 경우를 제외하고는 보통 일반 열거형이 더 널리 사용됨
  }

  enum CardSuit {
    Clubs,
    Diamonds,
    Hearts,
    Spades,
  }

  function displaySuitEnum(suit: CardSuit): string {
    switch (suit) {
      case CardSuit.Clubs:
        return "♣️";
      case CardSuit.Diamonds:
        return "🔷";
      case CardSuit.Hearts:
        return "♥️";
      case CardSuit.Spades:
        return "♠️";
    }
  }

  console.log(displaySuitEnum(CardSuit.Hearts));

  type CardSuitUnion = "clubs" | "diamonds" | "hearts" | "spades";

  function displaySuitUnion(suit: CardSuitUnion): string {
    switch (suit) {
      case "clubs":
        return "♣️";
      case "diamonds":
        return "🔷";
      case "hearts":
        return "♥️";
      case "spades":
        return "♠️";
    }
  }

  console.log(displaySuitUnion("hearts"));
  // console.log(displaySuitUnion("joker")); //Union 값에 없음

  //값과 이름을 모두 관리하거나 복잡한 로직이 필요한 경우는 열거형,
  //성능 최적화가 중요하고 객체를 남기기 싫을 때는 const 열거형,
  //단순한 고정 값 집합을 타입만으로 엄격하게 관리하고 싶을 때는 유니언 타입 사용
}

{
  //함수

  function greet(name: string): string {
    return `Hello, ${name}!`;
  }

  const farewell = function (name: string): string {
    return `Goodbye, ${name}!`;
  };

  const add = (a: number, b: number): number => {
    return a + b;
  };

  console.log(greet("World"), farewell("World"), add(5, 3));

  {
    function greet(name?: string): string {
      //해당 인자를 넣어도 되고 안 넣어도 된다는 의미
      //이렇게 작성했을 경우 함수 내부의 'name' 값은 문자열 또는 undefined
      return name ? `Hello, ${name}!` : `Hello!`;
    }

    console.log(greet("World"), greet());
  }
  {
    function add(a: number, b: number, c?: number): number {
      // return a+b+c;// c가 undefined인 경우를 처리하지 못해 오류가 남
      return c ? a + b + c : a + b;
    }

    const addition1 = add(1, 2);
    const addition2 = add(1, 2, 3);
    // const addition3 = add(1); //매개변수가 최소 두개는 있어야 하는데 없어서 오류!

    function add2(a: number, b?: number, c?: number): number {
      return b && c ? a + b + c : a;
    }

    const addition1_2 = add2(1, 2);
    const addition2_2 = add2(1, 2, 3);

    const addition3_2 = add2(1); //매개변수 개수가 허용범위 안이라서 오류 안 남

    // funcion addition3_2(a?: number, b: number, c: number): number{

    // }
    //선택적 매개변수에 대해 기억해 두어야 할 또 다른 점은, 필수 매개변수 뒤에만 올 수 있다는 점.
  }

  //기본값을 갖는 매개변수
  function greeting(name: string = "Guest"): string {
    return `Hello, ${name}!`;
  }

  console.log(greeting());
  console.log(greeting("Developer"));
  //매개변수가 인자로 전달되지 않았을 경우, 이 함수에서 해당 값을 기본으로 갖게 됨

  function increase(x: number, y: number = 1): number {
    return x + y;
  }

  const increased1 = increase(5);
  const increased2 = increase(5, 2);
  // const increased3 = increase(); //기본값이 정해지지 않는 x는 최소한의 매개변수로 필수적으로 전해주어야 함.

  function sum(...numbers: number[]): number {
    // 함수에 쉼표로 구분된 0개 이상의 인자들을 하나의 배열로 묶어서 받아온다는 의미
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }

  console.log(sum(1, 2, 3), sum(10, 20, 30, 40, 50), sum());

  //나머지 매개변수 역시 일반 매개변수와 함께 사용 가능
  function sumItem(item: string, ...args: number[]) {
    //첫번째 매개변수는 하나의 문자열이고, 그 이후로는 0개 이상의 숫자들이 배열로 묶여 들어옴
    const sum = args.reduce((acc, curr) => acc + curr, 0);
    return `${item}: ${sum}`;
  }

  console.log(
    sumItem("apple", 1, 2, 3),
    sumItem("banana", 4, 5, 6, 7, 8),
    sumItem("cherry")
  );

  // function wrongFuc(...args: string[], item: string){
  // }  // 나머지 매개변수가 일반 매개변수보다 앞에 올 시 컴파일 오류 발생
  // 만약 그렇지 않으면 여러 인자들을 전달했을 때 어디까지가 나머지 매개변수로 들어갈 것인지 알 수 없는 경우들이 생김

  //함수 오버로딩
  // 같은 이름의 함수들이 매개변수의 타입에 따라 다르게 동작하도록 하는 것을 말함.
  //시그니처 작성
  function processInput(value: string): string;
  //해당 함수의 매개변수가 문자열일 경우, 반환값도 문자열일 것임이 명시됨
  function processInput(value: number): number;
  //현재 상태에서는 주석처리 하거나 없애도 오류 안 남.

  function processInput(value: string | number): string | number {
    if (typeof value === "string") {
      return value.toUpperCase();
    } else {
      return value * 2;
    }
  }

  const processed1 = processInput("hello");
  const processed2 = processInput(42);

  // const processed3 = processInput(true);  //number 또는 string이 아니라서 오류

  const myString = processed1.toLowerCase();
  //시그니처를 지울 시 이 값이 문자열이라는 것을 알 수가 없기 때문에 문자열의 메소드를 바로 쓰지 못하도록 함

  //콜백함수
  function fetchData(url: string, callback: (data: string) => void): void {
    //콜백함수의 타입으로서, 문자열을 매개변수로 받고 반환값은 없는 함수가 지정되어 있음
    //이런 식으로 고차함수를 선언할 때, 매개변수 또는 반환값으로 사용되는 함수의 타입도 작성.
    setTimeout(() => {
      const data = `Data from ${url}`;
      callback(data);
    }, 100);
  }

  fetchData("api/users", (response) => {
    console.log(response);
  });
}

{
  // 인터페이스 기본
  interface Person {
    name: string;
    age: number;
  }

  const person: Person = {
    name: "John",
    age: 30,
  };

  // const invalidPerson1: Person = {
  //   name:"Alice"
  // };

  // const invalidPerson2: Person = {
  //   name: "John",
  //   age: 30,
  //   job: "Engineer"
  // };
  //Person 타입이면서 속성이 누락되거나 정의 되지 않는 속성을 갖고 있다면 컴파일 오류

  //선택적 속성
  //넣어도 되고 안 넣어도 됨
  interface Product {
    name: string;
    price: number;
    description?: string;
    //string 또는 undefined
  }

  const product1: Product = {
    name: "Laptop",
    price: 1200,
  };

  const product2: Product = {
    name: "Phone",
    price: 800,
    description: "Smartphone with high-end features",
  };

  function printDescription1(product: Product): void {
    // console.log(product.description.toUpperCase());
    // 조건문으로 타입가드를 하지 않고 해당 속성에서 문자열의 메소드인 'toUpperCase'를 호출하려 하면 컴파일 오류 발생

    console.log((product.description ?? "No desc").toUpperCase());
    //null 병합 연산자로도 출력 가능

    if (product.description) {
      console.log(product.description.toUpperCase());
    } else {
      console.log("NO DESC");
    }
  }

  printDescription1(product1);
  printDescription1(product2);

  //읽기 전용 속성
  // 읽기 전용 속성은 보안상 중요한 값 등 초기 설정 후 불변이어야 하는 값을 지정할 때 유용하게 사용.
  interface Config {
    readonly apiKey: string;
    endpoint: string;
    timeout?: number;
  }

  const config: Config = {
    apiKey: "abc123",
    endpoint: "https://api.example.com",
  };

  config.endpoint = "https://api.newexample.com";
  config.timeout = 5000;

  // config.apiKey = "xyz789"; //readonly 속성이라서 재할당 불가

  // 읽기 전용 속성이 참조 값일 경우 주의해야 할 사항

  interface ReadonlyArrayDemo {
    readonly items: number[];
  }

  const demo: ReadonlyArrayDemo = {
    items: [1, 2, 3],
  };

  demo.items.push(4);
  demo.items[0] = 10;
  // 참조기 때문에 push 등으로 값을 추가하거나 기존의 값을 수정하는 일은 오류가 발생하지 않음.
  // demo.items = [5,6]; //재할당은 불가

  //객체 뿐 아니라 함수의 타입 정의에도 사용
  interface MathOperation {
    (a: number, b: number): number;
  }

  const add: MathOperation = function (a, b) {
    return a + b;
  };

  const multiply: MathOperation = (a, b) => a * b;

  console.log(add(1, 2).toFixed(2), multiply(3, 4));

  const operations: MathOperation[] = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b,
    (a, b) => a / b,
  ];
  // 매개변수 둘을 받아서 값 하나를 반환하는 함수들이 들어감.
  // 이처럼 같은 형식들의 함수들을 하나의 종류로 묶는 데 인터페이스가 사용.

  operations.forEach((operation) => {
    console.log(operation(3, 2));
    // console.log(operation(3,"Two")); //함수에 인자로 이와 같이 다른 타입을 넣어 실행하면 이와 같이 컴파일 오류가 발생.
  });

  //반환값을 갖지 않는 인터페이스
  interface Callback {
    (): void;
  }

  const onDone: Callback = () => {
    console.log("Task completed");
  };

  onDone();

  interface Button {
    label: string;
    onClick: () => void;
  }

  const myButton: Button = {
    label: "Submit",
    onClick: () => {
      console.log("Submitted!");
    },
  };

  //속성을 일일이 다 지정하지 않고, 속성과 값으로 사용할 수 있는 타입만 지정하는 방법
  //인덱스 시그니처
  interface PhoneBook {
    [name: string]: string;
    //여기에 사용된 name은 단순한 식별자로, 'name'이 아닌 다른 이름이 와도 상관 없음
  }
  //이 인터페이스를 타입으로 갖는 객체는 아래와 같이 어떤 문자열 값이든 키로 가질 수 있음.
  //개수도 제한이 없으므로 보다 유연하게 사용 가능

  const phones: PhoneBook = {
    Alice: "010-1234-5678",
    Bob: "010-8765-4321",
  };

  phones.Cahrlie = "010-1111-2222";
  phones["David"] = "010-2222-3333";
  phones[0] = "010-3333-4444"; //‼
  //0이 숫자가 아닌 문자열로 변환되어 들어감

  console.log(console.log(phones)); //리턴값 확인

  interface Profile {
    [index: string]: string | number | boolean;
  }
  //이렇게 하면 자유도는 늘어나지만 이를 사용하는 곳에서 타입을 체크해야 하는 경우도 증가함

  const profile: Profile = {
    name: "John Doe",
    age: 30,
  };

  profile.married = true;

  console.log(profile);

  //숫자 인덱스를 사용하는 인터페이스
  interface StringArray {
    [index: number]: string;
  }

  const veges: StringArray = {
    10: "carrot",
    11: "broccoli",
    12: "spinach",
  };

  const fruits: StringArray = ["apple", "banana", "cherry"];
  console.log(veges[10], fruits[1]);
  console.log(veges, fruits);

  //인터페이스의 대안
  //매핑된 타입 방식

  type AllowedKeys = "English" | "Math" | "Science";

  type Scores = {
    [K in AllowedKeys]: number;
  };
  type Grades = {
    [K in AllowedKeys]: string;
  };

  const scores: Scores = {
    English: 85,
    Math: 90,
    Science: 95,
  };
  const grades: Grades = {
    English: "B",
    Math: "A",
    Science: "A+",
  };
}
{
  //인터페이스2
  //인터페이스 확장
  //공통분모가 되는 속성을 부모 인터페이스로 두고 자식 인터페이스에서 세부 속성 추가
  interface Animal {
    name: string;
  }

  interface Dog extends Animal {
    breed: string;
  }
  //extends를 이용해 Animal 상속

  const myDog: Dog = {
    name: "Charlie",
    breed: "Beagle",
  };
  // 해당 'Dog' 타입을 갖는 개체는 'Animal'의 속성인 'name'과 'Dog'의 속성인 'breed'를 모두 갖고 있음.

  //다중 상속 가능
  //(mixin 스타일): 다양한 능력을 가진 개체를 만들 때 자주 사용
  interface CanRun {
    run(): void;
  }

  interface CanBark {
    bark(): void;
  }

  interface Dog2 extends CanRun, CanBark {}
  //Dog2는 그 자체로는 따로 속성을 갖지 않음

  const myDog2: Dog2 = {
    run() {
      console.log("Running!");
    },
    bark() {
      console.log("Woof!");
    },
  };

  //다중상속 주의할 점

  interface InterfaceA {
    // value: string;
    valueA: string;
    value: string | number;
  }

  interface InterfaceB {
    // value: number;
    valueB: number;
    value: string | number;
  }

  interface InterfaceC extends InterfaceA, InterfaceB {}
  // 속성의 이름이 같은데 하나는 문자열 타입, 하나는 숫자 타입이기 때문에 함께 상속을 하려 하면 충돌로 컴파일 오류 발생

  //이를 해결하기 위한 방법1: 속성의 이름을 다르게 준다(valueA, valueB)
  //꼭 속성의 이름이 같아야만 한다면 타입 유니언을 사용.

  //중첩된 인터페이스
  //한 인터페이스가 다른 인터페이스를 포함

  interface ContactInfo {
    phone: string;
    email: string;
  }

  interface Employee {
    name: string;
    contact: ContactInfo;
  }

  const dev: Employee = {
    name: "Jane",
    contact: {
      phone: "010-1234-5678",
      email: "Jane@example.com",
    },
  };

  //인터페이스의 병합
  interface ApiResponse {
    data: any;
    status: number;
  }

  interface ApiResponse {
    headers: { [key: string]: string };
    timestamp: Date;
  }
  //타입스크립트에서는 동일한 이름의 인터페이스가 여러 번 선언되면 자동으로 병합됨.
  //하지만 무분별하게 사용하면 구조를 파악라기 어려울 수 있으므로 명확한 목적이 있을 때만 사용하는 것이 좋음.

  const response: ApiResponse = {
    data: { name: "Product", price: 100 },
    status: 200,
    headers: { "Content-Type": "application/json" },
    timestamp: new Date(),
  };
  {
    //클래스 구조를 정의할 때 사용

    interface Animal {
      name: string;
      makeSound(): void;
    }

    class Dog implements Animal {
      //'implements'라는 키워드를 사용해 'Animal' 인터페이스 적용
      name: string;
      constructor(name: string) {
        this.name = name;
      }

      makeSound(): void {
        console.log(`${this.name}: Woof!`);
      }
    }

    const myDog3: Animal = new Dog("Buddy");
    myDog3.makeSound();
  }
  //이처럼 인터페이스를 클래스의 청사진으로도 사용 가능.

  //인터페이스는 클래스에 다중으로도 구현 가능
  interface Flyer {
    fly(): void;
  }

  interface Swimmer {
    swim(): void;
  }

  class Duck implements Flyer, Swimmer {
    fly(): void {
      console.log("Duck is flying");
    }

    swim(): void {
      console.log("Duck is swimming");
    }
    //둘 중 하나의 함수를 지우게 되면 오류가 남
    // 어떤 인터페이스가 적용되면 그에 포함된 함수들을 모두 구현해야 하도록 되어있음.
  }

  //초과 속성 검사

  interface User {
    id: number;
    name: string;
  }

  const user1: User = {
    id: 1,
    name: "Bob",
    // age: 25 //User에 존재하지 않는 속성
    //객체 리터럴을 작성하는 과정에서 '초과 속성 검사'를 엄격하게 적용
  };

  //초과 속성 검사를 우회하는 방법

  const temp = {
    id: 2,
    name: "Charlie",
    age: 40,
  };

  const user2: User = temp;
  //'temp'의 타입을 'User'로 좁혀서 이해하려고 시도하기 때문에 생기는 현상
  //타입 시스템이 엄격하지 않다기보다, 타입추론 과정에서 너그럽게 처리하는 방식

  //타입 단언을 사용한 우회
  const user3 = {
    id: 4,
    name: "Dana",
    age: 30,
  } as User;
  //검사를 생략해달라고 요청하는 것과 같음.
  //단, 이 'as'를 사용할 때에는 항상 안정성에 문제가 될 수 있으므로 정말 확실할 때만 사용해야 함.

  //인터페이스의 대안(타입 별칭)

  interface Person {
    name: string;
    age: number;
  }

  type PersonAlias = {
    name: string;
    age: number;
  };

  const p1: Person = { name: "Alice", age: 25 };
  const p2: PersonAlias = { name: "Alice", age: 25 };

  // const p3: PersonAlias = { name: "Bob", age: "30" };
  // const p4: PersonAlias = { name: "Bob" };
  // const p5: PersonAlias = { name: "Bob", age: "30", job: "Enginner" };
  //타입과 다른 값을 할당하거나, 속성을 누락하거나, 초과 속성을 넣으면 오류가 발생함.
  {
    //기존의 타입을 확장하는 방법(인터페이스와 비교)
    interface Animal {
      name: string;
    }

    interface Dog extends Animal {
      breed: string;
    }

    const puppy: Dog = {
      name: "Buddy",
      breed: "Poodle",
    };
    {
      type Animal = {
        name: string;
      };

      // 타입 별칭이 다른 타입 별칭으로부터 확장할 때는 이와 같은 문법으로 '교차 타입' 방식을 사용
      type Dog = Animal & {
        breed: string;
      };

      const doggy: Dog = {
        name: "Max",
        breed: "Beagle",
      };
    }
  }

  // 인터페이스와 맵드 타입으로 읽기 전용 만드는 방법
  interface Product {
    name: string;
    price: number;
  }

  type ReadonlyProduct = {
    readonly [K in keyof Product]: Product[K];
  };

  const item: ReadonlyProduct = {
    name: "Pen",
    price: 1.5,
  };

  // item.price = 2; //재할당 불가능

  console.log(item);

  //선택적 속성을 가진 타입

  interface Product {
    name: string;
    price: number;
  }

  type PartialProduct = {
    [K in keyof Product]?: Product[K];
    //모든 속성을 선택적 속성으로 함.
  };

  const partialItem: PartialProduct = {
    name: "Notebook",
  };

  const partialItem2: PartialProduct = {
    name: "Notebook",
    price: 10,
    // description:  "A notebook for writing" //인터페이스에 존재하지 않는 속성
  };
}

{
  // 타입스크립트의 클래스 기본 사용법

  class Person {
    name: string;
    age: number;
    //생성자
    //인스턴스를 만드는 메소드
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    describe(): string {
      return `${this.name} is ${this.age} years old.`;
    }
    //해당 속성들과 메소드는 public
  }

  const john = new Person("John", 30);
  const mary = new Person("Mary", 25);

  console.log(john.describe());
  console.log(mary.describe());

  //생성자에서 기본값을 사용하는 예제

  class Book {
    title: string;
    pages: number;

    constructor(title: string = "Untitled", pages: number = 100) {
      this.title = title;
      this.pages = pages;
    }

    summary(): string {
      return `${this.title} has ${this.pages} pages.`;
    }
  }

  const b1 = new Book();
  const b2 = new Book("TypeScript Handbook", 300);

  console.log(b1.summary());
  console.log(b2.summary());

  //선택적 매개변수와 나머지 매개변수
  class Logger {
    constructor(prefix?: string, ...messages: string[]) {
      const tag = prefix ?? "Log";
      console.log(`[${tag}]`, ...messages);
    }
  }

  new Logger();
  new Logger("Info");
  new Logger("Error", "Something went wrong", "Code: 500");

  //접근 제한자
  class User {
    public id: number;
    private password: string; //private는 이 블록 안에서만 사용 가능
    protected email: string; //public보다는 제한 되지만 private보다는 다소 자유로움. 해당 클래스로부터 상속받은 클래스 내에서도 사용 가능.

    constructor(id: number, password: string, email: string) {
      this.id = id;
      this.password = password;
      this.email = email;
    }

    checkPassword(pw: string): boolean {
      return this.password === pw;
    }
  }

  const user = new User(1, "secret", "user@example.com");
  console.log(user.id);
  // console.log(user.password); //private
  // console.log(user.email);  //protected

  class Admin extends User {
    resetEmail(newEmail: string) {
      this.email = newEmail;
    }
    getInfo() {
      return {
        id: this.id,
        // password: this.password,//private 속성이라 사용 불가
        email: this.email,
      };
    }
  }

  class UserA {
    id: number;
    name: string;

    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
  }

  class UserB {
    constructor(public id: number, public name: string) {}
    // 생성자가 public 매개변수를 받으면, 해당 매개변수는 자동으로 클래스의 속성으로 선언되고 초기화됨.
  }

  const a = new UserA(1, "Alice");
  console.log(a.id, a.name);

  const b = new UserB(2, "Bob");
  console.log(b.id, b.name);

  //읽기 전용 속성
  class Config {
    readonly appName: string;
    version: string = "1.0.0";

    constructor(appName: string) {
      this.appName = appName;
    }
    print() {
      console.log(`${this.appName} v${this.version}`);
    }
  }

  const cfg = new Config("MyApp");
  cfg.version = "2.0.0";
  console.log(cfg.appName); //readonly 앞에 private 속성까지 붙으면 이런 식의 접근도 불가
  // cfg.appName = "Other"; //readonly 속성이므로 재할당 불가

  class Account {
    constructor(
      public id: number,
      private password: string,
      protected email: string,
      readonly createdAt: Date
    ) {}

    protected login(pw: string): boolean {
      return this.password === pw;
    }
  }

  const acc = new Account(100, "pw1234", "user@example.com", new Date());
  console.log(acc.id, acc.createdAt);
  // console.log(acc.password); //private 속성
  // console.log(acc.email); //protected 속성
  // console.log(acc.login("pw1234")); //protected 속성
  // acc.createdAt = new Date(); //readonly 속성
}
{
  //클래스의 상속
  class Animal {
    constructor(public name: string) {}
    move(distance: number): void {
      console.log(`${this.name} moved ${distance} meters.`);
    }
  }

  class Bird extends Animal {
    fly(): void {
      console.log(`${this.name} is flying!`);
    }
  }

  const sparrow = new Bird("Sparrow");
  sparrow.move(10); //Sparrow moved 10 meters.
  sparrow.fly(); //Sparrow is flying!

  //오버라이드(override)
  {
    class Animal {
      constructor(public name: string) {}
      speak(): void {
        console.log(`${this.name} makes a sound.`);
      }
    }

    class Dog extends Animal {
      //부모 클래스에서 정의한 같은 메소드를 자식 클래스에서 재정의
      //메소드 오버라이딩은 특정 자식 클래스가 특정 메소드의 작업을 부모와는 다르게 수행하고자 할 때 사용
      speak(): void {
        console.log(`${this.name} barks.`);
      }
    }

    const dog = new Dog("Buddy");
    dog.speak(); // Buddy barks.
  }

  //super 사용법
  class Person {
    constructor(public name: string) {}
    greet(): void {
      console.log(`Hello, my name is ${this.name}.`);
    }
  }

  class Employee extends Person {
    constructor(name: string, public department: string) {
      super(name); //부모 클래스의 생성자를 호출
    }
    greet(): void {
      super.greet(); //부모 클래스의 메소드를 호출
      console.log(`I work in the ${this.department} department.`);
      //부모 클래스의 메소드를 호출한 뒤 추가적인 동작을 수행
    }
  }

  const emp = new Employee("Alice", "Engineering");
  emp.greet();

  //이처럼 부모 클래스에 작성된 생성자나 메소드를 호출하는 데 사용되는 것이 'super'

  //다형성

  {
    class Animal {
      constructor(public name: string) {}

      speak(): void {
        console.log(`${this.name}: (sound)`);
      }
    }
    //이처럼 자식 클래스들을 묶어주는 역할만 하고, 스스로는 나서지 않는 클래스들을 실무에서 볼 수 있음.
    //그런 경우, 이 'speak'처럼, 어차피 구현한대로 사용되지도 않을 메소드 등을 만드는 건 낭비일 수도 있음.

    class Cat extends Animal {
      speak(): void {
        console.log(`${this.name}: Meow!`);
      }
    }

    class Dog extends Animal {
      speak(): void {
        console.log(`${this.name}: Woof!`);
      }
    }

    //이는 'Animal'의 자식 클래스인 'Cat', 'Dog'의 인스턴스들도 포함될 수 있다는 뜻
    const animals: Animal[] = [
      new Cat("Luna"),
      new Dog("Buddy"),
      new Cat("Milo"),
      new Animal("Generic Animal"),
    ];

    for (const animal of animals) {
      animal.speak();
    }

    //객체지향의 다형성은 이처럼 한 클래스를 여러 갈래로 세분화하고 , 또 이들을 하나의 카테고리로 묶어 다룰 수 있도록 만들어줌.
  }

  //추상 클래스
  {
    abstract class Animal {
      constructor(public name: string) {}
      abstract speak(): void;
      //abstract로 추상화
      move(): void {
        console.log(`${this.name} moves.`);
      }
    }

    //추상 클래스로부터 상속받은 자식 클래스들은 아래와 같이 해당 메소드를 오버라이드하여 구현해야 함.

    class Cat extends Animal {
      speak(): void {
        console.log(`${this.name}: Meow!`);
      }
    }

    class Dog extends Animal {
      speak(): void {
        console.log(`${this.name}: Woof!`);
      }
    }

    // const animal1 = new Animal("Animal");   //추상 클래스의 인스턴스는 생성할 수 없음
    const cat1 = new Cat("Tom");
    const dog1 = new Dog("Jerry");

    const animals: Animal[] = [cat1, dog1, new Cat("Luna"), new Dog("Milo")];
    for (const animal of animals) {
      animal.speak();
      animal.move();
    }

    //또 다른 예제
    abstract class Shape {
      abstract getArea(): number;
    }

    class Circle extends Shape {
      constructor(public radius: number) {
        super();
        //부모 클래스에 생성자가 없더라도, 자식 클래스의 생성자에서는 'super()'를 호출해야 함.
        //이를 생략하면 컴파일 오류 발생
      }
      getArea(): number {
        return Math.PI * this.radius ** 2;
      }
    }

    class Rectangle extends Shape {
      constructor(public width: number, public height: number) {
        super();
      }
      getArea(): number {
        return this.width * this.height;
      }
    }

    function printArea(shape: Shape): void {
      console.log(`Area: ${shape.getArea()}`);
    }

    printArea(new Circle(5));
    printArea(new Rectangle(4, 6));
  }

  //클래스에 인터페이스 적용
  interface Logger {
    log(message: string): void;
  }

  class ConsoleLogger implements Logger {
    log(message: string): void {
      console.log(`Console: ${message}`);
    }
  }
  class FileLogger implements Logger {
    log(message: string): void {
      console.log(`File: ${message}`);
    }
  }

  function runLogger(logger: Logger): void {
    logger.log("Logging something...");
  }

  runLogger(new ConsoleLogger());
  //Console: Logging something...
  runLogger(new FileLogger());
  //File: Logging something...

  //추상클래스와 인터페이스의 차이점
  //1. 추상 클래스는 추상 메소드뿐만 아니라 일반 메소드와 속성도 가질 수 있지만,
  // 인터페이스는 오직 메소드 시그니처와 속성 타입만 정의할 수 있음.
  //(무엇을 하는 메소드인지 작성할 수 없음)
  //2. 추상 클래스는 클래스인 관계로 생성자를 포함할 수 있음. 인터페이스는 생성자를 포함하지 못함.
  //3. 추상 클래스는 단일 상속(extends, 가문과 비슷)만 가능하지만, 인터페이스는 다중 구현(implements, 자격증과 비슷)이 가능함.

  //정적 멤버
  class MathUtils {
    //static으로 정적 멤버를 만들면 인스턴스를 만들지 않고도 클래스 이름으로 직접 접근 가능
    static PI: number = 3.14159;

    static square(x: number): number {
      return x * x;
    }
  }

  console.log(MathUtils.PI);
  console.log(MathUtils.square(5));

  //정적 멤버 예제
  class Counter {
    static count: number = 0;
    id: number;
    //일반 속성인 'id'는 아래 a, b, c처럼 인스턴스마다 따로 존재
    //하지만 정적 속성인 'count'는 클래스 자체에 하나만 존재

    constructor() {
      this.id = Counter.count++;
    }
    //생성자에서 이 클래스의 정적 속성인 'count'를 참조하여, 인스턴스가 생성될 때마다 고유한 'id' 값을 할당

    showId(): void {
      console.log(`My ID is ${this.id}`);
    }
  }

  const a = new Counter();
  const b = new Counter();
  const c = new Counter();

  a.showId(); //My ID is 0
  b.showId(); //My ID is 1
  c.showId(); //My ID is 2

  console.log(Counter.count); //3
  //정적 속성은 클래스 이름으로 직접 접근
}

{
  //고급 타입들
  //인터섹션 타입
  type Person = {
    name: string;
    age: number;
  };

  type Employee = {
    employeeId: number;
    department: string;
  };

  type Staff = Person & Employee;
  // & 연산자로 합쳐 두 타입을 모두 갖는 새로운 타입을 만듦.
  // 이 교차 타입은 두 타입의 모든 속성을 포함함으로 이 타입으로 객체를 생성할 때 하나의 속성이라도 빠지면 컴파일 오류.
  // 서로 다른 타입의 속성을 결합해 더 구체적인 타입을 만들 때 유용.

  const alice: Staff = {
    name: "Alice",
    age: 30,
    employeeId: 101,
    department: "HR",
  };

  //인터섹션 타입에 대한 또 다른 예제
  type Drivable = {
    drive(): void;
  };

  type Flyable = {
    fly(): void;
  };

  type FlyingCar = Drivable & Flyable;

  // 이처럼 메소드를 포함한 타입들을 합칠 때도 사용 가능.
  class SuperCar implements FlyingCar {
    drive(): void {
      console.log("Driving on the road...");
    }
    fly(): void {
      console.log("Flying in the sky...");
    }
  }

  //유니온 타입
  function printValue(value: string | number) {
    console.log("Value is: ", value);
  }

  printValue("Hello");
  printValue(42);

  //유니온 타입과 타입 가드 활용
  function processValue(value: string | number) {
    // console.log(value.toUpperCase); value가 number로 들어올 시 해당 부분 실행 불가하기 때문에 컴파일 오류.
    if (typeof value === "string") {
      console.log(value.toUpperCase());
    } else {
      console.log(value.toFixed(2));
    }
  }

  console.log(
    processValue("hello"),
    processValue(3.14159)
    // ,processValue(true) // string | number 타입이 아니기 때문에 컴파일 오류.
  );

  //타입 가드 예제
  type Dog = {
    kind: "dog";
    bark: () => void;
  };

  type Cat = {
    kind: "cat";
    meow: () => void;
  };

  type Animal = Dog | Cat;

  function makeSound(animal: Animal) {
    if ("bark" in animal) {
      //'in' 연산자를 사용하여, 해당 객체에 'bark' 속성이 있는지 확인
      animal.bark();
    } else {
      animal.meow();
    }
    // 또 다른 타입 가드 방법
    if (animal.kind === "dog") {
      animal.bark();
    } else {
      animal.meow();
    }
  }

  //리터럴 타입(열거형)

  type ButtonSize = "small" | "medium" | "large";

  function createButton(size: ButtonSize) {
    console.log(`Button size is: ${size}`);
  }

  createButton("medium");
  // createButton("extra-large"); //small | medium | large 내에 포함되지 않음.

  type RetryCount = 0 | 1 | 2 | 3;

  function setRetry(count: RetryCount) {
    console.log(`Retries is set to: ${count}`);
  }

  setRetry(2);
  // setRetry(5); // 0 | 1 | 2 | 3 내에 포함되지 않음.
  //리터럴 타입은 열거형에 비해 더 간결하고 유연하며, 문자열이나 숫자 같은 기본 타입을 직접 사용해 별도의 선언 없이 값의 범위를 제한할 수 있다.

  //boolean 리터럴
  type FeatureToggle = true;
  function enableFeature(flag: FeatureToggle) {
    console.log("Feature is enabled.");
  }

  enableFeature(true);
  // enableFeature(false); //FeatureToggle 타입은 true만 허용됨.
  // 이 함수가 무엇을 하는 용도인지, 호출문을 작성하는 개발자가 상기하도록 돕는 역할

  const mode1 = "light"; //type: "light" 어차피 다른 값이 들어올 수 없는 상수이므로 타입을 문자열로 넓힐 필요가 없음.
  // let mode2 = "light"; //type: string
  //상수 mode1은 리터럴 타입이지만, mode2는 일반 문자열 타입

  let mode2: "light" | "dark" = "light";
  //변수를 사용하고 싶으면 해당 변수의 타입을 리터럴 타입 유니언으로 지정

  function setTheme(theme: "light" | "dark") {
    console.log(`Theme set to ${theme}`);
  }

  setTheme(mode1);
  // setTheme(mode2); //mode2는 일반 문자열 타입이기 때문에 컴파일 오류.
  setTheme(mode2);

  //리터럴 타입을 객체에 적용하는 법
  const config = {
    env: "production",
    debug: false,
  };

  config.debug = true;

  const strictConfig = {
    env: "production",
    debug: false,
  } as const;

  // strictConfig.debug = false; //as const로 수정 불가

  const numbers = [1, 2, 3] as const;
  // numbers[0] = 4; //as const로 수정 불가
}
{
  //고급타입들(심화)
  //맵드 타입과 인덱스 시그니처의 활용
  type User = {
    id: number;
    name: string;
    email: string;
  };

  type OptionalUser = {
    [K in keyof User]?: User[K];
    //물음표가 붙으면 각각이 선택적 속성이 됨.
  };

  const user1: OptionalUser = {
    name: "Alice",
  };

  const user2: OptionalUser = {
    id: 1,
    email: "bob@example.com",
  };
  // 기존의 객체 타입으로부터 보다 유연한 형태의 타입들을 만들어낼 수 있음.

  //엄격한 타입 생성
  {
    type User = {
      id: number;
      name: string;
      email: string;
    };

    type ReadonlyUser = {
      readonly [K in keyof User]: User[K];
    };

    const readonlyUser: ReadonlyUser = {
      id: 1,
      name: "John",
      email: "john@example.com",
    };

    // readonlyUser.id = 2; //readonly 속성이므로 재할당 불가
  }

  // 템플릿 리터럴 타입
  // 자바스크립트에서도 문자열을 조합하듯이, 타입에서도 문자열을 조합해서 새로운 타입을 만드는 방법입니다.
  type Lang = "en" | "fr" | "sp";

  type Locale = `locale-${Lang}`;
  //"locale-en" | "locale-fr" | "locale-sp"

  const locale1: Locale = "locale-en";
  const locale2: Locale = "locale-fr";
  const locale3: Locale = "locale-sp";

  // const locale4: Locale = "locale-pt"; // "locale-pt"는 포함되지 않음

  // 둘 이상의 리터럴 타입 조합
  type Color = "red" | "blue";
  type Shade = "light" | "dark";

  type ColorComb = `${Shade}-${Color}`;
  //Generates: "light-red" | "light-blue" | "dark-red" | "dark-blue"

  const colorComb1: ColorComb = "light-red";
  const colorComb2: ColorComb = "dark-blue";
  const colorComb3: ColorComb = "dark-red";
  const colorComb4: ColorComb = "dark-blue";

  // const colorComb5: ColorComb = "dark-green"; // "dark-green"는 포함되지 않음

  //더 많은 타입 조합도 가능
  type MultiComb = `${"A" | "B"}-${"on" | "off"}-${1 | 2 | 3}`;

  // "A-on-1" | "A-on-2" | "A-on-3"
  // "A-off-1" | "A-off-2" | "A-off-3"
  // "B-on-1" | "B-on-2" | "B-on-3"
  // "B-off-1" | "B-off-2" | "B-off-3"

  const setting1: MultiComb = "A-on-2";
  const setting2: MultiComb = "B-off-3";
  // const setting3: MultiComb = "C-on-1"; // "C-on-1"는 포함되지 않음

  // 타입 가드

  class Dog {
    bark() {
      console.log("Woof!");
    }
  }

  class Cat {
    meow() {
      console.log("Meow!");
    }
  }

  type Pet = Dog | Cat;

  function speak(pet: Pet) {
    if (pet instanceof Dog) {
      //타입가드&'instanceof'로 둘 중 어느 인스턴스인지 확인.
      pet.bark();
    } else {
      pet.meow();
    }
  }

  speak(new Dog());
  speak(new Cat());

  //사용자 정의 타입 가드
  type Fish = { swim: () => void };
  type Bird = { fly: () => void };

  //User-defined Type Guard
  function isFish(pet: Fish | Bird): pet is Fish {
    //반환 타입에 'pet is Fish'를 지정
    //이렇게 작성된 함수가 'true'를 반환하면 타입스크립트는 매개변수로 주어진 값의 타입이 'Fish'라고 인지하게 됨.
    return (pet as Fish).swim !== undefined;
    //매개변수인 'pet'을 강제로 'Fish' 타입으로 간주하고, 'swim' 속성이 존재하는지 확인
  }

  function move(animal: Fish | Bird) {
    if (isFish(animal)) {
      animal.swim();
      //animal.fly();
    } else {
      animal.fly();
    }
  }
  //이처럼 사용자 정의 타입 가드를 따로 만들어두면 복잡한 타입 검사가 여러곳에서 이뤄질 때 유용하게 사용 가능.
  {
    type ApiResponse = {
      status: string;
      data?: unknown;
      //어떤 속성이든 넣을 수 있는 any+안전장치
    };

    type User = {
      id: number;
      name: string;
    };

    function isUser(data: any): data is User {
      return (
        typeof data === "object" &&
        typeof data.id === "number" &&
        typeof data.name === "string"
      );
    }
    //해당 데이터가 객체인지, 그것에 'id'속성이 있으며 그 타입이 숫자인지, 'name' 속성이 있으며 그 타입이 문자열인지 확인

    function handleResponse(response: ApiResponse) {
      if (response.status === "success" && isUser(response.data)) {
        console.log("User ID:", response.data.id);
        console.log("User Name:", response.data.name);
      } else {
        console.error("Invalid user data");
      }
    }

    handleResponse({
      status: "success",
      data: {
        id: 1,
        name: "John Doe",
      },
    });
  }

  //타입 단언(Type Assertion)
  const input1 = document.getElementById("myInput");
  // console.log(input1.value);
  // 이것이 'value'란 속성을 포함하는 객체인지 타입스크립트가 알 수 없다는 의미
  // 'getElementById'를 호출한 결과가 꼭 유효한 요소를 반환하리라는 보장이 없기 때문

  const input2 = document.getElementById("myInput") as HTMLInputElement;
  console.log(input2.value);

  function handleData(data: unknown) {
    // console.log(data.length); //타입 가드 없이 접근하려 하면 오류가 발생함
    //'unknown이니까 조심하자'는 의미의 타입이므로

    const str = data as string;
    console.log(str.length);
  }

  function process(value: string | number) {
    const str = value as string;
    console.log(str.toUpperCase());
  }

  //타입 단언이 위험한 이유
  const number = 123 as unknown as string;
  //123이라는 숫자 타입의 값을 문자열로 타입 단언을 할 수 없지만, unknown을 거쳐 우회(이중 단언)
  const str = number.toUpperCase();
  //그러면 이와 같이 'number'상수로부터 문자열의 메소드를 호출할 수 있게 됨.
  //당연히 런타임 오류 발생.
  //타입 단언이 잘못 활용되면 이런 일도 생김.

  //Non-null 단언 연산자(!)
  //특정 속성이 'undefined'가 아님을 보증.
  {
    type User = {
      name: string;
      age?: number; //Optional
      //age는 number | undefined
    };

    function printUserAge(user: User) {
      // console.log(user.age.toFixed(1));
      // age가 undefined일 수도 있기 때문에 바로 숫자의 메소드를 사용하지 못함.

      console.log(user.age!.toFixed(1));
      //!를 붙여 undefined가 아님을 단언
    }

    printUserAge({ name: "Alice", age: 25 });
    // printUserAge({ name: "Bob" }); //Non-null 단언으로 undefined가 아님을 단언했지만 실제로는 undefined 값을 주고 있기 때문에 런타임 오류 발생.
  }
  {
    //제네릭 기초
    function identity<T>(arg: T): T {
      return arg;
    }
    //여기서 'T'는 반복문의 'i'처럼, 제네릭에서 관습적으로 널리 사용되는 이름.
    //변수나 상수에 원하는 값을 할당할 수 있듯, 이 'T'는 사용자가 원하는 타입으로 동적으로 설정 가능.

    const a1 = identity<string>("hello");
    const a2 = a1.toUpperCase();

    const b1 = identity<number>(123);
    const b2 = b1.toFixed(2);
    //제네릭은 함수나 클래스 등을 만들 때 타입을 고정하지 않고, 사용하는 시점에 타입을 지정할 수 있게 해줌.

    function getArrayLength<T>(arr: T[]): number {
      return arr.length;
    }
    //제네릭으로 주어지는 타입의 값들을 담는 배열을 매개변수로 받음.

    console.log(
      getArrayLength<number>([1, 2, 3]),
      getArrayLength<string>(["a", "b"])
    );

    //제네릭을 두 개 사용하는 코드
    function merge<T, U>(a: T, b: U): [T, U] {
      return [a, b];
    }
    //두 값을 매개변수로 받은 다음 튜플로 묶어 반환.

    const result = merge<string, number>("age", 30);
    console.log(result);

    //제네릭 타입 별칭 사용
    type Mapper<T> = (input: T) => T;
    //매개변수와 반환값의 타입이 같은 함수를 작성하기 위해 사용.

    const stringEcho: Mapper<string> = (msg) => msg.toUpperCase();
    const numberEcho: Mapper<number> = (num) => num * 2;

    console.log(stringEcho("hello world"), numberEcho(10));

    //제네릭을 인터페이스에 사용하는 예제
    interface Box<T> {
      value: T;
    }
    //제네릭에 어떤 타입이 지정되는냐에 따라 그 타입의 값을 담는 속성이 되는 것.

    const numberBox: Box<number> = { value: 123 };
    const stringBox: Box<string> = { value: "hello" };
    const booleanBox: Box<boolean> = { value: true };
    //이처럼 원하는 어떤 타입이든 포함할 수 있는 박스 구조를, 제네릭을 적용한 인터페이스로 정의할 수 있음.

    //인터페이스와 제네릭의 실무 사용법
    interface Result<T, E> {
      success: boolean;
      data?: T;
      error?: E;
    }
    //네트워크상의 요청 등의 작업에 경과로 반환될 객체의 타입
    //성공 여부에 따라 data, error 값이 선택적으로 들어감.

    const successResult: Result<string, null> = {
      success: true,
      data: "Operation succeded",
    };

    const errorResult: Result<null, string> = {
      success: false,
      error: "Something went wrong",
    };
    //이처럼 조건에 따라 다른 속성들을 포함하는 객체들의 타입을 제네릭을 통해 유연하게 만들 수 있다.

    //인터페이스와 인덱스 시그니처, 제네릭이 함께 사용되는 예제
    interface Dictionary<T> {
      [key: string]: T;
    }

    const stringDictionary: Dictionary<string> = {
      hello: "world",
      goodbye: "earth",
    };

    const numberDictionary: Dictionary<number> = {
      one: 1,
      two: 2,
    };

    //인터페이스의 상속과 제네릭이 함께 사용되는 예제
    interface BaseResponse {
      success: boolean;
    }
    //어떤 작업이 수행되고 나면 그 성공 여부를 해당 속성에 담아 반환하기 위함.

    interface DataResponse<T> extends BaseResponse {
      data: T;
    }

    const userResponse: DataResponse<{ name: string; age: number }> = {
      success: true,
      data: {
        name: "Alice",
        age: 30,
      },
    };

    //클래스에 제네릭 적용
    class Container<T> {
      private value: T;
      constructor(value: T) {
        this.value = value;
      }
      getValue(): T {
        return this.value;
      }
      setValue(value: T): void {
        this.value = value;
      }
    }

    const numberContainer = new Container<number>(123);
    console.log(numberContainer.getValue()); //123

    const strContainer = new Container<string>("TypeScript");
    console.log(strContainer.getValue()); //"TypeScript"

    //제네릭을 사용하여 특정 타입에 국한되지 않고 사용할 수 있는 클래스를 이처럼 만든거예요.

    //제네릭 둘을 사용하는 클래스 예제
    class KeyValuePair<K, V> {
      constructor(public key: K, public value: V) {}

      print(): void {
        console.log(`Key: ${this.key}, Value: ${this.value} `);
      }
    }

    const pair = new KeyValuePair<string, number>("age", 30);
    pair.print(); //Key: age, Value: 30
  }
  {
    //제네릭 제약과 조건부 타입
    function printLength<T extends { length: number }>(value: T): void {
      console.log(value.length);
    }
    //이 함수에 적용된 'T'가 이와 같이 'extends' 키워드를 사용해서 오른쪽의 객체 타입으로부터 확장하는 것을 볼 수 있다.
    //length라는 속성을 반드시 포함하는 타입으로 제한하는 것.

    printLength<string>("Hello");
    //제네릭도 아래의 예시들과 같이 타입 추론이 가능

    printLength("Hello");
    printLength([1, 2, 3]);
    printLength({ length: 10 });

    // printLength(42);
    // 'number' 타입은 'length' 속성이 없기 때문에 컴파일 오류 발생.

    interface Named {
      name: string;
    }

    function greet<T extends Named>(person: T): void {
      //위의 Named 인터페이스로부터 상속받는 제네릭을 적용
      console.log("Hello, " + person.name);
    }

    greet({ name: "Alice", age: 30 });
    // greet({age: 30});
    // 'name' 속성이 없기 때문에 컴파일 오류 발생.

    //제네릭 + keyof
    function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
      return obj[key];
    }
    // 첫 번째 인자로 주어진 객체로부터, 두 번째 인자로 주어진 이름의 속성 값을 반환하는 함수.
    // 때문에 두 제네릭이 필요.

    const product = { id: 1, name: "Phone", price: 500 };

    const productName = getProperty(product, "name");
    console.log(productName); //"Phone"

    // const error = getProperty(product, "weight");
    // "weight"는 product 객체의 키에 해당하지 않기 때문에 컴파일 오류 발생.

    //keyof 키워드
    type MyKey = keyof { id: 1; name: "Phone"; price: 500 };
    // 'id' | 'name' | 'price'

    const a: MyKey = "id";
    const b: MyKey = "name";
    const c: MyKey = "price";
    // const d: MyKey = "description"; // 'description'는 포함되지 않음

    interface HasLength {
      length: number;
    }

    interface HasName {
      name: string;
    }

    function describe<T extends HasLength & HasName>(value: T): void {
      // 위의 두 인터페이스의 교차 타입으로부터 확장하는 제네릭
      console.log(`${value.name} has length ${value.length}`);
    }

    describe({ name: "Box", length: 20, color: "red" });
    // describe({name: "Box" });
    // 'length' 속성이 없기 때문에 컴파일 오류 발생.

    //조건부 타입
    //타입 수준에서 조건을 걸어서 다른 타입을 선택하도록 만드는 강력한 기능
    type IsNumber<T> = T extends number ? "Number" : "Not Number";

    type A = IsNumber<number>; // 'Number'
    type B = IsNumber<string>; // 'Not Number'
    type C = IsNumber<42>; // 'Number'
    // 제네릭에 타입으로 주어진 'T'가 숫자 타입에 속하는가 여부에 따라 문자열 리터럴 타입인 'Number'와
    // 'Not Number'를 반환.

    const a1: A = "Number";
    const b1: B = "Not Number";
    const c1: C = "Number";

    // const a2: A = ""; //Number가 아닌 다른 값은 허용되지 않음
    // const b2: B = "Number"; //Not Number가 아닌 다른 값은 허용되지 않음
    // const c2: C = 123; //Number가 아닌 다른 값은 허용되지 않음
    {
      //조건부 타입의 활용 예제
      type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
      //삼항 연산자의 앞부분은 'T'가 함수 형태임을 나타냄.
      //'any' 타입의 매개변수 0개 이상을 받은 뒤 'infer R'이란 값을 반환하는 형태이므로, 함수를 나타냄.
      //'infer R'은 이 함수가 반환하는 타입을 'R'이란 이름으로 추론하라는 의미.
      //따라서 이 조건부 타입은 'T'가 함수 타입이라면 그 반환 타입을, 아니라면 'never' 타입을 반환.

      type A = MyReturnType<() => string>; // string
      type B = MyReturnType<() => number[]>; //number[]
      type C = MyReturnType<string>; //함수가 아니기 때문에 never 반환

      const a: A = "hello";
      const b: B = [1, 2, 3];
      // const c: C = 123;  //never 타입이므로 어떤 값도 할당 불가
    }

    //infer 키워드
    //타입을 추론해서 변수처럼 임시로 이름 붙이는 키워드

    type MyType<T> = T extends infer U ? U : never;
    // T 타입을 U라는 이름으로 추론
    //T를 분석해서 그 안에서 어떤 타입인지 꺼내 쓰고 싶을 때 사용
    // 여기에서 infer가 없게 되면 any: never가 되기 때문에 함수의 리턴 값은 유동적이지 않고 항상 any 또는 never가 됨.
    // 리턴값을 유동적인 값으로 임시적인 이름을 붙여서 사용하고 싶을 때 infer를 사용
    // 즉, infer는 return type을 유동적으로 만들기 위한 변수와 같은 역할.
    {
      //infer를 사용한 또 다른 예제
      type ElementType<T> = T extends (infer U)[] ? U : T;

      type A = ElementType<string[]>; //string
      type B = ElementType<number[]>; //number
      type C = ElementType<boolean>; //boolean

      const a: A = "Hello";
      const b: B = 42;
      const c: C = true;
    }
    //infer 사용 예제
    type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
    // 리턴값의 타입을 반환.
    type MyParameters<T> = T extends (...args: infer P) => any ? P : never;
    // 매개변수의 타입을 반환.
    // 둘 다 제네릭에 함수가 아닌 값을 전달했다면 never 타입을 반환하게 되어 아무 값도 할당하지 못한다.

    function createUser(name: string, age: number) {
      return {
        id: Date.now(),
        name,
        age,
      };
    }

    type NewUser = MyReturnType<typeof createUser>;
    const user: NewUser = { id: 1, name: "John", age: 30 };

    type CreateUserParams = MyParameters<typeof createUser>;
    // 'MyParameters'를 사용해서 위 함수의 매개변수를 튜플 형태의 타입으로 가져오게 됨.
    const params: CreateUserParams = ["John", 30];
    //문자열과 숫자의 튜플 형태의 값을 'params'에 저장할 수 있음.

    // 조건부 타입의 또 다른 사용법
    type MyNonNullable<T> = T extends null | undefined ? never : T;

    function printValue<T>(value: MyNonNullable<T>) {
      console.log(value);
    }

    printValue("hello");
    printValue(123);
    //제네릭의 타입이 추론됨.
    // printValue(null); //never 타입이므로 금지
    // printValue(undefined); //never 타입이므로 금지
  }

  {
    //내장 제네릭 타입과 유틸리티 타입
    //내장 제네릭 타입: 타입스크립트에서 기본으로 제공하는 제네릭 타입(배열, 프로미스 등)
    //+)원본 배열의 불변성을 유지할 필요가 있는 경우 ReadonlyArray<T> 타입을 사용
    //Map(키와 값을 갖는 요소)/Set(중복되지 않는 것들의 집합) 등도 제네릭 타입을 지원

    // WeakMap과 WeakSet
    const object1 = { id: 1 };
    const object2 = { id: 2 };
    //WeakMap은 키로 객체만 허용

    const weakMap: WeakMap<object, string> = new WeakMap();
    weakMap.set(object1, "Object One");

    console.log(weakMap.get(object1));

    const objectA = { name: "Alice" };
    const objectB = { name: "Bob" };

    const weakSet: WeakSet<object> = new WeakSet();
    weakSet.add(objectA);
    //WeakSet은 객체만 요소로 허용

    console.log(weakSet.has(objectA)); // true
    console.log(weakSet.has(objectB)); // false
    // 객체들이 가비지 컬렉션의 대상이 될 수 있도록 허용
    //즉, 더 이상 참조되지 않는 객체들은 메모리에서 자동으로 해제될 수 있음. (누수 방지)

    //비동기 프로그래밍
    type User = {
      id: number;
      name: string;
    };

    function fetchUser(id: number): Promise<User> {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ id, name: "Alice" });
        }, 1000);
      });
    }
    // 1초 후에 사용자 정보를 담은 객체를 반환하는 프로미스

    async function getUserInfo() {
      const user = await fetchUser(1);
      console.log(`User ID: ${user.id}, User Name: ${user.name}`);
    }

    getUserInfo();

    //Utility Types
    // TypeScript에서 제공하는 유틸리티 타입들은 기존 타입을 변형하거나 조작하는 데 사용되는 내장 제네릭 타입들.
    //Partial<T>
    interface Product {
      id: number;
      name: string;
    }

    const partialProduct: Partial<Product> = {
      name: "Cup",
    };
    //제네릭으로 전달한 결과를 타입으로 사용함.
    //그 결과로 만들어진 타입은 'Product'의 모든 속성을 선택적으로 만듦.
    //즉, 'Partial'은 주어진 객체 타입의 모든 속성을 선택적 속성으로 만들어주는 데 사용.

    //Required<T>
    interface UserProfile {
      name: string;
      age: number;
    }

    const completeProfile: Required<UserProfile> = {
      name: "Bob",
      age: 25,
    };

    // const completeProfile2: Required<UserProfile> = {
    //   name: "Bob",
    //   age: 25,
    // };

    //'UserProfile'의 모든 속성을 필수 속성으로 만듦.
    //'Required'는 전달된 객체 타입의 속성들을 모두 필수 속성으로 갖는 타입.
    //Partial과 정반대의 기능
  }

  //Readonly<T>
  interface Settings {
    theme: string;
    darkMode: boolean;
  }

  const config: Readonly<Settings> = {
    theme: "light",
    darkMode: true,
  };

  // config.theme = "dark"; //Readonly로 인해 수정 불가

  //주어진 객체의 속성들 중 일부만 가져오는 타입
  interface Product {
    id: number;
    name: string;
    price: number;
  }

  const productPreview1: Pick<Product, "id" | "name"> = {
    id: 1,
    name: "Pen",
  };
  // Pick<T, K>는 제네릭 타입 T에서 K에 해당하는 속성들만 선택하여 새로운 타입을 만듦.

  // const productPreview2: Pick<Product, "id" | "name"> = {
  //   id: 2,
  // };
  // 컴파일 오류: 'name' 속성이 누락됨

  // const productPreview3: Pick<Product, "id" | "name"> = {
  //   id: 3,
  //   name: "Jack",
  //   email: "Jack@example.com",
  // };

  // 컴파일 오류: 'email' 속성은 'Product' 타입에 없음

  //Omit<T, K>
  interface Product {
    id: number;
    name: string;
    price: number;
  }

  const productWithoutPrice: Omit<Product, "price"> = {
    id: 1,
    name: "Notebook",
  };
  //Omit<T, K>는 제네릭 타입 T에서 K에 해당하는 속성들을 제외한 나머지 속성들로 새로운 타입을 만듦.
  //즉, 'price' 속성을 제외한 'id'와 'name' 속성만 포함하는 타입이 됨.

  //Record<K, T>
  type Role = "admin" | "user" | "guest";

  const Descriptions: Record<Role, string> = {
    admin: "Administrator",
    user: "Regular User",
    guest: "Guest User",
  };
  // Role 타입의 각 값들을 키로 사용.

  console.log(Descriptions.admin, Descriptions.user, Descriptions.guest);
  //어떤 정해진 키 집합에 대해, 각각의 값을 정해진 타입으로 매핑할 때 이 'Record' 타입을 유용하게 사용.

  //Exclude<T, U>
  //차집합
  type Colors = "red" | "green" | "blue";
  type PrimaryColors = Exclude<Colors, "green">;

  const primaryColor: PrimaryColors = "red";
  const anotherPrimaryColor: PrimaryColors = "blue";
  // const invalidColor: PrimaryColors = "green"; //컴파일 오류: "green"는 제외됨
  //Exclude<T, U>는 제네릭 타입 T에서 U에 해당하는 타입을 제외한 나머지 타입들로 새로운 타입을 만듦.

  //Extract<T, U>
  //교집합
  type MixedColors = "red" | "green" | "blue" | "yellow";
  type BasicWarmColors = "red" | "yellow" | "orange";

  type WarmColors = Extract<MixedColors, BasicWarmColors>;

  const warmColor1: WarmColors = "red";
  const warmColor2: WarmColors = "yellow";
  // const coldColor: WarmColors = "blue"; //컴파일 오류: "blue"는 포함되지 않음
  //Extract<T, U>는 제네릭 타입 T에서 U에 해당하는 타입들만 추출하여 새로운 타입을 만듦.

  //NonNullable<T>
  //null과 undefined 제거
  type MaybeString = string | null | undefined;

  type NonNullableString = NonNullable<MaybeString>;

  const safeString: NonNullableString = "Hello, World!";
  // const errorString1: NonNullableString = null; //컴파일 오류: null과 undefined는 제거됨
  // const errorString2: NonNullableString = undefined; //컴파일 오류: null과 undefined는 제거됨

  //Parameters<T>, ReturnType<T>
  //함수로부터 매개변수와 반환값을 추출하는 기능
  function multiply(a: number, b: number): number {
    return a * b;
  }

  type MultiplyParams = Parameters<typeof multiply>;
  // [number, number]
  type MultiplyResult = ReturnType<typeof multiply>;
  // number

  function doubleMultiply(...args: MultiplyParams): MultiplyResult {
    const result = multiply(...args);
    return result * 2;
  }

  console.log(doubleMultiply(3, 4)); // 24
  {
    // 함수로부터 매개변수와 반환값을 추출하는 기능
    function createUserInfo(name: string, phone: number) {
      return {
        name,
        phone,
      };
    }

    type CreateUserInfoParams = Parameters<typeof createUserInfo>;
    type CreateUserInfoReturn = ReturnType<typeof createUserInfo>;

    const cloneUserInfo = (obj: CreateUserInfoReturn): CreateUserInfoParams => {
      return [obj.name, obj.phone];
    };

    const user1 = createUserInfo("Alice", 30);
    const user2 = cloneUserInfo(user1);
  }
}

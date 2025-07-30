"use strict";
{
    function greet(name) {
        return `Hello, ${name}`;
    }
    console.log(greet("GY"));
    let age = 25;
    age = 26;
    const firstName = "Alice";
    // firstName = "Bob"; //오류!
    var isOld = false;
    // let score: number = 90;
    let studentName;
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
    const isAdult = true;
    const hasPermission = false;
    if (isAdult && !hasPermission) {
        console.log("Access denied");
    }
    else {
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
    let anyValue = 10; //Number
    anyValue = "Hello"; //String
    anyValue = true; //Boolean
    anyValue = [1, 2, 3]; //Array
    anyValue = { name: "John" }; //Object
    //어떤 값을 넣어도 오류가 나지 않음
    // let anyString: any = "123";
    let anyString = "123";
    console.log(anyString.toUpperCase());
    // console.log(anyString.nonExistentMethod()); //어느 기본 타입에도 존재하지 않는 메소드
    //타입스크립트는 anyString 변수가 어떤 타입일지 알 수 없으므로 컴파일 오류를 발생시키지 않음.(위험함)
    //anyString이 숫자일 때는 toUpperCase()에서 오류가 발생하고 anyString이 문자열일 때는 nonExstentMethod()에서 오류가 발생
    //문자열에도 존재하지 않기 때문->오류가 컴파일 시점에서 걸러지지 않고 이처럼 런타임 시점에서야 오류가 발생하게 됨
    //any를 사용하는 때
    //외부의 라이브러리를 사용하거나, 네트워크에서 데이터를 받아오는 등 다루어야 할 데이터의 타입을 미리 알 수 없는 경우
    function processData(data) {
        return data.someProperty?.someMethod?.() || data;
        //만약 다른 타입이더라도 오류는 발생하지 않도록 물음표 연산자를 활용한 옵셔널 체이닝을 사용
    }
    //any가 타입을 모르는 데이터에 대해 관대해지는 반면, 'unknown'은 오히려 엄격해짐
    let anyVar = 10;
    let unknownVar = 10;
    //숫자값을 초기에 같이 할당해도 any, unknown으로 타입을 지정해 줄 시, 타입스크립트는 여전히 타입을 확신하지 않음
    let anyNumber = anyVar;
    anyVar.toFixed(2);
    //any 변수는 타입 변경이 가능
    // let unknownNumber: number = unknownVar;
    // unknownVar.toFixed(2);
    //unknown은 어떤 타입의 값이 담겼을 지 모르기 때문에, 다른 자료형의 다른 변수에 값을 넘겨주지 못하도록 막음
    //unknown 타입을 처리하는 방법
    function processValue(val) {
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
    let unknownValue = "Hello, TypeScript!";
    //Type assertion - when you're certain of the type
    let stringLength = unknownValue.length;
    //as를 사용하여 해당 변수의 값이 문자열 타입임을 나타냄
    //이렇게 작성하면 타입스크립트는 이를 신뢰하고 컴파일 단계에서 오류를 발생시키지 않게 된다.
    //(대신 이는 문자열임을 확신할 수 있는 상태에서만 사용)
    //Type gaurd - safer
    if (typeof unknownValue === "string") {
        let length = unknownValue.length;
    }
    function processUserData(user) {
        //Type guard for object
        if (typeof user === "object" && user !== null) {
            if ("name" in user && typeof user.name === "string") {
                //해당 객체의 안에 name이라는 속성이 있는지 확인 후 name 속성의 타입이 문자열인지 확인한다.
                return user.name.toUpperCase();
            }
        }
        return "Invalid user data";
    }
    console.log(processUserData({ name: "John Doe" }));
    //----------------------------------------------------------------
    //null과 undefined
    //null: 값을 의도적으로 비워둘 때 사용.
    //undefined: 변수가 선언되었지만 값이 아직 할당되지 않았거나 정의되지 않은 상태를 나타냄.
    let nullValue = null;
    let undefinedValue = undefined;
    //Error with strictNullChecks
    // let stringValue: string = null;
    // let numberValue: number = undefined;
    //tsconfig에서 strictNullChecks를 false로 하면 오류가 나지 않음
    //null과 undefined는 각각 null, undefined만 할당 할 수 있기 때문에 실무에서는 안 쓰임
    let optionalString = "Hello";
    //union 타입 가능
    optionalString = null;
    let potertiallyUndefinedNumber;
    console.log(potertiallyUndefinedNumber);
    //void,never
    //공통점: 함수나 메소드의 반환값에 사용되며 '반환되는 값을 받을 수 없음'을 의미함.
    //void: (만나도 줄 선물이 없는 산타)
    //never: 절대 끝나지 않거나(무한루프) 값을 반환하지 않는 함수라는 것을 명시.(절대 만날 수 없는 산타)
    //never의 두가지 사용법: 무한 루프, throw Error
    function printLength(text) {
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
    numbers.forEach((num) => {
        console.log(num * 2);
    });
    function throwError(message) {
        throw new Error(message);
    }
    //특정 오류를 던지는 용도의 함수에는 반환값 타입으로 'never'가 사용됨.
    function infiniteLoop() {
        //무한루프를 돌게 되면 터미널 내에서 오류가 발생하게 되는데 이 오류를 발생시키지 않기 위해 사용됨.
        while (true) {
            console.log("Running...");
        }
    }
    function handleValue(x) {
        //Type narrowing using typeof
        if (typeof x === "string") {
            console.log("It's a string:", x.toUpperCase());
        }
        else if (typeof x === "number") {
            console.log("It's a number:", x.toFixed(2));
        }
        else if (typeof x === "boolean") {
            console.log("It's a boolean:", x ? "true" : "false");
        }
        else if (typeof x === "object") {
            console.log("It's a object:", x.toString());
        }
        else {
            // 매개변수가 문자열도, 숫자도, 불리언도 아닌 케이스는 절대 발생하지 않지만 추가
            // 추후에 함수에 대한 인자의 변화가 있을 시 else 문에 일부러 에러를 일으켜 object, 해당 함수에 대한 내용을 잊지 않고 넣을 수 있음.
            const unreachable = x;
            throw new Error(`Unexpected type: ${x}`);
        }
    }
    handleValue({ name: "John" });
    //객체이기 때문에 오류가 발생, 추후에 handleValue 인수 타입에 object 넣음
}
//----------------------------------------------------------------
{
    //배열과 튜플, 객체 기초
    let numbers = [1, 2, 3, 4, 5, 6];
    let fruits = ["Apple", "Banana", "Orange"];
    let scores = [];
    scores.push(95);
    scores.push(88);
    // scores.push("A+"); //오류!
    let colors = ["Red", "Green", "Blue"];
    // colors.push(123);  //오류!
    console.log(numbers[0], fruits[1], colors[2]);
    //내부 요소가 지정된 타입과 달라도 오류를 일으킴
    let matrix = [
        //2차원 배열
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        //[7,8,true]
    ];
    console.log(matrix[0][1]);
    let cube = [
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
    const names = ["Alice", "Bob", "Charlie", "David", "Boy"];
    const nameLengths = names.map((name) => name.length);
    console.log(nameLengths);
    const longNames = names.filter((name) => name.length > 4);
    console.log(longNames);
    const foundName = names.find((name) => name.startsWith("B"));
    console.log(foundName);
    //filter가 아닌 find이기 때문에 오류가 나지 않고 먼저 나오는 Bob 출력
    const originalArray = [1, 2, 3, 4, 5];
    originalArray[0] = 10;
    const readOnlyNumbers = originalArray; //제네릭
    const readOnlyScores = [90, 85, 95];
    // readOnlyNumbers[0] = 10;  //ReadonlyArray라서 재할당 불가
    // readOnlyScores.push(100);  //readonly라서 재할당 불가
    //스프레드 연산자 사용
    const newArray = [...readOnlyNumbers, 6]; //[1,2,3,4,5,6]
    newArray[0] = 0;
    newArray.push(7);
    console.log(newArray);
    //튜플
    let person = ["John", 30];
    console.log(person[0]);
    console.log(person[1]);
    // person = [30,'John'];
    // person = ['John',30, true];
    //튜플은 배열처럼 생겼지만, 각 요소의 타입과 순서가 정해져 있고 이를 어기면 컴파일 오류가 발생함.
    //구조분해 할당
    const [firstName, age] = person;
    console.log(firstName);
    console.log(age);
    //튜플은 선택적 요소도 포함 가능
    const complete = ["Jane", 25, true];
    //마지막 요소가 들어갈 수도 있고
    const partial = ["Mike", 40];
    //마지막 요소가 들어가지 않을 수도 있음
    //튜플을 함수 반환값으로 사용하는 예제
    function getUserInfo() {
        return ["alex_dev", 28, false];
    }
    //리턴값 구조 분해 할당
    const [username, userAge, isAdmin] = getUserInfo();
    console.log(`Username: ${username}, Age: ${userAge}, Admin: ${isAdmin}`);
    //타입 추론에 있어 배열과 튜플의 차이
    const inferredArray = [1, "Hello"];
    //inferredArray: (string | number)[]
    const inferredTuple = [1, "Hello"];
    //inferredTuple: readonly [1,'Hello']
    //각 값이 상수가 되어버려서 이 값들 외에는 다른 값들이 들어올 수 없음
    //실무에서 필요시 특정 데이터 묶음의 값 제약이 가능함.
    // inferredTuple[0] = 2;  //오류
    // inferredTuple[1] = "world";  //오류
    let explicitTuple = [1, "Hello"];
    explicitTuple = [2, "world"];
    const person2 = { name: "John", age: 25 };
    // const wrongPerson1: { name: string; age: number } = {
    //   name: "John",
    //   age: "25",
    // };
    // age의 타입이 숫자인 관계로 "25"와는 타입이 맞지 않아 오류
    // const wrongPerson2: { name: string; age: number } = { name: "Mark" };
    // name과 age가 와야 하는데 name만 와서 오류
    // const wrongPerson3: {name: string; age: number} = {name: "John", age: 25, married: true,}
    // 타입에서 정의 되지 않은 속성을 넣어 오류
    const person3 = {
        name: "John",
        age: 25,
    };
    person3.name = "Jane";
    const adminUser = {
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
        function checkUserAccess(userRole) {
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
    let UserRole;
    (function (UserRole) {
        UserRole[UserRole["Admin"] = 0] = "Admin";
        UserRole[UserRole["Manager"] = 1] = "Manager";
        UserRole[UserRole["Employee"] = 2] = "Employee";
        UserRole[UserRole["Guest"] = 3] = "Guest";
    })(UserRole || (UserRole = {}));
    function checkUserAccess(userRole) {
        if (userRole === UserRole.Admin || userRole === UserRole.Manager) {
            return true;
        }
        return false;
    }
    console.log(checkUserAccess(UserRole.Admin));
    console.log(checkUserAccess(3));
    // console.log(checkUserAccess(99)); //지정해놓은 숫자가 아닌 다른 수가 들어가서 오류
    // 열거형은 쉽게 말해 '딱 이 값들만 다질 수 있는' 새로운 타입을 만드는 것
    let Direction;
    (function (Direction) {
        Direction[Direction["Up"] = 0] = "Up";
        Direction[Direction["Down"] = 1] = "Down";
        Direction[Direction["Left"] = 2] = "Left";
        Direction[Direction["Right"] = 3] = "Right";
    })(Direction || (Direction = {}));
    //값을 할당할 이름들만 넣고, 이들의 값들을 명시하지도 않음
    console.log(Direction.Up);
    console.log(Direction.Down);
    console.log(Direction.Left);
    console.log(Direction.Right);
    console.log(Direction[0]);
    console.log(Direction[1]);
    let HttpStatus;
    (function (HttpStatus) {
        HttpStatus[HttpStatus["OK"] = 200] = "OK";
        HttpStatus[HttpStatus["Created"] = 201] = "Created";
        HttpStatus[HttpStatus["BadRequest"] = 400] = "BadRequest";
        HttpStatus[HttpStatus["Unanthorized"] = 401] = "Unanthorized";
        HttpStatus[HttpStatus["Forbidden"] = 403] = "Forbidden";
        HttpStatus[HttpStatus["NotFound"] = 404] = "NotFound";
        HttpStatus[HttpStatus["InternalServerError"] = 500] = "InternalServerError";
    })(HttpStatus || (HttpStatus = {}));
    const status1 = HttpStatus.OK;
    const status2 = 201;
    // const status3: HttpStatus = 203; //열거형 선언문에 포함되지 않는 값이라 오류
    console.log(status1);
    console.log(status2);
    let Priority;
    (function (Priority) {
        Priority[Priority["Low"] = 5] = "Low";
        Priority[Priority["Medium"] = 6] = "Medium";
        Priority[Priority["High"] = 10] = "High";
        Priority[Priority["Critical"] = 11] = "Critical";
    })(Priority || (Priority = {}));
    console.log(Priority.Low);
    console.log(Priority.Medium);
    console.log(Priority.High);
    console.log(Priority.Critical);
    //일부 멤버에만 값을 지정할 경우, 값이 지정되지 않은 멤버들은 이전 값에서 자동으로 1이 증가한 값을 갖게 됨.
    let Theme;
    (function (Theme) {
        Theme["Light"] = "light-theme";
        Theme["Dark"] = "dark-theme";
        Theme["System"] = "system-theme";
    })(Theme || (Theme = {}));
    function applyTheme(theme) {
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
    //하지만 이처럼 혼합된 값들을 사용하는 방식은 코드의 의도를 명확히 전달하기 어렵게 때문에 권장되지는 않음
    let ApiResponse;
    (function (ApiResponse) {
        ApiResponse[ApiResponse["Success"] = 200] = "Success";
        ApiResponse[ApiResponse["Created"] = 201] = "Created";
        ApiResponse[ApiResponse["BadRequest"] = 400] = "BadRequest";
        ApiResponse[ApiResponse["Unauthorized"] = 401] = "Unauthorized";
        ApiResponse[ApiResponse["NotFound"] = 404] = "NotFound";
        ApiResponse[ApiResponse["ServerError"] = 500] = "ServerError";
        ApiResponse["SUCCESS_MESSAGE"] = "Operation completed successfully";
        ApiResponse["ERROR_MESSAGE"] = "An error ocurred during the operation";
    })(ApiResponse || (ApiResponse = {}));
    {
        let Direction;
        (function (Direction) {
            Direction[Direction["Up"] = 0] = "Up";
            Direction[Direction["Down"] = 1] = "Down";
            Direction[Direction["Left"] = 2] = "Left";
            Direction[Direction["Right"] = 3] = "Right";
        })(Direction || (Direction = {}));
        const dir = Direction.Up;
        const fastDir = 0 /* FastDirection.Up */;
    }
}

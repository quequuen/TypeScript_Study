## null과 undefined

- null: 값을 의도적으로 비워둘 때 사용.
- undefined: 변수가 선언되었지만 값이 아직 할당되지 않았거나 정의되지 않은 상태를 나타냄.
  <br>
  <br>
  +) union 타입<br>
  <h1>void와 never</h1>

- 둘의 공통점: 함수나 메소드의 반환값에 사용되며 '반환되는 값을 받을 수 없음.'을 의미함.<br>
- void: 값을 생성하는 표현식을 평가해서 undefined를 반환. (만나도 줄 선물이 없는 산타.)<br>
  <br>
  1. 반환값은 undefined<br>
     : null은 undefined와 다른 타입이기 때문에 void 반환 값에 충족되지 않는다.<br>
- never: 절대 끝나지 않거나(무한 루프) 값을 반환하지 않는 함수하는 것을 명시.(절대 만날 수 없는 산타)<br>
  <br>
  1. never의 두가지 사용법: 무한루프 또는 throw Error<br>
     ex)<br>
     function throwError(message: string): never{<br>
     throw new Error(message);<br>
     }<br><br>
     ☞ 특정 오류를 던지는 용도의 함수에는 반환값 타입으로 'never'가 사용됨.<br>
     <br>
     ☞ 무한루프를 돌게 되면 터미널 내에서 오류가 발생하게 되는데 이 오류를 발생시키지 않기 위해 사용됨.<br>
     <br>
  2. never가 주로 쓰이는 자세한 예시<br>

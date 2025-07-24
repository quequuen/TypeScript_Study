<h1>기본 자료형</h1>

- 기본 형식: <br><br>
  let a:(number, string, 등) = 값;<br>
  <br>
- 타입 추론<br><br>
  let score = 90;<br>score ="90";<br><br>
  선언과 동시에 초기값을 주면 타입 추론에 의해 타입이 결정됨.<br>
  이렇게 추후에 값을 재할당해주면 오류가 남.<br><br>
- any 타입<br><br>
  let score;<br>
  score = 90;<br>
  score = "90";<br><br>
  선언 시, 아무 값도 주지 않으면 any 타입이 됨.<br>
  하지만 이 방법은 typeScript를 쓰는 이유가 없어질 뿐더러 불안정하기에 되도록이면 쓰지 말 것.<br><br>

- BigInt 자료형<br><br>
  const bigIntNumber = 12343525232867869284793678659274986235727432n; <br>
  const anotherBigInt = BigInt("12343525232867869284793678659274986235727432");<br><br>
  숫자 끝에 n을 붙이거나 BigInt를 써줌<br>
  tsconfig에서 컴파일 대상이 ES2016 버전으로 되어 있기 때문에 BigInt를 쓰면 빨간 줄로 오류가 남.<br>
  ->2020으로 수정한 다음 저장하면 됨( "target": "es2020")<br><br>
- 같은 타입끼리만 연산 가능.<br><br>
  console.log(bigIntNumber + anotherBigInt);<br><br>
  일반 int랑 BigInt를 연산하면 컴파일 오류가 남<br><br>
  
  

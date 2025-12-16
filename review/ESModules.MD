<h2> ES Modules </h2>

- ES Modules 설정 방법

1. package.json 내
   {
   "type" : "module"
   }

2. 모듈로 사용할 파일 확장자 .mjs

☞ 최신 버전 Node.js는 이렇게 안해도 동작하지만 언제나 최신 버전을 쓸 수는 없기 때문에 위 두개 중 하나를 사용하는 것이 좋음.

- module 기본 사용
  math.js 파일 내 예시
  <!-- PAID_START -->
  **export** const PI = 3.14159265359;

**export** function add(a, b){
return a+b;
}

**export** class MathOptions{
multiply(a, b){
return a \* b;
}
}

<!-- PAID_END -->

☞ 각각의 선언 및 할당되는 곳 앞에 export 키워드

app.js 내 예시

<!-- PAID_START -->

import {PI, add, MathOptions} from "math.js 경로"
☞ 구조분해할당으로 가져온 예
import * as math from "math.js 경로"
☞ *를 사용해 모든 파일을 하나의 객체로 묶어 가져온 예
☞ 해당 방법은 math라는 alias를 추가해주어 math.PI와 같이 math alias의 key로 가져올 수 있음.

<!-- PAID_END -->

- 각 모듈 문서에는 대표하는 값이 있는 경우 존재(함수, 객체 등)
  해당 상황에는 default 키워드로 지정
  <!-- PAID_START -->

  math.js 내 예시

  export default function add~

  app.js 내 예시

  import addAB, {PI, MathOptions} from "math 경로"
  <!-- PAID_END -->

  ☞ 모듈의 대표값은 중괄호 밖에, 다른 값들은 각각의 이름 그대로 중괄호 안에 넣으면 됨.

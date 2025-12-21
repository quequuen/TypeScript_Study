## tsconfig.json

: 컴파일러가 코드를 어떻게 처리할지 설정하는 파일.

- 보통 최상위 폴더에 위치.
- compilerOptions: 컴파일러 옵션 설정
  - baseUrl: 모듈 해석의 기본 경로 설정.(현재 src 폴더로 설정되어 있음)
  - paths: 모듈 경로 별칭 설정.
    ex) "@utils/_": ["utils/_"]
    ☞ import { func } from '@utils/func';
  - strictNullChecks: null과 undefined에 대한 엄격한 검사 설정.
    ex) true로 설정 시 null과 undefined는 각각 null, undefined 타입만 할당 가능.
  - strict: 엄격한 타입 검사 옵션 일괄 설정.
    ☞ strictNullChecks, noImplicitAny 등 여러 엄격한 검사 옵션을 한번에 활성화.
  - target: 어떤 버전의 자바스크립트로 컴파일할지 설정.
  - module: 모듈 시스템 설정.
  - strict: 엄격한 타입 검사 옵션 활성화.
  - outDir: 컴파일된 파일이 저장될 디렉토리 지정.
  - rootDir: 소스 파일의 루트 디렉토리 지정.

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
    ☞ 프로젝트 초기 설정 시 true로 설정하는 것이 좋음.
  - resolveJsonModule: JSON 파일을 모듈로 가져올 수 있도록 설정.
    ex) import data from './data.json';
  - esModuleInterop: CommonJS 모듈과의 호환성 설정.
    ☞ 기본 내보내기와 이름 있는 내보내기를 혼합하여 사용할 수 있도록 함.
- 실무에서 자주 사용하는 또 다른 옵션들
  - target: 어떤 버전의 자바스크립트로 컴파일할지 설정.
    ☞ 예: "es5", "es6", "es2017", "esnext" 등.
  - module: 모듈 시스템 설정.
    ☞ 예: "commonjs", "es6", "esnext" 등.
  - outDir: 컴파일된 파일이 저장될 디렉토리 지정.
    ☞ 예: "./dist"
  - rootDir: 소스 파일의 루트 디렉토리 지정.
    ☞ 예: "./src"
  - moduleResolution: 모듈 해석 전략 설정.
  - forceConsistentCasingInFileNames: 파일 이름의 대소문자 일관성 강제 설정.
  - include(포함)/exclude(제외): 컴파일에 포함하거나 제외할 파일 및 디렉토리 지정.
    ☞ 예: "include": ["src/**/*"], "exclude": ["node_modules", "dist"]
- 타입 검사 최적화에 관련된 옵션들
  - skipLibCheck: 라이브러리 파일의 타입 검사 건너뛰기 설정.
    ☞ true로 설정 시 컴파일 속도 향상 가능.
  - noEmit: 컴파일된 출력을 생성하지 않도록 설정.
    ☞ true로 설정 시 타입 검사만 수행하고자 할 때 유용.
  - incremental: 증분 컴파일 활성화 설정.
    ☞ 이전 빌드 정보를 저장하여 이후 빌드 시 속도 향상 가능.

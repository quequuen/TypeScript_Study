# TypeScript_Study

This repository contains study materials and examples for learning TypeScript. It covers various topics including basic types, interfaces, classes, generics, and advanced TypeScript features.

## Table of Contents

- [객체지향 프로그래밍](review/객체지향%20프로그래밍.md#객체지향-프로그래밍)
  - [캡슐화](review/객체지향%20프로그래밍.md#캡슐화)
  - [오버라이딩](review/객체지향%20프로그래밍.md#오버라이딩)
  - [추상 클래스](review/객체지향%20프로그래밍.md#추상-클래스)

## 타입 시스템

- [기본 자료형](review/기본%20자료형.md)

  - 타입 선언과 타입 추론
  - any 타입의 문제점
  - BigInt 자료형과 설정

- [배열 · 튜플 · 객체](review/배열.md)

  - 배열 구조 (1차원 / 다차원)
  - 배열 메서드와 타입 추론
  - 읽기 전용 배열 (ReadonlyArray)
  - 튜플과 배열의 차이
  - 객체 타입과 구조적 타이핑

- [인터페이스 기초](review/인터페이스.md)

  - 인터페이스 정의와 객체 타이핑
  - 선택적 속성(`?`)과 타입 가드 활용
  - 읽기 전용 속성(`readonly`)과 참조 타입 주의사항
  - 함수 타입 정의 (인터페이스를 활용한 호출 시그니처)
  - 인덱스 시그니처와 매핑된 타입(`in keyof`) 비교

  - [인터페이스 활용](review/인터페이스.md)

  - 인터페이스 확장(extends)과 다중 상속
  - 속성 충돌 해결 및 유니온 타입 활용
  - 중첩 인터페이스와 선언 병합(Declaration Merging)
  - 클래스 청사진 설계 (implements)
  - 초과 속성 검사(Excess Property Checks)와 우회 방법
  - Interface vs Type Alias (교차 타입 & 확장성 비교)

- [고급 타입들](review/고급%20타입들.md#고급-타입들)

  - 인터섹션 타입
  - 유니온 타입
  - 타입 가드
  - 리터럴 타입

- [고급 타입들 (심화)](<review/고급%20타입들(심화).md>)

  - 맵드 타입과 인덱스 시그니처
  - 템플릿 리터럴 타입
  - 사용자 정의 타입 가드
  - 타입 단언과 주의점

- [내장 제네릭 타입과 유틸리티 타입](review/내장%20제네릭%20타입과%20유틸리티%20타입.md)

  - WeakMap / WeakSet 개념
  - 비동기 프로그래밍 (Promise, async / await)
  - Utility Types  
    (`Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Record`,  
    `Extract`, `NonNullable`, `Parameters`, `ReturnType`)

- [네임스페이스와 모듈](review/네임스페이스와%20모듈.md)

  - namespace를 통한 이름 충돌 방지
  - ES Module(import / export) 구조
  - 타입과 유틸리티의 모듈화
  - namespace vs module 비교 및 실무 기준

- [열거형 (Enum)](review/열거형.md)

  - 숫자 열거형과 문자열 열거형
  - 자동 값 할당 규칙
  - const enum의 컴파일 차이
  - enum vs 유니언 타입

- [제네릭 기초](review/제네릭_기초.md)

  - 제네릭 함수 정의 및 타입 매개변수(`T`)
  - 다중 제네릭 매개변수(`T`, `U`) 활용
  - 제네릭 타입 별칭과 인터페이스 조합
  - 실무형 인터페이스(API 응답 결과, Dictionary) 설계
  - 클래스에서의 제네릭 적용과 은닉화

- [제네릭 제약과 조건부 타입](review/제네릭_심화.md)

  - `extends`를 이용한 제네릭 제약 조건
  - `keyof` 연산자와 제네릭의 조합
  - 조건부 타입(Conditional Types)의 기본 원리
  - `infer` 키워드를 활용한 타입 추론 변수 활용
  - 실무 활용 예제 (반환 타입 추출, Non-nullable 처리)

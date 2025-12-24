// 전역 속성과 함수로 선언 가능한 파일
declare global {
  interface Window {
    myAppName: string;
  }
  function myGlobalAlert(message: string): void;
}

export {};
// 해당 파일이 ts 모듈로 처리 되도록 함.

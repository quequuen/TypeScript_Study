// 간단한 함수, 객체, 클래스를 선언하여 export하는 모듈
// 타입스크립트가 아닌 자바스크립트 문법으로 작성됨
// <!-- PAID_START -->
function greet(name) {
  return `Hello, My name is ${name}!`;
}

function add(a, b) {
  return a + b;
}

const config = {
  appName: "TypeScript Study",
  version: "1.0.0",
};

class Logger {
  constructor(level) {
    this.level = level;
  }

  log(message) {
    console.log(`[${this.level}] ${message}`);
  }
}

module.exports = {
  greet,
  add,
  config,
  Logger,
};

// <!-- PAID_END -->

const App = require("../src/App");

expect.extend({
  toBeDistinct(received) {
    const pass =
      received && new Set(received).size === received.length;
      if (pass) {
        return {
          message: () => `expected ${received} string is unique`,
          pass: true,
        };
      } else {
        return {
          message: () => `expected ${received} string is not to unique`,
          pass: false,
      };
    }
  },
});

describe("숫자 야구 게임", () => {
  test("숫자 랜덤 생성 테스트", () => {
    const app = new App();
    
    expect(app.getThreeRandom()).toMatch(/[1-9]{3}/g); // 1-9 범위의 세 자리 숫자인지
    expect(app.getThreeRandom()).toBeDistinct();
  });
  
  test("시작 문구 출력 테스트", () => {
    const app = new App();
    
    expect(app.printStart()).toBeUndefined();
  });
});
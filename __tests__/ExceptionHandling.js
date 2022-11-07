const App = require("../src/App");

describe("숫자 게임 테스트", () => {
  test("유저가 1개의 값을 입력 한 경우", () => {
    const app = new App();
    const result = app.checkError([1]);
    expect(result).toThrow();
  });
  test("유저가 2개의 값을 입력 한 경우", () => {
    const app = new App();
    const result = app.checkError([1, 2]);
    expect(result).toThrow(); 
  });
  test("유저가 숫자가 아닌 다른 값을 입력 한 경우", () => {
    const app = new App();
    const result = app.checkError([1, 2, 'a']);
    expect(result).toThrow(); 
  });
  test("유저가 중복된 숫자를 입력 한 경우", () => {
    const app = new App();
    const result = app.checkError([1, 1, 1]);
    expect(result).toThrow(); 
  });
  test("유저가 중복된 숫자와 문자를 입력 한 경우", () => {
    const app = new App();
    const result = app.checkError([1, 1, 'a']);
    expect(result).toThrow(); 
  });
})

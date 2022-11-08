const App = require("../src/App");

describe("함수 기능단위 테스트", () => {
  test("score객체의 프로퍼티 value를 바꾸는 함수", () => {
    const app = new App();
    const userInput = "123";
    const currentAnswer = [1, 7, 8];
    expect(app.checkInputIsCorrect(userInput, currentAnswer)).toEqual({
      strike: 1,
      ball: 0,
    });
  });

  test("사용자 score객체의 점수를 확인하여 힌트 생성하는 함수", () => {
    const app = new App();
    const scoreObj = { strike: 1, ball: 0 };
    expect(app.createHint(scoreObj)).toBe("1스트라이크");
  });
});

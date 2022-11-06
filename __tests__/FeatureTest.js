const App = require("../src/App");

describe("기능 목록 테스트", () => {
  test("컴퓨터가 랜덤 숫자 배열을 얻음", () => {
    const app = new App();
    app.setRandomNumbers();

    app.computer.forEach((number) => {
      expect(number >= 1 && number <= 9).toBeTruthy();
    });

    const [first, second, third] = app.computer;

    expect(first !== second).toBeTruthy();
    expect(first !== third).toBeTruthy();
    expect(second !== third).toBeTruthy();
  });
});

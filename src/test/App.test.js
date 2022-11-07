const App = require("../App.js");

describe("컴퓨터 난수 생성 테스트", () => {
  let app;
  beforeEach(() => {
    app = new App();
  });

  test("배열의 길이가 3인지 검사", () => {
    app.generateRandomNumber();

    expect(app.computerNumber).toHaveLength(3);
  });

  test("서로 다른 수 3개인지 검사", () => {
    app.generateRandomNumber();
    const set = new Set(app.computerNumber);

    expect([...set]).toHaveLength(3);
  });
});

const App = require("../src/App");

describe("힌트 산출 테스트", () => {
  test("볼과 스트라이크가 함께 있을 때", () => {
    const correctNumber = "123";
    const inputNumber = "321";

    const app = new App();
    expect(app.getHint(correctNumber, inputNumber)).toEqual("2볼 1스트라이크");
  });

  test("블, 스트라이크 모두 없을 때", () => {
    const correctNumber = "123";
    const inputNumber = "456";

    const app = new App();
    expect(app.getHint(correctNumber, inputNumber)).toEqual("낫싱");
  });

  test("스트라이크만 존재할 때", () => {
    const correctNumber = "123";
    const inputNumber = "163";

    const app = new App();
    expect(app.getHint(correctNumber, inputNumber)).toEqual("2스트라이크");
  });

  test("볼만 존재할 때", () => {
    const correctNumber = "123";
    const inputNumber = "614";

    const app = new App();
    expect(app.getHint(correctNumber, inputNumber)).toEqual("1볼 ");
  });
});

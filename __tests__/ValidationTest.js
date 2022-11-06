const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

afterAll(() => {
  MissionUtils.Console.close();
});

describe("결과값 유효성 테스트", () => {
  test("숫자가 전부 일치하지 않는 경우", () => {
    const app = new App();
    app.answer = [5, 8, 9];
    expect(app.validateAnswer("123")).toStrictEqual({ ball: 0, strike: 0 });
  });

  test("다른 위치에 같은 숫자가 일부 일치하는 경우", () => {
    const app = new App();
    app.answer = [5, 8, 9];
    expect(app.validateAnswer("967")).toStrictEqual({ ball: 1, strike: 0 });
  });

  test("같은 위치에 같은 숫자가 일부 일치하는 경우", () => {
    const app = new App();
    app.answer = [5, 8, 9];
    expect(app.validateAnswer("489")).toStrictEqual({ ball: 0, strike: 2 });
  });

  test("같은 위치에 같은 숫자가 일부 일치하고, 다른 위치에 같은 숫자가 일부 일치하는 경우", () => {
    const app = new App();
    app.answer = [5, 8, 9];
    expect(app.validateAnswer("839")).toStrictEqual({ ball: 1, strike: 1 });
  });

  test("같은 위치에 같은 숫자가 전부 일치하는 경우", () => {
    const app = new App();
    app.answer = [5, 8, 9];
    expect(app.validateAnswer("589")).toStrictEqual({ ball: 0, strike: 3 });
  });
});

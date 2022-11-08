const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

afterAll(() => {
  MissionUtils.Console.close();
});

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("출력값 유효성 테스트", () => {
  test("숫자가 전부 일치하지 않는 경우", () => {
    const logSpy = getLogSpy();
    const app = new App();
    app.showResult({ ball: 0, strike: 0 });
    expect(logSpy).toBeCalledWith("낫싱");
  });

  test("다른 위치에 같은 숫자가 일부 일치하는 경우", () => {
    const logSpy = getLogSpy();
    const app = new App();
    app.showResult({ ball: 1, strike: 0 });
    expect(logSpy).toBeCalledWith("1볼");
  });

  test("같은 위치에 같은 숫자가 일부 일치하는 경우", () => {
    const logSpy = getLogSpy();
    const app = new App();
    app.showResult({ ball: 0, strike: 2 });
    expect(logSpy).toBeCalledWith("2스트라이크");
  });

  test("같은 위치에 같은 숫자가 일부 일치하고, 다른 위치에 같은 숫자가 일부 일치하는 경우", () => {
    const logSpy = getLogSpy();
    const app = new App();
    app.showResult({ ball: 1, strike: 1 });
    expect(logSpy).toBeCalledWith("1볼 1스트라이크");
  });

  test("같은 위치에 같은 숫자가 전부 일치하는 경우", () => {
    const logSpy = getLogSpy();
    const app = new App();
    app.showResult({ ball: 0, strike: 3 });
    expect(logSpy).toBeCalledWith("3스트라이크");
  });
});

const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("숫자 야구 게임", () => {
  test("gameWin", () => {
    const logSpy = getLogSpy();

    const app = new App();
    app.gameWin();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("3스트라이크"));
  });

  test("notWin", () => {
    const logSpy = getLogSpy();

    const app = new App();
    app.computerNumber = ["1", "2", "4"];
    app.userNumber = ["1", "2", "3"];
    app.notWin();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("2스트라이크"));
  });

  test("numberValidate", () => {
    expect(() => {
      const app = new App();
      app.userNumber = ["1", "1", "3", "4"];
      app.numberValidate();
    }).toThrow();
  });
});

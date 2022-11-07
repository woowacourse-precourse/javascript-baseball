const MissionUtils = require("@woowacourse/mission-utils");
const App = require("./App");

const getSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("숫자 야구 게임", () => {
  test("print 메소드로 받은값을 출력", () => {
    const logSpy = getSpy();
    const app = new App();
    const input = "test";
    app.print(input);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(input));
  });
});

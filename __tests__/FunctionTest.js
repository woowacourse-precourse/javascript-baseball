const { App, printer, refNumbersGetter } = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("숫자 야구 게임 시작 문구", () => {
  test("숫자 야구 게임을 시작합니다.", () => {
    const logSpy = getLogSpy();
    const message = "숫자 야구 게임을 시작합니다.";

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message));
  });
});

describe("목표값 테스트", () => {
  test("목표값 개수", () => {
    const refNumbersArr = refNumbersGetter();
    expect(refNumbersArr.length).toEqual(3);
  });
});

const MissionUtils = require("@woowacourse/mission-utils");
const Printer = require("../src/Printer");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("Printer 관련 Test", () => {
  let logSpy;
  let printer;
  beforeEach(() => {
    logSpy = getLogSpy();
    printer = new Printer();
  });

  test("printNothing Test", () => {
    printer.printNothing(0, 0);
    expect(logSpy).toHaveBeenCalledWith("낫싱");
  });

  test("printStrike Test", () => {
    printer.printStrike(0, 1);
    expect(logSpy).toHaveBeenCalledWith("1스트라이크");
  });

  test("printBall Test", () => {
    printer.printBall(2, 0);
    expect(logSpy).toHaveBeenCalledWith("2볼");
  });

  test("printBallAndStrike Test", () => {
    printer.printBallAndStrike(2, 1);
    expect(logSpy).toHaveBeenCalledWith("2볼 1스트라이크");
  });
});

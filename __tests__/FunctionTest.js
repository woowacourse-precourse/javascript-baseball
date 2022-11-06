const MissionUtils = require("@woowacourse/mission-utils");
const { Output } = require("../src/Output");
const Parse = require("../src/Parse");

const getPrintLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("기능 테스트", () => {
  test("화면에 문구 출력", () => {
    const logSpy = getPrintLogSpy();

    Output.printToUser("Hello");

    expect(logSpy).toBeCalledTimes(1);
    expect(logSpy).toBeCalledWith("Hello");
  });

  test("숫자를 배열로 바꾸기", () => {
    const number = 123;
    const parsed = Parse.numberToArray(number);
    expect(parsed).toEqual([1, 2, 3]);
  });
});

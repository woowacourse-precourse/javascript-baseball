const { print, close, readLine, pickNumberInRange } = require("../src/Utils");
const MissionUtils = require("@woowacourse/mission-utils");

describe("utils 정상 작동 테스트", () => {
  test("print 출력 테스트", () => {
    const printMocking = jest.spyOn(MissionUtils.Console, "print");
    print("안녕하세여");
    expect(printMocking).toBeCalledWith("안녕하세여");
  });

  test("close 작동 테스트", () => {
    const closeMocking = jest.spyOn(MissionUtils.Console, "close");
    close();
    expect(closeMocking).toBeCalledWith();
  });

  test("readLine 작동 테스트", () => {
    const readLineMocking = jest.spyOn(MissionUtils.Console, "readLine");
    const callback = (input) => input;
    readLine("숫자를 입력해주세요", callback);
    expect(readLineMocking).toBeCalledWith("숫자를 입력해주세요", callback);
  });

  test("pickNumberInRange 작동 테스트", () => {
    const pickNumberInRangeMocking = jest.spyOn(MissionUtils.Random, "pickNumberInRange");
    pickNumberInRange(1, 9);
    expect(pickNumberInRangeMocking).toBeCalledWith(1, 9);
  });
});

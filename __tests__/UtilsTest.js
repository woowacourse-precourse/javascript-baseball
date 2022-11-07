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
});

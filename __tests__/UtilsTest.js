const { print, close, readLine, pickNumberInRange } = require("../src/Utils");
const MissionUtils = require("@woowacourse/mission-utils");


describe("utils 정상 작동 테스트", () => {
  test("print 출력 테스트", () => {
    const printTest = jest.spyOn(MissionUtils.Console, "print");
    print("안녕하세여");
    expect(printTest).toBeCalledWith("안녕하세여");
  });
});

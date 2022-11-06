const MissionUtils = require("@woowacourse/mission-utils");
const { Output } = require("../src/Output");

describe("기능 테스트", () => {
  test("화면에 문구 출력", () => {
    const outputSpy = jest.spyOn(MissionUtils.Console, "print");

    Output.printToUser("Hello");

    expect(outputSpy).toBeCalledTimes(1);
    expect(outputSpy).toBeCalledWith("Hello");
  });
});

const MissionUtils = require("@woowacourse/mission-utils");

describe("원하는 문구 출력 확인", () => {
  test("환영 인사 출력", () => {
    expect(MissionUtils.Console.print("안녕하세요")).toBe(
      cosole.log("안녕하세요")
    );
  });
});

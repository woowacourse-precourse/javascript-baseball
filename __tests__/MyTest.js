const MissionUtils = require("@woowacourse/mission-utils");

describe("마이테스트입니다.", () => {
  test("첫번째 테스트입니다", () => {
    const array = [1, 2];
    console.log(MissionUtils);
    expect(array).toContain(2);
  });
});


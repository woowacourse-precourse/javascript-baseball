const Test = require("../src/test");
const MissionUtils = require("@woowacourse/mission-utils");

describe(
  test("테스트 하기", () => {
    const arr = [];
    const result = arr.push(3);
    expect(result).toBe([3]);
  })
);

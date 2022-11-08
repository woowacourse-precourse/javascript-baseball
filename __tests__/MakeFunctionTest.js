const MissionUtils = require("@woowacourse/mission-utils");
const { makeRandomNumber, makeBallStrikeCount } = require("../src/Make");

describe("makeRandomNumber 함수 테스트", () => {
  test("서로다른 3개의 숫자가 만들어 지는지 여부", () => {
    MissionUtils.Random.pickNumberInRange = jest.fn((start, end) =>
      Math.floor(Math.random() * end + start)
    );
    expect(
      makeRandomNumber().filter((num) => {
        if (typeof num === "number" && num >= 1 && num <= 9) return true;
        return false;
      }).length
    ).toEqual(3);
  });
});

describe("makeBallStrikeCount 함수 테스트", () => {
  test("임의수 테스트 1", () => {
    expect(makeBallStrikeCount("123", [1, 4, 2])).toEqual({
      strike: 1,
      ball: 1,
    });
  });
  test("임의의수 테스트 2", () => {
    expect(makeBallStrikeCount("324", [4, 2, 3])).toEqual({
      strike: 1,
      ball: 2,
    });
  });
});

const MissionUtils = require("@woowacourse/mission-utils");
const {
  makeRandomNumber,
  makeBallStrikeCount,
  makeHint,
} = require("../src/Make");

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

describe("checkBallStrikeCount 함수 테스트", () => {
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

describe("makeHint 함수 테스트", () => {
  test("아무것도 일치하지 않는 경우", () => {
    expect(makeHint(0, 0)).toEqual("낫싱");
  });
  test("스트라이크만 있는경우", () => {
    expect(makeHint(2, 0)).toEqual("2스트라이크");
  });
  test("볼만 있는경우", () => {
    expect(makeHint(0, 2)).toEqual("2볼");
  });
  test("스트라이크 볼 모두 있는경우", () => {
    expect(makeHint(1, 1)).toEqual("1볼 1스트라이크");
  });
});

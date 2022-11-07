const getScore = require("../src/utils/getScore");

describe("점수 테스트", () => {
  test("1볼 1스트라이크", () => {
    expect(getScore([1, 2, 3], [1, 6, 2])).toEqual({
      strike: 1,
      ball: 1,
    });
  });
  test("2볼", () => {
    expect(getScore([1, 3, 5], [5, 6, 1])).toEqual({
      strike: 0,
      ball: 2,
    });
  });
  test("낫싱", () => {
    expect(getScore([1, 3, 5], [2, 6, 9])).toEqual({
      strike: 0,
      ball: 0,
    });
  });
});

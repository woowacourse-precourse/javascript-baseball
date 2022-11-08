const { makeCount } = require("../src/util/MakeCount");

describe("카운트 타당성 테스트", () => {
  test("낫싱 테스트", () => {
    expect(makeCount([1, 2, 3], [4, 5, 6])).toEqual({ strike: 0, ball: 0 });
  });
  test("1스트라이크 테스트", () => {
    expect(makeCount([1, 2, 3], [1, 5, 6])).toEqual({ strike: 1, ball: 0 });
  });
  test("2스트라이크 테스트", () => {
    expect(makeCount([1, 2, 3], [1, 2, 6])).toEqual({ strike: 2, ball: 0 });
  });
  test("1볼 테스트", () => {
    expect(makeCount([1, 2, 3], [4, 5, 1])).toEqual({ strike: 0, ball: 1 });
  });
  test("2볼 테스트", () => {
    expect(makeCount([1, 2, 3], [3, 4, 2])).toEqual({ strike: 0, ball: 2 });
  });
  test("3볼 테스트", () => {
    expect(makeCount([1, 2, 3], [3, 1, 2])).toEqual({ strike: 0, ball: 3 });
  });
  test("2볼 1스트라이크 테스트", () => {
    expect(makeCount([6, 8, 3], [3, 8, 6])).toEqual({ strike: 1, ball: 2 });
  });
});

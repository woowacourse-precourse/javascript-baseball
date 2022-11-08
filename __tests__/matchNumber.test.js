//기능1. matchNumber함수 검증 : 숫자, 숫자의 위치 일치여부 가려내는 기능 검증

const fn = require("../src/gameFunctions");

describe("함수 동작 테스트", () => {
  test("기본 테스트1", () => {
    expect(fn.matchNumber(["1", "2", "3"], ["8", "1", "3"])).toEqual(
      "1볼 1스트라이크"
    );
  });

  test("기본 테스트2", () => {
    expect(fn.matchNumber(["5", "2", "1"], ["5", "1", "2"])).toEqual(
      "2볼 1스트라이크"
    );
  });

  test("기본 테스트2", () => {
    expect(fn.matchNumber(["7", "2", "1"], ["5", "1", "2"])).toEqual("2볼");
  });

  test("0볼 검증", () => {
    expect(fn.matchNumber(["1", "2", "3"], ["1", "2", "3"])).toEqual(
      "3스트라이크"
    );
  });

  test("낫싱 검증", () => {
    expect(fn.matchNumber(["1", "2", "3"], ["4", "5", "6"])).toEqual("낫싱");
  });

  test("0스트라이크 검증", () => {
    expect(fn.matchNumber(["3", "1", "5"], ["1", "2", "3"])).toEqual("2볼");
  });
});

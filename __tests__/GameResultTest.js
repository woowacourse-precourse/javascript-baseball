const { gameResultOutput } = require("../src/gameFunctions");

describe("볼,스트라이크 개수가 주어졌을 때 올바른 값이 반환되는지 체크", () => {
  test("볼 0개 ,스트라이크 0개", () => {
    const result = gameResultOutput(0, 0);
    expect(result).toEqual(0);
  });
  test("볼 1개 ,스트라이크 0개", () => {
    const result = gameResultOutput(0, 1);
    expect(result).toEqual(0);
  });
  test("볼 2개 ,스트라이크 0개", () => {
    const result = gameResultOutput(0, 2);
    expect(result).toEqual(0);
  });
  test("볼 1개 ,스트라이크 1개", () => {
    const result = gameResultOutput(1, 1);
    expect(result).toEqual(0);
  });
  test("볼 0개 ,스트라이크 1개", () => {
    const result = gameResultOutput(1, 0);
    expect(result).toEqual(0);
  });
  test("볼 2개 ,스트라이크 1개", () => {
    const result = gameResultOutput(1, 2);
    expect(result).toEqual(0);
  });
  test("스트라이크 3개", () => {
    const result = gameResultOutput(3, 0);
    expect(result).toEqual(1);
  });
});

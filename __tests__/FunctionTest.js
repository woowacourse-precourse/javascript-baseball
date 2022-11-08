const { Console } = require("@woowacourse/mission-utils");
const Baseball = require("../src/Baseball");
const baseball = new Baseball();

describe("기능 테스트", () => {
  test("getScore 함수 테스트", () => {
    const computer = [3, 5, 9];
    const user = [3, 5, 9];
    const score = baseball.getScore(computer, user);

    expect(score).toEqual([3, 0]);
  });

  test("getScore 함수 테스트", () => {
    const computer = [3, 5, 9];
    const user = [5, 3, 9];
    const score = baseball.getScore(computer, user);

    expect(score).toEqual([1, 2]);
  });

  test("getScore 함수 테스트", () => {
    const computer = [3, 5, 9];
    const user = [4, 9, 3];
    const score = baseball.getScore(computer, user);

    expect(score).toEqual([0, 2]);
  });

  test("printResult 함수 테스트", () => {
    const strike = 2;
    const ball = 0;
    const result = baseball.printResult(strike, ball);

    expect(result).toEqual(Console.print("2스트라이크"));
  });

  test("printResult 함수 테스트", () => {
    const strike = 2;
    const ball = 1;
    const result = baseball.printResult(strike, ball);

    expect(result).toEqual(Console.print("1볼 2스트라이크"));
  });

  test("printResult 함수 테스트", () => {
    const strike = 0;
    const ball = 0;
    const result = baseball.printResult(strike, ball);

    expect(result).toEqual(Console.print("낫싱"));
  });
});

const MissionUtils = require("@woowacourse/mission-utils");
const Game = require("../src/Game");

describe("Game 메서드 테스트", () => {
  test("랜덤 숫자 출력 테스트", () => {
    const game = new Game();
    const result = game.setRandomNumber();

    expect(result).toHaveLength(3);
  });

  test("숫자 유효성 테스트", () => {
    const game = new Game();

    const input1 = 123;
    const input2 = 1234;
    const input3 = 12;
    const input4 = "abc";
    const input5 = "abcd";
    const input6 = "ab12";

    const result1 = game.isValidNumber(input1);
    const result2 = game.isValidNumber(input2);
    const result3 = game.isValidNumber(input3);
    const result4 = game.isValidNumber(input4);
    const result5 = game.isValidNumber(input5);
    const result6 = game.isValidNumber(input6);

    expect(result1).toEqual(true);
    expect(result2).toEqual(false);
    expect(result3).toEqual(false);
    expect(result4).toEqual(false);
    expect(result5).toEqual(false);
    expect(result6).toEqual(false);
  });

  test("숫자 비교 결과 테스트", () => {
    const game = new Game();
    const result1 = game.compareNumber([1, 0], [1, 0], [0, 0]);
    const result2 = game.compareNumber([9, 0], [9, 1], [0, 0]);
    const result3 = game.compareNumber([5, 0], [3, 2], [0, 0]);

    expect(result1).toEqual([1, 0]);
    expect(result2).toEqual([0, 1]);
    expect(result3).toEqual([0, 0]);
  });
});

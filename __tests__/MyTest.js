const MissionUtils = require("@woowacourse/mission-utils");
const { getRandomNumber, getUserPickNumber } = require("../src/BaseballUtils");

const myConsole = MissionUtils.Console;

describe("유틸리티 테스트", () => {
  test("컴퓨터 숫자 배열 크기 테스트", () => {
    console.log(getRandomNumber());
    expect(getRandomNumber().length).toBe(3);
  });

  test("컴퓨터 배열 타입 테스트", () => {
    console.log(getRandomNumber());
    getRandomNumber().forEach((number) => {
      expect(typeof number === "number");
    });
  });
});

const MissionUtils = require("@woowacourse/mission-utils");
const getThreeRandomNumbers = require("../src/ThreeRandomNumbers");

describe("숫자 뽑기 테스트", () => {
  afterEach(() => {
    MissionUtils.Console.close();
  });

  test("숫자 개수가 3개인지 확인", () => {
    const threeRandomNumber = getThreeRandomNumbers();

    expect(threeRandomNumber).toHaveLength(3);
  });

  test("숫자 범위가 1부터 9까지인지 확인", () => {
    const threeRandomNumber = getThreeRandomNumbers();

    threeRandomNumber.split("").forEach((number) => {
      expect(Number(number)).toBeGreaterThanOrEqual(1);
      expect(Number(number)).toBeLessThanOrEqual(9);
    });
  });

  test("각 숫자가 중복되어 있는지 확인", () => {
    const threeRandomNumber = getThreeRandomNumbers();
    const nonduplicatedNumber = [...new Set(threeRandomNumber.split(""))];

    expect(nonduplicatedNumber.length).toEqual(3);
  });
});

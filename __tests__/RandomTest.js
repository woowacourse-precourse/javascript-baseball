const { randomNumberSetting } = require("../src/gameFunctions");

describe("랜덤 숫자 생성 테스트", () => {
  test("숫자가 3개 생성되는 지 테스트", () => {
    const result = randomNumberSetting().length;
    expect(result).toEqual(3);
  });
  test("1~9까지 범위의 숫자가 생성되는 지 테스트", () => {
    const result = randomNumberSetting().includes("0");
    expect(result).toEqual(false);
  });
});

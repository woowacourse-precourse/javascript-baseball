const {
  isThreeDigits,
  isIncludesZero,
  isUniqueNumbers,
} = require("../src/Validation");

describe("플레이 입력값 유효성 검사", () => {
  test("3자리 수 인지 검사", () => {
    expect(isThreeDigits("123")).toEqual(true);
    expect(isThreeDigits(123)).toEqual(true);
    expect(isThreeDigits("")).toEqual(false);
    expect(isThreeDigits(1234)).toEqual(false);
  });
  test("0이 포함되어 있는지 검사", () => {
    expect(isIncludesZero("0")).toEqual(true);
    expect(isIncludesZero(0)).toEqual(true);
    expect(isIncludesZero(120)).toEqual(true);
    expect(isIncludesZero("123")).toEqual(false);
    expect(isIncludesZero("777")).toEqual(false);
  });
  test("입력된 숫자가 모두 다른 숫자인지 검사", () => {
    expect(isUniqueNumbers("123")).toEqual(true);
    expect(isUniqueNumbers(123)).toEqual(true);
    expect(isUniqueNumbers(111)).toEqual(false);
    expect(isUniqueNumbers("111")).toEqual(false);
    expect(isUniqueNumbers("181")).toEqual(false);
  });
});

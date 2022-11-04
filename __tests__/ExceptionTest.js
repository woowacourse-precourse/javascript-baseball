const {
  isNotNumber,
  isContainsNumberZero,
  isDuplicate,
  isExceptionDetection,
} = require("../src/exceptionFunctions");

describe("숫자로만 이루어져 있는지 테스트", () => {
  test("숫자로만 이루어져 있을 경우", () => {
    expect(isNotNumber("123")).toEqual(false);
  });
  test("숫자와 문자가 섞여있을 경우", () => {
    expect(isNotNumber("s123")).toEqual(true);
  });
  test("숫자와 특수문자가 섞여있을 경우", () => {
    expect(isNotNumber("123,005")).toEqual(true);
  });
});

describe("숫자 0이 포함되어 있는지 테스트", () => {
  test("0이 없을 경우", () => {
    expect(isContainsNumberZero("123")).toEqual(false);
  });
  test("0이 있을 경우", () => {
    expect(isContainsNumberZero("100")).toEqual(true);
  });
});

describe("숫자의 중복이 있는지 테스트", () => {
  test("중복이 있는 경우", () => {
    expect(isDuplicate("121")).toEqual(true);
  });
  test("중복이 없는 경우", () => {
    expect(isDuplicate("456")).toEqual(false);
  });
});

describe("숫자의 개수가 3개가 맞는지 테스트", () => {
  test("숫자가 3개인 경우", () => {
    expect(isExceptionDetection("123")).toEqual(false);
  });
  test("숫자가 3개가 아닌 경우", () => {
    expect(isExceptionDetection("4567")).toEqual(true);
  });
});

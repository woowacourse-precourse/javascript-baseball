const { generateRandomDigit, isExist } = require("../src/App");

describe("1자리 랜덤 숫자 발생", () => {
  test("1자리 랜덤 숫자 발생", () => {
    expect(generateRandomDigit()).toBeTruthy();
  });
});

describe("1자리 랜덤 숫자가 이미 존재하는지 판별", () => {
  test("case1", () => {
    expect(isExist([1, 2, 3], 1)).toBe(true);
  });
  test("case2", () => {
    expect(isExist([1, 2, 3], 4)).toBe(false);
  });
});

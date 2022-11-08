const isValidNum = require("../src/util/IsValidNum");

describe("입력값 유효성 테스트", () => {
  test("0포함 불가 테스트", () => {
    expect(isValidNum([0, 0, 0])).toEqual(false);
    expect(isValidNum([1, 0, 0])).toEqual(false);
    expect(isValidNum([1, 2, 0])).toEqual(false);
  });
  test("중복값 불가 테스트", () => {
    expect(isValidNum([2, 2, 2])).toEqual(false);
    expect(isValidNum([2, 2, 1])).toEqual(false);
    expect(isValidNum([2, 1, 1])).toEqual(false);
  });
  test("문자열 불가 테스트", () => {
    expect(isValidNum(["a", 2, 2])).toEqual(false);
    expect(isValidNum([2, "a", 1])).toEqual(false);
  });
  test("입력값이 3개가 아닐 때 테스트", () => {
    expect(isValidNum([4, 5, 2, 2])).toEqual(false);
    expect(isValidNum([2, 2])).toEqual(false);
    expect(isValidNum([1])).toEqual(false);
    expect(isValidNum([])).toEqual(false);
  });
});

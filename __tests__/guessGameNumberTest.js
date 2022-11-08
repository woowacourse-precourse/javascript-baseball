const {
  throwGuessException,
  convertToNumberArray,
  isNothing,
} = require("../src/App");

describe("추측 숫자를 문자열로 입력받으면 숫자배열로 변환해주는 기능", () => {
  test("case1", () => {
    expect(convertToNumberArray("123")).toStrictEqual([1, 2, 3]);
  });
});

describe("추측 숫자 입력받고 형식이 잘못됐을 때 예외처리하고 종료", () => {
  test("case1", () => {
    expect(() => throwGuessException("12")).toThrow("3자리를 입력해주세요");
  });
  test("case2", () => {
    expect(() => throwGuessException("asd")).toThrow("숫자형식을 입력해주세요");
  });
  test("case3", () => {
    expect(() => throwGuessException("102")).toThrow("0은 포함되지 않습니다");
  });
});

describe("포함된 숫자 유무 판별", () => {
  const gameNumber = [1, 2, 3];
  test("case1", () => {
    expect(isNothing(gameNumber, [3, 4, 5])).toBe(false);
  });
  test("case2", () => {
    expect(isNothing(gameNumber, [1, 2, 3])).toBe(false);
  });
  test("case3", () => {
    expect(isNothing(gameNumber, [6, 8, 4])).toBe(true);
  });
});

const { throwGuessException } = require("../src/App");

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

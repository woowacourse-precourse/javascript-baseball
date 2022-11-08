const fn = require("../src/gameFunctions");

describe("함수 동작 테스트", () => {
  test("예외 테스트 길이초과", () => {
    expect(() => {
        fn.findWrongNumber("1234");
    }).toThrow();
  });
  test("예외 테스트 중복값", () => {
    expect(() => {
        fn.findWrongNumber("avv");
    }).toThrow();
  });
  test("예외 테스트 1~9가 아닌수", () => {
    expect(() => {
        fn.findWrongNumber("012");
    }).toThrow();
  });
  test("예외 테스트 음수", () => {
    expect(() => {
        fn.findWrongNumber("-234");
    }).toThrow();
  });
});

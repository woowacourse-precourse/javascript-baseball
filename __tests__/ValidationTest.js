const Validation = require("../src/Validation");

describe("예외 테스트", () => {
  test("예외테스트 : 중복되는 숫자가 있는 경우", () => {
    expect(() => {
      const valiation = new Validation();
      valiation.isNumberWithoutDuplicate("122");
    }).toThrow("서로 다른 3개의 숫자를 입력해주세요");
  });

  test("예외테스트 : 빈 문자열이 있는 경우", () => {
    expect(() => {
      const valiation = new Validation();
      valiation.isSingleDigitNaturalNumber("12 ");
    }).toThrow("1에서 9까지의 자연수를 입력해주세요");
  });

  test("예외테스트 : 0이 포함될 경우", () => {
    expect(() => {
      const valiation = new Validation();
      valiation.isSingleDigitNaturalNumber("120");
    }).toThrow("1에서 9까지의 자연수를 입력해주세요");
  });

  test("예외테스트 : 1,2가 아닌 숫자를 입력한 경우", () => {
    expect(() => {
      const valiation = new Validation();

      valiation.isConfirmInput("3");
    }).toThrow("새로 시작할려면 1, 종료하려면 2를 입력해주세요.");
  });
});

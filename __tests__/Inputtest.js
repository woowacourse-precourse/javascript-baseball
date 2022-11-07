const Validation = require("../src/Validation");

describe("숫자 야구 게임 입력 테스트", () => {
  test("숫자가 아닌 값 입력", () => {
    const validate = new Validation("1aa");
    expect(() => {
      validate.isInputTypeNumber();
    }).toThrow("숫자가 아닌 값이 입력되었습니다. 게임 종료");
  });
  test("세자리 이상 숫자 입력", () => {
    const validate = new Validation("1234");
    expect(() => {
      validate.checkInputLength();
    }).toThrow("입력값은 세자리 숫자입니다. 게임 종료");
  });
  test("0이 포함된 숫자", () => {
    const validate = new Validation("001");
    expect(() => {
      validate.checkNotIncludeZero();
    }).toThrow("입력값에 0을 포함할 수 없습니다. 게임 종료");
  });

  test("중복된 숫자가 있습니다.", () => {
    const validate = new Validation("112");
    expect(() => {
      validate.isNonDuplicateNumber();
    }).toThrow("중복된 숫자가 있습니다. 게임 종료");
  });
});

const Exception = require("../src/Exception.js");

describe("예외 처리 로직 Exception클래스 - 숫자 확인 테스트", () => {
  test("(정상)입력값 '1345'", () => {
    const input = "1345";
    const exception = new Exception(input);

    expect(exception.isNumber()).toBeTruthy();
  });

  test("(공백 + 문자)입력값 '13 a'", () => {
    const input = "13 a";
    const exception = new Exception(input);

    expect(exception.isNumber()).toBeFalsy();
  });

  test("(끝에 공백)입력값 '13 '", () => {
    const input = "13 ";
    const exception = new Exception(input);

    expect(exception.isNumber()).toBeFalsy();
  });

  test("(앞 뒤 공백)입력값 ' 13 '", () => {
    const input = " 13 ";
    const exception = new Exception(input);

    expect(exception.isNumber()).toBeFalsy();
  });

  test("(문자 포함)입력값 '13ab'", () => {
    const input = "13 ";
    const exception = new Exception(input);
    ``;
    expect(exception.isNumber()).toBeFalsy();
  });
});

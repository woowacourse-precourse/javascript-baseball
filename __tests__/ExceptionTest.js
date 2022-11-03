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

describe("예외 처리 로직 Exception클래스 - 세 개의 다른 숫자들로 이루어져있나요?", () => {
  test("(정상)입력값 '134'", () => {
    const input = "134";
    const exception = new Exception(input);

    expect(exception.is3DifferNumber()).toBeTruthy();
  });

  test("(중복o)입력값 '133'", () => {
    const input = "133";
    const exception = new Exception(input);

    expect(exception.is3DifferNumber()).toBeFalsy();
  });

  test("(중복x, 길이_3x)입력값 '1345'", () => {
    const input = "1345";
    const exception = new Exception(input);

    expect(exception.is3DifferNumber()).toBeFalsy();
  });
});

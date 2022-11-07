const Error = require("../src/utils/Error");

describe("사용자 답 입력 테스트", () => {
  test("validateInputExist: 입력값의 여부 테스트", () => {
    const input = "";
    const error = new Error();

    expect(() => error.isLengthValidate(input)).toThrow();
  });
  test("validateInputLength: 입력값의 길이 테스트", () => {
    const input = "1234";
    const error = new Error();

    expect(() => error.isLengthValidate(input)).toThrow();
  });
  test("validateInputType: 입력값의 타입 테스트", () => {
    const input = "12e";
    const error = new Error();

    expect(() => error.isLengthValidate(input)).toThrow();
  });
  test("validateIsPositiveInteger: 입력값의 양의정수 여부 테스트", () => {
    const input = "-12";
    const error = new Error();

    expect(() => error.isLengthValidate(input)).toThrow();
  });
  test("validateNumRepeat: 입력값의 반복여부 테스트", () => {
    const input = "112";
    const error = new Error();

    expect(() => error.isLengthValidate(input)).toThrow();
  });
});

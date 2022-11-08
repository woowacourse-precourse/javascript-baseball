const isValidUserNumberInput = require("../src/ValidationCheck.js");
const { Console } = require("@woowacourse/mission-utils");

describe("사용자 숫자 유효성 검사 메서드 테스트", () => {
  afterEach(() => {
    Console.close();
  });
  test(`isValidUserNumberInput메서드를 'abc' 인자로 호출하면 output을 return한다.`, () => {
    const input = "abc";
    const result = isValidUserNumberInput(input);
    const output = { isValid: false, errorType: "INVALID_INPUT_TYPE" };
    expect(result).toEqual(output);
  });

  test(`isValidUserNumberInput메서드를 '1234' 인자로 호출하면 output을 return한다.`, () => {
    const input = "1234";
    const result = isValidUserNumberInput(input);
    const output = { isValid: false, errorType: "INVALID_INPUT_LENGTH" };
    expect(result).toEqual(output);
  });

  test(`isValidUserNumberInput메서드를 '112' 인자로 호출하면 output을 return한다.`, () => {
    const input = "112";
    const result = isValidUserNumberInput(input);
    const output = { isValid: false, errorType: "DUPLICATED_NUMBER" };
    expect(result).toEqual(output);
  });

  test(`isValidUserNumberInput메서드를 '012' 인자로 호출하면 output을 return한다.`, () => {
    const input = "012";
    const result = isValidUserNumberInput(input);
    const output = { isValid: false, errorType: "INVALID_INPUT_RANGE" };
    expect(result).toEqual(output);
  });

  test(`isValidUserNumberInput메서드를 '123' 인자로 호출하면 output을 return한다.`, () => {
    const input = "123";
    const result = isValidUserNumberInput(input);
    const output = { isValid: true };
    expect(result).toEqual(output);
  });
});

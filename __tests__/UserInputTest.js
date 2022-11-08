const validate = require("../src/validation/validation");
const { ERROR } = require("../src/constants/constants");

describe("사용자 입력값 유효성 테스트", () => {
  test("임의의 수 길이가 3이 아닐 경우 throw 예외 처리", () => {
    const input = "1";
    const result = () => validate.userInput(input)

    expect(result).toThrowError(new Error(ERROR.INVALID_USER_INPUT))
  });

  test("임의의 수 길이가 3이 아닐 경우 throw 예외 처리", () => {
    const input = "12";
    const result = () => validate.userInput(input)

    expect(result).toThrowError(new Error(ERROR.INVALID_USER_INPUT))
  });

  test("임의의 수 길이가 3이 아닐 경우 throw 예외 처리", () => {
    const input = "1234";
    const result = () => validate.userInput(input)

    expect(result).toThrowError(new Error(ERROR.INVALID_USER_INPUT))
  });

  test("숫자가 아닌 값이 입력될 경우 throw 예외 처리", () => {
    const input = "ㅁㄴㅇ";
    const result = () => validate.userInput(input)

    expect(result).toThrowError(new Error(ERROR.INVALID_USER_INPUT))
  });

  test("숫자가 아닌 값이 입력될 경우 throw 예외 처리", () => {
    const input = "asd";
    const result = () => validate.userInput(input)

    expect(result).toThrowError(new Error(ERROR.INVALID_USER_INPUT))
  });

  test("숫자가 아닌 값이 입력될 경우 throw 예외 처리", () => {
    const input = "!@#";
    const result = () => validate.userInput(input)

    expect(result).toThrowError(new Error(ERROR.INVALID_USER_INPUT))
  });

  test("중복된 숫자가 들어올 경우 throw 예외 처리", () => {
    const input = "111";
    const result = () => validate.userInput(input)

    expect(result).toThrowError(new Error(ERROR.INVALID_USER_INPUT))
  });

  test("중복된 숫자가 들어올 경우 throw 예외 처리", () => {
    const input = "122";
    const result = () => validate.userInput(input)

    expect(result).toThrowError(new Error(ERROR.INVALID_USER_INPUT))
  });

  test("중복된 숫자가 들어올 경우 throw 예외 처리", () => {
    const input = "545";
    const result = () => validate.userInput(input)

    expect(result).toThrowError(new Error(ERROR.INVALID_USER_INPUT))
  });

  test("0을 포함한 숫자가 입력될 경우 throw 예외 처리", () => {
    const input = "012";
    const result = () => validate.userInput(input)

    expect(result).toThrowError(new Error(ERROR.INVALID_USER_INPUT))
  });

  test("0을 포함한 숫자가 입력될 경우 throw 예외 처리", () => {
    const input = "309";
    const result = () => validate.userInput(input)

    expect(result).toThrowError(new Error(ERROR.INVALID_USER_INPUT))
  });

  test("0을 포함한 숫자가 입력될 경우 throw 예외 처리", () => {
    const input = "870";
    const result = () => validate.userInput(input)

    expect(result).toThrowError(new Error(ERROR.INVALID_USER_INPUT))
  });
});

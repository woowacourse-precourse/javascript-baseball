const validate = require("../src/validation/validation");
const { ERROR } = require("../src/constants/constants");

describe("사용자 입력값 유효성 테스트", () => {
  test("재시작/종료 입력값이 1 또는 2가 아닐 경우 throw 예외 처리", () => {
    const input = "0";
    const result = () => validate.restartInput(input);

    expect(result).toThrowError(new Error(ERROR.INVALID_RESTART_INPUT));
  });

  test("재시작/종료 입력값이 1 또는 2가 아닐 경우 throw 예외 처리", () => {
    const input = "a";
    const result = () => validate.restartInput(input);

    expect(result).toThrowError(new Error(ERROR.INVALID_RESTART_INPUT));
  });

  test("재시작/종료 입력값이 1 또는 2가 아닐 경우 throw 예외 처리", () => {
    const input = "!";
    const result = () => validate.restartInput(input);

    expect(result).toThrowError(new Error(ERROR.INVALID_RESTART_INPUT));
  });

  test("재시작/종료 입력값이 1 또는 2가 아닐 경우 throw 예외 처리", () => {
    const input = "";
    const result = () => validate.restartInput(input);

    expect(result).toThrowError(new Error(ERROR.INVALID_RESTART_INPUT));
  });

  test("재시작/종료 입력값이 1 또는 2가 아닐 경우 throw 예외 처리", () => {
    const input = " ";
    const result = () => validate.restartInput(input);

    expect(result).toThrowError(new Error(ERROR.INVALID_RESTART_INPUT));
  });
});

const { Console } = require("@woowacourse/mission-utils");
const ValidateUserInput = require("../src/baseball/ValidateUserInput");

describe("사용자가 잘못된 값을 넣었을 때 예외 발생", () => {
  // isThreeDigitsNumberInRange
  test("1 ~ 9가 아닌 다른 문자열 입력 시 throw", () => {
    // given
    const validateUserInput = new ValidateUserInput();
    const randoms = "ab*";

    // then
    expect(() => {
      validateUserInput.isThreeDigitsNumberInRange(randoms);
    }).toThrow();
  });

  test("3자리수가 아니면 throw", () => {
    const validateUserInput = new ValidateUserInput();
    const randoms = "1234";

    expect(() => {
      validateUserInput.isThreeDigitsNumberInRange(randoms);
    }).toThrow();
  });

  test("중복 숫자 있으면 throw", () => {
    const validateUserInput = new ValidateUserInput();
    const randoms = "122";

    expect(() => {
      validateUserInput.isThreeDigitsNumberInRange(randoms);
    }).toThrow();
  });

  test("0 입력 시 throw", () => {
    const validateUserInput = new ValidateUserInput();
    const randoms = "012";

    expect(() => {
      validateUserInput.isThreeDigitsNumberInRange(randoms);
    }).toThrow();
  });

  test("숫자가 정상 입력되었다면 성공", () => {
    const validateUserInput = new ValidateUserInput();
    const randoms = "345";

    expect(() => {
      validateUserInput.isThreeDigitsNumberInRange(randoms);
    }).not.toThrow();
  });

  // isOneOrTwo
  test("1 또는 2 외의 문자열 입력 시 throw", () => {
    const validateUserInput = new ValidateUserInput();
    const input = "3";

    expect(() => {
      validateUserInput.isOneOrTwo(input);
    }).toThrow();
  });

  test("숫자가 정상 입력되었다면 성공", () => {
    const validateUserInput = new ValidateUserInput();
    const input = "1";

    expect(() => {
      validateUserInput.isOneOrTwo(input);
    }).not.toThrow();
  });
});

afterAll(() => {
  Console.close();
});

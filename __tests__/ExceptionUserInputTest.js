const { EXCEPTIONMESSAGE } = require("../src/ConstMessage");
const checkUserInput = require("../src/ExceptionUserInput");

describe('사용자 입력 예외 테스트', () => {
  test('중복되는 숫자가 존재하는지 예외 테스트', () => {

    expect(() => {
      checkUserInput('122');
    }).toThrow(EXCEPTIONMESSAGE.DUPLICATE_EXCEPTION);
  });

  test('1 ~ 9 사이의 문자가 맞는지 예외 테스트', () => {

    expect(() => {
      checkUserInput('1ab');
    }).toThrow(EXCEPTIONMESSAGE.NOT_NUMBER_EXCEPTION);
  });

  test('3자리의 숫자가 맞는지 예외 테스트', () => {

    expect(() => {
      checkUserInput('1234');
    }).toThrow(EXCEPTIONMESSAGE.NOT_THREE_DIGITS_EXCEPTION);
  });
});

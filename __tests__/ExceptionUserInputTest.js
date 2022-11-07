const checkUserInput = require("../src/ExceptionUserInput");

describe('사용자 입력 예외 테스트', () => {
  test('중복되는 숫자가 존재하는지 예외 테스트', () => {

    expect(() => {
      checkUserInput('122');
    }).toThrow('중복되는 숫자를 입력하셨습니다.');
  });

  test('1 ~ 9 사이의 문자가 맞는지 예외 테스트', () => {

    expect(() => {
      checkUserInput('1ab');
    }).toThrow('1부터 9사이의 숫자만 입력할 수 있습니다.');
  });

  test('3자리의 숫자가 맞는지 예외 테스트', () => {

    expect(() => {
      checkUserInput('1234');
    }).toThrow('숫자는 3자리 수로 이루어져야 합니다.');
  });
});
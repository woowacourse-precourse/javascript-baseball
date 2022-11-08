const {
  handleGameException,
  handleRestartException,
} = require('../src/handleException');

describe('사용자 입력 테스트', () => {
  test('사용자 입력 1-9 사이의 정수 예외 테스트(문자 포함)', () => {
    const input = 'a34';

    expect(() => handleGameException(input)).toThrow();
  });

  test('사용자 입력 1-9 사이의 정수 예외 테스트(범위 벗어난 숫자)', () => {
    const input = '904';

    expect(() => handleGameException(input)).toThrow();
  });

  test('사용자 입력 서로 다른 수 예외 테스트', () => {
    const input = '994';

    expect(() => handleGameException(input)).toThrow();
  });

  test('사용자 입력 길이 예외 테스트', () => {
    const input = '12';

    expect(() => handleGameException(input)).toThrow();
  });
});

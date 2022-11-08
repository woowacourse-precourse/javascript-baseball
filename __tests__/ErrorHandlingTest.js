const { checkPlayerNumberError, checkEndSelectionError } = require('../src/utils/handleError');

describe('예외 테스트: checkPlayerNumberError', () => {
  test('3자리 수가 아닐 때 예외 발생', () => {
    const input = '12';

    expect(() => {
      checkPlayerNumberError(input);
    }).toThrow(RangeError);
  });

  test('3자리 수가 아닐 때 예외 발생', () => {
    const input = '-123';

    expect(() => {
      checkPlayerNumberError(input);
    }).toThrow(RangeError);
  });

  test('서로 다른 수가 아닐 때 예외 발생', () => {
    const input = '122';

    expect(() => {
      checkPlayerNumberError(input);
    }).toThrow(RangeError);
  });

  test('1부터 9까지의 수가 아닐 때 예외 발생', () => {
    const input = '102';

    expect(() => {
      checkPlayerNumberError(input);
    }).toThrow(RangeError);
  });

  test('1부터 9까지 서로 다른 수로 이루어진 3자리의 수일 때 예외 미발생', () => {
    const input = '123';

    expect(() => {
      checkPlayerNumberError(input);
    }).not.toThrow(RangeError);
  });
});

describe('예외 테스트: checkEndSelectionError', () => {
  test('게임 종료 시 입력값이 1 또는 2가 아닐 때 예외 발생', () => {
    const input = '3';

    expect(() => {
      checkEndSelectionError(input);
    }).toThrow(RangeError);
  });

  test('게임 종료 시 입력값이 1 또는 2가 아닐 때 예외 발생', () => {
    const input = '123';

    expect(() => {
      checkEndSelectionError(input);
    }).toThrow(RangeError);
  });

  test('게임 종료 시 입력값이 1일 때 예외 미발생', () => {
    const input = '1';

    expect(() => {
      checkEndSelectionError(input);
    }).not.toThrow(RangeError);
  });

  test('게임 종료 시 입력값이 2일 때 예외 미발생', () => {
    const input = '2';

    expect(() => {
      checkEndSelectionError(input);
    }).not.toThrow(RangeError);
  });
});

const App = require('../src/App');
const {
  INVALID_NUMERIC_ERROR_MESSAGE,
  DUPLICATE_NUMERIC_ERROR_MESSAGE,
  RANGE_ERROR_MESSAGE,
} = require('../src/common/messages');

describe('사용자 인풋 예외처리 테스트 : player', () => {
  test('✨ 입력 값이 숫자로만 이루어져 있습니다.', () => {
    const app = new App();
    const isNotANumber = app.isNotANumber;

    expect(isNotANumber(123)).toBeTruthy();
  });

  test('🖐 입력 값에 숫자가 아닌 값이 포함되어 있으면 예외가 발생됩니다.', () => {
    const app = new App();
    const isNotANumber = app.isNotANumber;

    expect(() => {
      isNotANumber('2022 우테코 조아요💙');
    }).toThrowError(`${INVALID_NUMERIC_ERROR_MESSAGE}`);
  });

  test('✨ 1부터 9까지의 숫자로만 이루어져 있습니다.', () => {
    const app = new App();
    const isValidRangeOfNumber = app.isValidRangeOfNumber;

    expect(isValidRangeOfNumber(456)).toBeTruthy();
  });

  test('🖐 0이 포함되어 있는 경우 예외가 발생됩니다.', () => {
    const app = new App();
    const isValidRangeOfNumber = app.isValidRangeOfNumber;

    expect(() => {
      isValidRangeOfNumber(104);
    }).toThrowError(`${INVALID_NUMERIC_ERROR_MESSAGE}`);
  });

  test('✨ 입력 값의 길이가 3자리로 유효합니다.', () => {
    const app = new App();
    const isValidInputLength = app.isValidInputLength;

    expect(isValidInputLength(456)).toBeTruthy();
  });

  test('🖐 입력 값의 길이(3자리)가 유효하지 않으면 예외가 발생됩니다.', () => {
    const app = new App();
    const isValidInputLength = app.isValidInputLength;

    expect(() => {
      isValidInputLength(4567);
    }).toThrowError(`${RANGE_ERROR_MESSAGE}`);
  });

  test('✨ 입력 값에 중복이 존재하지 않습니다.', () => {
    const app = new App();
    const isUniqueNumber = app.isUniqueNumber;

    expect(isUniqueNumber(456)).toBeTruthy();
  });

  test('🖐 입력 값에 중복이 있으면 예외가 발생됩니다.', () => {
    const app = new App();
    const isUniqueNumber = app.isUniqueNumber;

    expect(() => {
      isUniqueNumber(444);
    }).toThrowError(`${DUPLICATE_NUMERIC_ERROR_MESSAGE}`);
  });
});

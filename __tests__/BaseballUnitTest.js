const isNumber = require('../src/IsNumber');

describe('사용자의 입력 값 확인', () => {
  test('입력 값 정상범위 확인', () => {
    expect(isNumber(123)).toEqual(true);
  });

  test('숫자 타입이 아닌 경우', () => {
    expect(() => {
      isNumber('abc');
    }).toThrow('숫자가 아닙니다.');
  });

  test('자릿수가 초과한 경우', () => {
    expect(() => {
      isNumber(1234);
    }).toThrow('자릿수를 초과했습니다.');
  });

  test('1 ~ 9까지의 숫자가 아닌 경우', () => {
    expect(() => {
      isNumber(102);
    }).toThrow('1 ~ 9까지의 숫자를 입력하세요.');
  });

  test('중복되는 값이 있는 경우', () => {
    expect(() => {
      isNumber(112);
    }).toThrow('중복되지 않는 3자리의 숫자를 입력해주세요.');
  });
});

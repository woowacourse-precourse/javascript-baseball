const { REG_EXP } = require('../src/Const');
const verify = require('../src/Verify');

describe('유효성 검사 테스트', () => {
  test('숫자 0이 포함된 경우 Error를 throw', () => {
    const input = '012';

    expect(() => {
      verify(REG_EXP.NUMBER, input);
    }).toThrow();
  });

  test('숫자가 중복된 경우 Error를 throw', () => {
    const input = '112';

    expect(() => {
      verify(REG_EXP.NUMBER, input);
    }).toThrow();
  });

  test('숫자 개수가 3개가 아닌 경우 Error를 throw', () => {
    const input = '12';

    expect(() => {
      verify(REG_EXP.NUMBER, input);
    }).toThrow();
  });

  test('숫자가 아닌 문자가 포함된 경우 Error를 throw', () => {
    const input = '89a';

    expect(() => {
      verify(REG_EXP.NUMBER, input);
    }).toThrow();
  });

  test('게임 종료 후 0을 입력한 경우 Error를 throw', () => {
    const input = '0';

    expect(() => {
      verify(REG_EXP.STATE, input);
    }).toThrow();
  });

  test('게임 종료 후 1 또는 2가 아닌 값을 입력한 경우 Error를 throw', () => {
    const input = '12';

    expect(() => {
      verify(REG_EXP.STATE, input);
    }).toThrow();
  });
});

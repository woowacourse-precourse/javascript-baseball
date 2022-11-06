const NumberBaseball = require('../src/model/number-baseball.model');

describe('1~9까지 서로 다른 3자리 숫자 입력 받기', () => {
  test('3자리 숫자가 정상적으로 입력되면 true를 반환한다.', () => {
    const numberBaseball = new NumberBaseball();
    const input = '123';
    const result = numberBaseball.inputValidCheck(input);
    expect(result).toEqual(true);
  });
  test('3자리 이하의 숫자가 입력되면 false를 반환한다.', () => {
    const numberBaseball = new NumberBaseball();
    const input = '12';
    const result = numberBaseball.inputValidCheck(input);
    expect(result).toEqual(false);
  });
  test('3자리 이상의 숫자가 입력되면 false를 반환한다.', () => {
    const numberBaseball = new NumberBaseball();
    const input = '1234';
    const result = numberBaseball.inputValidCheck(input);
    expect(result).toEqual(false);
  });
});

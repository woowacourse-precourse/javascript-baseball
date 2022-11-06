const NumberBaseballModel = require('../src/model/number-baseball.model');

describe('1~9까지 서로 다른 3자리 숫자 입력 받기', () => {
  test('숫자가 입력되면 이를 split해 문자열 배열로 반환한다.', () => {
    const numberBaseball = new NumberBaseballModel();
    const input = '123';
    const result = numberBaseball.splitNumber(input);
    expect(result).toEqual(['1', '2', '3']);
  });
  test('3자리 숫자가 정상적으로 입력되면 true를 반환한다.', () => {
    const numberBaseball = new NumberBaseballModel();
    const input = ['1', '2', '3'];
    const result = numberBaseball.inputValidCheck(input);
    expect(result).toEqual(true);
  });
  test('3자리 이하의 숫자가 입력되면 false를 반환한다.', () => {
    const numberBaseball = new NumberBaseballModel();
    const input = ['1', '2'];
    const result = numberBaseball.inputValidCheck(input);
    expect(result).toEqual(false);
  });
  test('3자리 이상의 숫자가 입력되면 false를 반환한다.', () => {
    const numberBaseball = new NumberBaseballModel();
    const input = ['1', '2', '3', '4'];
    const result = numberBaseball.inputValidCheck(input);
    expect(result).toEqual(false);
  });
  test('서로 다른 수 3자리 수를 입력받으면 true를 반환한다.', () => {
    const numberBaseball = new NumberBaseballModel();
    const input = ['1', '2', '3'];
    const result = numberBaseball.inputValidCheck(input);
    expect(result).toEqual(true);
  });
  test('세자리 수 중 중복된 수가 있다면 false를 반환한다.', () => {
    const numberBaseball = new NumberBaseballModel();
    const input = ['1', '2', '1'];
    const result = numberBaseball.inputValidCheck(input);
    expect(result).toEqual(false);
  });
  test('1~9까지 수를 입력받았다면 true를 반환한다.', () => {
    const numberBaseball = new NumberBaseballModel();
    const input = ['1', '2', '3'];
    const result = numberBaseball.inputValidCheck(input);
    expect(result).toEqual(true);
  });
  test('1~9가 아닌 값이 입력받았다면 false를 반환한다', () => {
    const numberBaseball = new NumberBaseballModel();
    const input = ['가', '나', '다'];
    const result = numberBaseball.inputValidCheck(input);
    expect(result).toEqual(false);
  });
});

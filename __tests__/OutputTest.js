const NumberBaseballModel = require('../src/model/number-baseball.model');

describe('입력에 따른 스트라이크, 볼 낫싱 출력', () => {
  test('아무것도 일치하지 않으면 0 반환(낫싱)', () => {
    const numberBaseball = new NumberBaseballModel();
    numberBaseball.computer = ['1', '2', '3'];
    const result = numberBaseball.getScore(['4', '5', '6']);
    expect(result).toEqual({ nothing: 3, ball: 0, strike: 0 });
  });
  test('값은 같지만 자리가 다르면 1 반환(볼)', () => {
    const numberBaseball = new NumberBaseballModel();
    numberBaseball.computer = ['1', '2', '3'];
    const result = numberBaseball.getScore(['4', '1', '2']);
    expect(result).toEqual({ nothing: 1, ball: 2, strike: 0 });
  });
  test('값도 같고 자리도 값으면 2 반환(스트라이크)', () => {
    const numberBaseball = new NumberBaseballModel();
    numberBaseball.computer = ['1', '2', '3'];
    const result = numberBaseball.getScore(['4', '2', '1']);
    expect(result).toEqual({ nothing: 1, ball: 1, strike: 1 });
  });
});

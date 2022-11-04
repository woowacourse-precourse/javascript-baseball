const App = require('../src/App');

describe('숫자 야구 게임 My Test', () => {
  test('3자리 숫자 랜덤 숫자 생성', () => {
    const app = new App();
    const rand_num1 = app.makeRandomNumber(3);
    const rand_num2 = app.makeRandomNumber(3);
    let result = rand_num1 === rand_num2;

    if (result) {
      const rand_num3 = app.makeRandomNumber(3);
      const rand_num4 = app.makeRandomNumber(3);
      result = rand_num3 === rand_num4;

      expect(rand_num3).toHaveLength(3);
      expect(rand_num4).toHaveLength(3);
    }

    expect(rand_num1).toHaveLength(3);
    expect(rand_num2).toHaveLength(3);
    expect(result).toBeFalsy();
  });
});

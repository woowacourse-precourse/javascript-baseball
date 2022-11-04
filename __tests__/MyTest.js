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

  test('상대방의 숫자와 사용자가 입력한 숫자 비교', () => {
    const app = new App();
    const computer = '369';
    const user_inputs = ['000', '146', '321', '398', '369'];
    const result = [];

    user_inputs.forEach((input) => {
      result.push(app.compareNumbers(computer, input));
    });

    expect(result).toEqual([
      [0, 0],
      [1, 0],
      [0, 1],
      [1, 1],
      [0, 3],
    ]);
  });

  test('숫자 비교 결과를 출력', () => {
    const app = new App();
    const compare_results = [
      [0, 0],
      [1, 0],
      [0, 1],
      [1, 1],
      [0, 3],
    ];
    const result = [];

    compare_results.forEach((compare_result) => {
      result.push(app.printCompareResult(compare_result));
    });

    expect(result).toEqual([
      '낫싱',
      '1볼',
      '1스트라이크',
      '1볼 1스트라이크',
      '3스트라이크',
    ]);
  });
});

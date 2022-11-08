const { getBallsAndStrikes, getGuessResult } = require('../src/utils/utils');

describe('utils 테스트', () => {
  test('getBallsAndStrikes 테스트', () => {
    const target = ['2', '3', '4'];
    const input = '342';
    const result = getBallsAndStrikes(target, input);

    expect(result).toEqual({
      balls: 3,
      strikes: 0,
    });
  });

  test('getGuessResult 테스트: 낫싱 ', () => {
    const ball = 0;
    const strike = 0;
    const result = getGuessResult(ball, strike);

    expect(result).toEqual('낫싱');
  });

  test('getGuessResult 테스트: 0볼 ', () => {
    const ball = 0;
    const strike = 1;
    const result = getGuessResult(ball, strike);

    expect(result).toEqual('1스트라이크');
  });

  test('getGuessResult 테스트: 0스트라이크 ', () => {
    const ball = 1;
    const strike = 0;
    const result = getGuessResult(ball, strike);

    expect(result).toEqual('1볼 ');
  });

  test('getGuessResult 테스트: 1볼 2스트라이크 ', () => {
    const ball = 1;
    const strike = 2;
    const result = getGuessResult(ball, strike);

    expect(result).toEqual('1볼 2스트라이크');
  });
});

const { getBallsAndStrikes } = require('../src/utils/utils');

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
});

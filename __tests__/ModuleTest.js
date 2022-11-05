const {
  isValidRestartInputValue,
  getGameResultMessage,
  getSameNumCount,
  getStrikeCount,
  haveSameNumber,
  isValidRangeNumber,
  getRandomNumbers,
} = require('../src/modules');

describe('1과 2가 아니라면 에러 발생', () => {
  test('case1', () => {
    expect(() => isValidRestartInputValue('3')).toThrow();
  });

  test('case2', () => {
    expect(() => isValidRestartInputValue('qwe')).toThrow();
  });

  test('case1', () => {
    expect(() => isValidRestartInputValue('@')).toThrow();
  });
});

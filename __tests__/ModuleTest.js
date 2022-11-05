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

describe('1~9에 속한 세자리 숫자가 아니라면 에러 발생', () => {
  test('case1', () => {
    expect(() => isValidRangeNumber('asd')).toThrow();
  });

  test('case2', () => {
    expect(() => isValidRangeNumber('1234')).toThrow();
  });

  test('case3', () => {
    expect(() => isValidRangeNumber('12')).toThrow();
  });

  test('case4', () => {
    expect(() => isValidRangeNumber('12#')).toThrow();
  });
});

test('중복 된 숫자가 있다면 에러 발생', () => {
  expect(() => haveSameNumber('119')).toThrow();
});

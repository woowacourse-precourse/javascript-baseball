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

describe('두 배열의 index의 값이 같은 개수를 반환', () => {
  test('case1', () => {
    expect(getStrikeCount([1, 2, 3], [1, 2, 3])).toBe(3);
  });

  test('case2', () => {
    expect(getStrikeCount(['&', 2, '5'], ['&', 4, '5'])).toBe(2);
  });

  test('case3', () => {
    expect(getStrikeCount([0, '2', 1], [1, '2', 0])).toBe(1);
  });

  test('case4', () => {
    expect(getStrikeCount([1, 'a', 9], ['#', '2', 0])).toBe(0);
  });
});

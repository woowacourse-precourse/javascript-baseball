const { Console } = require('@woowacourse/mission-utils');

const {
  isValidRestartInputValue,
  getGameResultMessage,
  getSameNumCount,
  getStrikeCount,
  haveSameNumber,
  isValidRangeNumber,
  getRandomNumbers,
} = require('../src/modules');

afterAll(() => {
  Console.close();
});

describe('1과 2가 아니라면 에러 발생', () => {
  test('case1', () => {
    expect(() => isValidRestartInputValue('3')).toThrow();
  });

  test('case2', () => {
    expect(() => isValidRestartInputValue('qwe')).toThrow();
  });

  test('case3', () => {
    expect(() => isValidRestartInputValue('@')).toThrow();
  });

  test('case4', () => {
    expect(() => isValidRestartInputValue('')).toThrow();
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

  test('case5', () => {
    expect(() => isValidRangeNumber('')).toThrow();
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

describe('두 배열에 모두 포함된 값의 개수를 반환', () => {
  test('case1', () => {
    expect(getSameNumCount([4, 1, 3], [1, 3, 4])).toBe(3);
  });

  test('case2', () => {
    expect(getSameNumCount(['2', '4', '1'], ['2', '1', 0])).toBe(2);
  });

  test('case3', () => {
    expect(getSameNumCount([1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1])).toBe(6);
  });

  test('case4', () => {
    expect(getSameNumCount(['1', '2', '3'], ['4', '5', '6'])).toBe(0);
  });
});

describe('결과 값에 따라 올바른 게임 결과 메시지를 반환', () => {
  test('case1', () => {
    const resultObj = { strike: 1, ball: 1 };
    expect(getGameResultMessage(resultObj)).toBe('1볼 1스트라이크');
  });

  test('case2', () => {
    const resultObj = { strike: 0, ball: 2 };
    expect(getGameResultMessage(resultObj)).toBe('2볼');
  });

  test('case3', () => {
    const resultObj = { strike: 3, ball: 0 };
    expect(getGameResultMessage(resultObj)).toBe('3스트라이크');
  });

  test('case4', () => {
    const resultObj = { strike: 0, ball: 0 };
    expect(getGameResultMessage(resultObj)).toBe('낫싱');
  });
});

test('1~9 중 중복되지 않는 세자리 랜덤 숫자를 반환', () => {
  const numbers = getRandomNumbers(3, 1, 9);
  haveSameNumber(numbers);
  expect(numbers).toMatch(/^[1-9]{3}$/);
});

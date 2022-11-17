const BaseballHint = require('../src/BaseballHint');

const { BASEBALL_HINT } = require('../src/constants/error');

describe('BaseballHint 테스트', () => {
  test('스트라이크와 볼 갯수가 숫자가 아니면 예외를 던진다.', () => {
    expect(() => {
      new BaseballHint({ ball: 2 });
    }).toThrow(BASEBALL_HINT.ONLY_NUMBER);

    expect(() => {
      new BaseballHint({ strike: 1, ball: 'a' });
    }).toThrow(BASEBALL_HINT.ONLY_NUMBER);
  });

  test(`스트라이크, 볼 갯수가 범위를 초과하면 예외를 던진다.`, () => {
    expect(() => {
      new BaseballHint({ strike: -1, ball: 0 });
    }).toThrow(BASEBALL_HINT.IN_RANGE);

    expect(() => {
      new BaseballHint({ strike: 0, ball: 4 });
    }).toThrow(BASEBALL_HINT.IN_RANGE);
  });

  test('스트라이크만 문자화 한다.', () => {
    const baseballHint = new BaseballHint({ strike: 3, ball: 0 });

    expect(baseballHint.toString()).toBe('3스트라이크');
  });

  test('볼만 문자화 한다.', () => {
    const baseballHint = new BaseballHint({ strike: 0, ball: 1 });

    expect(baseballHint.toString()).toBe('1볼');
  });

  test('스트라이크와 볼을 문자화 한다.', () => {
    const baseballHint = new BaseballHint({ strike: 1, ball: 2 });

    expect(baseballHint.toString()).toBe('2볼 1스트라이크');
  });

  test('스트라이크와 볼이 없음(낫싱)을 문자화 한다.', () => {
    const baseballHint = new BaseballHint({ strike: 0, ball: 0 });

    expect(baseballHint.toString()).toBe('낫싱');
  });
});

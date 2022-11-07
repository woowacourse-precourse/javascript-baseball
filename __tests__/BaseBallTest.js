const BaseBall = require('../src/BaseBall');

describe('baseball 클래스 - getResultToString()', () => {
  test('2볼 1스트라이크 상황', () => {
    const input = '123';
    const random = [2, 1, 3];

    const baseball = new BaseBall();

    expect(baseball.getResultToString(random, input)).toEqual('2볼 1스트라이크');
  });

  test('노볼 노스트라이크 상황', () => {
    const input = '456';
    const random = [1, 2, 3];

    const baseball = new BaseBall();

    expect(baseball.getResultToString(random, input)).toEqual('낫싱');
  });

  test('3스트라이크 상황', () => {
    const input = '123';
    const random = [1, 2, 3];

    const baseball = new BaseBall();

    expect(baseball.getResultToString(random, input)).toEqual('3스트라이크');
  });

  test('2볼 상황', () => {
    const input = '214';
    const random = [1, 2, 3];

    const baseball = new BaseBall();

    expect(baseball.getResultToString(random, input)).toEqual('2볼');
  });
});

describe('baseball 클래스 - isStrikeOut()', () => {
  test('3볼일 때', () => {
    const input = '321';
    const random = [2, 1, 3];

    const baseball = new BaseBall();

    expect(baseball.isStrikeOut(random, input)).toBeFalsy();
  });

  test('2스트라이크 노볼 상황', () => {
    const input = '143';
    const random = [1, 2, 3];

    const baseball = new BaseBall();

    expect(baseball.isStrikeOut(random, input)).toBeFalsy();
  });

  test('3스트라이크일 때', () => {
    const input = '123';
    const random = [1, 2, 3];

    const baseball = new BaseBall();

    expect(baseball.isStrikeOut(random, input)).toBeTruthy();
  });
});

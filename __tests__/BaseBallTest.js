const BaseBall = require('../src/BaseBall');

describe('App 클래스 - isStrike()', () => {
  // private 함수인 isStrike함수를 테스트하기 위한 getIsStrikeResult
  test('주어진 입력값이 random값과 비교 스트라이크인지 확인하는 함수', () => {
    const random = [1, 2, 3];
    const input = [1, 4, 5];

    const baseball = new BaseBall();

    expect(baseball.getIsStrikeResult(random[0], input[0])).toBeTruthy();
    expect(baseball.getIsStrikeResult(random[1], input[1])).toBeFalsy();
    expect(baseball.getIsStrikeResult(random[2], input[2])).toBeFalsy();
  });
});

describe('baseball 클래스 - isBall()', () => {
  // private 함수인 isBall함수를 테스트하기 위한 getIsBallResult
  test('주어진 입력값이 random값과 비교 볼인지 확인하는 예제', () => {
    const random = [2, 1, 3];
    const input = [1, 4, 5];

    const baseball = new BaseBall();

    expect(baseball.getIsBallResult(random, input, 0)).toBeTruthy();
    expect(baseball.getIsBallResult(random, input, 1)).toBeFalsy();
    expect(baseball.getIsBallResult(random, input, 2)).toBeFalsy();
  });

  test('스트라이크일때 볼이라고 하지 않는지 확인하는 예제', () => {
    const random = [1, 2, 3];
    const input = [1, 3, 2];

    const baseball = new BaseBall();

    expect(baseball.getIsBallResult(random, input, 0)).toBeFalsy();
    expect(baseball.getIsBallResult(random, input, 1)).toBeTruthy();
    expect(baseball.getIsBallResult(random, input, 2)).toBeTruthy();
  });
});

describe('baseball 클래스 - countStrike()', () => {
  // private 함수인 countStrike함수를 테스트하기 위한 getCountStrikeResult
  test('2볼 1스트라이크 상황', () => {
    const random = [2, 1, 3];
    const input = [1, 2, 3];

    const baseball = new BaseBall();

    expect(baseball.getCountStrikeResult(random, input)).toEqual(1);
  });

  test('노볼 노스트라이크 상황', () => {
    const random = [1, 2, 3];
    const input = [4, 5, 6];

    const baseball = new BaseBall();

    expect(baseball.getCountStrikeResult(random, input)).toEqual(0);
  });

  test('3스트라이크 상황', () => {
    const random = [1, 2, 3];
    const input = [1, 2, 3];

    const baseball = new BaseBall();

    expect(baseball.getCountStrikeResult(random, input)).toEqual(3);
  });
});

describe('baseball 클래스 - countBall()', () => {
  // private 함수인 countBall함수를 테스트하기 위한 getCountBallResult
  test('2볼 1스트라이크 상황', () => {
    const random = [2, 1, 3];
    const input = [1, 2, 3];

    const baseball = new BaseBall();

    expect(baseball.getCountBallResult(random, input)).toEqual(2);
  });

  test('노볼 노스트라이크 상황', () => {
    const random = [1, 2, 3];
    const input = [4, 5, 6];

    const baseball = new BaseBall();

    expect(baseball.getCountBallResult(random, input)).toEqual(0);
  });

  test('3스트라이크 상황', () => {
    const random = [1, 2, 3];
    const input = [1, 2, 3];

    const baseball = new BaseBall();

    expect(baseball.getCountBallResult(random, input)).toEqual(0);
  });
});

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

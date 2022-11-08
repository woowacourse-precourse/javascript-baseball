const { getStrike, getBall } = require('../src/libs/BaseballFunction');

describe('숫자야구 기능 테스트', () => {
  test('스트라이크 개수 확인', () => {
    const computer = [1, 2, 3];

    expect(getStrike(computer, [1, 3, 5])).toEqual(1);
    expect(getStrike(computer, [3, 6, 7])).toEqual(0);
    expect(getStrike(computer, [1, 2, 3])).toEqual(3);
  });

  test('볼 개수 확인', () => {
    const computer = [1, 2, 3];

    expect(getBall(computer, [1, 3, 5])).toEqual(1);
    expect(getBall(computer, [2, 3, 1])).toEqual(3);
    expect(getBall(computer, [1, 2, 3])).toEqual(0);
  });

  test('스트라이크, 볼 개수 확인', () => {
    const computer = [1, 2, 3];
    const user = [3, 2, 1];
    const strke = getStrike(computer, user);
    const ball = getBall(computer, user);

    expect(strke).toEqual(1);
    expect(ball).toEqual(2);
  });
});

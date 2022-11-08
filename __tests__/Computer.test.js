const MissionUtils = require('@woowacourse/mission-utils');
const Computer = require('../src/Computer');

const mockRandoms = numbers => {
  const original = MissionUtils.Random.pickNumberInRange;

  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);

  return {
    cleanup() {
      MissionUtils.Random.pickNumberInRange = original;
    },
  };
};

describe('컴퓨터가 플레이어의 입력을 잘 처리하는지 테스트', () => {
  test('힌트를 만들어 반환해야 한다.', () => {
    const randoms = [1, 2, 3];
    const { cleanup } = mockRandoms(randoms);

    const computer = new Computer();
    expect(computer.processInput('253')).toEqual({
      numberOfStrike: 1,
      hintString: '1볼 1스트라이크',
    });
    expect(computer.processInput('143')).toEqual({
      numberOfStrike: 2,
      hintString: '2스트라이크',
    });
    expect(computer.processInput('132')).toEqual({
      numberOfStrike: 1,
      hintString: '2볼 1스트라이크',
    });
    expect(computer.processInput('231')).toEqual({
      numberOfStrike: 0,
      hintString: '3볼',
    });
    expect(computer.processInput('123')).toEqual({
      numberOfStrike: 3,
      hintString: '3스트라이크',
    });
    expect(computer.processInput('165')).toEqual({
      numberOfStrike: 1,
      hintString: '1스트라이크',
    });

    cleanup();
  });

  test('유효하지 않은 입력을 받으면 에러를 발생시키고 종료되어야 한다.', () => {
    const randoms = [1, 2, 3];
    const { cleanup } = mockRandoms(randoms);

    const computer = new Computer();
    expect(() => {
      computer.processInput('2 53');
    }).toThrow();
    expect(() => {
      computer.processInput('203');
    }).toThrow();
    expect(() => {
      computer.processInput('_63');
    }).toThrow();
    expect(() => {
      computer.processInput('229');
    }).toThrow();

    cleanup();
  });
});

describe('볼의 개수를 알맞게 세는지 테스트', () => {
  test('볼의 개수가 0인 경우', () => {
    const randoms = [1, 3, 5];
    const { cleanup } = mockRandoms(randoms);

    const computer = new Computer();
    expect(computer.countBall([2, 4, 6])).toEqual(0);

    cleanup();
  });

  test('볼의 개수가 1인 경우', () => {
    const randoms = [4, 7, 8];
    const { cleanup } = mockRandoms(randoms);

    const computer = new Computer();
    expect(computer.countBall([2, 4, 3])).toEqual(1);

    cleanup();
  });

  test('볼의 개수가 2인 경우', () => {
    const randoms = [1, 3, 5];
    const { cleanup } = mockRandoms(randoms);

    const computer = new Computer();
    expect(computer.countBall([2, 1, 3])).toEqual(2);

    cleanup();
  });

  test('볼의 개수가 3인 경우', () => {
    const randoms = [1, 3, 5];
    const { cleanup } = mockRandoms(randoms);

    const computer = new Computer();
    expect(computer.countBall([5, 1, 3])).toEqual(3);

    cleanup();
  });
});

describe('스트라이크의 개수를 알맞게 세는지 테스트', () => {
  test('스트라이크의 개수가 0인 경우', () => {
    const randoms = [1, 3, 5];
    const { cleanup } = mockRandoms(randoms);

    const computer = new Computer();
    expect(computer.countStrike([2, 4, 6])).toEqual(0);
    expect(computer.countStrike([3, 5, 1])).toEqual(0);

    cleanup();
  });

  test('스트라이크의 개수가 1인 경우', () => {
    const randoms = [1, 3, 5];
    const { cleanup } = mockRandoms(randoms);

    const computer = new Computer();
    expect(computer.countStrike([1, 4, 6])).toEqual(1);
    expect(computer.countStrike([2, 3, 6])).toEqual(1);
    expect(computer.countStrike([2, 4, 5])).toEqual(1);

    cleanup();
  });

  test('스트라이크의 개수가 2인 경우', () => {
    const randoms = [1, 3, 5];
    const { cleanup } = mockRandoms(randoms);

    const computer = new Computer();
    expect(computer.countStrike([1, 3, 4])).toEqual(2);
    expect(computer.countStrike([1, 2, 5])).toEqual(2);
    expect(computer.countStrike([2, 3, 5])).toEqual(2);

    cleanup();
  });

  test('스트라이크의 개수가 3인 경우', () => {
    const randoms = [1, 3, 5];
    const { cleanup } = mockRandoms(randoms);

    const computer = new Computer();
    expect(computer.countStrike([1, 3, 5])).toEqual(3);

    cleanup();
  });
});

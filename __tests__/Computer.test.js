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

test.todo('processInput');

describe('parseInput', () => {
  test('입력의 앞 뒤 공백은 제거한 후 숫자로 변환한 배열을 반환한다.', () => {
    expect(Computer.parseInput('352 ')).toEqual([3, 5, 2]);
    expect(Computer.parseInput(' 352')).toEqual([3, 5, 2]);
    expect(Computer.parseInput(' 352 ')).toEqual([3, 5, 2]);
    expect(Computer.parseInput(' 123  ')).toEqual([1, 2, 3]);
    expect(Computer.parseInput('  123 ')).toEqual([1, 2, 3]);
    expect(Computer.parseInput('  123  ')).toEqual([1, 2, 3]);
  });

  test('입력에 문자가 있는 경우 NaN으로 변환한 배열을 반환한다.', () => {
    expect(Computer.parseInput('b')).toEqual([NaN]);
    expect(Computer.parseInput('b3')).toEqual([NaN, 3]);
    expect(Computer.parseInput('bb')).toEqual([NaN, NaN]);
    expect(Computer.parseInput('_24')).toEqual([NaN, 2, 4]);
    expect(Computer.parseInput('1_3')).toEqual([1, NaN, 3]);
    expect(Computer.parseInput('35f')).toEqual([3, 5, NaN]);
    expect(Computer.parseInput('12ㄱ')).toEqual([1, 2, NaN]);
    expect(Computer.parseInput('ee3')).toEqual([NaN, NaN, 3]);
    expect(Computer.parseInput('abc')).toEqual([NaN, NaN, NaN]);
  });

  test('입력 사이에 공백은 0으로 변환한 배열을 반환한다.', () => {
    expect(Computer.parseInput('1 34')).toEqual([1, 0, 3, 4]);
    expect(Computer.parseInput('1 3')).toEqual([1, 0, 3]);
    expect(Computer.parseInput('1  3')).toEqual([1, 0, 0, 3]);
    expect(Computer.parseInput('1   3')).toEqual([1, 0, 0, 0, 3]);
  });
});

describe('validation', () => {
  test('입력에 숫자 이외의 것이 있는 경우 false를 반환한다.', () => {
    expect(Computer.isValid([NaN, 1, 1])).toEqual(false);
    expect(Computer.isValid([NaN, 2, 3])).toEqual(false);
    expect(Computer.isValid([1, NaN, 3])).toEqual(false);
    expect(Computer.isValid([1, 6, NaN])).toEqual(false);
  });

  test('입력이 세 자리가 아닌 경우 false를 반환한다.', () => {
    expect(Computer.isValid([8])).toEqual(false);
    expect(Computer.isValid([2, 3])).toEqual(false);
    expect(Computer.isValid([3, 6, 5, 1])).toEqual(false);
    expect(Computer.isValid([3, 6, 9, 1, 8])).toEqual(false);
    expect(Computer.isValid([1, 9, 8, 2, 3, 4])).toEqual(false);
  });

  test('입력에 0이 포함된 경우 false를 반환한다.', () => {
    expect(Computer.isValid([0, 5, 2])).toEqual(false);
    expect(Computer.isValid([1, 0, 6])).toEqual(false);
    expect(Computer.isValid([3, 4, 0])).toEqual(false);
  });

  test('입력에 중복되는 숫자가 있는 경우 false를 반환한다.', () => {
    expect(Computer.isValid([3, 3, 9])).toEqual(false);
    expect(Computer.isValid([2, 4, 4])).toEqual(false);
    expect(Computer.isValid([6, 2, 6])).toEqual(false);
    expect(Computer.isValid([1, 1, 1])).toEqual(false);
  });
});

describe('countBall', () => {
  test('볼의 개수가 0인 경우', () => {
    const randoms = [1, 3, 5, 5, 8, 9];
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

describe('countStrike', () => {
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

describe('makeHintString', () => {
  test('볼 0 스 0', () => {
    expect(
      Computer.makeHintString({ numberOfBall: 0, numberOfStrike: 0 }),
    ).toEqual('낫싱');
  });

  test('볼 1 스 0', () => {
    expect(
      Computer.makeHintString({ numberOfBall: 1, numberOfStrike: 0 }),
    ).toEqual('1볼');
  });

  test('볼 2 스 0', () => {
    expect(
      Computer.makeHintString({ numberOfBall: 2, numberOfStrike: 0 }),
    ).toEqual('2볼');
  });

  test('볼 3 스 0', () => {
    expect(
      Computer.makeHintString({ numberOfBall: 3, numberOfStrike: 0 }),
    ).toEqual('3볼');
  });

  test('볼 0 스 1', () => {
    expect(
      Computer.makeHintString({ numberOfBall: 0, numberOfStrike: 1 }),
    ).toEqual('1스트라이크');
  });

  test('볼 0 스 2', () => {
    expect(
      Computer.makeHintString({ numberOfBall: 0, numberOfStrike: 2 }),
    ).toEqual('2스트라이크');
  });

  test('볼 0 스 3', () => {
    expect(
      Computer.makeHintString({ numberOfBall: 0, numberOfStrike: 3 }),
    ).toEqual('3스트라이크');
  });

  test('볼 1 스 1', () => {
    expect(
      Computer.makeHintString({ numberOfBall: 1, numberOfStrike: 1 }),
    ).toEqual('1볼 1스트라이크');
  });

  test('볼 1 스 2', () => {
    expect(
      Computer.makeHintString({ numberOfBall: 1, numberOfStrike: 2 }),
    ).toEqual('1볼 2스트라이크');
  });

  test('볼 2 스 1', () => {
    expect(
      Computer.makeHintString({ numberOfBall: 2, numberOfStrike: 1 }),
    ).toEqual('2볼 1스트라이크');
  });
});

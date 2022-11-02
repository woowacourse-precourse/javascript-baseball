const { Random } = require('@woowacourse/mission-utils');

describe('컴퓨터가 생각중인 숫자를 무작위로 생성', () => {
  test('서로 다른 임의의 수 3개로 이루어진 배열 생성', () => {
    const numberSet = new Set();

    while (numberSet.size !== 3) {
      numberSet.add(Random.pickNumberInRange(1, 9));
    }

    expect([...numberSet]).toHaveLength(3);
  });
});

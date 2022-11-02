const App = require('../src/App');
const { Random } = require('@woowacourse/mission-utils');

const app = new App();

describe('게임 기능 테스트', () => {
  describe('컴퓨터가 생각중인 숫자를 무작위로 생성', () => {
    test('서로 다른 임의의 수 3개로 이루어진 배열 생성', () => {
      const numberSet = new Set();

      while (numberSet.size !== 3) {
        numberSet.add(Random.pickNumberInRange(1, 9));
      }

      expect([...numberSet]).toHaveLength(3);
    });
  });

  describe('스트라이크, 볼의 개수 구하기', () => {
    const inputValues = ['123', '456', '312', '132'];
    const computerNumbers = [1, 2, 3];

    const result = inputValues.map(inputValue =>
      app.getBallCounts(computerNumbers, inputValue),
    );

    expect(result).toEqual([
      [3, 0],
      [0, 0],
      [0, 3],
      [1, 2],
    ]);
  });
});

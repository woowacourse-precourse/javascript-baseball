const MissionUtils = require('@woowacourse/mission-utils');
const Game = require('../Game');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('(model) Game.js모듈 테스트', () => {
	mockRandoms([1, 3, 3, 1, 5]);
	const game = new Game();
	test('indexOfBalls메서드 테스트1 (2B1S)', () => {
    expect(game.indexOfBalls([3, 1, 5])).toEqual([1, 0, 2]);
  });
	test('indexOfBalls메서드 테스트2 (1B1S)', () => {
    expect(game.indexOfBalls([3, 1, 2])).toEqual([1, 0, -1]);
  });
	test('indexOfBalls메서드 테스트3 (1B)', () => {
    expect(game.indexOfBalls([3, 4, 2])).toEqual([1, -1, -1]);
  });
	test('indexOfBalls메서드 테스트4 (0B0S)', () => {
    expect(game.indexOfBalls([6, 4, 2])).toEqual([-1, -1, -1]);
  });
	MissionUtils.Console.close();
});


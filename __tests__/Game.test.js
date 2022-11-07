const MissionUtils = require('@woowacourse/mission-utils');
const Game = require('../src/Game');

const { close } = MissionUtils.Console;

afterEach(() => {
  close();
});

describe('calculate()', () => {
  test('길이가 2인 배열을 반환한다.', () => {
    const computerInput = [1, 2, 3];
    const userInput = [1, 2, 3];
    const game = new Game(computerInput);

    expect(game.calculate(userInput)).toHaveLength(2);
  });
});

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

  test('반환되는 배열의 요소는 모두 숫자 타입이다.', () => {
    const computerInput = [1, 2, 3];
    const userInput = [1, 2, 3];
    const game = new Game(computerInput);

    game.calculate(userInput).forEach((target) => {
      expect(typeof target).toBe('number');
    });
  });

  test('아무것도 입력을 하지 않은면 에러가 발생한다.', () => {
    expect(() => {
      const game = new Game();
      game.calculate([]);
    }).toThrow('입력값이 없으면 안됩니다.');
  });
});

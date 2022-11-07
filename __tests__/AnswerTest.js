const { Console } = require("@woowacourse/mission-utils");
const { REG_EXP } = require('../src/Const');
const Game = require('../src/Game');
const verify = require('../src/Verify');

const game = new Game();

describe('정답 테스트', () => {
  test('1부터 9까지 서로 다른 임의의 숫자 3개를 정답으로 선정', () => {
    game.setAnswer();
    expect(() => {
      verify(REG_EXP.NUMBER, game.answer.join(''));
    }).not.toThrow();
    Console.close();
  });
});

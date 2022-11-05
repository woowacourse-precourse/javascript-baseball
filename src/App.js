const { Console } = require('@woowacourse/mission-utils');
const Game = require('./Game');
const User = require('./User');

const game = new Game();
const user = new User();

class App {
  async startGame() {
    game.setAnswer();
    do {
      await user.readInput();
      game.setCount(user.input);
      game.setHint();
      Console.print(game.hint);
    } while (game.count.strike !== 3);
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    do {
      await this.startGame();
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      await game.readState();
    } while (game.state === 1);
    Console.close();
  }
}

module.exports = App;

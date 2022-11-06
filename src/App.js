const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./Const');
const Game = require('./Game');

class App {
  constructor() {
    this.game = new Game();
  }

  play() {
    const { game } = this;

    Console.print(MESSAGE.GAME_START);
    game.start();
  }
}

module.exports = App;

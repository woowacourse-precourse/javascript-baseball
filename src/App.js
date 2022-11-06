const { Console } = require('@woowacourse/mission-utils');
const Game = require('./Game');
const MESSAGE = require('./Const');

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

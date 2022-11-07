const { Console } = require('@woowacourse/mission-utils');
const Game = require('./components/Game');
const { MESSAGE } = require('./constant/baseball');

class App {
  constructor() {
    this.game = new Game();
  }

  play() {
    Console.print(MESSAGE.START);
    this.game.start();
  }
}

module.exports = App;

const { Console } = require('@woowacourse/mission-utils');
const Game = require('./components/game');
const { START } = require('./constant/constant');

class App {
  constructor() {
    this.game = new Game();
  }

  play() {
    Console.print(START);
    this.game.start();
  }
}
module.exports = App;

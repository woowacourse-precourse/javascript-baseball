const { Console } = require('@woowacourse/mission-utils');
const Game = require('./Game');
const { MESSAGE } = require('./constants/constants');

class App {
  constructor() {
    this.game = new Game();
  }

  play() {
    Console.print(MESSAGE.START);
    this.game.start();
  }
}

const baseballGame = new App();
baseballGame.play();

module.exports = App;

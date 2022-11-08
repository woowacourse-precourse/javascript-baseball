const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES } = require('./constants');

class App {
  play() {
    this.#startGame();
  }

  #startGame() {
    Console.print(MESSAGES.START);
  }
}

module.exports = App;

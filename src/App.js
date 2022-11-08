const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES } = require('./constants');
const { getRandomUniqueNumbers } = require('./utils');

class App {
  #answer;

  play() {
    this.#startGame();
    this.#setAnswer();
  }

  #startGame() {
    Console.print(MESSAGES.START);
  }

  #setAnswer() {
    this.#answer = getRandomUniqueNumbers(1, 9, 3).join('');
  }
}

module.exports = App;

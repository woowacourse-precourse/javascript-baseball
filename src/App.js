const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES, ERRORS } = require('./constants');
const { getRandomUniqueNumbers } = require('./utils');

class App {
  #answer;

  play() {
    this.#startGame();
    this.#setAnswer();
    this.#progressGame();
  }

  #startGame() {
    Console.print(MESSAGES.START);
  }

  #setAnswer() {
    this.#answer = getRandomUniqueNumbers(1, 9, 3).join('');
  }

  #progressGame() {
    Console.readLine(MESSAGES.INPUT, (input) => {
      this.#validateInput(input);
    });
  }

  #validateInput(input) {
    if (input.length !== 3) {
      throw new Error(ERRORS.UNVALID_INPUT_LENGTH);
    }

    if (new Set(input).size !== 3) {
      throw new Error(ERRORS.UNVALID_INPUT_VALUE);
    }

    if (input.includes(0)) {
      throw new Error(ERRORS.UNVALID_INPUT_RANGE);
    }
  }
}

const app = new App();
app.play();

module.exports = App;

const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES, OUTPUTS, ERRORS, RESTART_OPTIONS } = require('./constants');
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

      const { strike, ball } = this.#compareInputWithAnswer(input);
      this.#printGameResult(strike, ball);

      if (strike === 3) {
        this.#quitGame();
        return;
      }

      this.#progressGame();
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

  #compareInputWithAnswer(input) {
    let strike = 0;
    let ball = 0;

    [...input].forEach((number, index) => {
      if (!this.#answer.includes(number)) {
        return;
      }

      if (number === this.#answer[index]) {
        strike += 1;
      }

      ball += 1;
    });

    return { strike, ball: ball - strike };
  }

  #printGameResult(strike, ball) {
    if (strike <= 0 && ball <= 0) {
      Console.print(OUTPUTS.NOTHING);
      return;
    }

    const strikeMessage = strike > 0 ? `${strike}${OUTPUTS.STRIKE}` : '';
    const ballMessage = ball > 0 ? `${ball}${OUTPUTS.BALL} ` : '';
    const resultMessage = `${ballMessage}${strikeMessage}`;

    Console.print(resultMessage.trim());
  }

  #quitGame() {
    Console.print(MESSAGES.QUIT);
    Console.readLine(MESSAGES.RESTART, (option) => {
      this.#validateRestartOption(option);

      const options = {
        restart: () => this.#restartGame(),
        quit: () => Console.close(),
      };

      options[RESTART_OPTIONS[option]]();
    });
  }

  #validateRestartOption(option) {
    if (RESTART_OPTIONS[option] === undefined) {
      throw new Error(ERRORS.UNVALID_RESTART_OPTION);
    }
  }

  #restartGame() {
    this.#setAnswer();
    this.#progressGame();
  }
}

const app = new App();
app.play();

module.exports = App;

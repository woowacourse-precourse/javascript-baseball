const { Console } = require('@woowacourse/mission-utils');
const { validate } = require('./utils/validation');
const constants = require('./utils/constants');
const {
  convertToNumberArray,
  createResultMessage,
  createComputerNumber,
} = require('./utils/gameUtil');

class BaseballGame {
  constructor() {
    this.computerNumber = [];
    this.guess = [];
  }

  start() {
    Console.print(constants.START_MESSAGE);
    this.computerNumber = createComputerNumber();
    this.getUserGuess();
  }

  end() {
    Console.print(constants.END_MESSAGE);
    this.restart();
  }

  restart() {
    Console.readLine(constants.RESTART_MESSAGE, (choice) => {
      if (constants.WRONG_CHOICE.test(choice)) {
        Console.close();
        throw new Error(constants.WRONG_INPUT_ERROR);
      }
      if (choice == constants.RESTART) {
        this.start();
        return;
      }
      Console.close();
    });
  }

  getUserGuess() {
    Console.readLine(constants.INPUT_MESSAGE, (guess) => {
      this.guess = convertToNumberArray(guess);
      validate(this.guess);
      this.playGame();
    });
  }

  playGame() {
    const { strike, ball } = this.getResult();
    const resultMessage = createResultMessage(strike, ball);
    Console.print(resultMessage);

    if (strike === constants.DIGIT) {
      this.end();
      return;
    }
    this.getUserGuess();
  }

  getResult() {
    const strike = this.countStrike();
    const ball = this.countBall();
    return { strike, ball };
  }

  countStrike() {
    const strike = this.guess.filter((number, idx) => number === this.computerNumber[idx]);
    return strike.length;
  }

  countBall() {
    const ball = this.guess.filter((number, idx) => {
      const indexOfComputerNumber = this.computerNumber.indexOf(number);
      return indexOfComputerNumber !== -1 && indexOfComputerNumber !== idx;
    });
    return ball.length;
  }
}

module.exports = BaseballGame;

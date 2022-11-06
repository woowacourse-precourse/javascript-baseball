const { Console, Random } = require('@woowacourse/mission-utils');
const { validate } = require('./utils/validation');
const constants = require('./utils/constants');
const { convertToNumberArray } = require('./utils/gameUtil');

class BaseballGame {
  constructor() {
    this.computerNumber = [];
    this.guess = [];
  }

  start() {
    Console.print(constants.START_MESSAGE);
    this.computerNumber = this.createComputerNumber();
    this.getUserGuess();
  }

  end() {
    Console.print(constants.END_MESSAGE);
    this.restart();
  }

  restart() {
    Console.readLine(constants.RESTART_MESSAGE, (choice) => {
      if (/[^12]/.test(choice)) {
        Console.close();
        throw new Error(constants.WRONG_INPUT_ERROR);
      }
      if (choice == 1) {
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
    const resultMessage = this.createResultMessage(strike, ball);
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

  createResultMessage(strike, ball) {
    let resultMessage = '';
    if (strike === 0 && ball === 0) return constants.NOTHING;
    if (ball) resultMessage += `${ball}${constants.BALL} `;
    if (strike) resultMessage += `${strike}${constants.STRIKE}`;
    return resultMessage;
  }

  createComputerNumber() {
    const computerNumber = new Set();
    while (computerNumber.size < constants.DIGIT) {
      computerNumber.add(Random.pickNumberInRange(1, 9));
    }
    return Array.from(computerNumber);
  }
}

module.exports = BaseballGame;

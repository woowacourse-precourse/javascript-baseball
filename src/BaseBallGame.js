const { Console } = require('@woowacourse/mission-utils');
const { getUniqueNumbersInRange } = require('./utils/RandomNumber');
const { MESSAGE, NUMBER_LENGTH, RESTART } = require('./utils/Constant');
const { countBall, countStrike, printBallCount } = require('./utils/BallCount');
const {
  checkInputLength,
  checkInputIsNumber,
  checkInputExcludeCertainNumber,
  checkInputDuplicateNumber,
  checkInputIsOneOrTwo,
} = require('./utils/InputChecker');

class BaseBallGame {
  static printMessage(message) {
    return message ? Console.print(message) : null;
  }

  create(message = null) {
    BaseBallGame.printMessage(message);
    this.run(getUniqueNumbersInRange(1, 9, NUMBER_LENGTH));
  }

  run(computerNumbers) {
    Console.readLine(MESSAGE.turn, (input) => this.turn(computerNumbers, input));
  }

  turn(computerNumbers, input) {
    this.checkInputIsValid(input);
    const userNumbers = input.split('');
    const ball = countBall(userNumbers, computerNumbers);
    const strike = countStrike(userNumbers, computerNumbers);
    printBallCount(ball, strike);
    return strike === NUMBER_LENGTH ? this.quit() : this.run(computerNumbers);
  }

  quit() {
    BaseBallGame.printMessage(MESSAGE.end);
    Console.readLine(MESSAGE.replay, (input) => this.replayOrClose(input));
  }

  replayOrClose(input) {
    checkInputIsOneOrTwo(input);
    return input === RESTART ? this.create() : Console.close();
  }

  checkInputIsValid(input) {
    checkInputLength(input, NUMBER_LENGTH);
    checkInputIsNumber(input);
    checkInputExcludeCertainNumber(input, 0);
    checkInputDuplicateNumber(input);
  }
}

module.exports = BaseBallGame;

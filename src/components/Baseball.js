const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGE, RESULT, END_OPTION } = require('../data/constants');
const {
  checkBaseBallException,
  checkRestartException,
} = require('../utils/checkInput');

class Game {
  extractRandomNumber() {
    const randomNumbers = new Set();

    while (randomNumbers.size < 3) {
      randomNumbers.add(Random.pickNumberInRange(1, 9));
    }

    return [...randomNumbers];
  }

  askRestart() {
    Console.readLine(MESSAGE.RESTART + '\n', answer => {
      checkRestartException(answer);

      if (answer == END_OPTION.RESTART) this.gameStart();
      if (answer == END_OPTION.EXIT) Console.close();
    });
  }

  isThreeStrike(strike) {
    if (strike === 3) {
      Console.print(MESSAGE.SUCCESS);

      this.askRestart();
    }
  }

  recursiveInput(computerNumber) {
    Console.readLine(MESSAGE.INPUT, inputNum => {
      checkBaseBallException(inputNum, 3);

      const countResult = this.countBallAndStrike(inputNum, computerNumber);
      const resultPrint = this.countResultPrint(countResult);
      Console.print(resultPrint);

      this.isThreeStrike(countResult.strike);

      this.recursiveInput(computerNumber);
    });
  }

  countBallAndStrike(inputNum, computerNumber) {
    const count = {
      ball: 0,
      strike: 0,
    };
    const inputNumArr = inputNum.split('');

    inputNumArr.forEach((num, index) => {
      if (parseInt(num) === computerNumber[index]) count.strike += 1;
      else if (computerNumber.includes(parseInt(num))) count.ball += 1;
    });
    return count;
  }

  countResultPrint({ ball, strike }) {
    if (ball == 0 && strike == 0) return RESULT.NOTHING;

    if (ball > 0 && strike > 0)
      return `${ball}${RESULT.BALL} ${strike}${RESULT.STRIKE}`;
    if (ball > 0 && strike == 0) return `${ball}${RESULT.BALL}`;
    if (ball == 0 && strike > 0) return `${strike}${RESULT.STRIKE}`;
  }

  gameStart() {
    const computerNumber = this.extractRandomNumber();
    this.recursiveInput(computerNumber);
  }
}

module.exports = Game;

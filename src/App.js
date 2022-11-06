const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGE, RESULT, ERROR, END_OPTION } = require('./data/constants');
const CheckException = require('./utils');

class App {
  randomArr() {
    const randomNumbers = new Set();

    while (randomNumbers.size < 3) {
      randomNumbers.add(Random.pickNumberInRange(1, 9));
    }

    return [...randomNumbers];
  }

  askRestart() {
    Console.readLine(MESSAGE.RESTART + '\n', answer => {
      if (!['1', '2'].includes(answer)) throw ERROR.RESTART_RANGE;
      if (answer == END_OPTION.RESTART) this.restart();
      if (answer == END_OPTION.EXIT) Console.close();
      return;
    });
  }

  isThreeStrike(strike) {
    if (strike === 3) {
      Console.print(MESSAGE.SUCCESS);

      this.askRestart();
      return;
    }
  }

  recursiveInput() {
    Console.readLine(MESSAGE.INPUT, inputNum => {
      CheckException(inputNum, 3);

      const { ball, strike } = this.check(inputNum);
      Console.print(this.result(ball, strike));

      this.isThreeStrike(strike);

      this.recursiveInput();
      return;
    });
  }

  check(inputNum) {
    const count = {
      ball: 0,
      strike: 0,
    };
    const inputNumArr = inputNum.split('');

    inputNumArr.forEach((num, index) => {
      if (parseInt(num) === this.computerNum[index]) count.strike += 1;
      else if (this.computerNum.includes(parseInt(num))) count.ball += 1;
    });
    return count;
  }

  result(ball, strike) {
    if (ball == 0 && strike == 0) return RESULT.NOTHING;

    if (ball > 0 && strike > 0)
      return `${ball}${RESULT.BALL} ${strike}${RESULT.STRIKE}`;
    if (ball > 0 && strike == 0) return `${ball}${RESULT.BALL}`;
    if (ball == 0 && strike > 0) return `${strike}${RESULT.STRIKE}`;
  }

  restart() {
    this.computerNum = this.randomArr();
    this.recursiveInput();
    return;
  }

  play() {
    Console.print(MESSAGE.START);
    this.computerNum = this.randomArr();

    this.recursiveInput();
    return;
  }
}

module.exports = App;

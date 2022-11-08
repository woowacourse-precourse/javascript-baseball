const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGE, RESULT, ERROR, END_OPTION } = require('./data/constants');
const { CheckException } = require('./exception/exception');

class App {
  randomArray() {
    return Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  askRestart() {
    Console.readLine(MESSAGE.RESTART + '\n', answer => {
      if (!['1', '2'].includes(answer))
        throw ERROR.RESTART_RANGE;
      if (answer == END_OPTION.RESTART)
        this.restart();
      if (answer == END_OPTION.EXIT)
        Console.close();

      return;
    });
  }

  threeStrike(strike) {
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

      this.threeStrike(strike);
      this.recursiveInput();

      return;
    });
  }

  check(inputNum) {
    const count = {
      ball: 0,
      strike: 0
    };
    const inputNumArray = inputNum.split('');

    inputNumArray.forEach((num, index) => {
      if (parseInt(num) === this.computerNumber[index])
        count.strike += 1;
      else if (this.computerNumber.includes(parseInt(num)))
        count.ball += 1;
    });
    return count;
  }

  restart() {
    this.computerNumber = this.randomArray();
    this.recursiveInput();

    return;
  }

  play() {
    Console.print(MESSAGE.START);

    this.computerNumber = this.randomArray();
    this.recursiveInput();

    return;
  }

  result(ball, strike) {
    if (ball == 0 && strike == 0)
      return RESULT.NOTHING;

    if (ball > 0 && strike > 0)
      return `${ball}${RESULT.BALL} ${strike}${RESULT.STRIKE}`;
    if (ball > 0 && strike == 0)
      return `${ball}${RESULT.BALL}`;
    if (ball == 0 && strike > 0)
      return `${strike}${RESULT.STRIKE}`;
  }
}

const app = new App();
app.play();

module.exports = App;

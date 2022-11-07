const { Console } = require('@woowacourse/mission-utils');
const Computer = require('./Computer.js');
const Function = require('./Function');
const { MESSAGE } = require('./Const');

class App {
  constructor() {
    this.computer = new Computer();
    this.countBoard = {
      strike: 0,
      ball: 0,
    };
  }

  process() {
    Console.readLine(`${MESSAGE.GETINPUT}`, input => {
      Function.throwInvalidInputError(input);
      this.resetCountBoard();
      this.compareUserAndComputer(input);
      this.makeResult();
    });
  }

  makeResult() {
    if (this.countBoard.strike === 0 && this.countBoard.ball === 0) {
      Console.print(COUNTBOARDRESULT.NOTHING);
    } else if (this.countBoard.strike === 0) {
      Console.print(COUNTBOARDRESULT.NOSTRIKE(this.countBoard.ball));
    } else if (this.countBoard.ball === 0) {
      Console.print(COUNTBOARDRESULT.NOBALL(this.countBoard.strike));
    } else {
      Console.print(
        COUNTBOARDRESULT.RESULT(this.countBoard.strike, this.countBoard.ball),
      );
    }
  }

  compareUserAndComputer(user) {
    const userNumberArray = user.toString().split('');
    const computerNumberArry = this.computer.selectedNumber
      .toString()
      .split('');
    userNumberArray.forEach((number, numberIndex) => {
      const index = computerNumberArry.indexOf(number);
      if (index < 0) {
        return;
      }
      if (index === numberIndex) {
        this.countBoard.strike += 1;
      } else {
        this.countBoard.ball += 1;
      }
    });
  }

  resetCountBoard() {
    this.countBoard.strike = 0;
    this.countBoard.ball = 0;
  }

  play() {
    this.computer.setRandomNumber();
    this.process();
  }
}

Console.print(`${MESSAGE.START}`);
const app = new App();
app.play();

module.exports = App;

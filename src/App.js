const { Console } = require('@woowacourse/mission-utils');
const Computer = require('./Computer.js');
const Function = require('./Function');
const { MESSAGE, COUNTBOARDRESULT } = require('./Const');

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
      this.decideReprocess();
    });
  }

  askRestartOrEnd() {
    Console.readLine(MESSAGE.RESTARTOREND, input => {
      this.restartOrEnd(input);
    });
  }

  restartOrEnd(input) {
    Function.validOneOrTwo(input);
    if (input === '1') {
      this.play();
    } else {
      Function.endApp();
    }
  }

  decideReprocess() {
    if (this.countBoard.strike === 3) {
      Console.print(MESSAGE.THREESTRIKE);
      this.askRestartOrEnd();
    } else {
      this.process();
    }
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
    const computerNumberArray = this.computer.selectedNumber
      .toString()
      .split('');

    userNumberArray.forEach((number, numberIndex) => {
      this.setCountBoard(number, numberIndex, computerNumberArray);
    });
  }

  setCountBoard(number, numberIndex, computerNumberArray) {
    const index = computerNumberArray.indexOf(number);
    if (index < 0) {
      return;
    }
    if (index === numberIndex) {
      this.countBoard.strike += 1;
    } else {
      this.countBoard.ball += 1;
    }
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

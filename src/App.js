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

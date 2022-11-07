const { Console } = require("@woowacourse/mission-utils");
const Computer = require("./Computer");
const { INPUT_ERROR, NO_MESSAGE } = require("./constants");
const Controller = require("./Controller");

class App {
  constructor() {
    this._computer = new Computer();
    this._controller = new Controller();
    this.MESSAGE = {
      START : "숫자 야구 게임을 시작합니다.",
      USER_ANSWER : "숫자를 입력해주세요 : ",
      GAME_OVER : "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
      USER_SELECT : "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    }
    this.FLAG = {
      RESTART : '1',
      FINISH : '2'
    }
  }

  play() {
    this.printMessage(this.MESSAGE.START);
    this.start();
  }

  start() {
    this.getUserAnswer();
  }

  getUserAnswer() {
    /** readline -> question으로 구현되어 있어 한번 input 받은 후 pause 
     *  따라서 callback으로 계속 실행될 수 있도록 구현해야 할 것 같다. 
     */
    Console.readLine(this.MESSAGE.USER_ANSWER, (input) => {
      const numbers = this.splitInput(input);
      this.validateInput(numbers);
      const [hint, isFinish] = this._controller.compareAnswer(numbers, this._computer.answer);
      this.validateHint(hint, isFinish);
    });
  }

  validateInput(numbers) {
    if (this._controller.isValidInput(numbers) === false) {
      throw new Error(INPUT_ERROR);
    };
  }

  validateHint(hint, isFinish) {
    this.printMessage(hint);
    if (isFinish === true) {
      this.printMessage(this.MESSAGE.GAME_OVER);
      this.getUserSelect();
    } else {
      this.start();
    }
  }

  getUserSelect() {
    Console.readLine(this.MESSAGE.USER_SELECT, (input) => {
      if (input === this.FLAG.RESTART) this.restart();
      else if (input === this.FLAG.FINISH) this.finish();
      else throw new Error(INPUT_ERROR);
    });
  }

  restart() {
    this._computer.answer = this._computer.makeAnswer();
    this.start();
  }

  finish() {
    Console.close();
  }

  splitInput(input) {
    return input.split('').map(function (number) {
      return Number(number);
    });
  }

  printMessage(message) {
    Console.print(message);
  }
}

module.exports = App;

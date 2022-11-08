const MissionUtils = require("@woowacourse/mission-utils");
const Console = require("./Console.js");
const Evaluator = require("./Evaluator.js");
const Counter = require("./Counter.js");

class App {
  constructor() {
    this.Console = new Console();
    this.evaluator = new Evaluator();
    this.counter = new Counter();
    this.callstack = 0;
    this.computerNumber;
  }

  async play() {
    try {
      if (this.callstack === 0) {
        this.Console.printMessage("숫자 야구 게임을 시작합니다.");
        this.computerNumber = this.Console.setComputerNumber();
      }
      const userNumber = await this.Console.getUserValue();
      const countedNumber = this.counter.countStrikeAndBall(userNumber, this.computerNumber);
      const result = this.evaluator.evaluateResult(countedNumber);

      if (result === "incorrect") {
        this.callstack++;
        this.play();
      } else if (result === "correct") {
        this.restartOrNot();
      }
    } catch (error) {
      this.Console.printMessage(error);
    }
  }

  async restartOrNot() {
    try {
      const restartOrNot = await this.Console.inputRestartOrNot();

      if (restartOrNot === "1") {
        this.callstack = 0;
        this.play();
      } else if (restartOrNot === "2") {
        this.Console.printMessage("프로그램 종료");
        this.Console.closeConsole();
      }
    } catch (error) {
      this.Console.printMessage(error);
    }
  }
}

module.exports = App;

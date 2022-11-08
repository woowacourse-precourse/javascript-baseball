const MissionUtils = require("@woowacourse/mission-utils");
const Console = require("./Console.js");

class Evaluator {
  constructor() {
    this.console = new Console();
  }

  evaluateResult(result) {
    if (this.isIncorrectResult(result)) {
      return "incorrect";
    }

    if (result.strike === 3 && result.ball === 0) {
      this.console.printMessage("3스트라이크");
      this.console.printMessage("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return "correct";
    }
  }

  isIncorrectResult(result) {
    if (result.strike === 0 && result.ball === 0) {
      MissionUtils.Console.print("낫싱");
      return true;
    } else if (result.strike > 0 && result.ball > 0) {
      MissionUtils.Console.print(`${result.ball}볼 ${result.strike}스트라이크`);
      return true;
    } else if (result.strike === 0) {
      MissionUtils.Console.print(`${result.ball}볼`);
      return true;
    } else if (result.ball === 0 && result.strike !== 3) {
      MissionUtils.Console.print(`${result.strike}스트라이크`);
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Evaluator;

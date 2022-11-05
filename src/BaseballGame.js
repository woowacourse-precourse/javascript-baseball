const MissionUtils = require("@woowacourse/mission-utils");
const Computer = require("./Computer");
const User = require("./User");

class BaseballGame {
  constructor() {
    this.computer = null;
    this.user = null;
  }

  initGame() {
    this.computer = new Computer();
    this.user = new User();
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.enterUserNumbers();
  }

  enterUserNumbers() {
    let result = null;
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userNumber) => {
      this.user.setUserNumber(userNumber);
      result = this.compareNumbers(this.user.number, this.computer.numbers);
      MissionUtils.Console.print(result);
      this.gameLoop(result);
    });
  }

  gameLoop(result) {
    result === "3스트라이크" ? this.gameEnd() : this.enterUserNumbers();
  }

  gameEnd() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (answer) => {
        if (answer === "1") {
          this.initGame();
        } else if (answer === "2") {
          MissionUtils.Console.close();
        }
      }
    );
  }

  compareNumbers(userNumbers, computerNumbers) {
    let ball = 0;
    let strike = 0;
    userNumbers.reduce((acc, cur, index) => {
      if (parseInt(cur) === computerNumbers[index]) {
        strike += 1;
      } else if (computerNumbers.includes(parseInt(cur))) {
        ball += 1;
      }
    }, []);

    return this.setResult(ball, strike);
  }

  setResult(ball, strike) {
    let resultMessage = [];
    if (ball > 0) {
      resultMessage.push(`${ball}볼`);
    }
    if (strike > 0) {
      resultMessage.push(`${strike}스트라이크`);
    }
    return resultMessage.length === 0 ? "낫싱" : resultMessage.join(" ");
  }
}

module.exports = BaseballGame;

const MissionUtils = require("@woowacourse/mission-utils");
const constants = require("./constants");
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
    MissionUtils.Console.print(constants.GAME_START_MESSAGE);
    this.enterUserNumbers();
  }

  enterUserNumbers() {
    let result = null;
    MissionUtils.Console.readLine(constants.INPUT_REQUEST_MESSAGE, (userNumber) => {
      this.user.setUserNumber(userNumber);
      result = this.compareNumbers(this.user.number, this.computer.numbers);
      MissionUtils.Console.print(result);
      this.gameLoop(result);
    });
  }

  gameLoop(result) {
    result === constants.THREE_STRIKE ? this.gameEnd() : this.enterUserNumbers();
  }

  gameEnd() {
    MissionUtils.Console.print(constants.GAME_END_MESSAGE);
    MissionUtils.Console.readLine(
      constants.RESTART_QUESTION_MESSAGE,
      (answer) => {
        if (answer === "1") {
          this.initGame();
        } else if (answer === "2") {
          MissionUtils.Console.close();
        } else {
          throw constants.INVALID_COMMAND;
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
    return resultMessage.length === 0 ? constants.NOTHING : resultMessage.join(" ");
  }
}

module.exports = BaseballGame;

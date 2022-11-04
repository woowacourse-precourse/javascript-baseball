const MissionUtils = require("@woowacourse/mission-utils");

class GameResult {
  constructor(computer) {
    this.COMPUTER = computer;
  }

  showGameResult(userInput) {
    console.log("computer", this.COMPUTER);

    this.ball = 0;
    this.strike = 0;

    const USER_INPUT = userInput.split("").map((item) => Number(item));

    this.checkBallOrStrike(USER_INPUT);

    MissionUtils.Console.print(this.strike);
    MissionUtils.Console.print(this.ball);
    MissionUtils.Console.close();
  }

  checkBallOrStrike(userInputArray) {
    for (let index = 0; index < this.COMPUTER.length; index++) {
      if (this.COMPUTER[index] === userInputArray[index]) {
        this.strike++;
        continue;
      }

      if (userInputArray.includes(this.COMPUTER[index])) {
        this.ball++;
      }
    }
  }
}

module.exports = GameResult;

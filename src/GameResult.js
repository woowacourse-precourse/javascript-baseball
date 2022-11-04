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

    for (let index = 0; index < this.COMPUTER.length; index++) {
      if (this.COMPUTER[index] === USER_INPUT[index]) {
        this.strike++;
        continue;
      }

      if (USER_INPUT.includes(this.COMPUTER[index])) {
        this.ball++;
      }
    }

    MissionUtils.Console.print(this.strike);
    MissionUtils.Console.print(this.ball);
    MissionUtils.Console.close();
  }
}

module.exports = GameResult;

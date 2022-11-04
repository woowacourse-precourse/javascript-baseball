const MissionUtils = require("@woowacourse/mission-utils");
const CheckConstraints = require("../src/CheckConstraints");
const GameResult = require("../src/GameResult");

class GetUserInput {
  constructor(computer) {
    this.COMPUTER = computer;
  }

  getUserInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userInput) => {
      const checkConstraints = new CheckConstraints();
      checkConstraints.checkConstraints(userInput);

      const gameResult = new GameResult(this.COMPUTER);
      gameResult.showGameResult(userInput);
    });
  }
}

module.exports = GetUserInput;

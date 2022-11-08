const utils = require("./utlils");
const { Console } = require("@woowacourse/mission-utils");
class BaseballGame {
  startGame() {
    const targetNumber = utils.getTargetNumber();
    this.startRound(targetNumber);
  }

  startRound(targetNumber) {
    Console.readLine("숫자를 입력해주세요 : ", (userInput) => {
      const userInputNumber = utils.isValidInput(userInput);
      const ballCount = utils.getBallCount(userInputNumber, targetNumber);
      const strikeCount = utils.getStrikeCount(userInputNumber, targetNumber);

      utils.printHint(ballCount, strikeCount);

      if (strikeCount === 3) this.askRestartGame();

      this.startRound(targetNumber);
    });
  }

  askRestartGame() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (userInput) => {
        if (userInput === "1") {
          this.startGame();
        } else if (userInput === "2") Console.close();
        else throw new Error("유효하지 않은 값을 입력해 게임이 종료됩니다");
      }
    );
  }
}

module.exports = BaseballGame;

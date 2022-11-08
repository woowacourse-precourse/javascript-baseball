const { Console } = require("@woowacourse/mission-utils");
const { getIsInputValueValid } = require("./ValidCheck");
const { getHint } = require("./Hint");
const Computer = require("./Computer");

class BaseballGame {
  constructor() {
    this.computer = new Computer();
  }

  startGame() {
    this.getUserInput();
  }

  getUserInput() {
    Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.handleInputDuringGame(input);
    });
  }

  recommendRestart() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (input) => {
        this.handleInputAfterEndGame(input);
      }
    );
  }

  handleInputDuringGame(input) {
    if (!getIsInputValueValid(input)) {
      throw Error("입력값이 유효하지 않습니다.");
    }

    const hint = getHint(this.computer.correctNumber, input);
    Console.print(hint);

    if (hint === "3스트라이크") {
      this.recommendRestart();
      return;
    }
    this.getUserInput();
  }

  handleInputAfterEndGame(input) {
    const expectInputValues = ["1", "2"];

    if (!expectInputValues.includes(input))
      throw Error("입력값이 유효하지 않습니다.");

    switch (input) {
      case "1":
        this.restartGame();
        break;
      case "2":
        Console.close();
        break;
    }
  }

  restartGame() {
    this.computer.setNewCorrectNumber();
    this.startGame();
  }
}

module.exports = BaseballGame;

const MissionUtils = require("@woowacourse/mission-utils");
const ValidCheck = require("./ValidCheck");
const Hint = require("./Hint");
const Computer = require("./Computer");

class BaseballGame {
  inputNumber;
  hint = "";

  computer = new Computer();

  startGame() {
    if (this.hint === "")
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.getUserInput();
  }

  getUserInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      if (!this.getIsInputValueValid(input)) {
        throw Error("입력값이 유효하지 않습니다.");
      }
      this.inputNumber = input;
      this.hint = this.getHint(this.computer.correctNumber, this.inputNumber);
      MissionUtils.Console.print(this.hint);

      if (this.hint !== "3스트라이크") this.getUserInput();
      else this.recommendRestart();
    });
  }

  recommendRestart() {
    const expectInputValues = ["1", "2"];
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (input) => {
        if (!expectInputValues.includes(input))
          throw Error("입력값이 유효하지 않습니다.");
        if (input === "1") {
          this.resetGameValue();
          this.startGame();
        }
      }
    );
  }

  getIsInputValueValid(inputValue) {
    let isInputValueValid = true;
    if (
      ValidCheck.getIsLengthInvalid(inputValue) ||
      ValidCheck.getIsRepeatExist(inputValue) ||
      ValidCheck.getIsInvalidWordExist(inputValue)
    )
      isInputValueValid = false;
    return isInputValueValid;
  }

  getHint(correctNumber, inputNumber) {
    const strikeCount = Hint.countStrike(correctNumber, inputNumber);
    const ballCount = Hint.countBall(correctNumber, inputNumber, strikeCount);
    const hint = Hint.convertCountToHintString(strikeCount, ballCount);

    return hint;
  }

  resetGameValue() {
    this.hint = "";
    this.computer.setNewCorrectNumber();
  }
}

module.exports = BaseballGame;

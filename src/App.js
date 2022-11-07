const MissionUtils = require("@woowacourse/mission-utils");
const pickNumber = require("./pickNumber.js");
const userNumberInput = require("./numberInput.js");
const compare = require("./compare.js");
const hint = require("./hint.js");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.startGame();
  }

  startGame() {
    const computerNums = pickNumber.pickComputerNum();

    let isFinish = false;
    while (!isFinish) {
      const userNumber = userNumberInput.inputNumber();
      const compare_value = compare(userNumber, computerNums);
      const result = hint(compare_value);

      isFinish = this.EndGame(result);
    }
    this.pickNewOrEnd();
  }

  EndGame(result) {
    let isTrue = false;
    if (result === "3스트라이크") {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      isTrue = true;
    }
    return isTrue;
  }

  pickNewOrEnd() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (number) => {
        if (number === "1") {
          this.startGame();
        } else {
          MissionUtils.Console.close();
          MissionUtils.Console.print("게임 종료");
        }
      }
    );
  }
}

module.exports = App;

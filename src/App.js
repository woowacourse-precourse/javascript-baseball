const MissionUtils = require("@woowacourse/mission-utils");
const pickNumber = require("./pickNumber.js");
const userNumberInput = require("./numberInput.js");
const compare = require("./compare.js");
const hint = require("./hint.js");

class App {
  play() {
    const computerNums = pickNumber.pickComputerNum();

    let isFinish = false;
    while (!isFinish) {
      const userNumber = userNumberInput.inputNumber();
      const compare_value = compare(userNumber, computerNums);
      const result = hint(compare_value);

      isFinish = this.EndGame(result);
    }
    pickNumber.pickNewOrEnd(this.pickRestartOrEnd);
  }

  EndGame(result) {
    let isTrue = false;
    if (result === "3스트라이크") {
      isTrue = true;
    }
    return isTrue;
  }

  pickRestartOrEnd = (number) => {
    if (number === "1") {
      this.play();
    } else {
      MissionUtils.Console.print("게임 종료");
    }
  };
}

module.exports = App;

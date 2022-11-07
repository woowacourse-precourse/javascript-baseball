const MissionUtils = require("@woowacourse/mission-utils");
const pickNumber = require("./pickNumber.js");
const numberInput = require("./numberInput.js");
const compare = require("./compare.js");
const hint = require("./hint.js");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.gameStart();
  }

  gameStart() {
    const computerNums = pickNumber.pickComputerNum();

    while (true) {
      const inputNumber = numberInput();
      const compare_value = compare(inputNumber, computerNums);
      const result = hint(compare_value);

      if (result === "3스트라이크") {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        break;
      }
    }
    pickNumber.pickNewOrEnd(this.pickOneOrTwo);
  }

  pickOneOrTwo = (number) => {
    if (number === "1") {
      this.gameStart();
    } else {
      MissionUtils.Console.print("게임 종료");
    }
  };
}

module.exports = App;

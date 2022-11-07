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
    }
  }
}

module.exports = App;

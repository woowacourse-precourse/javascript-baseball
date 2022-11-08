const MissionUtils = require("@woowacourse/mission-utils");
const e = require("cors");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
  pickUniqueNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(0, 9, 3).join("");
  }
  getInputNumber(pickedNumber) {
    let strike = 0;
    while (strike === 0)
      MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {
        let gameResultComment = this.numberCheck(pickedNumber, number);
        MissionUtils.Console.print(gameResultComment);
        if (gameResultComment === "3스트라이크") {
          strike = 3;
        }
      });
  }
}
module.exports = App;

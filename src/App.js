const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.count = "";
  }
  play() {
    this.gameStart();
    this.count = this.generateCount(this.generateRandomList());
    this.getUserInput();
  }

  gameStart() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  generateCount(numberList) {
    return numberList.reduce((acc, cur) => acc + cur, "");
  }

  generateRandomList() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  getUserInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {});
  }
}

module.exports = App;

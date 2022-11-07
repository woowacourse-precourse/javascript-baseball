const MissionUtils = require("@woowacourse/mission-utils");
const MESSAGES = {
  start: "숫자 야구 게임을 시작합니다.",
  end: "숫자 야구 게임을 종료합니다.",
  input: "숫자를 입력해주세요 : ",
  correct: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  restart: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
};
class App {
  constructor() {
    this.computerNum = "";
  }
  play() {
    this.print(MESSAGES.start);
    this.computerNum = getComputerNum();
  }
  print(message) {
    MissionUtils.Console.print(message);
  }
  getComputerNum() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).join("");
  }
}
const app = new App();
app.play();
module.exports = App;

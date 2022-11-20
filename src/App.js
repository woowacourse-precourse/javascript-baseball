const MissionUtils = require("@woowacourse/mission-utils");
class App {
  constructor() {
    this.computerValue = [];
  }
  play() {
    this.computerValue = this.renderComputerValue();
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    MissionUtils.Console.readLine("숫자를 입력해주세요: ", (input) =>
      this.userInputValue(input)
    );
  }
  renderComputerValue() {
    let arr = [];
    for (let i = 0; i < 3; i++) {
      let num = MissionUtils.Random.pickNumberInList([
        1, 2, 3, 4, 5, 6, 7, 8, 9,
      ]);
      if (!arr.includes(num)) arr.push(num);
    }
    return arr;
  }
}
const app = new App();
app.play();
module.exports = App;

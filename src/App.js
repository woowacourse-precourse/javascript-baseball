const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.getUserNumber();
  }
  getUserNumber() {
    MissionUtils.Console.readLine("닉네임을 입력해주세요.", (answer) => {
      console.log(`닉네임: ${answer}`);
      MissionUtils.Console.close();
    });
  }
}

const app = new App();
app.play();
module.exports = App;

const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.getUserNumber();
  }
  getUserNumber() {
    MissionUtils.Console.readLine("닉네임을 입력해주세요.", (answer) => {
      this.isValidSingleDigitNaturalNumber(answer);
      MissionUtils.Console.close();
    });
  }
  isValidSingleDigitNaturalNumber(number) {
    const regexp = new RegExp("^[1-9]+$");
    if (!regexp.test(number)) {
      throw "1에서 9까지의 자연수를 입력해주세요";
    }
  }
}

const app = new App();
app.play();
module.exports = App;

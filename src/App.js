const MissionUtils = require("@woowacourse/mission-utils");
const MakeRandomNumber = require("../src/MakeRandomNumber");
const GetUserInput = require("../src/GetUserInput");

class App {
  play() {
    this.showStartMessage();
    this.COMPUTER = MakeRandomNumber.makeRandomNumber();

    const getUserInput = new GetUserInput(this.COMPUTER);
    getUserInput.getUserInput();
  }

  showStartMessage() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
}

const app = new App();
app.play();

module.exports = App;

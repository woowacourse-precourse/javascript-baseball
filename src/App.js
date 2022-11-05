const MissionUtils = require("@woowacourse/mission-utils");
const RandomNumber = require("./RandomNumber");
const Player = require("../src/Player");

class App {
  play() {
    this.showStartMessage();
    this.COMPUTER = RandomNumber.makeRandomNumber();

    const player = new Player(this.COMPUTER);
    player.getPlayerInput();
  }

  showStartMessage() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
}

const app = new App();
app.play();

module.exports = App;

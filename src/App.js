const MissionUtils = require("@woowacourse/mission-utils");
const Game = require("./Game")

class App {
  game = new Game();

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.game.gamePlay();
  }  
}
const app = new App();
app.play();

module.exports = App;
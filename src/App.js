const MissionUtils = require("@woowacourse/mission-utils");
const Setting = require("./Setting");
const Game = require("./Game");

const setting = new Setting();
const game = new Game();

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.start();
  }

  start() {
    let computerNumber = setting.setComputerNumber();

    while (true) {
      game.setUserNumber();
      let compareResult = game.compareNumbers(computerNumber);
      if(compareResult === "3스트라이크"){
        setting.restartGame();
        if (setting.restart === "1") this.play();
        else if (setting.restart === "2") break;
        break;
      }
    }
  }
}

module.exports = App;
class App {
  constructor() {
    this.missionConsole = require("@woowacourse/mission-utils").Console.print("숫자 야구 게임을 시작합니다");
    this.playGame = require("./PlayGame");
    this.pcNumber = require("./GetComputerInput");
  }
  play() {
    const pcInputNumber = new this.pcNumber().makeRandomNumbers();
    const gameInit = new this.playGame().gameStart(pcInputNumber);
    return gameInit;
  }
}

const app = new App();
app.play();

module.exports = App;

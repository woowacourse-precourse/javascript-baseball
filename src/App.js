const MissionUtils = require("@woowacourse/mission-utils");
const game = require("./game")

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.")
    const computerNumber = game.computerNumber()

    while(true){
      let gameResult = game.battle(game.userInput(),computerNumber)
      if(game.message(gameResult) === "게임 종료") break;
      }
    if(game.restart() === 1) this.play();
  }
}

module.exports = App;

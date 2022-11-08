const GameProgress = require("./GameProgress");
const { Console } = require("@woowacourse/mission-utils");


class App {
  constructor(){
    this.gameProgress = new GameProgress();
    

  }
  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.gameProgress.gameStart();
  }
}


module.exports = App;
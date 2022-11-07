const GameProgress = require("./GameProgress");
const UserNumber = require("./UserNumber");
const CreateNumber = require("./CreateNumber");
const { Console } = require("@woowacourse/mission-utils");


class App {
  constructor(){
    this.gameProgress = new GameProgress();
    this.userNumber = new UserNumber();
    this.createNumber = new CreateNumber();
    

  }
  play() {
    Console.print("숫자 야구 게임을 시작합니다.")
    this.gameProgress.gameStart();
  }
}


module.exports = App;
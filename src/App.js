const { Console, Random } = require("@woowacourse/mission-utils/");

class App {
  
  constructor() {
    this.isPlayingNow = false;
  }

  roundStart() {
    if (!this.isPlayingNow) {
      this.isPlayingNow = true;
      Console.print("숫자 야구 게임을 시작합니다.");
    }
  }
  
  play() {
    this.roundStart();
  }

}

module.exports = App;

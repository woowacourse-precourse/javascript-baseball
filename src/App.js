const { Console, Random } = require("@woowacourse/mission-utils/");
const NUMBER_LENGTH = 3;

class App {
  
  constructor() {
    this.isPlayingNow = false;
    this.computerNumberList = [];
  }

  getComputerNumberList() {
    const pickedRandomNumberSet = new Set();
    while(pickedRandomNumberSet.size < NUMBER_LENGTH) {
      pickedRandomNumberSet.add(Random.pickNumberInRange(1, 9));
    }
    this.computerNumberList = [...pickedRandomNumberSet];
  }

  roundStart() {
    if (!this.isPlayingNow) {
      this.isPlayingNow = true;
      Console.print("숫자 야구 게임을 시작합니다.");
      this.getComputerNumberList();
    }
  }
  
  play() {
    this.roundStart();
  }

}

module.exports = App;

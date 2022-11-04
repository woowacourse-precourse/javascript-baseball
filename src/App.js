const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.randoms;
    this.init();
  }

  init() {
    this.randoms = this.generateRandomNumbers()
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  generateRandomNumbers() {
    const uniqueRandomNumbers = [];
    while(uniqueRandomNumbers.length < 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9)
      if(!uniqueRandomNumbers.includes(number)) {
        uniqueRandomNumbers.push(number);
      }
    }
    return uniqueRandomNumbers;
  }

  play() {
    console.log(this.randoms);
  }

}

const app = new App();
app.play();

module.exports = App;

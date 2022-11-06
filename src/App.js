const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computerRandomNumber = this.createRandomNumber();
  }

  createRandomNumber() {
    const computerRandomNumber = [];
    while (computerRandomNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerRandomNumber.includes(number)) {
        computerRandomNumber.push(number);
      }
    }
    return computerRandomNumber;
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    console.log(this.computerRandomNumber);
  }
}
const app = new App();
app.play();
module.exports = App;

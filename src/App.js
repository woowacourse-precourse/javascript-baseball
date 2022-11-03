const MissionUtils = require("@woowacourse/mission-utils");
let computer = [];

class App {
  play() {
    this.computerNumber();
    this.start();
  }

  computerNumber() {
    computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
  }

  start() {
    MissionUtils.Console.readLine("숫자를 입력해주세요.", (answer) => {
      console.log(answer);
    });
  }
}
module.exports = App;

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
    let ball = 0;
    let strike = 0;

    MissionUtils.Console.readLine("숫자를 입력해주세요.", (answer) => {
      for (let i = 0; i < computer.length; i++) {
        if (i == computer.indexOf(parseInt(answer[i]))) strike++;
        else if (computer.includes(parseInt(answer[i]))) ball++;
      }
    });
  }
}
module.exports = App;

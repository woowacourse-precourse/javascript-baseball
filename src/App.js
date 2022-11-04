const MissionUtils = require("@woowacourse/mission-utils");

const { Random } = MissionUtils;
const { Console } = MissionUtils;
const User = require("./User");

class App {
  constructor() {
    this.user = new User();
  }

  makeComputerArr() {
    this.computer = [];
    while (this.computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }
    return this.computer;
  }

  start() {
    Console.print("숫자 야구 게임을 시작합니다.");
    const ComputerNum = this.makeComputerArr();
    Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      const Answer = answer;
    });
  }

  play() {
    return this.start();
  }
}

const app = new App();
app.play();
module.exports = App;

const MissionUtils = require("@woowacourse/mission-utils");

const { Random } = MissionUtils;
const { Console } = MissionUtils;

class App {
  constructor() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  play() {
    this.baseballAnswer = this.makeComputerArr();
    this.UserInput = this.InputNum();
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

  inputCheck(inputString) {
    if (inputString.length !== 3) throw new Error();
    const numberArr = inputString.split("").map((x) => {
      if (Number.isNaN(x)) throw new Error();
      return x;
    });
    return numberArr;
  }

  InputNum() {
    Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.inputNum = this.inputCheck(input);
    });
  }

  reStart() {}
}

const app = new App();
app.play();
module.exports = App;

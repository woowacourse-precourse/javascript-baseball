const { Random, Console } = require("@woowacourse/mission-utils");

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
      return parseInt(x, 10);
    });
    return numberArr;
  }

  InputNum() {
    Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.inputNum = this.inputCheck(input);
    });
  }

  compare() {
    const ComputerNum = this.computer;
    const UserNum = this.UserInput;
    let ball = 0;
    let strike = 0;
    if (ComputerNum === UserNum) return "정답!";
    UserNum.map((num, i) => {
      if (ComputerNum.includes(num)) {
        if (UserNum.indexOf(num) === ComputerNum.indexOf(ComputerNum[i])) {
          strike += 1;
        } else {
          ball += 1;
        }
      }
    });
    let resultText = "";
    if (ball !== 0) resultText += `${ball}볼 `;
    if (strike !== 0) resultText += `${strike}스트라이크`;
    if (resultText === "") resultText += `낫싱`;
    return resultText;
  }

  reStart() {}
}

const app = new App();
app.play();
module.exports = App;

const MissionUtils = require("@woowacourse/mission-utils");

const BALL = "볼";
const STRIKE = "스트라이크";
const NOTHING = "낫싱";

class App {
  #userInput;
  #answer;

  pickNumber() {
    const computer = [];
    while (computer.length < 3) {
      const num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(num)) {
        computer.push(num);
      }
    }
    return computer.join("");
  }

  checkLength(input) {
    if (input.length === 3) return true;
    else return false;
  }

  checkIsNumber(input) {
    if (isNaN(Number(input))) return false;
    else return true;
  }

  checkDuplicate(input) {
    for (let i = 0; i < input.length; i++) {
      if (input.indexOf(input[i]) !== i) return false;
    }
    return true;
  }

  checkInput(input) {
    if (
      this.checkLength(input) &&
      this.checkIsNumber(input) &&
      this.checkDuplicate(input)
    ) {
      return true;
    } else return false;
  }

  getUserInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.#userInput = input;
    });
  }

  countStrike(answer, input) {
    const answerArr = answer.split("");
    const strike = answerArr.reduce(
      (acc, curr, idx) => acc + (curr === input[idx]),
      0
    );
    return strike;
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.#answer = this.pickNumber();
    this.getUserInput();
    console.log(this.#userInput);
    if (!this.checkInput(this.#userInput)) throw "잘못된 입력값입니다.";
    MissionUtils.Console.print(
      `${this.countStrike(this.#answer, this.#userInput)}스트라이크`
    );
  }
}

module.exports = App;

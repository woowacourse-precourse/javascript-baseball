const MissionUtils = require("@woowacourse/mission-utils");

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
    return computer;
  }

  checkInput(input) {
    if (checkLength(input) && checkIsNumber(input) && !checkDuplicate(input)) {
      return true;
    } else return false;
  }

  checkLength(input) {
    if (input.length === 3) return true;
    else return false;
  }

  checkIsNumber(input) {
    if (isNaN(Number(input))) return false;
    else return true;
  }

  checkDuplicate(input) {}

  getUserInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.#userInput = input;
    });
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.#answer = this.pickNumber();
    this.getUserInput();
    if (!this.checkInput(this.#userInput)) throw "잘못된 입력값입니다.";
  }
}

module.exports = App;

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

  checkInput(input) {}

  getUserInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.#userInput = input;
    });
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.#answer = this.pickNumber();
    this.getUserInput();
  }
}

const app = new App();
app.play();

module.exports = App;

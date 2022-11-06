const MissionUtils = require("@woowacourse/mission-utils");

const { Random, Console } = MissionUtils;

class App {
  constructor() {
    this.answer = [];
    this.userInput = "";
  }

  startGame() {
    this.createAnswer();
    this.getUserInput();
  }
  getUserInput() {
    Console.readLine("숫자를 입력해주세요 : ", (input) => {
      if (!this.checkException(input, true)) {
        throw "ERROR";
      }
      this.userInput = input;
      Console.close();
    });
  }

  createAnswer() {
    while (this.answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.answer.includes(number)) {
        this.answer.push(number);
      }
    }
  }

  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.startGame();
  }
}

const app = new App();
app.play();

module.exports = App;

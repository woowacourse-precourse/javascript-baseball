const { Random, Console } = require("@woowacourse/mission-utils");

class App {
  play() {
    const computer = this.createNumber();
    this.userInput(computer);
  }

  createNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join("");
  }

  userInput(computer) {
    Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      if (this.validUserInput(answer)) {
        this.gameResult(computer, answer);
      }
    });
  }

  validUserInput(userValue) {}

  gameResult(computer, userValue) {}
}

const app = new App();
Console.print("숫자 야구 게임을 시작합니다.");
app.play();

module.exports = App;

const { Random, Console } = require("@woowacourse/mission-utils");

class App {
  play() {
    const computer = this.createNumber().join("");
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
    return computer;
  }
}

const app = new App();
Console.print("숫자 야구 게임을 시작합니다.");
app.play();

module.exports = App;

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

  validUserInput(userValue) {
    const validLength = () => userValue.length === 3;
    const validRange = () => userValue.match(/[1-9]{3}/g) != null;
    const checkOverlap = () => new Set(userValue.split("")).size === 3;
    if (validLength() && validRange() && checkOverlap()) {
      return true;
    } else {
      throw "올바른 입력값이 아닙니다.";
    }
  }

  gameResult(computer, userValue) {}
}

const app = new App();
Console.print("숫자 야구 게임을 시작합니다.");
app.play();

module.exports = App;

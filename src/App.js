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

    if (validLength() && validRange() && checkOverlap()) return true;
    throw "올바른 입력값이 아닙니다.";
  }

  countStrike(computer, userValue) {
    let strike = 0;
    for (let i = 0; i < 3; i++) {
      if (computer[i] === userValue[i]) strike += 1;
    }
    return strike;
  }

  countBall(computer, userValue) {
    let ball = 0;
    for (let i = 0; i < 3; i++) {
      if (computer.split("").includes(userValue[i])) ball += 1;
    }
    return ball;
  }

  gameResult(computer, userValue) {}
}

const app = new App();
Console.print("숫자 야구 게임을 시작합니다.");
app.play();

module.exports = App;

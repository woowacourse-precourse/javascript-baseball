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
    if (!validLength()) throw new Error("3자리 숫자값을 입력해야합니다");
    if (!validRange()) throw new Error("1-9사이 숫자값을 입력해야합니다");
    if (!checkOverlap()) throw new Error("서로 다른 3자리 수를 입력해주세요");
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

  gameResult(computer, userValue) {
    const STRIKE = this.countStrike(computer, userValue);
    const BALL = this.countBall(computer, userValue) - STRIKE;
    if (STRIKE + BALL === 0) {
      Console.print("낫싱");
      return this.userInput(computer);
    }
    if (STRIKE === 3) {
      Console.print("3스트라이크");
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return this.selectReplay();
    }
    if (STRIKE === 0) {
      Console.print(`${BALL}볼`);
      return this.userInput(computer);
    }
    if (BALL === 0) {
      Console.print(`${STRIKE}스트라이크`);
      return this.userInput(computer);
    }
    Console.print(`${BALL}볼 ${STRIKE}스트라이크`);
    return this.userInput(computer);
  }

  selectReplay() {
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (answer) => {
        if (answer === "1") return this.play();
        if (answer === "2") {
          Console.close();
          return;
        }
        throw new Error("1 혹은 2 이외의 입력값을 입력하셨습니다.");
      }
    );
  }
}

const app = new App();
Console.print("숫자 야구 게임을 시작합니다.");
app.play();

module.exports = App;

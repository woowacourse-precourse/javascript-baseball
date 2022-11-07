const MissionUtils = require("@woowacourse/mission-utils");

const { Console, Random } = MissionUtils;

class App {
  play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    return this.getUserInput();
  }

  getUserInput() {
    const computerNumbers = this.createComputerNumber();

    Console.readLine("숫자를 입력해주세요 :", (answer) => {
      return this.checkAnswer(answer, computerNumbers);
    });
  }

  checkAnswer(userNumber, computerNumbers) {
    const userNumbers = userNumber.split("").map(Number);

    if (isNaN(userNumber) === true) {
      throw "숫자를 입력해주세요.";
    }
    if (userNumber.length !== 3) {
      throw "3자리로 입력해주세요.";
    }
    if (new Set(userNumbers).size !== 3) {
      throw "서로 다른 값을 입력해주세요.";
    }

    return this.compareNumber(userNumbers, computerNumbers);
  }

  compareNumber(userNumbers, computerNumbers) {
    const ball = this.countBall(userNumbers, computerNumbers);
    const strike = this.countStrike(userNumbers, computerNumbers);
    let message = "";

    if (strike === 3) {
      message += strike + "스트라이크";
      Console.print(message);
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return this.gameFinishOption();
    } else {
      if (ball === 0 && strike === 0) {
        message = "낫싱";
      }
      if (ball > 0) {
        message = ball + "볼" + " ";
      }
      if (strike > 0) {
        message += strike + "스트라이크";
      }

      Console.print(message);
      Console.readLine("숫자를 입력해주세요 : ", (answer) => {
        return this.checkAnswer(answer, computerNumbers);
      });
    }
  }

  gameFinishOption() {
    Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    Console.readLine("", (number) => {
      if (number === "1") {
        return this.getUserInput();
      }
      if (number === "2") {
        Console.print("게임 종료");
        Console.close();
        return;
      }
      throw new Error("옳바른 값을 입력해주세요.");
    });
  }

  createComputerNumber() {
    const computer = [];

    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);

      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer;
  }

  countBall(userNumbers, computerNumbers) {
    let count = 0;

    userNumbers.forEach((value, index) => {
      if (computerNumbers.includes(value) && computerNumbers[index] !== value) {
        count += 1;
      }
    });

    return count;
  }

  countStrike(userNumbers, computerNumbers) {
    let count = 0;

    for (let i = 0; i < userNumbers.length; i++) {
      if (userNumbers[i] === computerNumbers[i]) {
        count += 1;
      }
    }

    return count;
  }
}

const app = new App();
app.play();

module.exports = App;

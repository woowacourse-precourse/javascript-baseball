const MissionUtils = require("@woowacourse/mission-utils");

const { Console, Random } = MissionUtils;

class App {
  play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    return this.getUserInput();
  }

  getUserInput() {
    Console.readLine("숫자를 입력해주세요 :", (answer) => {
      return this.checkAnswer(answer);
    });
  }

  checkAnswer(userNumber) {
    const userNumbers = userNumber.split("").map(Number);
    const computerNumbers = this.createComputerNumber();

    if (isNaN(userNumber) === true) {
      throw "숫자를 입력해주세요.";
    }
    if (userNumber.length !== 3) {
      throw "3자리로 입력해주세요.";
    }
    if (new Set(userNumbers).size !== 3) {
      throw "서로 다른 값을 입력해주세요";
    }

    return this.compareNumber(userNumbers, computerNumbers);
  }

  compareNumber(userNumbers, computerNumbers) {
    const ball = this.countBall(userNumbers, computerNumbers);
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
}

const app = new App();
app.play();

module.exports = App;

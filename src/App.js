const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computerNumber = [];
    this.userNumber = [];
  }

  play() {}

  startGameMessage() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다");
  }

  getComputerAnswer() {
    this.computerNumber = [];

    while (this.computerNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9) + "";
      if (!this.computerNumber.includes(number)) {
        this.computerNumber.push(number);
      }
    }
  }

  getUserNumber() {
    MissionUtils.Console.readLine("숫자를 입력해주세요: ", (inputNumber) => {
      this.userNumber = this.validNumber(inputNumber);

      this.compareResult();
    });
  }

  validNumber(number) {
    if (isNaN(number)) {
      throw "서로 다른 3자리 숫자로 입력해주세요 🥲";
    }

    if (number.includes("0") || number < 0) {
      throw "입력값이 잘못되었어요 🥲";
    }

    const setNumber = [...new Set(number)];

    if (setNumber.length === 3) {
      return setNumber;
    } else {
      throw "서로 다른 3자리 숫자로 입력해주세요 🥲";
    }
  }

  compareResult() {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (this.computerNumber[i] === this.userNumber[i]) {
        strike += 1;
      } else if (this.computerNumber.includes(this.userNumber[i])) {
        ball += 1;
      }
    }

    this.printResult(strike, ball);
  }

  printResult(strike, ball) {
    if (strike === 0 && ball === 0) MissionUtils.Console.print("낫싱");

    if (strike > 0 && ball === 0)
      MissionUtils.Console.print(`${strike}스트라이크`);

    if (strike === 0 && ball > 0) MissionUtils.Console.print(`${ball}볼`);

    if (strike > 0 && ball > 0)
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);

    strike === 3 ? this.endGameAndNoticeNextStep() : this.getUserNumber();
  }

  endGameAndNoticeNextStep() {
    MissionUtils.Console.print(
      "짝짝짝 3개의 숫자를 모두 맞히셨습니다! 게임 종료"
    );

    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (number) => {
        if (number === "1") {
          return this.play();
        } else if (number === "2") {
          return MissionUtils.Console.close();
        } else {
          throw "입력값이 잘못되었어요 🥲";
        }
      }
    );
  }
}

const app = new App();
app.play();

module.exports = App;

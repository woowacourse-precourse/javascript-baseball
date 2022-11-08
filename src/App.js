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
}

const app = new App();
app.play();

module.exports = App;

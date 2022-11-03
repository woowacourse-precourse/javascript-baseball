const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    this.showStartMessage();
    this.makeRandomNumber();
    this.getUserInput();
  }

  showStartMessage() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  makeRandomNumber() {
    this.COMPUTER = [];

    while (this.COMPUTER.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!this.COMPUTER.includes(number)) {
        this.COMPUTER.push(number);
      }
    }

    this.checkConstraints(this.COMPUTER);
  }

  checkNumberRange(inputData) {
    const regex = /^[1-9]+$/;

    if (typeof inputData === "object") {
      inputData = inputData.join("");
    }

    if (!regex.test(inputData)) {
      return false;
    }

    return true;
  }

  checkInputLength(inputData) {
    if (inputData.length !== 3) {
      return false;
    }

    return true;
  }

  checkNoSameNumber(inputData) {
    if (typeof inputData === "string") {
      inputData = inputData.split("");
    }

    for (let i = 0; i < inputData.length; i++) {
      if (
        inputData.indexOf(inputData[i]) !== inputData.lastIndexOf(inputData[i])
      ) {
        return false;
      }
    }

    return true;
  }

  checkConstraints(inputData) {
    if (
      !this.checkNumberRange(inputData) ||
      !this.checkInputLength(inputData) ||
      !this.checkNoSameNumber(inputData)
    ) {
      throw new Error("잘못된 값이 생성되었습니다. 게임을 종료합니다.");
    }

    return true;
  }

  getUserInput() {
    this.ball = 0;
    this.strike = 0;

    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userInput) => {
      this.checkConstraints(userInput);

      this.showGameResult(userInput);

      MissionUtils.Console.close();
    });
  }

  showGameResult(userInput) {
    const USER_INPUT = userInput.split("").map((item) => Number(item));

    for (let index = 0; index < this.COMPUTER.length; index++) {
      if (this.COMPUTER[index] === USER_INPUT[index]) {
        this.strike++;
        continue;
      }

      if (USER_INPUT.includes(this.COMPUTER[index])) {
        this.ball++;
      }
    }
  }
}

const app = new App();
app.play();

module.exports = App;

const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    this.showStartMessage();
    this.makeRandomNumber();
  }

  showStartMessage() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    MissionUtils.Console.close();
  }

  makeRandomNumber() {
    this.COMPUTER = [];

    while (this.COMPUTER.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!this.COMPUTER.includes(number)) {
        this.COMPUTER.push(number);
      }
    }
  }

  checkNumberRange(inputData) {
    const regex = /^[1-9]+$/;

    inputData = inputData.join("");

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
}

const app = new App();
app.play();

module.exports = App;

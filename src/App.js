const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.GAME_START_MESSAGE = "숫자 야구 게임을 시작합니다.";
    this.isValidUserNumber = false;
    this.computerNumberArray = App.generateComputerNumberArray();
  }

  play() {
    MissionUtils.Console.print(this.GAME_START_MESSAGE);
    this.getUserInputNumber();
  }

  compareNumber() {
    const userNumberArray = this.convertUserNumberToArray().map((number) => +number);
    let strikeCount = 0;
    let ballCount = 0;
    console.log(userNumberArray, this.computerNumberArray);

    userNumberArray.forEach((userNumber, index) => {
      if (this.computerNumberArray.includes(userNumber)) {
        if (this.computerNumberArray[index] === userNumber) strikeCount += 1;
        else ballCount += 1;
      }
    });
    this.printResult(strikeCount, ballCount);
  }

  printResult(strikeCount, ballCount) {
    if (strikeCount === 3) console.log(`${strikeCount}스트라이크`);
    if (strikeCount > 0 && ballCount > 0) {
      console.log(`${strikeCount} 스트라이크 ${ballCount} 볼`);
      this.getUserInputNumber();
    }
    if (strikeCount > 0 && ballCount === 0) {
      console.log(`${strikeCount}스트라이크`);
      this.getUserInputNumber();
    }
    if (ballCount > 0 && strikeCount === 0) {
      console.log(`${ballCount} 볼`);
      this.getUserInputNumber();
    }
    if (ballCount === 0 && strikeCount === 0) {
      console.log("낫 싱");
      this.getUserInputNumber();
    }
  }

  convertUserNumberToArray() {
    if (this.isValidUserNumber) {
      return this.userNumber.toString().split("");
    }
    return false;
  }

  getUserInputNumber() {
    return MissionUtils.Console.readLine("숫자를입력해주세요: ", (input) => {
      MissionUtils.Console.print(`입력하신 숫자는 ${input} 입니다.`);
      this.isValidUserNumber = true;
      this.userNumber = input;
      this.compareNumber();
    });
  }

  static generateComputerNumberArray() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }
}

module.exports = App;

const app = new App();

console.log(app.play());

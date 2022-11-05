const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.GAME_START_MESSAGE = "숫자 야구 게임을 시작합니다.";
    this.isValidUserNumber = false;
    this.computerNumberArray = App.generateComputerNumberArray();
    this.userNumber = 0;
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

  validateUserInput(userNumber) {
    console.log(new Set([...this.convertUserNumberToArray()]).size, "sdasdasdas");
    if (typeof +userNumber !== "number" || Number.isNaN(Number(userNumber))) throw new Error("숫자를 입력해주세요 어플리케이션을 종료합니다");
    if (userNumber.toString().length > 3 || userNumber.toString().length < 3) {
      throw new Error("3자리수를 입력해주세요. 어플리케이션을 종료합니다");
    }
    if (new Set([...this.convertUserNumberToArray()]).size !== 3) throw new Error("중복되지 않은 숫자 3자리를 입력해주세요");
    else this.isValidUserNumber = true;
    if (this.isValidUserNumber === true) this.compareNumber();
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
      console.log("낫싱");
      this.getUserInputNumber();
    }
  }

  convertUserNumberToArray() {
    if (this.isValidUserNumber) {
      return this.userNumber.toString().split("");
    }
    return false;
  }

  static handleError(e) {
    console.log(e);
  }

  getUserInputNumber() {
    return MissionUtils.Console.readLine("숫자를입력해주세요: ", (input) => {
      MissionUtils.Console.print(`입력하신 숫자는 ${input} 입니다.`);
      this.userNumber = input;
      try {
        this.validateUserInput(this.userNumber);
      } catch (error) {
        App.handleError(error);
      }
    });
  }

  static generateComputerNumberArray() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }
}

module.exports = App;

const app = new App();

console.log(app.play());

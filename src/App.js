const MissionUtils = require("@woowacourse/mission-utils");
const ErrorClass = require("./error");
class App {
  constructor() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.RANDOM_NUMBER_ARRAY = [];
    this.INPUT_USER_NUMBER;
    this.errorClass = new ErrorClass();
    this.MenuNumber = 0;
    this.strikeCount = 0;
    this.ballCount = 0;
  }

  setting() {
    this.RANDOM_NUMBER_ARRAY = [];
    return this.randomNumberGenerator();
  }
  randomNumberGenerator() {
    while (this.RANDOM_NUMBER_ARRAY.length < 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (this.RANDOM_NUMBER_ARRAY.includes(number)) {
        continue;
      }
      this.RANDOM_NUMBER_ARRAY.push(number);
    }
    return this;
  }
  play() {
    this.setting();
    return this.initNumber();
  }

  initNumber() {
    this.strikeCount = 0;
    this.ballCount = 0;
    MissionUtils.Console.readLine("숫자를 입력하세요. : ", (inputNumber) => {
      this.INPUT_USER_NUMBER = inputNumber;
      this.errorClass.errorCheck(this.INPUT_USER_NUMBER);
      return this.splitArray();
    });
  }
  splitArray() {
    const StringToArray = this.INPUT_USER_NUMBER.split("");
    return this.strikeAndBallCheck(StringToArray);
  }
  strikeAndBallCheck(StringToArray) {
    for (let index = 0; index < 3; index++) {
      if (Number(StringToArray[index]) === this.RANDOM_NUMBER_ARRAY[index]) {
        this.strikeCount++;
        continue;
      }
      this.RANDOM_NUMBER_ARRAY.includes(Number(StringToArray[index])) &&
        this.ballCount++;
    }
    return this.printResult();
  }

  threeStrikeCheck() {
    if (this.strikeCount === 3) {
      MissionUtils.Console.print("3스트라이크!");
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return this.MenuPage();
    }
    return this;
  }
  strikeBallCheck() {
    if (this.ballCount > 0 && this.ballCount < 4 && this.strikeCount === 0) {
      MissionUtils.Console.print(`${this.ballCount}볼`);
      return this.initNumber();
    }
    if (this.strikeCount < 3 && this.strikeCount > 0 && this.ballCount === 0) {
      MissionUtils.Console.print(`${this.strikeCount}스트라이크`);
      return this.initNumber();
    }
    if (this.strikeCount > 0 && this.ballCount > 0) {
      MissionUtils.Console.print(
        `${this.ballCount}볼 ${this.strikeCount}스트라이크`
      );
      return this.initNumber();
    }
  }

  nothingCheck() {
    if (this.ballCount === 0 && this.strikeCount === 0) {
      MissionUtils.Console.print("낫싱");
      return this.initNumber();
    }
    return this;
  }

  printResult() {
    this.nothingCheck();
    this.threeStrikeCheck();
    this.strikeBallCheck();
    return this;
  }
  gameStop() {
    MissionUtils.Console.print("종료");
    return MissionUtils.Console.close();
  }
  MenuPage() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (menuNumber) => {
        if (menuNumber === "1") {
          return this.play();
        }
        if (menuNumber === "2") {
          return this.gameStop();
        }
        return new Error("잘못된 값을 입력하셨습니다.");
      }
    );
  }
}

const app = new App();
app.play();

module.exports = App;

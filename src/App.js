const MissionUtils = require("@woowacourse/mission-utils");
const error = require("./error");
class App {
  constructor() {
    this.RANDOM_NUMBER_ARRAY = [];
    this.INPUT_USER_NUMBER;
    this.MenuNumber = 0;
    this.strikeCount = 0;
    this.ballCount = 0;
  }

  throwError() {
    throw new Error("잘못된 값을 입력하셨습니다.");
  }
  error() {
    error.inputNumberSizeCheck(this.INPUT_USER_NUMBER) && this.throwError();
    error.overlapNumberCheck(this.INPUT_USER_NUMBER) && this.throwError();
    error.numberTypeCheck(this.INPUT_USER_NUMBER) && this.throwError();
    error.zeroCheck(this.INPUT_USER_NUMBER) && this.throwError();
    error.spaceCheck(this.INPUT_USER_NUMBER) && this.throwError();
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
      this.error();
      this.strikeAndBallCheck();
    });
  }

  strikeAndBallCheck() {
    const stringNumberArray = String(this.INPUT_USER_NUMBER).split("");
    for (let index = 0; index < 3; index++) {
      if (
        Number(stringNumberArray[index]) === this.RANDOM_NUMBER_ARRAY[index]
      ) {
        this.strikeCount++;
        continue;
      }
      this.RANDOM_NUMBER_ARRAY.includes(Number(stringNumberArray[index])) &&
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

module.exports = App;

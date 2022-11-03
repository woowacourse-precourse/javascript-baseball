const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.MenuNumber = 0;
    this.RANDOM_NUMBER_ARRAY = [];
    this.INPUT_USER_NUMBER;
    this.strikeCount = 0;
    this.ballCount = 0;
  }
  inputNumberSizeCheck() {
    if (this.INPUT_USER_NUMBER.length !== 3) {
      throw new Error("3자리의 수를 입력하지 않았습니다.");
    }
    return this;
  }

  overlapNumberSpaceCheck() {
    const overLapNumberSet = new Set(this.INPUT_USER_NUMBER);
    if (overLapNumberSet.size !== 3) {
      throw new Error("잘못된 값을 입력하셨습니다.");
    }
    return this;
  }
  numberTypeCheck() {
    const numberTypeString = this.INPUT_USER_NUMBER;
    for (let letter of numberTypeString) {
      if (typeof parseInt(letter) !== "number") {
        throw new Error("숫자가 아닌 값을 입력하셨습니다.");
      }
    }
    return this;
  }
  zeroSpaceCheck() {
    for (let letter of this.INPUT_USER_NUMBER) {
      if (parseInt(letter) === 0) {
        throw new Error("0을 입력하셨습니다.");
      }
    }
  }

  error() {
    this.inputNumberSizeCheck();
    this.overlapNumberSpaceCheck();
    this.numberTypeCheck();
    this.zeroSpaceCheck();
  }
  setting() {
    this.randomNumberGenerator();
  }
  randomNumberGenerator() {
    this.RANDOM_NUMBER_ARRAY = [];
    while (this.RANDOM_NUMBER_ARRAY.length < 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (this.RANDOM_NUMBER_ARRAY.includes(number)) {
        continue;
      }
      this.RANDOM_NUMBER_ARRAY.push(number);
    }
    return this;
  }
  setting() {
    this.randomNumberGenerator();
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
  printResult() {
    if (this.strikeCount === 3) {
      MissionUtils.Console.print("3스트라이크!");
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return this.MenuPage();
    }
    if (this.ballCount === 0 && this.strikeCount === 0) {
      MissionUtils.Console.print("낫싱");
      return this.initNumber();
    }
    if (this.ballCount < 4 && this.strikeCount === 0) {
      MissionUtils.Console.print(`${this.ballCount}볼`);
      return this.initNumber();
    }
    if (this.ballCount === 0 && this.strikeCount < 3) {
      MissionUtils.Console.print(`${this.strikeCount}스트라이크`);
      return this.initNumber();
    }
    MissionUtils.Console.print(
      `${this.ballCount}볼 ${this.strikeCount}스트라이크`
    );
    return this.initNumber();
  }

  MenuPage() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (menuNumber) => {
        this.menuNumber = menuNumber;
        if (this.menuNumber === "1") {
          return this.play();
        }
        if (this.menuNumber === "2") {
          MissionUtils.Console.print("종료");
          return MissionUtils.Console.close();
        }
        throw new Error("잘못된 값을 입력하셨습니다.");
      }
    );
  }
}

module.exports = App;

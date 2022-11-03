const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const pickUniqueNumbersInRange = MissionUtils.Random.pickUniqueNumbersInRange;
class App {
  constructor() {
    this.RANDOM_NUMBER_ARRAY;
    this.INPUT_USER_NUMBER;
    this.strikeCount = 0;
    this.ballCount = 0;
    this.gameState = true;
  }
  setting() {
    this.gameState && this.randomNumberGenerator();
    this.strikeCount = 0;
    this.ballCount = 0;
  }
  randomNumberGenerator() {
    this.gameState = false;
    this.RANDOM_NUMBER_ARRAY = pickUniqueNumbersInRange(1, 9, 3);
    return this;
  }
  play() {
    this.setting();
    Console.print(this.RANDOM_NUMBER_ARRAY);
    return this.initNumber();
  }

  initNumber() {
    Console.readLine("숫자를 입력하세요. : ", (inputNumber) => {
      this.INPUT_USER_NUMBER = inputNumber;
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
      Console.print("3스트라이크!");
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return Console.close();
    }
    if (this.ballCount === 0 && this.strikeCount === 0) {
      Console.print("낫싱");
      return this.initNumber();
    }
    if (this.ballCount < 4 && this.strikeCount === 0) {
      Console.print(`${this.ballCount}볼`);
      return this.initNumber();
    }
    if (this.ballCount === 0 && this.strikeCount < 3) {
      Console.print(`${this.strikeCount}스트라이크`);
      return this.initNumber();
    }
    Console.print(`${this.ballCount}볼 ${this.strikeCount}스트라이크`);
    return this.initNumber();
  }
}

const app = new App();
app.play();

module.exports = App;

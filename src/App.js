const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const pickUniqueNumbersInRange = MissionUtils.Random.pickUniqueNumbersInRange;
class App {
  constructor() {
    this.RANDOM_NUMBER_ARRAY;
    this.INPUT_USER_NUMBER = 0;
    this.gameState = true;
  }
  randomNumberGenerator() {
    this.gameState = false;
    this.RANDOM_NUMBER_ARRAY = pickUniqueNumbersInRange(1, 9, 3);
    return this;
  }
  play() {
    this.gameState && this.randomNumberGenerator();
    Console.readLine("숫자를 입력하세요. : ", (inputNumber) => {
      this.INPUT_USER_NUMBER = inputNumber;
      Console.close();
    });
  }
}

const app = new App();
app.play();

module.exports = App;

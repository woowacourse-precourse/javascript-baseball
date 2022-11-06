const MissionUtils = require("@woowacourse/mission-utils");
const NumberUtils = require("./Utils/Number");

class App {
  constructor() {
    this.NumberUtil = new NumberUtils();
    this.computerNumber = 0;
  }

  userInputNumber() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {
      this.NumberUtil.isBaseballNumber(number);
      const result = this.compareNumber(number);
      MissionUtils.Console.print(result);
      MissionUtils.Console.close();
    });
  }

  compareNumber(userNumber) {
    const userNumberArray = this.NumberUtil.NumberToArray(userNumber);
    const computerNumberArray = this.NumberUtil.NumberToArray(
      this.computerNumber
    );
    let ball = 0;
    let strike = 0;
    const total =
      6 - new Set([...userNumberArray, ...computerNumberArray]).size;

    if (total === 0) return `낫싱`;

    for (let index = 0; index < 3; index++) {
      if (userNumberArray[index] === computerNumberArray[index]) {
        strike += 1;
      }
    }
    ball = total - strike;
    if (ball === 0) return `${strike}스트라이크`;
    if (strike === 0) return `${ball}볼`;
    return `${ball}볼 ${strike}스트라이크`;
  }

  play() {
    this.computerNumber = this.NumberUtil.getRandomBaseballNumber();
    this.userInputNumber();
  }
}

module.exports = App;

const app = new App();
app.play();

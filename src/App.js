const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {}
  getRandomBaseballNumber() {
    const computer = new Set();
    while (computer.size < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      computer.add(number);
    }
    return Number(Array.from(computer).join(""));
  }

  isNumber(number) {
    return !Number.isNaN(number) && typeof number === "number";
  }

  NumberToArray(number) {
    return Array.from(String(number), (num) => Number(num));
  }

  isBaseballNumber(number) {
    number = Number(number);
    if (!this.isNumber(number)) {
      throw "숫자만 입력해주세요";
    }
    if (number >= 1000 || number <= 99) {
      throw "3개의 숫자만 입력해주세요";
    }
    if (new Set(this.NumberToArray(number)).size !== 3) {
      throw "중복되지 않는 숫자로 입력해주세요";
    }
  }

  userInputNumber() {
    let userInputNumber = 0;
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {
      this.isBaseballNumber(number);
      userInputNumber = number;
      MissionUtils.Console.close();
    });
    return userInputNumber;
  }

  play() {
    try {
      this.getRandomBaseballNumber();
      this.userInputNumber();
    } catch (err) {
      console.log(err);
      return;
    }
  }
}

module.exports = App;

const app = new App();
app.play();

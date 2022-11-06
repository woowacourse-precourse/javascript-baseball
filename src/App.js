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

  compareUserAndComputerNumber(userNumber, computerNumber) {
    const userNumberArray = this.NumberToArray(userNumber);
    const computerNumberArray = this.NumberToArray(computerNumber);
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
    try {
      const computerNumber = this.getRandomBaseballNumber();
      const userNumber = this.userInputNumber();
      const result = this.compareUserAndComputerNumber(
        userNumber,
        computerNumber
      );
    } catch (err) {
      console.log(err);
      return;
    }
  }
}

module.exports = App;

const app = new App();
app.play();

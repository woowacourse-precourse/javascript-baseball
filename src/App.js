const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computer = [];
    this.user = [];
  }

  play() {
    this.setRandomNumbers();
    this.print("숫자 야구 게임을 시작합니다.");
    this.readLine("숫자를 입력해주세요 : ", (answer) =>
      this.setUserNumbers(answer)
    );
  }

  print(str) {
    MissionUtils.Console.print(str);
  }

  readLine(query, callback) {
    MissionUtils.Console.readLine(query, callback);
  }

  setRandomNumbers() {
    while (this.computer.length < 3) {
      const number = this.getRandomNumber();
      this.pushNumberToComputer(number);
    }
  }

  setUserNumbers(str) {
    const numbers = this.separateNumbers(str);
    this.user = [...numbers];
  }

  separateNumbers(str) {
    const numbers = [...str];
    return numbers.map((number) => Number(number));
  }

  getRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(1, 9);
  }

  pushNumberToComputer(number) {
    if (this.isValidNumber(number)) {
      this.computer.push(number);
    }
  }

  isValidNumber(number) {
    return !this.computer.includes(number);
  }
}

module.exports = App;

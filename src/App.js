// @ts-check

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

  /**
   *
   * @param {string} str
   */
  print(str) {
    MissionUtils.Console.print(str);
  }

  /**
   *
   * @param {string} query
   * @param {function} callback
   */
  readLine(query, callback) {
    MissionUtils.Console.readLine(query, callback);
  }

  setRandomNumbers() {
    while (this.computer.length < 3) {
      const number = this.getRandomNumber();
      this.pushNumberToComputer(number);
    }
  }

  /**
   *
   * @param {string} str
   */
  setUserNumbers(str) {
    const numbers = this.separateNumbers(str);
    this.user = [...numbers];
  }

  /**
   *
   * @param {string} str
   */
  separateNumbers(str) {
    const numbers = [...str];
    return numbers.map((number) => Number(number));
  }

  /**
   *
   * @returns {number}
   */
  getRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(1, 9);
  }

  /**
   *
   * @param {number} number
   */
  pushNumberToComputer(number) {
    if (this.isValidNumber(number)) {
      this.computer.push(number);
    }
  }

  /**
   *
   * @param {number} number
   * @returns {boolean}
   */
  isValidNumber(number) {
    return !this.computer.includes(number);
  }
}

module.exports = App;

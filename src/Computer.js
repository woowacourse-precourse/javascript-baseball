const MissionUtils = require("@woowacourse/mission-utils");

class Computer {
  setUp() {
    this.correctNumberList = this.getRandomThreeDigitNumber().split("");
  }

  initCount() {
    [this.ball, this.strike] = [0, 0];
  }

  calcCount(answer) {
    this.initCount();
    answer.split("").forEach(this.checkNumber.bind(this));

    return [this.ball, this.strike];
  }

  checkNumber(number, index) {
    if (this.isStrike(number, index)) {
      this.strike += 1;
      return;
    }

    if (this.isBall(number)) {
      this.ball += 1;
      return;
    }
  }

  isBall(number) {
    return this.correctNumberList.includes(number);
  }

  isStrike(number, index) {
    return this.correctNumberList[index] === number;
  }

  getRandomThreeDigitNumber() {
    const numberList = [];
    while (numberList.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!numberList.includes(number)) {
        numberList.push(number);
      }
    }

    return numberList.join("");
  }
}

module.exports = Computer;

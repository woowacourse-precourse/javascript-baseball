const MissionUtils = require('@woowacourse/mission-utils');

class Computer {
  setUpNumber() {
    this.correctNumberList = this.getRandomThreeNumbers().split('');
  }
  getRandomThreeNumbers() {
    const numberList = [];
    while (numberList.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!numberList.includes(number)) {
        numberList.push(number);
      }
    }

    return numberList.join('');
  }

  initCount() {
    [this.ball, this.strike] = [0, 0];
  }

  isBall(number) {
    return this.correctNumberList.includes(number);
  }

  isStrike(number, index) {
    return this.correctNumberList[index] === number;
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

  calculateCount(answer) {
    this.initCount();
    answer.split("").forEach(this.checkNumber.bind(this));

    return [this.ball, this.strike];
  }
}

module.exports = Computer;

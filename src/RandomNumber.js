const { Random } = require("@woowacourse/mission-utils");
const { RANDOM_NUMBER } = require("./../constant/constant");

class RandomNumber {
  constructor() {
    this.numbers = [];
  }

  isDuplicatedNumber(number) {
    if (!this.numbers.includes(number)) {
      this.numbers.push(number);
    }
  }

  getRandomNumber() {
    const number = Random.pickNumberInRange(
      RANDOM_NUMBER.MIN_NUMBER,
      RANDOM_NUMBER.MAX_NUMBER
    );

    this.isDuplicatedNumber(number);
  }

  generateAnswerNumbers() {
    while (this.numbers.length < RANDOM_NUMBER.MAX_SIZE) {
      this.getRandomNumber();
    }

    return this.numbers;
  }
}

module.exports = RandomNumber;

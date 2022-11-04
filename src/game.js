const MissionUtils = require('@woowacourse/mission-utils');
const { RANDOM_NUMBER } = require('./constants');
const { MESSAGE } = require('./constants');

class Game {
  constructor() {
    this.randomNumber;
  }

  init() {
    this.start(MESSAGE.START);
    this.generateRandomNumber(1, 9, 3);
  }

  start(startMessage) {
    MissionUtils.Console.print(startMessage);
  }

  generateRandomNumber(min, max, length) {
    this.randomNumber = [];
    while (this.randomNumber.length < length) {
      const number = MissionUtils.Random.pickNumberInRange(min, max);
      if (!this.randomNumber.includes(number)) {
        this.randomNumber.push(number);
      }
    }

    return this.randomNumber;
  }

  play() {
    MissionUtils.Console.readLine(MESSAGE.ENTER_NUMBER, (inputNumbers) => {
      this.isValidInputNumber(inputNumbers, RANDOM_NUMBER.RANGE);
      console.log(this.randomNumber);
    });
  }

  isValidInputNumber(numbers, validRange) {
    const diversityOfNum = [...new Set(numbers)].length;

    if (
      numbers.length !== 3 ||
      !validRange.test(numbers) ||
      diversityOfNum !== 3
    ) {
      throw new Error('1부터 9까지 서로 다른 숫자 3개를 입력해주세요');
    }
  }
}

module.exports = Game;

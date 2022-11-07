const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {}

  /**
   * return random num digit array
   * @returns randomNumDigitArray
   */
  createRandomNumDigitArray() {
    const randomNumDigitArray = [];
    while (randomNumDigitArray.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNumDigitArray.includes(number)) {
        randomNumDigitArray.push(number);
      }
    }

    return randomNumDigitArray;
  }
}

module.exports = App;

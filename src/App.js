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

  /**
   * input num, and check user input valid
   * @param {number} num
   */
  checkUserInput(num) {
    // input must be number
    const strNum = String(num);
    if (strNum.match(/[^0-9]/)) {
      throw new Error('input must be number');
    }

    const digitList = strNum.split('');

    // input must be 3 digits
    if (digitList.length !== 3) {
      throw new Error('input must be 3 digits number');
    }

    // check duplicate digit
    for (let i = 0; i < 3; i++) {
      let count = digitList.filter((item) => item === digitList[i]).length;
      if (count > 1) {
        throw new Error('input must consist of non-duplicate digit');
      }
    }
  }
}

module.exports = App;

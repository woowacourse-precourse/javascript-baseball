const MissionUtils = require('@woowacourse/mission-utils');

class BaseBall {
  constructor() {}

  /**
   * return random num digit array
   * @returns randomNumDigitArray
   */
  static createRandomNumDigitArray() {
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
  static checkUserInput(num) {
    // input must be number
    const strNum = String(num);
    if (strNum.match(/[^0-9]/)) {
      throw 'input must be number';
    }

    const digitList = strNum.split('');

    // input must be 3 digits
    if (digitList.length !== 3) {
      throw 'input must be 3 digits number';
    }

    // check duplicate digit
    for (let i = 0; i < 3; i++) {
      let count = digitList.filter((item) => item === digitList[i]).length;
      if (count > 1) {
        throw 'input must consist of non-duplicate digit';
      }
    }
  }

  /**
   * input randomNumDigit, checkNumDigit and check ball&strike count
   * @param {array} randomDigit
   * @param {array} checkDigit
   * @returns [strikeCount, ballCount]
   */
  static getBallAndStrike(randomDigit, checkDigit) {
    let strikeCount = 0;
    let ballCount = 0;

    // strke count
    checkDigit.forEach((digit, idx) => {
      if (Number(randomDigit[idx]) === Number(digit)) {
        strikeCount += 1;
      }
    });

    // ball count
    checkDigit.forEach((digit, idx) => {
      if (
        Number(randomDigit[idx]) !== Number(digit) &&
        randomDigit.includes(Number(digit))
      ) {
        ballCount += 1;
      }
    });
    return [strikeCount, ballCount];
  }

  /**
   * input strike, ball count and print result message
   * @param {number} strikeCount
   * @param {number} ballCount
   * @returns is finish boolean
   */
  static gameResult(strikeCount, ballCount) {
    const strikeMessage = `${strikeCount}스트라이크`;
    const ballMessage = `${ballCount}볼`;
    const nothingMessage = '낫싱';
    const result = strikeCount === 3;

    let resultMessage = '';

    if (ballCount === 0 && strikeCount === 0) {
      resultMessage += nothingMessage;
    }
    if (ballCount > 0) {
      resultMessage += ballMessage + ' ';
    }

    if (strikeCount > 0) {
      resultMessage += strikeMessage;
    }

    MissionUtils.Console.print(resultMessage);
    MissionUtils.Console.close();

    return result;
  }

  /**
   * return isRestart if input num is valid
   * @param {number} num
   * @returns restart true or false
   */
  static getIsRestart(num) {
    // gameRestart input must be 1 or 2
    if (num === 1) {
      return true;
    } else if (num === 2) {
      return false;
    }

    // input is not 1 or 2, throw error
    throw 'game restart input must be 1(restart) or 2(finish)';
  }
}

module.exports = BaseBall;

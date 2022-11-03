const MissionUtils = require('@woowacourse/mission-utils');
const { RANDOM_NUMBER } = require('./constants');

class Game {
  start(startMessage) {
    MissionUtils.Console.print(startMessage);
  }

  generateRandomNumber(min, max, length) {
    const randomNumber = [];
    while (randomNumber.length < length) {
      const number = MissionUtils.Random.pickNumberInRange(min, max);
      if (!randomNumber.includes(number)) {
        randomNumber.push(number);
      }
    }

    return randomNumber;
  }

  getNumberFromUser(enterMessage) {
    MissionUtils.Console.readLine(enterMessage, (inputNumbers) => {
      // try, catch ?
      this.isValidInputNumber(inputNumbers, RANDOM_NUMBER.RANGE);
    });
  }

  isValidInputNumber(numbers, validRange) {
    const diversityOfNum = [...new Set(numbers)].length;

    if (
      numbers.length !== 3 ||
      !validRange.test(numbers) ||
      diversityOfNum !== 3
    ) {
      console.error('1부터 9까지 서로 다른 숫자 3개를 입력해주세요');
    }
  }
}

module.exports = Game;

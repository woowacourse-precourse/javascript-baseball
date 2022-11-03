const MissionUtils = require('@woowacourse/mission-utils');

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
    // console.log(randomNumber);
    return randomNumber;
  }
}

module.exports = Game;

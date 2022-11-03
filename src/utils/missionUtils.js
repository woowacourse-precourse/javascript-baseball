const { Random, Console } = require('@woowacourse/mission-utils');

const missionUtils = {};

missionUtils.getRandomNumber = (startRange = 1, endRange = 9) => {
  return Random.pickNumberInRange(startRange, endRange);
};

missionUtils.triggerReadLine = (message, fn) => {
  Console.readLine(message, fn);
};

missionUtils.triggerPrint = (message) => {
  Console.print(message);
};

module.exports = missionUtils;

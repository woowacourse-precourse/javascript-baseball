const { Random, Console } = require('@woowacourse/mission-utils');

const missionUtils = {};

missionUtils.getRandomNumber = (startRange = 1, endRange = 9) => {
  return Random.pickNumberInRange(startRange, endRange);
};

missionUtils.triggerReadLine = (text, fn) => {
  Console.readLine(text, fn);
};

module.exports = missionUtils;

const { Random, Console } = require('@woowacourse/mission-utils');

const missionUtils = {};

missionUtils.getRandomNumber = (startRange = 1, endRange = 9) => {
  return Random.pickNumberInRange(startRange, endRange);
};

missionUtils.triggerConsole = (message, fn) => {
  Console.readLine(message, fn);
};

missionUtils.printConsole = (message) => {
  Console.print(message);
};

missionUtils.closeConsole = () => {
  Console.close();
};

module.exports = missionUtils;

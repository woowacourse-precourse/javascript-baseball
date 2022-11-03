const { Random, Console } = require('@woowacourse/mission-utils');
const { GAME_RULE } = require('./constant');

const missionUtils = {};

missionUtils.getRandomNumber = (
  minNumber = GAME_RULE.MIN_NUMBER,
  maxNumber = GAME_RULE.MAX_NUMBER,
) => Random.pickNumberInRange(minNumber, maxNumber);

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

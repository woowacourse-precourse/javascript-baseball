const MissionUtils = require('@woowacourse/mission-utils');

const exitOrRestart = (num) => {
  if (num === '1') restart();
  if (num === '2') exit();
};

const restart = () => {};

const exit = () => {
  MissionUtils.Console.close();
};

module.exports = exitOrRestart;

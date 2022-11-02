const MissionUtils = require('@woowacourse/mission-utils');

const FirstEndNumber = 1;
const LastEndNumber = 9;

const newRandomNumber = MissionUtils.Random.pickNumberInRange(
  FirstEndNumber,
  LastEndNumber
);

module.exports = newRandomNumber.toString();

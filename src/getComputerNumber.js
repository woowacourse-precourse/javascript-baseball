const MissionUtils = require('@woowacourse/mission-utils');

const getRandomNumber = (minNum, maxNum) => {
  return MissionUtils.Random.pickNumberInRange(minNum, maxNum);
};

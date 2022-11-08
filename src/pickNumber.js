const MissionUtils = require("@woowacourse/mission-utils");

const pickComputerNum = () => {
  const computerNums = [];
  const MAX_DIGIT = 3;
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 9;
  while (computerNums.length < MAX_DIGIT) {
    const number = MissionUtils.Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
    if (!computerNums.includes(number)) {
      computerNums.push(number);
    }
  }
  return computerNums;
};

exports.pickComputerNum = pickComputerNum;

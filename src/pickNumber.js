const MissionUtils = require("@woowacourse/mission-utils");

const pickComputerNum = () => {
  const computerNums = [];
  while (computerNums.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerNums.includes(number)) {
      computerNums.push(number);
    }
  }
  return computerNums;
};

exports.pickComputerNum = pickComputerNum;

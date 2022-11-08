const MissionUtils = require("@woowacourse/mission-utils");

const START = 1;
const END = 9;
const MAX_LENGTH = 3;

const generateRandomNumber = () => {
  const randomArr = [];
  while (randomArr.length < MAX_LENGTH) {
    const randomPick = MissionUtils.Random.pickNumberInRange(START, END);
    if (!randomArr.includes(randomPick)) {
      randomArr.push(randomPick);
    }
  }
  return randomArr;
};

module.exports = generateRandomNumber;

const MissionUtils = require("@woowacourse/mission-utils");
const mRandom = MissionUtils.Random;
const GAME_NUMBER_LENGTH = 3;

const getComputerNumber = () => {
  const computerNumber = new Set();
  while (computerNumber.size < GAME_NUMBER_LENGTH) {
    const newNumber = mRandom.pickNumberInRange(1, 9);
    if (!computerNumber.has(newNumber)) {
      computerNumber.add(newNumber);
    }
  }
  return [...computerNumber];
};

module.exports = getComputerNumber;

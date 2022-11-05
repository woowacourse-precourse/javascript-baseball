const MissionUtils = require("@woowacourse/mission-utils");
const { EXCEPTION } = require("../constants/index.js");

const generateRandomNumber = () => {
  const randomNumber = [];
  while (randomNumber.length < EXCEPTION.VALID_NUMBER_LENGTH) {
    const pickRandomNumber = MissionUtils.Random.pickNumberInRange(
      EXCEPTION.MIN_NUMBER,
      EXCEPTION.MAX_NUMBER
    );
    if (!randomNumber.includes(pickRandomNumber))
      randomNumber.push(pickRandomNumber);
  }
  return randomNumber.join("");
};

exports.generateRandomNumber = generateRandomNumber;

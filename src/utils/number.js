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

const isValidUserInput = (input) => {
  if (input.length !== EXCEPTION.VALID_NUMBER_LENGTH) return false;
  if (isNaN(input)) return false;
  if (input.includes("0")) return false;
  return true;
};

const isValidUserAskInput = (input) => {
  if (input === "1") return true;
  if (input === "2") return true;
  return false;
};

exports.generateRandomNumber = generateRandomNumber;
exports.isValidUserInput = isValidUserInput;
exports.isValidUserAskInput = isValidUserAskInput;

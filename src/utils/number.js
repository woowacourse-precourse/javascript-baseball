const MissionUtils = require("@woowacourse/mission-utils");
const { EXCEPTION } = require("../constants/index.js");

const generateRandomNumber = ({ start, end, count }) =>
  MissionUtils.Random.pickUniqueNumbersInRange(start, end, count).join("");

const isValidUserInput = (input) => {
  if (input.length !== EXCEPTION.VALID_NUMBER_LENGTH) return false;
  if (isNaN(input)) return false;
  if (input.includes(0)) return false;
  return true;
};

exports.generateRandomNumber = generateRandomNumber;
exports.isValidUserInput = isValidUserInput;

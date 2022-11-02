const MissionUtils = require("@woowacourse/mission-utils");

const generateRandomNumber = ({ start, end, count }) =>
  MissionUtils.Random.pickUniqueNumbersInRange(start, end, count).join("");

exports.generateRandomNumber = generateRandomNumber;

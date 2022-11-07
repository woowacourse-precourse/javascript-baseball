const MissionUtils = require("@woowacourse/mission-utils");

function print(message) {
  MissionUtils.Console.print(message);
}
function isEqual(a, b) {
  return a === b;
}
function throwException(message) {
  MissionUtils.Console.close();
  throw new Error(message);
}
function generateRandomNumber(digits) {
  const START_INCLUSIVE = 1,
    END_INCLUSIVE = 9;
  const randomNumberSet = new Set();

  while (randomNumberSet.size < digits) {
    const num = MissionUtils.Random.pickNumberInRange(
      START_INCLUSIVE,
      END_INCLUSIVE
    );
    randomNumberSet.add(num);
  }

  return [...randomNumberSet];
}

module.exports = { print, isEqual, throwException, generateRandomNumber };

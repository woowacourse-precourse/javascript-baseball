const MissionUtils = require("@woowacourse/mission-utils");

function generateRandomDigit() {
  return MissionUtils.Random.pickNumberInRange(1, 9);
}

function isExist(gameNumber, digit) {
  if (gameNumber.includes(digit)) return true;
  return false;
}

function addUniqueRandomDigit(gameNumber, digit) {
  if (isExist(gameNumber, digit)) return;
  gameNumber.push(digit);
}

class App {
  play() {}
}

module.exports = App;
module.exports = { generateRandomDigit, isExist, addUniqueRandomDigit };

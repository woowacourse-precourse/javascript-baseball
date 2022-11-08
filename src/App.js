const MissionUtils = require("@woowacourse/mission-utils");

function generateRandomDigit() {
  return MissionUtils.Random.pickNumberInRange(1, 9);
}

class App {
  play() {}
}

module.exports = App;
module.exports = { generateRandomDigit };

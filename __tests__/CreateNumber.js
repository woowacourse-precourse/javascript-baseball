const MissionUtils = require("@woowacourse/mission-utils");

function createNumber() {
  const COMPUTER = [];
  while (COMPUTER.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!COMPUTER.includes(number)) {
      COMPUTER.push(number);
    }
  }
  return COMPUTER.join("");
}

module.exports = createNumber;
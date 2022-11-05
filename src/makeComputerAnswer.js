const MissionUtils = require("@woowacourse/mission-utils");

function makeComputerAnswer() {
  let computerAnswer = new Set();
  while (computerAnswer.size < 3) {
    computerAnswer.add(MissionUtils.Random.pickNumberInRange(1, 9));
  }
  return (computerAnswer = Array.from(computerAnswer));
}

module.exports = makeComputerAnswer;

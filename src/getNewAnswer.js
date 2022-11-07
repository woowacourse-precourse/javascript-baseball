const { Random } = require("@woowacourse/mission-utils");

function getRandomValue() {
  return Random.pickNumberInRange(1, 9);
}

function getNewAnswer() {}

module.exports = getNewAnswer;

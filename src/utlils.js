const { Random } = require("@woowacourse/mission-utils");

function getTargetNumber() {
  return [
    Random.pickNumberInRange(1, 9),
    Random.pickNumberInRange(1, 9),
    Random.pickNumberInRange(1, 9),
  ].join("");
}

module.exports.getTargetNumber = getTargetNumber;

const { Random } = require("@woowacourse/mission-utils");

function getTargetNumber() {
  return [
    Random.pickNumberInRange(1, 9),
    Random.pickNumberInRange(1, 9),
    Random.pickNumberInRange(1, 9),
  ].join("");
}

function getBallCount(userInputNumber, targetNumber) {
  return [...targetNumber].filter(
    (number, index) =>
      [...userInputNumber].includes(number) &&
      number !== [...userInputNumber][index]
  ).length;
}
module.exports.getTargetNumber = getTargetNumber;

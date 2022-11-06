const MissionUtils = require("@woowacourse/mission-utils");

function numToString(num) {
  return String(num);
}

function Computer() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (computer.includes(numToArr(number)) === false) {
      computer.push(numToString(number));
    }
  }
  return computer;
}
module.exports = Computer;

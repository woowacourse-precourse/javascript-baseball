const { Random } = require("@woowacourse/mission-utils");

function makeNumber() {
  const computerNumber = [];
  while (computerNumber.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computerNumber.includes(number)) {
      computerNumber.push(number);
    }
  }
  return computerNumber;
}

module.exports = makeNumber;

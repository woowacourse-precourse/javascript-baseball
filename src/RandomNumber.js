const { Random } = require('@woowacourse/mission-utils');

function randomNumber() {
  const COMPUTER = [];
  while (COMPUTER.length < 3) {
    const NUMBER = Random.pickNumberInRange(1, 9);
    if (!COMPUTER.includes(NUMBER)) {
      COMPUTER.push(NUMBER);
    }
  }
  return COMPUTER;
}

module.exports = randomNumber;

const { Random } = require('@woowacourse/mission-utils');

const COMPUTER = [];
while (COMPUTER.length < 3) {
  const NUMBER = Random.pickNumberInRange(1, 9);
  if (!COMPUTER.includes(NUMBER)) {
    COMPUTER.push(NUMBER);
  }
}

module.exports = COMPUTER;

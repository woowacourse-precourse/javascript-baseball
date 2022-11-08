const { Random } = require('@woowacourse/mission-utils');

function generateRandomNumber() {
  const computer = [];
  while (computer.length < 3) {
    const randomNumber = Random.pickNumberInRange(1, 9);
    if (!computer.includes(randomNumber)) {
      computer.push(randomNumber);
    }
  }
  return computer.join('');
}

module.exports = generateRandomNumber;

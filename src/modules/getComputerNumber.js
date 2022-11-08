const { Random } = require('@woowacourse/mission-utils');
const { NUMBER } = require('../constants');

getComputerNumber = () => {
  const computer = [];
  while (computer.length < NUMBER.LENGTH) {
    const number = Random.pickNumberInRange(1, 9);

    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer.join('');
};

module.exports.getComputerNumber = getComputerNumber;

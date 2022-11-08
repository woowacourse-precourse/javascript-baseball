const { Random } = require('@woowacourse/mission-utils');

const pushUniqueNumberIntoArray = (number, array) => {
  if (!array.includes(number)) array.push(number);
};

const getComputerNumber = () => {
  const computerArray = [];

  while (computerArray.length < 3) {
    const randomNumber = Random.pickNumberInRange(1, 9);
    pushUniqueNumberIntoArray(randomNumber, computerArray);
  }

  return computerArray.join('');
};

module.exports = { getComputerNumber };

const { Random } = require('@woowacourse/mission-utils');
const { NUMBER } = require('../constants');

const { NUMBER_RANGE_START, NUMBER_RANGE_END, NUMBER_LENGTH } = NUMBER;

function generateNumber() {
  const computerNumArr = [];
  let computerNumArrLength = 0;

  while (computerNumArrLength < NUMBER_LENGTH) {
    const tempNumber = Random.pickNumberInRange(NUMBER_RANGE_START, NUMBER_RANGE_END);
    if (!computerNumArr.includes(tempNumber)) {
      computerNumArr.push(tempNumber);
      computerNumArrLength += 1;
    }
  }

  return computerNumArr;
}

module.exports = generateNumber;

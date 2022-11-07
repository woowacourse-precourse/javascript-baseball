const { Random } = require('@woowacourse/mission-utils');

function generateNumber() {
  const computerNumArr = [];
  let computerNumArrLength = 0;

  while (computerNumArrLength < 3) {
    const tempNumber = Random.pickNumberInRange(0, 9);
    if (computerNumArr.indexOf(tempNumber) === -1) {
      computerNumArr.push(tempNumber);
      computerNumArrLength += 1;
    }
  }

  return computerNumArr;
}

console.log(generateNumber());

module.exports = generateNumber;

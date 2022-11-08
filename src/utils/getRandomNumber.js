const { Random } = require("@woowacourse/mission-utils");

function getRandomNumber(digit) {
  const numberList = new Set();
  while (numberList.size < digit) {
    numberList.add(Random.pickNumberInRange(1, 9));
  }
  return [...numberList];
}

module.exports = { getRandomNumber };

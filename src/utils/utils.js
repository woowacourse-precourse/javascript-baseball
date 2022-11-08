const { Random } = require('@woowacourse/mission-utils');

function pickUniqueNumbersInRange(start, end, count) {
  const numbers = [];
  while (numbers.length < count) {
    const number = Random.pickNumberInRange(start, end);
    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }
  return numbers;
}

function getUniqueNumberCount(string) {
  const matches = string.match(/[1-9]/g) || [];
  const uniqueNumberCount = [...new Set(matches)].length;

  return uniqueNumberCount;
}

module.exports = {
  pickUniqueNumbersInRange,
  getUniqueNumberCount,
};

const { Random } = require('@woowacourse/mission-utils');

function pickUniqueNumbersInRange(start, end, count) {
  const targat = [];
  while (targat.length < count) {
    const number = Random.pickNumberInRange(start, end);
    if (!targat.includes(number)) {
      targat.push(number);
    }
  }
  return targat;
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

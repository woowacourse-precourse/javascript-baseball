const { ERROR, ANSWER } = require('./Constants');
const { generateNumArr } = require('./Utils');

const validLength = (num) => num.length === ANSWER.LENGTH;

const validRange = (num) => {
  const rangeArr = generateNumArr(ANSWER.MIN, ANSWER.MAX);

  return num.reduce((result, number) => {
    if (!rangeArr.includes(number)) result = false;
    return result;
  }, true);
};

const duplication = (num) => new Set(num).size !== num.length;

const isValidInput = (num) => {
  if (isNaN(num.join(''))) return false;
  if (!validLength(num)) return false;
  if (!validRange(num)) return false;
  if (duplication(num)) return false;
  return true;
};

module.exports = { isValidInput, validLength, validRange, duplication };

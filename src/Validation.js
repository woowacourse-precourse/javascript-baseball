const { ERROR, ANSWER } = require('./Constants');
const { generateNumArr } = require('./Utils');

const validLength = (numArr) => numArr.length === ANSWER.LENGTH;

const validRange = (numArr) => {
  const rangeArr = generateNumArr(ANSWER.MIN, ANSWER.MAX);

  return numArr.reduce((result, number) => {
    if (!rangeArr.includes(number)) result = false;
    return result;
  }, true);
};

const duplication = (numArr) => new Set(numArr).size !== numArr.length;

const isValidInput = (numArr) => {
  if (isNaN(numArr.join(''))) throw new Error(ERROR.NAN);
  if (!validLength(numArr)) throw new Error(ERROR.LENGTH);
  if (!validRange(numArr)) throw new Error(ERROR.RANGE);
  if (duplication(numArr)) throw new Error(ERROR.DUPLICATION);
  return true;
};

module.exports = { isValidInput, validLength, validRange, duplication };

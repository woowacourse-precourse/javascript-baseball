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

module.exports = { validLength, validRange };

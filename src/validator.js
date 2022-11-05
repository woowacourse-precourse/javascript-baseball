const constants = require("./data/constants.js");

function isNotThreeLength(value) {
  if(value.length !== 3) return true;
  return false;
}

function isOutOfRange(value) {
  let result = false;
  value.forEach(Number => {
    if(isNaN(+Number) || Number < 1) result = true;
  });
  return result;
}

function isDuplicated(value) {
  return ([...new Set(value)].length !== 3);
}

function isVaild(value) {
  if(value.length === 0) throw new Error(constants.MESSAGE.IS_BLANK);
  if(isNotThreeLength(value)) throw new Error(constants.MESSAGE.NOT_THREE_LENGTH);
  if(isOutOfRange(value)) throw new Error(constants.MESSAGE.NOT_NUMBER_RANGE);
  if(isDuplicated(value)) throw new Error(constants.MESSAGE.IS_DUPLICATED);
}

exports.isVaild = isVaild;
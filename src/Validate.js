const {
  INPUT_LENGTH_ERROR,
  INPUT_NAN_ERROR,
  INPUT_OVERLAP_ERROR,
} = require("./Constants");

const checkLength = (input) => {
  if (input.length === 3) return true;
  else return false;
};

const checkIsNumber = (input) => {
  if (isNaN(Number(input))) return false;
  else return true;
};

const checkOverlap = (input) => {
  for (let i = 0; i < input.length; i++) {
    if (input.indexOf(input[i]) !== i) return false;
  }
  return true;
};

const validateInput = (input) => {
  if (!checkLength(input)) throw INPUT_LENGTH_ERROR;
  if (!checkIsNumber(input)) throw INPUT_NAN_ERROR;
  if (!checkOverlap(input)) throw INPUT_OVERLAP_ERROR;
};

module.exports = validateInput;

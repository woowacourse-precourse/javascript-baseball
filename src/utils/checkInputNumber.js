const { NUMBER_COUNT } = require("../constant/constants");

const validNumber = (input) => {
  if (Number.isNaN(+input)) return false;
  else if (input.length !== NUMBER_COUNT) return false;
  else if (
    input[0] === input[1] ||
    input[0] === input[2] ||
    input[1] === input[2]
  )
    return false;
  return true;
};

module.exports = { validNumber };

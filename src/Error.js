const { THREE_DIFFERENT_NUMBERS_ERROR } = require("./Constant");

function checkThreeDifferentNumbers(input) {
  const numbers = input
    .split("")
    .map(Number)
    .filter((num) => !Number.isNaN(num) && num > 0);
  if (
    numbers[0] !== numbers[1] &&
    numbers[1] !== numbers[2] &&
    numbers[2] !== numbers[0] &&
    numbers.length === 3
  ) {
    return true;
  }
  throw new Error(THREE_DIFFERENT_NUMBERS_ERROR);
}

module.exports = { checkThreeDifferentNumbers };

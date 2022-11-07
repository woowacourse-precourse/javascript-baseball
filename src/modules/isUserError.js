const { NUMBER, ERRORS } = require("../constants");

isUserError = (user) => {
  checkNumber(user);
  checkLength(user);
  checkOverlap(user);
  checkRange(user);
};

checkNumber = (number) => {
  if (isNaN(number)) {
    throw new Error(ERRORS.TYPE);
  }
};

checkLength = (number) => {
  if (number.length !== NUMBER.LENGTH) {
    throw new Error(ERRORS.LENGTH);
  }
};

checkOverlap = (number) => {
  const numberList = number.split("").sort();
  const validNumber = [...new Set(numberList)];
  if (validNumber.length < NUMBER.LENGTH) {
    throw new Error(ERRORS.OVERLAP);
  }
};

checkRange = (number) => {
  if (number.includes(NUMBER.NOT_INCLUDE)) {
    throw new Error(ERRORS.RANGE);
  }
};

module.exports.isUserError = isUserError;

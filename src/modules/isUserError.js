const { NUMBER, ERRORS } = require("../constants");

isUserError = (user) => {
  checkNumber(user);
  checkLength(user);
  checkOverlap(user);
  checkRange(user);
};

checkNumber = (number) => {
  if (isNaN(number)) {
    throw ERRORS.TYPE;
  }
};

checkLength = (number) => {
  if (number.length !== NUMBER.LENGTH) {
    throw ERRORS.LENGTH;
  }
};

checkOverlap = (number) => {
  const numberList = number.split("").sort();
  const validNumber = [...new Set(numberList)];
  if (validNumber.length < NUMBER.LENGTH) {
    throw ERRORS.OVERLAP;
  }
};

checkRange = (number) => {
  if (number.includes(NUMBER.NOT_INCLUDE)) {
    throw ERRORS.RANGE;
  }
};

exports.isUserError = isUserError;

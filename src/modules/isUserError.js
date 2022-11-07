const { NUMBER, ERRORS } = require("../constants");

isUserError = (user) => {
  checkOverlap(user);
  checkLength(user);
  checkNumber(user);
  checkRange(user);
};

checkOverlap = (number) => {
  const numberList = number.split("").sort();
  const validNumber = [...new Set(numberList)];
  if (validNumber.length < NUMBER.LENGTH) {
    throw ERRORS.OVERLAP;
  }
};

checkLength = (number) => {
  if (number.length !== NUMBER.LENGTH) {
    throw ERRORS.LENGTH;
  }
};

checkNumber = (number) => {
  if (isNaN(number)) {
    throw ERRORS.TYPE;
  }
};

checkRange = (number) => {
  if (number.includes(NUMBER.NOT_INCLUDE)) {
    throw ERRORS.RANGE;
  }
};

exports.isUserError = isUserError;

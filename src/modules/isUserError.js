const { NUMBER_LENGTH, ERRORS } = require("../constants");

isUserError = (user) => {
  checkOverlap(user);
  checkLength(user);
  checkNumber(user);
  checkRange(user);
};

checkOverlap = (number) => {
  const numberList = number.split("").sort();
  const validNumber = [...new Set(numberList)];
  if (validNumber.length < 3) {
    throw ERRORS.OVERLAP;
  }
};

checkLength = (number) => {
  if (number.length !== NUMBER_LENGTH) {
    throw ERRORS.LENGTH;
  }
};

checkNumber = (number) => {
  if (isNaN(number)) {
    throw ERRORS.TYPE;
  }
};

checkRange = (number) => {
  if (number.includes("0")) {
    throw ERRORS.RANGE;
  }
};

exports.isUserError = isUserError;

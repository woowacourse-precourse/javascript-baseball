/* eslint-disable no-undef */
// eslint-disable-next-line import/extensions
const { NUMBER, ERRORS } = require('../constants');

isValidUserNumber = (user) => {
  checkNumber(user);
  checkLength(user);
  checkDuplication(user);
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

checkDuplication = (number) => {
  const numberList = number.split('');
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

module.exports.isValidUserNumber = isValidUserNumber;

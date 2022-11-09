const { NUMBER, ERRORS } = require('../constants');

const isValidUserNumber = (user) => {
  checkNumber(user);
  checkLength(user);
  checkDuplication(user);
  checkRange(user);
};

const checkNumber = (number) => {
  if (Number.isNaN(number)) {
    throw new Error(ERRORS.TYPE);
  }
};

const checkLength = (number) => {
  if (number.length !== NUMBER.LENGTH) {
    throw new Error(ERRORS.LENGTH);
  }
};

const checkDuplication = (number) => {
  const numberList = number.split('');
  const validNumber = [...new Set(numberList)];
  if (validNumber.length < NUMBER.LENGTH) {
    throw new Error(ERRORS.OVERLAP);
  }
};

const checkRange = (number) => {
  if (number.includes(NUMBER.NOT_INCLUDE)) {
    throw new Error(ERRORS.RANGE);
  }
};

module.exports = { isValidUserNumber };

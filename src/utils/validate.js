const { ERROR_MESSAGE, NUMBER_VALUE } = require("../constants/index");

const isValidType = (values) => {
  return values.every((value) => typeof value === "number");
};

const isValidRange = (values) => {
  return values.every(
    (value) => value >= NUMBER_VALUE.MIN && value <= NUMBER_VALUE.MAX
  );
};

const isValid = (userNumber) => {
  const userNumberArray = userNumber.split("").map((value) => Number(value));

  if (!isValidType(userNumberArray)) {
    throw ERROR_MESSAGE.TYPE_ERROR;
  }

  if (!isValidRange(userNumberArray)) {
    throw ERROR_MESSAGE.RANGE_ERROR;
  }

  return true;
};

module.exports = { isValid };

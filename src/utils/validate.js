const { ERROR_MESSAGE } = require("../constants/index");

const isValidType = (value) => {
  return typeof value === "number";
};

const isValid = (userNumber) => {
  if (!isValidType(userNumber)) {
    throw ERROR_MESSAGE.TYPE_ERROR;
  }

  return true;
};

module.exports = { isValid };

const { WRONG_INPUT_ERROR_MESSAGE } = require("./constants/messages");

const throwError = () => {
  throw new Error(WRONG_INPUT_ERROR_MESSAGE);
};

module.exports = throwError;

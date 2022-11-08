const { ERROR, RESTART } = require("../constants/constants.js");

const validateLength = (input) => input.length === 3;
const validateNumber = (input) => input.match(/[1-9]/g);
const validateUnique = (input) => new Set(input.split("")).size === 3;

const validate = {
  userInput: (input) => {
    if (
      !validateLength(input) ||
      !validateNumber(input) ||
      !validateUnique(input)
    )
      throw new Error(ERROR.INVALID_USER_INPUT);

    return 1;
  },

  restartInput: (input) => {
    if (!(input === RESTART.YES || input === RESTART.NO))
      throw new Error(ERROR.INVALID_RESTART_INPUT);

    return 1;
  },
};

module.exports = validate;

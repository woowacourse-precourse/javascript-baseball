const { GAME_LENGTH, ERROR } = require("./constants/constants");

class User {
  checkScope = (input) => {
    if (input.includes(0)) throw ERROR.NOT_ZERO;
  };

  checkType = (input) => {
    if (isNaN(input)) throw ERROR.NOT_NUMBER;
  };

  checkLength = (input) => {
    if (input.length !== GAME_LENGTH) throw ERROR.LENGTH;
  };

  checkDuplicatedInput = (input) => {
    if (input.length !== new Set(input).size) throw ERROR.DUPLICATED;
  };

  isValidUser = (input) => {
    this.checkScope(input);
    this.checkType(input);
    this.checkLength(input);
    this.checkDuplicatedInput(input);
    return true;
  };

  isRestartNumber = (restartInput) => {
    if (Number(restartInput) < 1 || Number(restartInput) > 2)
      throw ERROR.RESTART;
    if (isNaN(restartInput)) throw ERROR.NOT_NUMBER;
    return true;
  };
}

module.exports = User;

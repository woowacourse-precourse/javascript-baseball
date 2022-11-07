const { BASIC_NUMBER, REPLAY_NUMBER } = require('../constants/game numbers');
const { ERROR_MESSAGE } = require('../constants/error message');

class ErrorCheck {
  static isInvalidInputLength(userInput) {
    return userInput.length !== BASIC_NUMBER.CORRECT_NUMBER;
  }

  static hasDuplication(userInput) {
    return new Set(userInput).size !== BASIC_NUMBER.CORRECT_NUMBER;
  }

  static notOnlyConsistOfNums(userInput) {
    const numberOnlyReg = /[^0-9]/;
    return numberOnlyReg.test(userInput);
  }

  static isReplayError(userInput) {
    return (
      userInput !== REPLAY_NUMBER.KEEP_PLAY && userInput !== REPLAY_NUMBER.EXIT
    );
  }

  static isNothing(STRIKE, BALL) {
    return STRIKE === BASIC_NUMBER.INIT && BALL === BASIC_NUMBER.INIT;
  }

  static guessError(userInput) {
    if (this.isInvalidInputLength(userInput)) {
      throw new Error(ERROR_MESSAGE.LENGTH_ERROR);
    }
    if (this.notOnlyConsistOfNums(userInput)) {
      throw new Error(ERROR_MESSAGE.TYPE_ERROR);
    }
    if (this.hasDuplication(userInput)) {
      throw new Error(ERROR_MESSAGE.DUP_ERROR);
    }
  }

  static replayError(userInput) {
    if (this.isReplayError(userInput)) {
      throw new Error(ERROR_MESSAGE.INVALID_NUM_ERROR);
    }
  }
}

module.exports = { ErrorCheck };

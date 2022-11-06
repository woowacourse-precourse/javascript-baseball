const { BASIC_NUMBER, REPLAY_NUMBER } = require('../constants/game numbers');

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
}

exports.ErrorCheck = ErrorCheck;

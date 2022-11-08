const { GAME_NUMBER, REPLAY_NUMBER } = require('../constants/game numbers');
const { ERROR_MESSAGE } = require('../constants/error message');
const isEqual = require('./Equal');

class ErrorCheck {
  static isInvalidInputLength(userInput) {
    return !isEqual(userInput.length, GAME_NUMBER.GUESS);
  }

  static hasDuplication(userInput) {
    return !isEqual(new Set(userInput).size, GAME_NUMBER.GUESS);
  }

  static notOnlyConsistOfNums(userInput) {
    const numberOnlyReg = /[^1-9]/;
    return numberOnlyReg.test(userInput);
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

  static isReplayError(userInput) {
    return (
      !isEqual(userInput, REPLAY_NUMBER.KEEP_PLAY) &&
      !isEqual(userInput, REPLAY_NUMBER.EXIT)
    );
  }

  static replayError(userInput) {
    if (this.isReplayError(userInput)) {
      throw new Error(ERROR_MESSAGE.INVALID_NUM_ERROR);
    }
  }

  static isNothing(strikeCount, ballCount) {
    return (
      isEqual(strikeCount, GAME_NUMBER.INIT) &&
      isEqual(ballCount, GAME_NUMBER.INIT)
    );
  }
}

module.exports = { ErrorCheck };

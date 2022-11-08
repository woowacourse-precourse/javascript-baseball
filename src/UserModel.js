const {
  ERROR_NOT_THREE_LENGTH,
  ERROR_NOT_NUMBER,
  ERROR_NOT_IN_RANGE,
  ERROR_NOT_DUPLICATED,
} = require("./constants/message");
const GAME_VALUE = require("./constants/values");

class UserModel {
  convertStringToArray(input) {
    return Array.from([...input], this.convertArgsStringToInt);
  }

  convertArgsStringToInt(input) {
    return +input;
  }

  isNotLengthEqualsThree(input) {
    return input.length !== GAME_VALUE.MAX_NUMBER_LENGTH;
  }

  isNotConsistOfOnlyNumber(input) {
    return /[^0-9]/g.test(input);
  }

  isNotNumberRangeOneToNine(input) {
    return /[^1-9]/g.test(input);
  }

  isDuplicatedInNumber(input) {
    return [...new Set(input)].join("").length !== input.length;
  }

  isInputNumbersValid(numberFromUser) {
    if (this.isNotLengthEqualsThree(numberFromUser)) {
      throw Error(ERROR_NOT_THREE_LENGTH);
    }
    if (this.isNotConsistOfOnlyNumber(numberFromUser)) {
      throw Error(ERROR_NOT_NUMBER);
    }
    if (this.isNotNumberRangeOneToNine(numberFromUser)) {
      throw Error(ERROR_NOT_IN_RANGE);
    }
    if (this.isDuplicatedInNumber(numberFromUser)) {
      throw Error(ERROR_NOT_DUPLICATED);
    }
    return numberFromUser;
  }
}
module.exports = UserModel;

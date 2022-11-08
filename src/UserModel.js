const {
  ERROR_NOT_THREE_LENGTH,
  ERROR_NOT_NUMBER,
  ERROR_NOT_IN_RANGE,
  ERROR_NOT_DUPLICATED,
} = require("./constants/message");
const GAME_VALUE = require("./constants/values");

class UserModel {
  convertStringToArray(input) {
    const convertArgsStringToInt = (arg) => Number(arg);
    return Array.from([...input], convertArgsStringToInt);
  }

  isLengthEqualsThree(input) {
    return input.length !== GAME_VALUE.MAX_NUMBER_LENGTH;
  }

  isConsistOfOnlyNumber(input) {
    return /[^0-9]/g.test(input);
  }

  isNumberRangeOneToNine(input) {
    return /[^1-9]/g.test(input);
  }

  isDuplicatedInNumber(input) {
    return [...new Set(input)].join("").length !== input.length;
  }

  isInputNumbersValid(numberFromUser) {
    if (this.isLengthEqualsThree(numberFromUser)) {
      throw Error(ERROR_NOT_THREE_LENGTH);
    }
    if (this.isConsistOfOnlyNumber(numberFromUser)) {
      throw Error(ERROR_NOT_NUMBER);
    }
    if (this.isNumberRangeOneToNine(numberFromUser)) {
      throw Error(ERROR_NOT_IN_RANGE);
    }
    if (this.isDuplicatedInNumber(numberFromUser)) {
      throw Error(ERROR_NOT_DUPLICATED);
    }
    return numberFromUser;
  }
}
module.exports = UserModel;

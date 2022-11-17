const { Console } = require('@woowacourse/mission-utils');
const { NUMBER_LIMIT } = require('../constant/baseball');

class User {
  validateInput(userInput) {
    const isInputLengthValid = userInput.length === NUMBER_LIMIT;
    const isInputTypeValid = /\d/.test(userInput);
    const isInputRangeValid = /[1-9]/g.test(userInput);
    const isInputNotDuplicated = new Set([...userInput]).size === NUMBER_LIMIT;

    return isInputLengthValid && isInputTypeValid && isInputRangeValid && isInputNotDuplicated;
  }
}

module.exports = User;

const { NUMBER_LIMIT } = require('../constant/baseball');

class User {
  validateInput(userInput) {
    return (
      this.validateInputLength(userInput) &&
      this.validateInputType(userInput) &&
      this.validateInputRange(userInput) &&
      this.validateInputDuplicated(userInput)
    );
  }

  validateInputLength(userInput) {
    const isInputThreeLength = userInput.length === NUMBER_LIMIT;
    return isInputThreeLength;
  }

  validateInputType(userInput) {
    const inputCastToNumber = Number(userInput);
    const isNumber = num => !Number.isNaN(num) && typeof num === 'number';

    return isNumber(inputCastToNumber);
  }

  validateInputRange(userInput) {
    const isZeroContain = [...userInput].includes('0');
    return isZeroContain === false;
  }

  validateInputDuplicated(userInput) {
    const isDuplicated = new Set([...userInput]).size !== NUMBER_LIMIT;
    return isDuplicated === false;
  }
}

module.exports = User;

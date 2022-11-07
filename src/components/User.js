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
    return userInput.length === NUMBER_LIMIT;
  }

  validateInputType(userInput) {
    const typeRegex = /\d/;
    return typeRegex.test(userInput);
  }

  validateInputRange(userInput) {
    const rangeRegex = /[1-9]/g;
    return rangeRegex.test(userInput);
  }

  validateInputDuplicated(userInput) {
    const isDuplicated = new Set([...userInput]).size !== NUMBER_LIMIT;
    return isDuplicated === false;
  }
}

module.exports = User;

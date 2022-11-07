class User {
  isValidUserInput(userInput) {
    userInput.replace(/ /g, '');
    return (
      this.isValidLength(userInput) &&
      this.isValidType(userInput) &&
      this.isNotDuplicated(userInput)
    );
  }

  isValidLength(userInput) {
    return userInput.length === 3;
  }

  isValidType(userInput) {
    const typeRegex = /^[0-9]+$/;
    return typeRegex.test(userInput);
  }

  isNotDuplicated(userInput) {
    const testSet = new Set(userInput.split(''));
    return testSet.size === 3;
  }
}

module.exports = User;

class Validator {
  static validateInput(userInput) {
    const checkLength = userInput.length === ANSWER.LENGTH;
    const checkNumber = Boolean(userInput.match(/^[1-9]+$/));
    const checkDuplicate = new Set([...userInput]).size === ANSWER.LENGTH;
    return checkLength && checkNumber && checkDuplicate;
  }
}

module.exports = Validator;

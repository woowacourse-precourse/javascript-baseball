const getUserInputNumberFromUserInput = (userInput) => {
  return Array.from(userInput, (digit) => parseInt(digit, 10));
};

const getUserInputDigitFromUserInput = (userInputDigit) => {
  return parseInt(userInputDigit, 10);
};

module.exports = { getUserInputNumberFromUserInput, getUserInputDigitFromUserInput };

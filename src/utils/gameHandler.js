const { Console } = require('@woowacourse/mission-utils');
const { ERROR } = require('./constant');

/* Select Continue Option */
const isValidContinueOption = (option) => {
  if (option === '1') return true;
  if (option === '2') return false;

  Console.close();
  throw new Error(ERROR.INVALID_OPTION);
};

/* Check userInput is valid */
const checkValidUserInput = (userInput) => {
  isValidLength(userInput);
  isValidNumber(userInput);
  isValidRange(userInput);
  isDuplicated(userInput);

  return true;
};

const isValidLength = (userInput) => {
  if (userInput.length === 3) return;

  Console.close();
  throw new Error(ERROR.INVALID_LENGTH);
};

const isValidNumber = (userInput) => {
  if (!isNaN(userInput)) return;

  Console.close();
  throw new Error(ERROR.INVALID_TYPE);
};

const isValidRange = (userInput) => {
  if (!userInput.includes(0)) return;

  Console.close();
  throw new Error(ERROR.INVALID_RANGE);
};

const isDuplicated = (userInput) => {
  const userInputArray = userInput.split('');
  const duplicatedNumbers = userInputArray.filter(
    (number, index) => userInputArray.indexOf(number) !== index,
  );
  if (duplicatedNumbers.length === 0) return;

  Console.close();
  throw new Error(ERROR.DUPLICATED_NUMBER);
};

/* Compare UserNumbers with ComputerNumbers */
const checkAnswer = (userNumbers, computerNumbers) => {
  let ball = 0;
  let strike = 0;
  userNumbers.forEach((number) => {
    const sameIndex = isSameIndex(number, userNumbers, computerNumbers);
    if (!computerNumbers.includes(number)) return;

    if (sameIndex) return (strike += 1);

    ball += 1;
  });

  return { ball, strike };
};

const isSameIndex = (number, userNumbers, computerNumbers) => {
  const resultValue = userNumbers.indexOf(number) === computerNumbers.indexOf(number);

  return resultValue;
};

module.exports = { isValidContinueOption, checkValidUserInput, checkAnswer };

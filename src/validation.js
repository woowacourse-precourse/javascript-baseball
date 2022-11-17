const { Random, Console } = require('@woowacourse/mission-utils');
const { ERROR } = require('./Constants.js');

const isThreeDigits = (number) => {
  if (number.length === 3) return true;
  Console.print(number);
  Console.print(number.length);
  Console.close();
  throw new Error(ERROR.NOT_USER_NUMBER_LENGTH_THREE_ERROR_MESSAGE);
};

const isCorrectRangeDigits = (number) => {
  const possibleDigits = Random.pickUniqueNumbersInRange(1, 9, 9);
  if (number.split('').every((digit) => possibleDigits.includes(+digit))) return true;
  throw new Error(ERROR.INCLUDE_NOT_DIGIT_IN_USER_NUMBER_ERROR_MESSEAGE);
};

const isNotDuplicate = (number) => {
  const usedDigits = [];
  number.split('').forEach((digit) => {
    if (!usedDigits.includes(+digit)) {
      usedDigits.push(+digit);
    }
  });
  if (usedDigits.length === 3) return true;
  throw new Error(ERROR.USER_NUMBER_DUPLICATED_ERROR_MESSAGE);
};

const isValidUserNumber = (number) => {
  return isThreeDigits(number) && isCorrectRangeDigits(number) && isNotDuplicate(number);
};

const isValidRestartNumber = (number) => {
  if (number === '1' || number === '2') return true;
  throw new Error(ERROR.GAME_RESTART_NUMBER_ERROR_MESSAGE);
};

module.exports = {
  isValidUserNumber,
  isValidRestartNumber,
};

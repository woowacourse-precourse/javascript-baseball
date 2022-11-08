const Message = require('../assets/Message');

const ERROR_MESSAGE = {
  playerNumber: '입력값이 1부터 9까지 서로 다른 수로 이루어진 3자리의 수가 아닙니다.',
  endSelection: '입력값이 1 또는 2가 아닙니다.',
};

const checkPlayerNumberError = (input) => {
  const isIncludingZero = input.includes('0');
  const isLengthInvalid = input.length !== 3;
  const isDuplicateNumber = input.length !== new Set(input.split('')).size;

  if (isIncludingZero || isLengthInvalid || isDuplicateNumber)
    throw new RangeError(ERROR_MESSAGE.playerNumber);
};

const checkEndSelectionError = (input) => {
  const { RESTART, EXIT } = Message;
  const isInvalid = input !== RESTART && input !== EXIT;

  if (isInvalid) throw new RangeError(ERROR_MESSAGE.endSelection);
};

module.exports = { checkPlayerNumberError, checkEndSelectionError };

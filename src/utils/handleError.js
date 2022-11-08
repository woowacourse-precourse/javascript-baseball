const ERROR_MESSAGE = {
  playerNumber: '입력값이 1부터 9까지 서로 다른 수로 이루어진 3자리의 수가 아닙니다.',
};

const checkPlayerNumberError = (input) => {
  const isIncludingZero = input.includes('0');
  const isLengthInvalid = input.length !== 3;
  const isDuplicateNumber = input.length !== new Set(input.split('')).size;

  if (isIncludingZero || isLengthInvalid || isDuplicateNumber)
    throw new RangeError(ERROR_MESSAGE.playerNumber);
};

module.exports = { checkPlayerNumberError };

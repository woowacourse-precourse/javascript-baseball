const isNaN = function isNaNInUserInput(userInput) {
  const matchNaN = userInput.match(/[^0-9]/g, '');

  if (matchNaN !== null) {
    throw new Error('숫자만 입력할 수 있습니다.');
  }
};

const isThreeLength = function isThreeLengthUserInput(userInput) {
  if (userInput.length !== 3) {
    throw new Error('3자리 숫자를 입력해주세요');
  }
};

const isExistZero = function isExistZeroInUserInput(userInput) {
  for (const num of userInput) {
    if (Number(num) <= 0) {
      throw new Error('1에서 9 사이의 숫자를 입력해주세요');
    }
  }
};

const isDuplicates = function isDuplicatesInUserInput(userInput) {
  const removeDuplicates = [...new Set(userInput.split(''))];

  if (removeDuplicates.length !== 3) {
    throw new Error('각 자리에 중복되지 않은 숫자를 입력해주세요');
  }
};

const isNotOneOrTwo = function isNotOneOrTwoUserInput(userInput) {
  if (userInput !== '1' && userInput !== '2') {
    throw new Error('1 또는 2 중에 선택해주세요');
  }
};

const handleUserInputException = function handleUserInputException(userInput, inputType) {
  if (inputType === 'getExpectedAnswer') {
    isNaN(userInput);
    isThreeLength(userInput);
    isExistZero(userInput);
    isDuplicates(userInput);
  }

  if (inputType === 'getRestart') {
    isNotOneOrTwo(userInput);
  }
};

module.exports = { handleUserInputException };

const errorMessage = {
  print(message) {
    return { isValid: false, message };
  },
};

function inputValidator(input) {
  if (input.length !== 3) {
    return errorMessage.print('자릿수를 확인해주세요!');
  }

  if (isNaN(input)) {
    return errorMessage.print('숫자를 입력해주세요!');
  }

  if (input.includes('0')) {
    return errorMessage('0이 아닌 숫자를 입력해주세요!');
  }

  if ([...new Set(input)].length !== 3) {
    return errorMessage('중복되지 않은 수를 입력해주세요!');
  }

  return { isValid: true };
}

module.exports = inputValidator;

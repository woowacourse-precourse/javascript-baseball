const isValidateUserInput = (value) => {
  if (!Number(value)) {
    throw new Error('숫자가 아닙니다.');
  }
  if (value.includes('0')) {
    throw new Error('0이 포함되어 있습니다.');
  }
  if (value.length !== 3) {
    throw new Error('길이가 3이 아닙니다.');
  }
  if (new Set(value).size !== value.length) {
    throw new Error('중복된 숫자가 존재합니다.');
  }
  return true;
};

module.exports = isValidateUserInput;

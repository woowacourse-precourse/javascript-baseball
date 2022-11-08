module.exports = {
  validate(text, validator) {
    if (!validator(text)) {
      throw new Error('잘못된 값을 입력하였습니다!');
    }
  },
  numberInputValidator(text) {
    const VALID_INPUT_PATTERN = /^[1-9]{3}$/;
    return new Set(text).size === 3 && VALID_INPUT_PATTERN.test(text);
  },
  menuInputValidator(text) {
    return text === '1' || text === '2';
  },
};

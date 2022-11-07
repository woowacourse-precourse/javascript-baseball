const REGEX = /^[1-9]{3}$/;

const error = {
  isValidResponse(answer) {
    return this.isNumberType(answer) && this.isNotDuplicated(answer) && this.isThreeDigit(answer);
  },

  isNumberType(answer) {
    return !Number.isNaN(Number(answer));
  },

  isThreeDigit(answer) {
    return REGEX.test(answer);
  },

  isNotDuplicated(answer) {
    return [...String(answer)].length === new Set([...String(answer)]).size;
  },
};
module.exports = error;

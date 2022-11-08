const SET_GAME_INPUT_REGEX = /^[1-9]{3}$/;
const NEW_GAME_INPUT_REGEX = /^[1|2]{1}$/;

const setGameInputError = {
  isValid(answer) {
    return this.isNumberType(answer) && this.isNotDuplicated(answer) && this.isThreeDigit(answer);
  },

  isNumberType(answer) {
    return !Number.isNaN(Number(answer));
  },

  isThreeDigit(answer) {
    return SET_GAME_INPUT_REGEX.test(answer);
  },

  isNotDuplicated(answer) {
    return [...String(answer)].length === new Set([...String(answer)]).size;
  },
};

const newGameInputError = {
  isValid(answer) {
    return NEW_GAME_INPUT_REGEX.test(answer);
  },
};

module.exports = { setGameInputError, newGameInputError };

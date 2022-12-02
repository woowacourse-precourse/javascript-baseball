const { REGEX, GAME_MESSAGES } = require('../constants/index');
const { removeDuplicated } = require('../utils/utils');

validateUserNumber = (userNumberStr) => {
  const answer = userNumberStr.replace(REGEX.SPACE, '');
  const { length } = answer;

  if (userNumberStr !== answer) throw new Error(GAME_MESSAGES.INVALID_FORM);

  if (isNaN(answer)) throw new Error(GAME_MESSAGES.NOT_A_NUMBER);

  if (length !== 3) throw new Error(GAME_MESSAGES.INVALID_LENGTH);

  if (removeDuplicated(userNumberStr) !== userNumberStr)
    throw new Error(GAME_MESSAGES.DUPLICATED_NUM);
};

module.exports = validateUserNumber;

const { REGEX, GAME_MESSAGES } = require('../constants/index');

validateChoice = (playerChoice) => {
  if (!REGEX.CHOICE.test(playerChoice)) {
    Console.print(GAME_MESSAGES.FORMAT_ERROR_CHOICE);
    throw Error(GAME_MESSAGES.FORMAT_ERROR_CHOICE);
  }
};

module.exports = validateChoice;

const {GAME_ERROR_MESSAGE} = require("./constants.js")

const checkUserInput = (userInput) =>  {
  if (userInput === "") throw new Error(GAME_ERROR_MESSAGE.BLANK);

  if (/[^1-9]/g.test(userInput))
    throw new Error(GAME_ERROR_MESSAGE.NOT_NUMBER);

  if (userInput.length !== 3)
    throw new Error(GAME_ERROR_MESSAGE.THREE_DIGIT);

  if (new Set(userInput.split("")).size !== 3)
    throw new Error(GAME_ERROR_MESSAGE.DUPLICATE);
}

module.exports = checkUserInput;
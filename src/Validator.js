const { ERROR_MESSAGE, GAME_OPTION, COMPUTER_NUMBER } = require("./Constatns");

function isValidPlayerInput(playerNum) {
  if (isNaN(parseInt(playerNum))) {
    throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
  }

  if (!isValidLength(playerNum)) {
    throw new Error(ERROR_MESSAGE.LENGTH);
  }

  if (!isValidRange(playerNum)) {
    throw new Error(ERROR_MESSAGE.RANGE);
  }

  if (!isValidDuplicated(playerNum)) {
    throw new Error(ERROR_MESSAGE.DUPLICATED);
  }

  return true;
}

function isValidLength(playerNum) {
  return playerNum.length === COMPUTER_NUMBER.LENGTH;
}

function isValidRange(playerNum) {
  return !playerNum.includes("0");
}

function isValidDuplicated(playerNum) {
  return new Set(playerNum).size === COMPUTER_NUMBER.LENGTH;
}

function isValidReplayNum(input) {
  if (
    Number(input) !== GAME_OPTION.PLAY &&
    Number(input) !== GAME_OPTION.EXIT
  ) {
    throw new Error(ERROR_MESSAGE.REAPLY_NUM);
  }

  return true;
}

module.exports = { isValidPlayerInput, isValidReplayNum };

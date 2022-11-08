const { ERROR_MESSAGE, GAME, COMPUTER_NUMBER } = require("./Constants");

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
  if (Number(input) !== GAME.RUN && Number(input) !== GAME.STOP) {
    throw new Error(ERROR_MESSAGE.REAPLY_NUM);
  }
}

module.exports = { isValidPlayerInput, isValidReplayNum };

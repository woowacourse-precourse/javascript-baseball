const { startGame, playGame } = require("./game");
const { getComputerNumber } = require("./numberMaker");
const { isValid } = require("./validate");
const { getHint } = require("./hintMaker");

module.exports = {
  startGame,
  playGame,
  getComputerNumber,
  isValid,
  getHint,
};

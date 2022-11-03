const { startGame, inputNumber } = require("./game");
const { getComputerNumber } = require("./numberMaker");
const { isValid } = require("./validate");
const { getHint } = require("./hintMaker");

module.exports = {
  startGame,
  inputNumber,
  getComputerNumber,
  isValid,
  getHint,
};

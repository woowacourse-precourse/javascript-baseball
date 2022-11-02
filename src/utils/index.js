const { startGame, inputNumber } = require("./game");
const { getComputerNumber } = require("./numberMaker");
const { isValid } = require("./validate");

module.exports = { startGame, inputNumber, getComputerNumber, isValid };

const { GAME_MESSAGE } = require("./constants.js")
const { Console } = require("@woowacourse/mission-utils");

const printGameStartMessage = () => {
  Console.print(GAME_MESSAGE.START);
}

const print = (string) => Console.print(string);

module.exports = {printGameStartMessage, print};
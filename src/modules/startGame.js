const { Console } = require("@woowacourse/mission-utils");
const { MESSAGES } = require("../constants");

startGame = () => {
  Console.print(MESSAGES.START);
};

exports.startGame = startGame;

const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGES } = require("../constants");

startGame = () => {
  MissionUtils.Console.print(MESSAGES.START);
};

exports.startGame = startGame;

const { GAME_MESSAGE } = require("./constants.js")
const MissionUtils = require("@woowacourse/mission-utils");

const printGameStartMessage = () => {
  MissionUtils.Console.print(GAME_MESSAGE.START);
}

module.exports = {printGameStartMessage};
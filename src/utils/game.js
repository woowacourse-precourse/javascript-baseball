const MissionUtils = require("@woowacourse/mission-utils");
const { GAME_MESSAGE } = require("../constants/index");

const startGame = () => {
  MissionUtils.Console.print(GAME_MESSAGE.START);
};

const inputNumber = () => {
  MissionUtils.Console.readLine(GAME_MESSAGE.INPUT_NUMBER, (number) => {
    console.log(number);
  });
};

module.exports = { startGame, inputNumber };

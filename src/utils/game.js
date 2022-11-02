const MissionUtils = require("@woowacourse/mission-utils");
const { getComputerNumber } = require("./numberMaker");
const { GAME_MESSAGE } = require("../constants/index");

const startGame = () => {
  MissionUtils.Console.print(GAME_MESSAGE.START);
};

const inputNumber = () => {
  MissionUtils.Console.readLine(GAME_MESSAGE.INPUT_NUMBER, (number) => {
    compareNumbers(number, getComputerNumber());
  });
};

const compareNumbers = (userNumber, computerNumber) => {
  console.log(userNumber === computerNumber);
};

module.exports = { startGame, inputNumber };

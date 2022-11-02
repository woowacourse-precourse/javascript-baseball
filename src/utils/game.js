const MissionUtils = require("@woowacourse/mission-utils");
const { getComputerNumber } = require("./numberMaker");
const { isValid } = require("../utils/validate");
const { GAME_MESSAGE } = require("../constants/index");

const startGame = () => {
  MissionUtils.Console.print(GAME_MESSAGE.START);
};

const inputNumber = () => {
  MissionUtils.Console.readLine(GAME_MESSAGE.INPUT_NUMBER, (number) => {
    if (isValid(number)) {
      compareNumbers(number, getComputerNumber());
    } else {
      closeGame();
      throw "Error!";
    }
  });
};

const closeGame = () => {
  MissionUtils.Console.close();
};

const compareNumbers = (userNumber, computerNumber) => {
  console.log(userNumber, computerNumber);
};

module.exports = { startGame, inputNumber };

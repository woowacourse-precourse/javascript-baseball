const MissionUtils = require("@woowacourse/mission-utils");
const GAME_MESSAGE = require("./constants/message");

class NumericBaseballGame {
  constructor() {}

  start() {
    MissionUtils.Console.print(GAME_MESSAGE.NOTIFY_START_MESSAGE);
    const getRandomNumber = () => MissionUtils.Random.pickNumberInRange(1, 9);
    const isNumberNotInSpace = (number, array) => !array.includes(number);
    const isNotFull = (computerSpace) => computerSpace.length < 3;
    const InsertNumberToSpace = (computerNumberSpace) => {
      const number = getRandomNumber();
      if (isNumberNotInSpace(number, computerNumberSpace)) {
        computerNumberSpace.push(number);
      }
    };
    const getNumberFromComputer = () => {
      const computerNumberSpace = [];
      while (isNotFull(computerNumberSpace)) {
        InsertNumberToSpace(computerNumberSpace);
      }
      return computerNumberSpace;
    };

    this.numberFromComputer = getNumberFromComputer();
  }
}
module.exports = NumericBaseballGame;

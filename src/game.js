const MissionUtils = require("@woowacourse/mission-utils");
const GAME_MESSAGE = require("./constants/message");

class NumericBaseballGame {
  constructor() {}

  async creat() {
    const getRandomNumber = () => MissionUtils.Random.pickNumberInRange(1, 9);
    const isNumberNotInSpace = (number, array) => !array.includes(number);
    const isNotFull = (computerSpace) => computerSpace.length < 3;
    const convertArgsStringToInt = (arg) => Number(arg);
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

    const getNumberFromUser = async () => {
      const inputStringNumberFromUser = await new Promise((resolve) => {
        MissionUtils.Console.readLine("숫자를 입력하시오. : ", (answer) => {
          resolve(answer);
        });
      });

      if (this.checkArgNumberValid(inputStringNumberFromUser)) {
        return Array.from(
          [...inputStringNumberFromUser],
          convertArgsStringToInt
        );
      }
    };

    return [getNumberFromComputer(), await getNumberFromUser()];
  }

  checkArgNumberValid(number) {
    const isConsistOfOnlyNumber = (input) => /^[0-9]*$/g.test(input);
  }

  async start() {
    MissionUtils.Console.print(GAME_MESSAGE.NOTIFY_START_MESSAGE);
    const [numberFromComputer, numberFromUser] = await this.creat();
  }
}
module.exports = NumericBaseballGame;

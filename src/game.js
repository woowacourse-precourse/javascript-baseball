const MissionUtils = require("@woowacourse/mission-utils");
const GAME_MESSAGE = require("./constants/message");

class NumericBaseballGame {
  constructor() {}

  getNumberFromComputer() {
    const getRandomNumber = () => MissionUtils.Random.pickNumberInRange(1, 9);
    const isNotFull = (computerSpace) => computerSpace.length < 3;
    const isNumberNotInSpace = (number, array) => !array.includes(number);
    const InsertNumberToSpace = (computerNumberSpace) => {
      const number = getRandomNumber();
      if (isNumberNotInSpace(number, computerNumberSpace)) {
        computerNumberSpace.push(number);
      }
    };

    const computerNumberSpace = [];
    while (isNotFull(computerNumberSpace)) {
      InsertNumberToSpace(computerNumberSpace);
    }
    return computerNumberSpace;
  }

  async getNumberFromUser() {
    const convertArgsStringToInt = (arg) => Number(arg);

    const inputStringNumberFromUser = await new Promise((resolve) => {
      MissionUtils.Console.readLine("숫자를 입력하시오. : ", (answer) => {
        resolve(answer);
      });
    });

    if (this.checkArgNumberValid(inputStringNumberFromUser)) {
      return Array.from([...inputStringNumberFromUser], convertArgsStringToInt);
    }
    throw new Error("유효하지 않은 숫자입니다.");
  }

  checkArgNumberValid(number) {
    const isInputNumberLengthEqualsThree = (input) => input.length === 3;
    const isConsistOfOnlyNumber = (input) => /^[0-9]*$/g.test(input);
    const isNumberRangeOneToNine = (input) => /^[1-9]*$/g.test(input);
    const isDuplicated = (input) =>
      [...new Set(input)].join("").length === input.length;
    return (
      isInputNumberLengthEqualsThree(number) &&
      isConsistOfOnlyNumber(number) &&
      isNumberRangeOneToNine(number) &&
      isDuplicated(number)
    );
  }

  async start() {
    MissionUtils.Console.print(GAME_MESSAGE.NOTIFY_START_MESSAGE);
    const numberFromComputer = this.getNumberFromComputer();
    const numberFromUserInput = await this.getNumberFromUser();
  }
}
module.exports = NumericBaseballGame;

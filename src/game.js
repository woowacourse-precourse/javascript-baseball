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

  getResult(userInput, computerInput) {
    const userScore = {
      strikeCount: 0,
      ballCount: 0,
      nothingCount: 0,
    };

    userInput.forEach((value, idx) => {
      if (value === computerInput[idx]) userScore.strikeCount += 1;
      else if (computerInput.includes(value)) userScore.ballCount += 1;
    });

    return userScore;
  }

  async start() {
    MissionUtils.Console.print(GAME_MESSAGE.NOTIFY_START_MESSAGE);
    const numberFromComputer = this.getNumberFromComputer();
    while (true) {
      let numberFromUserInput = await this.getNumberFromUser();

      const { strikeCount, ballCount } = this.getResult(
        numberFromUserInput,
        numberFromComputer
      );
      if (strikeCount === 3) {
        MissionUtils.Console.print("3개의 숫자를 모두 맞추셨습니다!");
      }

      if (strikeCount) {
        MissionUtils.Console.print(`${strikeCount}스트라이크`);
        continue;
      }
    }
  }
}
module.exports = NumericBaseballGame;

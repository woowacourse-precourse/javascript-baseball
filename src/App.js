const { Random, Console } = require("@woowacourse/mission-utils");
const { GAME_MESSAGE, ERROR_MESSAGE } = require("./constants/message.js");
const {
  MAX_NUMBER_LENGTH,
  MAX_NUMBER_RANGE,
  MIN_NUMBER_RANGE,
} = require("./constants/condition.js");

class App {
  constructor() {
    Console.print(GAME_MESSAGE.GAME_START);
    this.computerInput = this.generateComputerInput();
  }

  play() {
    Console.readLine(GAME_MESSAGE.USER_NUMBER_INPUT_REQUEST, (userInput) => {
      const { isValid, errorType } = this.isValidUserNumberInput(userInput);
      if (!isValid) {
        Console.close();
        throw new Error(ERROR_MESSAGE[errorType]);
      }
      const [strikeCount, ballCount] = this.getStrikeBallCount(this.computerInput, userInput);
      const gameResultMessage = this.getGameResultMessage(strikeCount, ballCount);
      Console.print(gameResultMessage);

      if (strikeCount !== MAX_NUMBER_LENGTH) {
        this.play();
        return;
      }
      Console.close();
    });
  }

  generateComputerInput() {
    let randomNum = new Set();
    while (randomNum.size !== MAX_NUMBER_LENGTH) {
      randomNum.add(Random.pickNumberInRange(MIN_NUMBER_RANGE, MAX_NUMBER_RANGE));
    }

    return [...randomNum].join("");
  }
  getStrikeBallCount(computerInput, userInput) {
    let strikeCount = 0;
    let ballCount = 0;

    for (let i = 0; i < MAX_NUMBER_LENGTH; i++) {
      if (computerInput[i] === userInput[i]) strikeCount++;
    }
    for (let eachLetter of userInput) {
      if (computerInput.includes(eachLetter)) ballCount++;
    }
    ballCount -= strikeCount;

    return [strikeCount, ballCount];
  }
  getGameResultMessage(strikeCount, ballCount) {
    if (!strikeCount && ballCount) return `${ballCount}볼`;
    if (strikeCount && !ballCount) return `${strikeCount}스트라이크`;
    if (strikeCount && ballCount) return `${ballCount}볼 ${strikeCount}스트라이크`;

    return "낫싱";
  }

  hasOnlyNumber(userInput) {
    return userInput
      .split("")
      .map((eachLetter) => parseInt(eachLetter), 10)
      .every((number) => !isNaN(number));
  }
  hasValidLength(userInput) {
    return userInput.length === MAX_NUMBER_LENGTH;
  }
  hasOnlyUniqueNumber(userInput) {
    const duplicateCheckSet = new Set(userInput.split(""));

    return duplicateCheckSet.size === MAX_NUMBER_LENGTH;
  }
  hasOnlyValidRangeNumber(userInput) {
    const isValidRangeNumber = (number) => MIN_NUMBER_RANGE <= number && number <= MAX_NUMBER_RANGE;

    return userInput
      .split("")
      .map((eachLetter) => parseInt(eachLetter), 10)
      .every(isValidRangeNumber);
  }
  isValidUserNumberInput(userInput) {
    if (!this.hasOnlyNumber(userInput)) {
      return { isValid: false, errorType: "INVALID_INPUT_TYPE" };
    }
    if (!this.hasValidLength(userInput)) {
      return { isValid: false, errorType: "INVALID_INPUT_LENGTH" };
    }
    if (!this.hasOnlyUniqueNumber(userInput)) {
      return { isValid: false, errorType: "DUPLICATED_NUMBER" };
    }
    if (!this.hasOnlyValidRangeNumber(userInput)) {
      return { isValid: false, errorType: "INVALID_INPUT_RANGE" };
    }

    return { isValid: true };
  }
}

module.exports = App;

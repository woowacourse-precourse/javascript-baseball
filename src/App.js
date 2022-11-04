const { Random, Console } = require("@woowacourse/mission-utils");
const { GAME_START_MESSAGE, USER_NUMBER_INPUT_REQUEST_MESSAGE } = require("./constants/message.js");
const {
  MAX_NUMBER_LENGTH,
  MAX_NUMBER_RANGE,
  MIN_NUMBER_RANGE,
} = require("./constants/condition.js");

class App {
  constructor() {
    Console.print(GAME_START_MESSAGE);
    this.computerInput = this.generateComputerInput();
  }

  async play() {
    const userInput = await this.requestUserNumberInput();
  }

  generateComputerInput() {
    let randomNum = new Set();
    while (randomNum.size !== MAX_NUMBER_LENGTH) {
      randomNum.add(Random.pickNumberInRange(MIN_NUMBER_RANGE, MAX_NUMBER_RANGE));
    }

    return [...randomNum].join("");
  }
  requestUserNumberInput() {
    return new Promise((resolve) => {
      Console.readLine(USER_NUMBER_INPUT_REQUEST_MESSAGE, resolve);
    });
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
}

const app = new App();
app.play();

module.exports = App;

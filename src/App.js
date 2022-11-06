const { Random, Console } = require("@woowacourse/mission-utils");
const { GAME_MESSAGE, ERROR_MESSAGE } = require("./constants/message.js");
const {
  MAX_NUMBER_LENGTH,
  MAX_NUMBER_RANGE,
  MIN_NUMBER_RANGE,
  QUIT_TRIGGER,
  RESTART_TRIGGER,
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
        this.quitGame();
        throw new Error(ERROR_MESSAGE[errorType]);
      }
      const { strikeCount, ballCount } = this.getStrikeBallCount(this.computerInput, userInput);
      const gameResultMessage = this.getGameResultMessage(strikeCount, ballCount);
      Console.print(gameResultMessage);

      if (this.isGameOver(strikeCount)) {
        this.gameOverPhase();
        return;
      }
      this.play();
    });
  }

  gameOverPhase() {
    Console.print(GAME_MESSAGE.GAME_OVER);
    Console.readLine(GAME_MESSAGE.GAME_RESTART_REQUEST, (trigger) => {
      switch (trigger) {
        case RESTART_TRIGGER: {
          this.computerInput = this.generateComputerInput();
          this.play();
          return;
        }
        case QUIT_TRIGGER: {
          this.quitGame();
          return;
        }
        default: {
          this.quitGame();
          throw new Error(ERROR_MESSAGE.INVALID_TRIGGER);
        }
      }
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
      if (computerInput[i] === userInput[i]) {
        strikeCount++;
        continue;
      }
      if (computerInput.includes(userInput[i])) {
        ballCount++;
      }
    }

    return { strikeCount, ballCount };
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
    const isValidRangeNumber = (number) => {
      return MIN_NUMBER_RANGE <= number && number <= MAX_NUMBER_RANGE;
    };

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

  quitGame() {
    Console.close();
  }

  isGameOver(strikeCount) {
    return strikeCount === MAX_NUMBER_LENGTH;
  }
}

module.exports = App;

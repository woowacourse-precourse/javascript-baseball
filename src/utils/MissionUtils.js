const MissionUtils = require("@woowacourse/mission-utils");
const {
  makeNumberToArray,
  useNumberToArray,
} = require("../hooks/useNumberToArray.js");
const {
  NOTTHING,
  STRIKE,
  BALL,
  GAME_END,
  REQUIRE_NUMBER,
  RETRY_OR_END,
  RETRY_VALUE,
  END_VALUE,
  START_NUMBER,
  END_NUMBER,
  MAX_CORRECT,
  MIN_CORRECT,
} = require("./Constants.js");
const { NUMBER_ONE_TO_NINE } = require("./RegExpress.js");

const setUserInput = (inputMessage, treatUserValueFunction) => {
  MissionUtils.Console.readLine(inputMessage, (userInput) => {
    treatUserValueFunction(userInput);
  });
};

const getUserNumber = (computer, question) => {
  MissionUtils.Console.readLine(question, (userInput) => {
    validateUserNumber(userInput);
    countStrikeAndBall(computer, userInput);
  });
};

const printMessage = (message) => {
  MissionUtils.Console.print(message);
};

const playAgain = () => {
  const computerNumbers = createComputerNumber(START_NUMBER, END_NUMBER);
  getUserNumber(computerNumbers, REQUIRE_NUMBER);
};

const retryOrEnd = () => {
  MissionUtils.Console.readLine("", (userInput) => {
    if (userInput === RETRY_VALUE) {
      playAgain();
    } else if (userInput === END_VALUE) {
      MissionUtils.Console.close();
    } else {
      throw new Error("게임 종료");
    }
  });
};

module.exports = {
  getUserNumber,
  setUserInput,
  printMessage,
};

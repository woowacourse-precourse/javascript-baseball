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

const printMessage = (message) => {
  MissionUtils.Console.print(message);
};

const deInitializationGame = () => {
  MissionUtils.Console.close();
};

module.exports = {
  getUserNumber,
  setUserInput,
  printMessage,
  deInitializationGame,
};

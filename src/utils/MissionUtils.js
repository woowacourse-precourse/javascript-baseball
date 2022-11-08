const MissionUtils = require("@woowacourse/mission-utils");

const setUserInput = (inputMessage, treatUserValueFunction) => {
  MissionUtils.Console.readLine(inputMessage, (userInput) => {
    treatUserValueFunction(userInput);
  });
};

const pickNumberBetweenRange = (start, end) => {
  const number = MissionUtils.Random.pickNumberInRange(start, end);
  return number;
};

const printMessage = (message) => {
  MissionUtils.Console.print(message);
};

const deInitializationGame = () => {
  MissionUtils.Console.close();
};

module.exports = {
  setUserInput,
  printMessage,
  deInitializationGame,
  pickNumberBetweenRange,
};

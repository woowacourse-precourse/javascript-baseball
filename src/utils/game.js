const MissionUtils = require("@woowacourse/mission-utils");
const { getComputerNumber } = require("./numberMaker");
const { isValid } = require("../utils/validate");
const { getHint } = require("./hintMaker");
const { GAME_MESSAGE } = require("../constants/index");

const startGame = () => MissionUtils.Console.print(GAME_MESSAGE.START);

const inputNumber = async (computerNumber) => {
  MissionUtils.Console.readLine(GAME_MESSAGE.INPUT_NUMBER, (userNumber) => {
    if (isValid(userNumber)) {
      if (isAnswer(userNumber, computerNumber)) {
        return false;
      }
    }
    inputNumber(computerNumber);
  });
};

const playGame = async () => {
  const computerNumber = getComputerNumber();
  let isGameRun = true;

  while (isGameRun) {
    isGameRun = await inputNumber(computerNumber);
  }
};

const closeGame = () => MissionUtils.Console.close();

const isAnswer = (userNumber, computerNumber) => {
  MissionUtils.Console.print(getHint(userNumber, computerNumber));

  if (userNumber === computerNumber) {
    MissionUtils.Console.print(GAME_MESSAGE.END);
    return true;
  }
  return false;
};

module.exports = { startGame, playGame, closeGame };

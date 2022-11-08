const MissionUtils = require('@woowacourse/mission-utils');
const { GAME_MESSAGE }= require('../constants');
const { isValidNum } = require('./isValidNum');
const { compareInputNum } = require('./compareInputNum');
const { generateRandomNum } = require('./generateRandomNum');

function gameReStartOrExit() {
  MissionUtils.Console.readLine(GAME_MESSAGE.RESTART_OR_END_MESSAGE, (userInputNums) => {
    if (!(userInputNums === '1' || userInputNums === '2')) throw GAME_MESSAGE.ERROR_THROW_MESSAGE;
    if (userInputNums === '1') return baseBallGame(generateRandomNum());
    MissionUtils.Console.close();
  });
  return;
}

function gameFirstStartMessage() {
  return MissionUtils.Console.print(GAME_MESSAGE.GAME_START_MESSAGE);
}

exports.gameFirstStartMessage = gameFirstStartMessage;

function baseBallGame(computerNums) {
  MissionUtils.Console.readLine(GAME_MESSAGE.USER_INPUT_MESSAGE, (userInputNums) => {
    if (!isValidNum(userInputNums)) throw GAME_MESSAGE.ERROR_THROW_MESSAGE;
    MissionUtils.Console.print(compareInputNum(computerNums, userInputNums));
    if (computerNums !== userInputNums) return baseBallGame(computerNums);
    MissionUtils.Console.print(GAME_MESSAGE.GAME_END_MESSAGE);
    gameReStartOrExit();
  });
  return;
}

exports.baseBallGame = baseBallGame;

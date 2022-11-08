const MissionUtils = require('@woowacourse/mission-utils');
const gameConst = require('./GameConstant');

const printAnswerMessage = () => {
  MissionUtils.Console.print(gameConst.CORRECT_ANSWER_MESSAGE);
  MissionUtils.Console.print(gameConst.GAME_END_MESSAGE);
};

const handleCorrectAnswer = () => {
  printAnswerMessage();
};

module.exports = handleCorrectAnswer;

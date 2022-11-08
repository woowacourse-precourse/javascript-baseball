const MissionUtils = require('@woowacourse/mission-utils');
const gameConst = require('./GameConstant');

const askNextStep = () => {
  MissionUtils.Console.readLine(gameConst.ASK_NEXT_MESSAGE, checkAnswer);
};

const printAnswerMessage = () => {
  MissionUtils.Console.print(gameConst.CORRECT_ANSWER_MESSAGE);
  MissionUtils.Console.print(gameConst.GAME_END_MESSAGE);
};

const handleCorrectAnswer = () => {
  printAnswerMessage();
  askNextStep();
};

module.exports = handleCorrectAnswer;

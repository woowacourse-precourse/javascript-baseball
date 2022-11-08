const MissionUtils = require('@woowacourse/mission-utils');
const gameConst = require('./GameConstant');

const doNextStep = answer => {
  if (answer === '1') {
    reStartGame();
    return;
  }
  if (answer === '2') {
    endGame();
  }
};

const checkAnswer = answer => {
  MissionUtils.Console.print(answer);
  if (answer === '1' || answer === '2') {
    doNextStep(answer);
    return;
  }
  askNextStep();
};

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

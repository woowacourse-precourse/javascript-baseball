const { Console } = require('@woowacourse/mission-utils');
const randomNumber = require('./RandomNumber');
const inputVerification = require('./InputVerification');
const answerToInput = require('./AnswerToInput');
const {
  START_GAME,
  FINISH_GAME,
  FINISH,
  ENTER_NUMBER,
  RESTART,
  ONE_TO_NINE,
} = require('./TextData');

function restartCondition(input) {
  if (input === '1') {
    const computerAnswer = randomNumber();
    inputReadLine(computerAnswer);
  }
  if (input === '2') {
    Console.print(FINISH);
    Console.close();
  }
  if (input !== '1' && input !== '2') {
    throw new Error(ONE_TO_NINE);
  }
}

function restartGame() {
  Console.print(RESTART);
  Console.readLine('', (input) => restartCondition(input));
}

function endGameJudgment(ANSWER_CHECK, computerAnswer) {
  if (ANSWER_CHECK === '3스트라이크') {
    Console.print(FINISH_GAME);
    restartGame();
  } else {
    inputReadLine(computerAnswer);
  }
}

function inputReadLine(computerAnswer) {
  Console.readLine(ENTER_NUMBER, (input) => {
    const USER_INPUT = input.split('').map((data) => data * 1);
    const INPUT_CHECK = inputVerification(USER_INPUT);
    const ANSWER_CHECK = answerToInput(INPUT_CHECK, computerAnswer);
    Console.print(ANSWER_CHECK);
    endGameJudgment(ANSWER_CHECK, computerAnswer);
  });
}

class App {
  play() {
    Console.print(START_GAME);
    const computerAnswer = randomNumber();
    inputReadLine(computerAnswer);
  }
}

module.exports = App;

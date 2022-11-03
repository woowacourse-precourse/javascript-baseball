const MissionUtils = require("@woowacourse/mission-utils");

const CHECK_INPUT_DURING_GAME = function checkInputDuringGame(userInput) {
  if (userInput.length !== 3) return false;
  if (isNaN(userInput)) return false;
  if (userInput[0] === userInput[1]
    || userInput[1] === userInput[2]
    || userInput[0] === userInput[2]) return false;
  if (!(userInput.match(/[123456789]{3}/))) return false;
  return true;
}
const CHECK_INPUT_AFTER_GAME = function checkInputAfterGame(userInput) {
  if (+userInput === 1 || +userInput === 2) return true;
  return false;
}

const MAKEANSWER = function makeAnswerWithThreeUniqueNumbers() {
  const THREE_NUMBERS = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  const ANSWER = THREE_NUMBERS[0] * 100 + THREE_NUMBERS[1] * 10 + THREE_NUMBERS[2] * 1;
  return ANSWER;
}

const CHECK_STRIKE = function numberOfStrikes(userInput, answer) {
  let count = 0;
  const ANSWER_TO_STRING = String(answer);
  if (userInput[0] === ANSWER_TO_STRING[0]) count++;
  if (userInput[1] === ANSWER_TO_STRING[1]) count++;
  if (userInput[2] === ANSWER_TO_STRING[2]) count++;
  return count;
}

const CHECK_BALL = function numberOfBalls(userInput, answer) {
  let count = 0;
  const ANSWER_TO_STRING = String(answer);
  if (userInput[0] === ANSWER_TO_STRING[1]
    || userInput[0] === ANSWER_TO_STRING[2]) count++;
  if (userInput[1] === ANSWER_TO_STRING[0]
    || userInput[1] === ANSWER_TO_STRING[2]) count++;
  if (userInput[2] === ANSWER_TO_STRING[0]
    || userInput[2] === ANSWER_TO_STRING[1]) count++;
  return count;
}

const RESTART = function restartGame(userInput) {
  if (+userInput === 1) START_GAME();
  if (+userInput === 2) MissionUtils.Console.close();
}

const END_OF_GAME = function askQuestionToUserWhenGameEnds() {
  MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (userInput) => {
    RESTART(userInput);
  });
}

const GAME_HINT = function getHintFromInput(userInput, answer) {
  const strikes = CHECK_STRIKE(userInput, answer);
  const balls = CHECK_BALL(userInput, answer);

  if (strikes === 3) {
    MissionUtils.Console.print('3스트라이크');
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    END_OF_GAME();
    return;
  }
  if (strikes === 0 && balls === 0) MissionUtils.Console.print('낫싱');
  else MissionUtils.Console.print(`${balls}볼 ${strikes}스트라이크`);
  GAME_APP(answer);
}

const GAME_APP = function gameApplication(answer) {
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
    GAME_HINT(userInput, answer);
  });
}

const START_GAME = function launchNewGame() {
  const ANSWER = MAKEANSWER();
  console.log(ANSWER);
  GAME_APP(ANSWER);
}

class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    START_GAME();
  }
}
const app = new App();
app.play();
module.exports = App;

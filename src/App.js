const MissionUtils = require("@woowacourse/mission-utils");



const IS_INPUT_VALID_DURING_GAME = function checkUserInputDuringGamePlay(userInput) {
  if (userInput.length !== 3) return false;
  if (isNaN(userInput)) return false;
  if (userInput[0] === userInput[1]
    || userInput[1] === userInput[2]
    || userInput[0] === userInput[2]) return false;
  if (!(userInput.match(/[123456789]{3}/))) return false;
  return true;
}

const IS_INPUT_VALID_AFTER_GAME = function checkUserInputAfterGameOver(userInput) {
  if (+userInput === 1 || +userInput === 2) return true;
  return false;
}



const MAKEANSWER = function makeAnswerWithThreeUniqueNumbers() {
  let threeUniqueNumbers = []
  while (threeUniqueNumbers.length < 3) {
    const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
    threeUniqueNumbers = CHECK_DUPLICATE(threeUniqueNumbers, RANDOM_NUMBER);
  }
  return threeUniqueNumbers[0] * 100 + threeUniqueNumbers[1] * 10 + threeUniqueNumbers[2] * 1;
}

const CHECK_DUPLICATE = function checkRepeatedElementOfArray(array, target) {
  const ARRAY_COPIED = [...array];
  if (!array.includes(target)) ARRAY_COPIED.push(target)
  return ARRAY_COPIED;
}



const COUNT_STRIKE = function numberOfStrikes(userInput, answer) {
  let count = 0;
  const ANSWER_TO_STRING = String(answer);
  if (userInput[0] === ANSWER_TO_STRING[0]) count++;
  if (userInput[1] === ANSWER_TO_STRING[1]) count++;
  if (userInput[2] === ANSWER_TO_STRING[2]) count++;
  return count;
}

const COUNT_BALL = function numberOfBalls(userInput, answer) {
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
  if (!IS_INPUT_VALID_AFTER_GAME(userInput)) throw new Error("잘못된 숫자를 입력하였습니다.");
  if (+userInput === 1) START_GAME();
  if (+userInput === 2) MissionUtils.Console.close();
}

const END_OF_GAME = function askQuestionToUserWhenGameEnds() {
  MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (userInput) => {
    RESTART(userInput);
  });
}



const START_GAME = function launchNewGame() {
  const ANSWER = MAKEANSWER();
  GAME_APP(ANSWER);
}

const GAME_APP = function gameApplication(answer) {
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
    GAME_HINT(userInput, answer);
  });
}

const GAME_HINT = function getHintFromInput(userInput, answer) {
  if (!IS_INPUT_VALID_DURING_GAME(userInput)) throw new Error("잘못된 숫자를 입력하였습니다.");
  const strikes = COUNT_STRIKE(userInput, answer);
  const balls = COUNT_BALL(userInput, answer);

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



class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    START_GAME();
  }
}
const app = new App();
app.play();
module.exports = App;

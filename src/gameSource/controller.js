const MissionUtils = require("@woowacourse/mission-utils");
const GameLogics = require('./gameLogic');
const ValidationCheck = require('./inputCheck');

class GameStartOrRestart {

  makeAnswerWithThreeUniqueNumbers() {
    let threeUniqueNumbers = []
    while (threeUniqueNumbers.length < 3) {
      const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      threeUniqueNumbers = this.checkRepeatedElementOfArray(threeUniqueNumbers, RANDOM_NUMBER);
    }

    return threeUniqueNumbers[0] * 100 + threeUniqueNumbers[1] * 10 + threeUniqueNumbers[2] * 1;
  }

  checkRepeatedElementOfArray(array, target) {
    const ARRAY_COPIED = [...array];
    if (!array.includes(target)) ARRAY_COPIED.push(target)

    return ARRAY_COPIED;
  }

  launchNewGame() {
    const ANSWER = this.makeAnswerWithThreeUniqueNumbers();
    this.gamePlayApplication(ANSWER);
  }

  gamePlayApplication(answer) {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
      GameLogics.getHintFromInput(userInput, answer);
    });
  }

  restartGame(userInput) {
    if (!ValidationCheck.checkUserInputAfterGameOver(userInput)) throw new Error("잘못된 숫자를 입력하였습니다.");
    if (+userInput === 1) this.launchNewGame();
    if (+userInput === 2) MissionUtils.Console.close();
  }

  askQuestionToUserWhenGameEnds() {
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (userInput) => {
      this.restartGame(userInput);
    });
  }
}

const GAMESTART_OR_RESTART = new GameStartOrRestart();
module.exports = GAMESTART_OR_RESTART;


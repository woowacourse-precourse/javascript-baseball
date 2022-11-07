const MissionUtils = require("@woowacourse/mission-utils");
const VALIDATIONCHECK = require('./inputCheck');

class GameLogics {

  numberOfStrikes(userInput, answer) {
    let count = 0;
    const ANSWER_LETTERS = String(answer).split('');
    ANSWER_LETTERS.forEach((currentValue, index) => {
      if (currentValue === userInput[index]) count++;
    })

    return count;
  }

  numberOfBalls(userInput, answer) {
    let count = 0;
    const ANSWER_LETTERS = String(answer).split('');
    ANSWER_LETTERS.forEach((currentValue, index) => {
      if (userInput[index] !== currentValue && userInput.includes(currentValue)) count++;
    })

    return count;
  }

  getHintFromInput(userInput, answer) {
    const GAMESTART_OR_RESTART = require('./controller');

    if (!VALIDATIONCHECK.checkUserInputDuringGamePlay(userInput)) throw new Error("잘못된 숫자를 입력하였습니다.");
    const strikes = this.numberOfStrikes(userInput, answer);
    const balls = this.numberOfBalls(userInput, answer);

    if (strikes === 3) {
      MissionUtils.Console.print('3스트라이크');
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      GAMESTART_OR_RESTART.askQuestionToUserWhenGameEnds();
      return;
    }

    if (strikes === 0 && balls === 0) MissionUtils.Console.print('낫싱');
    if (strikes > 0 || balls > 0) MissionUtils.Console.print(`${balls}볼 ${strikes}스트라이크`);
    GAMESTART_OR_RESTART.gamePlayApplication(answer);
  }

}

const GAMELOGICS = new GameLogics();
module.exports = GAMELOGICS;
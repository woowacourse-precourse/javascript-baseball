const { Console } = require('@woowacourse/mission-utils');
const GAME_RESOUCES = require("./GameResources");
const GAME_LOGICS = require("./GameLogics");

class BaseBallGame {
  constructor() {
    this.gameStart();
    GAME_LOGICS.answer = GAME_RESOUCES.generateAnswer();
  }

  gameStart() {
    const OPENING_MENT = "숫자 야구 게임을 시작합니다.";
    Console.print(OPENING_MENT);
  }

  play() {
    const ERROR_MESSAGE = "입력하신 값이 올바른 형식이 아닙니다! 3 자리의 1 ~ 9 로 이루어진 수를 중복없이 입력해주세요!";
    Console.readLine('숫자를 입력해주세요 : ', ((userNumber) => {
      if (GAME_RESOUCES.isRightForm(userNumber) === false) throw new Error(ERROR_MESSAGE);
      const [HINT_MENT, IS_END] = GAME_LOGICS.checkNumber(userNumber);
      Console.print(HINT_MENT);
      if (IS_END) {
        const ENDING_MENT = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
        Console.print(ENDING_MENT);
        this.userDecision();
      }
      this.play();
    }));
  }

  userDecision() {
    Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n', (userDecisionValue) => {
      userDecisionValue === '1' ? this.replay() : this.endGame(userDecisionValue);
    });
  }

  replay() {
    GAME_LOGICS.answer = GAME_RESOUCES.generateAnswer();
    this.play();
  }

  endGame(userDecisionValue) {
    const ERROR_MESSAGE = "잘못된 입력 값 입니다. 값을 확인 후 제대로 입력해주세요."
    if (userDecisionValue === '2') {
      Console.print("게임이 종료됩니다.");
      Console.close();
    }
    else {
      Console.print(ERROR_MESSAGE);
      this.userDecision();
    }
  }
}

module.exports = BaseBallGame;

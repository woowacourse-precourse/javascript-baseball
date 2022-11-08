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
    Console.readLine('숫자를 입력해주세요 : ', ((userNumber) => {
      if (GAME_RESOUCES.isRightForm(userNumber) === false) throw new Error('입력하신 값이 올바른 형식이 아닙니다! 3자리의 1~9로 이루어진 수를 중복없이 입력해주세요!');
      const [HINT_MENT, IS_END] = GAME_LOGICS.checkNumber(userNumber);
      Console.print(HINT_MENT);
      if (IS_END) this.endGame();
      this.play();
    }));
  }

  endGame() {
    const ENDING_MENT = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
    Console.print(ENDING_MENT)
    Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n', (restartOrQuit) => {
      restartOrQuit === '1' ? this.replay() : Console.close();
    });
  }

  replay() {
    GAME_LOGICS.answer = GAME_RESOUCES.generateAnswer();
    this.play()
  }
}

module.exports = BaseBallGame;

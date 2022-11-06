const { Console } = require('@woowacourse/mission-utils');
const GAME_RESULT = require('./Baseball/gameResult');
const GET_COMPUTER_NUM = require('./Baseball/computerNum');
const INPUT_CHECK = require('./Baseball/inputCheck');

class App {
  constructor() {
    this.userInputNum = '';
    this.COMPUTER_NUM;
  }

  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.startGame();
  }

  startGame() {
    this.COMPUTER_NUM = GET_COMPUTER_NUM.getComputerRandomNum();
    this.playGame();
  }

  playGame() {
    Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      this.userInputNum = answer;
      const IS_VALID_INPUT = INPUT_CHECK.checkInputValidation(
        this.userInputNum
      );

      if (IS_VALID_INPUT === false) {
        throw new Error('유효하지 않은 숫자를 입력했습니다.');
      }

      if (IS_VALID_INPUT) {
        this.gameRule();
        this.playGame();
      }
    });
  }

  gameRule() {
    GAME_RESULT.getGameHint(
      this.userInputNum.split('').map(Number),
      this.COMPUTER_NUM
    );

    if (GAME_RESULT.strikeNum >= 3) {
      Console.readLine(
        '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
        (userSelect) => {
          const USER_SELECT_NUM = Number(userSelect);
          if (USER_SELECT_NUM === 1) this.startGame();
          if (USER_SELECT_NUM === 2) Console.close();
        }
      );
    }
  }
}

const NUM_BASEBALL = new App();
NUM_BASEBALL.play();

module.exports = NUM_BASEBALL;

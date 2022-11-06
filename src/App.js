const { Console } = require('@woowacourse/mission-utils');
const GAME_RESULT = require('./Baseball/gameResult');
const GET_COMPUTER_NUM = require('./Baseball/computerNum');
const inputCheck = require('./Baseball/inputCheck');

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
      const IS_VALID_INPUT = inputCheck.checkInputValidation(this.userInputNum);

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
  }
}

const NUM_BASEBALL = new App();
NUM_BASEBALL.play();

module.exports = NUM_BASEBALL;

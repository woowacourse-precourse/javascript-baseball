const { Console } = require('@woowacourse/mission-utils');
const GAME_RESULT = require('./Baseball/gameResult');
const GET_COMPUTER_NUM = require('./Baseball/computerNum');
const INPUT_CHECK = require('./Baseball/inputCheck');

const InputView = require('../src/view/InputView');
const OutputView = require('../src/view/OutputView');

class App {
  constructor() {
    this.userInputNum = '';
    this.COMPUTER_NUM;
  }

  play() {
    OutputView.printGameStart();
    this.startGame();
  }

  startGame() {
    this.COMPUTER_NUM = GET_COMPUTER_NUM.getComputerRandomNum();
    this.inputGameNum();
  }

  inputGameNum() {
    InputView.readInputNum(this.getInputNum.bind(this));
  }

  getInputNum(gameNum) {
    this.userInputNum = gameNum;
    const IS_VALID_INPUT = INPUT_CHECK.checkInputValidation(this.userInputNum);
    if (IS_VALID_INPUT === false) {
      throw new Error('유효하지 않은 숫자를 입력했습니다.');
    }

    this.getGameResult();
    this.inputGameNum();
  }

  getGameResult() {
    GAME_RESULT.getGameHint(
      this.userInputNum.split('').map(Number),
      this.COMPUTER_NUM
    );
    if (GAME_RESULT.strikeNum === 3) this.inputGameOver();
  }

  inputGameOver() {
    InputView.readRetry(this.getGameOverSelect.bind(this));
  }

  getGameOverSelect(userSelect) {
    const IS_VALID_SELECT = INPUT_CHECK.checkUserSelect(userSelect);
    if (IS_VALID_SELECT === false) {
      throw new Error('유효하지 않은 숫자를 입력했습니다.');
    }
    this.runSelectResult(userSelect);
  }

  runSelectResult(userSelect) {
    if (userSelect === '1') this.startGame();
    if (userSelect === '2') {
      Console.print('게임 종료');
      Console.close();
    }
  }
}

module.exports = App;

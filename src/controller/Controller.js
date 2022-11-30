const GAME_RESULT = require('../model/gameResult');
const GET_COMPUTER_NUM = require('../model/computerNum');
const INPUT_CHECK = require('../utils/inputCheck');

const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class Controller {
  #userInputNum;
  #COMPUTER_NUM;

  constructor() {
    this.#userInputNum = '';
    this.#COMPUTER_NUM;
  }

  start() {
    OutputView.printGameStart();
    this.startGame();
  }

  startGame() {
    this.#COMPUTER_NUM = GET_COMPUTER_NUM.getComputerRandomNum();
    this.inputGameNum();
  }

  inputGameNum() {
    InputView.readInputNum(this.getInputNum.bind(this));
  }

  getInputNum(gameNum) {
    this.#userInputNum = gameNum;
    INPUT_CHECK.checkInputValidation(this.#userInputNum);

    this.gameResult();
    this.inputGameNum();
  }

  gameResult() {
    const getGameHint = GAME_RESULT.gameCounter(
      this.#userInputNum.split('').map(Number),
      this.#COMPUTER_NUM
    );
    OutputView.printGameHint(getGameHint);
    if (getGameHint.strike === 3) this.inputGameOver();
  }

  inputGameOver() {
    InputView.readRetry(this.getGameOverSelect.bind(this));
  }

  getGameOverSelect(userSelect) {
    INPUT_CHECK.checkUserSelect(userSelect);
    this.runSelectResult(userSelect);
  }

  runSelectResult(userSelect) {
    if (userSelect === '1') this.startGame();
    if (userSelect === '2') OutputView.printGameEnd();
  }
}

module.exports = Controller;
